
from uuid import uuid4
from sqlalchemy_utils import EmailType
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import TIMESTAMP, Boolean, Column, ForeignKey, Integer, String, text
from datetime import datetime
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(EmailType, unique=True, nullable=False)
    phone = Column(String, nullable=False)
    dob = Column(String, nullable=False)
    sex = Column(String, nullable=True, default=None)
    unit_of_measure = Column(String, nullable=True, default=None)
    weight = Column(String, nullable=True, default=None)
    height = Column(String, nullable=True, default=None)
    fitness_goal = Column(String, nullable=True, default=None)
    logged_in = Column(TIMESTAMP(timezone=True), nullable=True, default=None)
    logged_out = Column(TIMESTAMP(timezone=True), nullable=True, default=None)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    modified_at = Column(TIMESTAMP(timezone=True), nullable=True, default=None)

class Exercise(Base):
    __tablename__ = "exercises"

    id = Column(Integer, primary_key=True, index=True)
    muscle_group = Column(String, nullable=False)
    name = Column(String, nullable=False)
    fitness_level = Column(String, nullable=False)
    upper_lower_core = Column(String, nullable=False)
    push_pull = Column(String, nullable=False)
    modality = Column(String, nullable=False)
    joint = Column(String, nullable=False)
    is_custom = Column(Boolean, nullable=False, server_default='FALSE')
    modified_at = Column(String)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    rating = Column(Integer)
    is_favorite = Column(Boolean)


class Workout(Base):
    __tablename__ = "workouts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    sets = Column(Integer)
    reps = Column(Integer)
    intensity = Column(Integer)
    note = Column(String)
