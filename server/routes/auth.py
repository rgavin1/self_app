from urllib import response
from sqlalchemy.orm.session import Session
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, HTTPException, status
from ..database import get_db
from .. import models, schemas, utils, oauth2

router = APIRouter(
    prefix="/auth",
    tags=["Authorization"]
)

@router.post("/", response_model=schemas.Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    user = db.query(models.UserAccount).filter(models.UserAccount.username == user_credentials.username).first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    if not utils.verify(user_credentials.password, user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    access_token = oauth2.create_access_token(data = { "user_id": f'{user.id}', "first_name": "Ramsey" })
    return { "access_token": access_token, "token_type": "bearer" }