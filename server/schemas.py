from pydantic import BaseModel


class ExerciseBase(BaseModel):
    muscle_group: str
    name: str
    fitness_level: str
    upper_lower_core: str
    push_pull: str
    modality: str
    joint: str


class ExerciseCreate(ExerciseBase):
    pass


class WorkoutBase(BaseModel):
    title: str
    sets: int
    intensity: int
    note: str
    description: str
    reps: int


class WorkoutCreate(WorkoutBase):
    pass


class UserBase(BaseModel):
    username: str
    password: str
    email: str
    phone: str
    dob: str

class UserCreate(UserBase):
    pass

class AuthBase(BaseModel):
    username: str
    password: str