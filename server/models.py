
from ast import For
from uuid import uuid4
from sqlalchemy_utils import EmailType
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import TIMESTAMP, Boolean, Column, ForeignKey, Integer, String, text
from datetime import datetime
from .database import Base


class UserAccount(Base):
    __tablename__ = "users_account"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(EmailType, unique=True, nullable=False)
    phone = Column(String, nullable=False)
    dob = Column(String, nullable=False)
    logged_in = Column(TIMESTAMP(timezone=True), nullable=True, default=None)
    logged_out = Column(TIMESTAMP(timezone=True), nullable=True, default=None)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    modified_at = Column(TIMESTAMP(timezone=True), nullable=True, default=None)
class UserProfile(Base):
    __tablename__ = "users_profile"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    name = Column(String, nullable=True)
    sex = Column(String, nullable=True, default=None)
    unit_of_measure = Column(String, nullable=True, default=None)
    weight = Column(String, nullable=True, default=None)
    height = Column(String, nullable=True, default=None)
    fitness_goal = Column(String, nullable=True, default=None)
    image = Column(String, nullable=True)

    user_account_id_fk = Column(UUID(as_uuid=True), ForeignKey("users_account.id", ondelete="CASCADE"), nullable=False)

class ExerciseList(Base):
    __tablename__ = "exercise_list"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
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

class ExerciseLog(Base):
    __tablename__ = "exercise_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    note = Column(String)
    sets = Column(Integer)
    reps = Column(Integer)
    weight = Column(Integer)
    volume = Column(Integer)
    intensity = Column(Integer)
    equipment = Column(String)
            
    exercise_list_id_fk = Column(UUID(as_uuid=True), ForeignKey("exercise_list.id", ondelete="CASCADE"), nullable=False)
    user_profile_id_fk = Column(UUID(as_uuid=True), ForeignKey("users_profile.id", ondelete="CASCADE"), nullable=False)
class WorkoutLog(Base):
    __tablename__ = "workout_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4())
    name = Column(String)
    description = Column(String)
    total_sets = Column(Integer)
    total_reps = Column(Integer)
    total_weight = Column(Integer)
    volume = Column(Integer)
    difficulty = Column(String)
    note = Column(String)
    start = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    end = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))

    user_profile_id_fk = Column(UUID(as_uuid=True), ForeignKey("users_profile.id", ondelete="CASCADE"), nullable=False)