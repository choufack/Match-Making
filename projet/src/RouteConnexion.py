from fastapi import APIRouter, status, Depends
from fastapi.security import OAuth2PasswordRequestForm, decrypt_mdp
from BaseDeDonnee import get_db
from sqlalchemy import Session
from tables import Utilisateur
from fastapi.exceptions import HTTPException


router = APIRouter(
    prefix="/Connexion",
    tags=["connexion"]
)

@router.post("/token", status_code=status.HTTP_201_CREATED)
async def  authentification(data: OAuth2PasswordRequestForm = Depends(), db: Session = (get_db)):
    return await get_token(data=data, db=data)


async def get_token(data, db):
    #il faut d'abord savoir si le visiteur du site a bien un compte ou non
    #et pour ca, nous allons check dans la bdd

    exist = db.query(Utilisateur).filter(Utilisateur.email == data).first()
    if not exist:
        raise HTTPException(
            status_code=400,
            detail="le compte n'existe pas"
        )
    
    if decrypt_mdp(data.mdp, exist.mdp):
       raise HTTPException(
            status_code=400,
            detail="mauvais Email ou mot de passe."
       )
    
    return ''


    


