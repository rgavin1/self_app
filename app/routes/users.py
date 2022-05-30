from fastapi import Depends, status, APIRouter
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter()


@router.get("/users")
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"data": users}


@router.post("/users", status_code=status.HTTP_201_CREATED)
def create_user(user: schemas.UserBase, db: Session = Depends(get_db)):
    db.add(models.User(**user.dict()))
    db.commit()
    return {"status": "success"}
