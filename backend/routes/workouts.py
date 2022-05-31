from fastapi import Depends, status, APIRouter
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter()


@router.get("/workouts")
def get_workouts(db: Session = Depends(get_db)):
    workouts = db.query(models.Workout).all()
    return workouts


@router.post("/workouts", status_code=status.HTTP_201_CREATED)
def create_workout(workout: schemas.WorkoutBase, db: Session = Depends(get_db)):
    db.add(models.Workout(**workout.dict()))
    db.commit()
    return {"status": "success"}
