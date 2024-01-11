from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session
from main import get_db
from .config.model import Utilisateur
"""
ici, nous allons utiliser une APIRouter qui va nous permettre d'organiser les routes en groupe logique
"""
router = APIRouter(
    prefix="/user",     #préfixe URL
    tags=["User"],      #pour organiser et documenter la route user
    responses={404: {"erreur": "utilisateur non-trouvé!"}}
)

@router.post('', status_code= status.HTTP_201_CREATED) 
async def inscription(data: Utilisateur, db: Session = Depends(get_db)):
    """
    data: Utilisateur, La fonction attend un argument data de type Utilisateur (qui est une classe). 
    Cela indique que cette route s'attend à recevoir des données du type Utilisateur dans le corps de la requête POST.

    Depends(get_db). Cela garantit que la session de base de données est automatiquement créée et fournie à la fonction au moment de l'exécution.
    """
    pass 
    #TO DO :
    #traitement de la donnée