from fastapi import Depends, status, APIRouter
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter(
    prefix="/workouts",
    tags=["Workouts"]
)


@router.get("/")
def get_workouts(db: Session = Depends(get_db)):
    workouts = db.query(models.Workout).all()
    return workouts


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_workout(workout: schemas.WorkoutLogBase, db: Session = Depends(get_db)):
    db.add(models.Workout(**workout.dict()))
    db.commit()
    return {"status": "success"}

@router.get("/logs/{id}")
def get_workoutlog(id: str, db: Session = Depends(get_db)):
    workouts = db.query(models.WorkoutLog).filter(models.WorkoutLog.user_profile_id_fk == id).all()
    return workouts