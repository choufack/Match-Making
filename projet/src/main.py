
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from .tables import Utilisateur, Sport, BDD
from .BaseDeDonnee import SessionLocal, ConnexionBDD
#from .Routes.user.SchemaUser import SchemaUser
from .UseRoutes import router as Urouteur
#va créer les tables lors de l'execution de la commande docker-compose up
BDD.metadata.create_all(bind=ConnexionBDD)

app = FastAPI()


#routes

app.include_router(Urouteur)




