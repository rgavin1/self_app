from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi import Depends, status, HTTPException
from fastapi.security import OAuth2PasswordBearer
from . import schemas, config

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
# Three parts to build a JWT
# 1. Secret Key
# 2. Algorithm 
# 3. Duration

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=config.settings.ACCESS_TOKEN_EXPIRATION_MINUTES)

    to_encode.update({ "exp": expire })

    encoded_jwt = jwt.encode(to_encode, config.settings.SECRET_KEY, algorithm=config.settings.ALGORITHM)

    return encoded_jwt

def verify_access_token(token: str, credentials_exception):

    try:

        payload = jwt.decode(token, config.settings.SECRET_KEY, algorithms=config.settings.ALGORITHM)
        id: str = payload.get("user_id")
        if id is None:
            raise credentials_exception
        token_data = schemas.TokenData(id=id)
    except JWTError:
        raise credentials_exception

    return token_data

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})

    return verify_access_token(token, credentials_exception)