
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from .model import utilisateurs, reservation
from .BaseDeDonnee import SessionLocal, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()
