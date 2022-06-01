
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import TIMESTAMP, Boolean, Column, ForeignKey, Integer, String, text
from datetime import datetime
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    dob = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    age = Column(String, nullable=False)
    unit_of_measure = Column(String, nullable=False)
    weight = Column(String, nullable=False)
    height = Column(String, nullable=False)
    fitness_goal = Column(String, nullable=False)
    logged_in = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    logged_out = Column(TIMESTAMP(timezone=True),
                        nullable=True, server_default=text('now()'))
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    modified_at = Column(TIMESTAMP(timezone=True),
                        nullable=True, server_default=text('now()'))

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
