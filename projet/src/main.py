
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from .model import Utilisateur, Sport, BDD
from .BaseDeDonnee import SessionLocal, engine
#va créer les tables lors de l'execution de la commande docker-compose up
BDD.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#routes
