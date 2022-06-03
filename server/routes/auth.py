from sqlalchemy.orm.session import Session
from fastapi import APIRouter, Depends
from ..database import get_db
from .. import models, schemas

router = APIRouter()

@router.post("/login")
def authorization(user_credentials: schemas.AuthBase, db: Session = Depends(get_db)):

    result = db.query(models.User).filter(models.User.username == user_credentials.username).first()
    print(f'USER Response: {result}')
    return { "status": "Success" } 