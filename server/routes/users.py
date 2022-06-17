from fastapi import Depends, status, APIRouter, HTTPException
from sqlalchemy.orm import Session

from server import oauth2
from ..database import get_db
from .. import models, schemas, utils

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post("/account", status_code=status.HTTP_201_CREATED)
def create_account(user: schemas.UserAccountCreate, db: Session = Depends(get_db)):
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    db.add(models.UserAccount(**user.dict()))
    db.commit()
    return {"status": "success"}

@router.get("/account/{id}")
def get_users(id: str, db: Session = Depends(get_db)):
    user = db.query(models.UserAccount).first()
    return {"data": user}

# User's Profile
@router.get("/profile/{id}")
def get_profile(id: str, db: Session = Depends(get_db)):
    user = db.query(models.UserProfile).filter(models.UserProfile.user_account_id_fk == id).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with {id} not found")

    return { "user": user }

@router.post("/profile", status_code=status.HTTP_201_CREATED)
def create_profile(user: schemas.UserProfileCreate, db: Session = Depends(get_db), user_id = Depends(oauth2.get_current_user)):
    db.add(models.UserProfile(**user.dict()))
    db.commit()
    return {"status": "success"}

# FIXME: Runtime Error - Response content longer than Content-Length
@router.delete("/profile/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_profile(id: str, db: Session = Depends(get_db)):
    profile = db.query(models.UserProfile).filter(models.UserProfile.user_account_id_fk == id).first()

    if profile == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with {id} not found")

    db.delete(profile)
    db.commit()
    return { "profile": profile }

@router.patch("/profile/{id}")
def update_profile(user, db: Session = Depends(get_db)):
    return "updated"

