from fastapi import FastAPI
from .database import engine
from . import models
from .routes import users, workouts, exercises

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(exercises.router)
app.include_router(workouts.router)
app.include_router(users.router)

# ************* Pending Endpoints *************
# ^^^^^ EXERCISES ^^^^^
#  - [x]: GET all exercises
#  - [ ]: GET a exercise
#  - [x]: Create an exercise
#  - [ ]: Update an exercise
#  - [ ]: Delete an exercise
# ^^^^^ WORKOUT Logs ^^^^^
#  - [x]: GET all workouts
#  - [ ]: GET a workout
#  - [ ]: Create a Workout
#  - [ ]: Update a Workout
#  - [ ]: Delete a Workout
# ^^^^^ Body Composition Log ^^^^^
#  - [ ]: Weight, Flexiability, Sizes: Chest, Shoulders, Biceps, Triceps, Core, Hamstrings, Calves
# ^^^^^ Mental State ^^^^^
#  - [ ]: GET All states
#  - [ ]: Get a state
#  - [ ]: Update State
#  - [ ]: Delete State
# ^^^^^ CARDIO ^^^^^
# ^^^^^ Nutrition ^^^^^
#  - [ ]: Vitamins