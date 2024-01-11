from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session
from config.tables import Utilisateur
from fastapi.exceptions import HTTPException
from main import get_db
from SchemaUser import SchemaUser
"""
ici, nous allons utiliser une APIRouter qui va nous permettre d'organiser les routes en groupe logique
"""
router = APIRouter(
    prefix="/user",     #préfixe URL
    tags=["User"],      #pour organiser et documenter la route user
    responses={404: {"erreur": "SchemaUser non-trouvé!"}}
)

@router.post('', status_code= status.HTTP_201_CREATED) 
async def inscription(formulaire: SchemaUser, db: Session = Depends(get_db)):
    """
    formulaire: SchemaUser, La fonction attend un argument formulaire de type SchemaUser (qui est une classe). 
    Cela indique que cette route s'attend à recevoir des données du type SchemaUser dans le corps de la requête POST.

    Depends(get_db). Cela garantit que la session de base de données est automatiquement créée et fournie à la fonction au moment de l'exécution.
    """
   
    user = db.query(Utilisateur).filter(Utilisateur.email == formulaire.email).first()

    #blindage :
    if user:
        #si l'email est déjà prise alors renvoyer une erreur
        raise HTTPException(status_code=422, detail="Email déjà utilisée. Veuillez en trouver une autre.")