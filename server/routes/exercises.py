
from sqlalchemy.orm import Session
from fastapi import status, Depends, APIRouter
from ..database import get_db
from .. import models, schemas

router = APIRouter(
    prefix="/exercises",
    tags=["Exercises"]
)


@router.get("/")
def get_exercises(db: Session = Depends(get_db)):
    exercises = db.query(models.Exercise).all()
    return {"data": exercises}

@router.get("/list")
def get_list(db: Session = Depends(get_db)):
    list = [{"name": "Test", "sets": "1"}]
    return list

@router.post("/log", status_code=status.HTTP_201_CREATED)
def create_exercise(exercise: schemas.ExerciseListBase, db: Session = Depends(get_db)):
    db.add(models.Exercise(**exercise.dict()))
    db.commit()
    return {"status": "success"}