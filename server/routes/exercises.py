
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


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_exercise(exercise: schemas.ExerciseBase, db: Session = Depends(get_db)):
    db.add(models.Exercise(**exercise.dict()))
    db.commit()
    return {"status": "success"}
