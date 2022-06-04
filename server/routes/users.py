from fastapi import Depends, status, APIRouter
from sqlalchemy.orm import Session

from server import oauth2
from ..database import get_db
from .. import models, schemas, utils

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/")
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"data": users}


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_user(user: schemas.UserBase, db: Session = Depends(get_db), user_id: int = Depends(oauth2.get_current_user)):
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    db.add(models.User(**user.dict()))
    db.commit()
    return {"status": "success"}
