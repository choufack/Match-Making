from fastapi import APIRouter, status, Depends
from fastapi.security import OAuth2PasswordRequestForm 
from BaseDeDonnee import get_db
from sqlalchemy import Session

router = APIRouter(
    prefix="/Connexion",
    tags=["connexion"]
)

@router.post("/token", status_code=status.HTTP_201_CREATED)
async def  authentification(data: OAuth2PasswordRequestForm = Depends(), db: Session = (get_db)):
    return await get_token(data=data, db=data)


async def get_token(data, db):
    pass
    # TO DO 
    # fonction permettant de recup le token de hashage du mdp