from os import access
from typing import Optional
from pydantic import BaseModel, EmailStr


class ExerciseLogBase(BaseModel):
    note: str
    sets: int
    reps: int
    weight: int
    volume: int
    intensity: int
    equipment: str
class ExerciseLogCreate(ExerciseLogBase):
    pass
class ExerciseListBase(BaseModel):
    muscle_group: str
    name: str
    fitness_level: str
    upper_lower_core: str
    push_pull: str
    modality: str
    joint: str

class WorkoutLogBase(BaseModel):
    title: str
    sets: int
    intensity: int
    note: str
    description: str
    reps: int


class WorkoutCreate(WorkoutLogBase):
    pass
class UserProfileBase(BaseModel):
    name: str
    sex: str
    unit_of_measure: str
    weight: int
    height: int
    fitness_goal: str
    image: str
    user_account_id_fk: str
class UserProfileCreate(UserProfileBase):
    pass
class UserAccountBase(BaseModel):
    username: str
    password: str
    email: EmailStr
    phone: str
    dob: str

class UserAccountCreate(UserAccountBase):
    pass

class AuthBase(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None