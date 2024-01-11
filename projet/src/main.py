
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from .config.model import Utilisateur, Sport, BDD
from .config.BaseDeDonnee import SessionLocal, engine
#va créer les tables lors de l'execution de la commande docker-compose up
BDD.metadata.create_all(bind=engine)

app = FastAPI()

# générateur
def get_db():
    db = SessionLocal()
    try:                    #try : La partie où le code tente d'exécuter le bloc de code à l'intérieur duquel une ressource (la connexion à la base de données dans ce cas) est acquise.
        yield db            #yield. Les générateurs en Python sont des itérables spéciaux qui permettent de suspendre et de reprendre l'exécution.
    finally:                #finally : Cette partie garantit que, quel que soit le résultat du bloc try, le code dans le bloc finally sera exécuté. Ici, cela assure que la connexion à la base de données est toujours fermée, même en cas d'erreur.
        db.close()

#route

@app.get('/test')
def salutation():
    return JSONResponse(content={"status": "API opérationnelle!"})