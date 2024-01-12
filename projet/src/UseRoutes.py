from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session
from .tables import Utilisateur
from fastapi.exceptions import HTTPException
from .BaseDeDonnee import get_db
from .SchemaUser import SchemaUser
from .securite import hash_mdp



router = APIRouter(
     prefix="/Inscription",     #préfixe URL
    tags=["User"],      #pour organiser et documenter la route user
    responses={404: {"erreur": "SchemaUser non-trouvé!"}}

)



@router.post('', status_code= status.HTTP_201_CREATED) 
async def inscription(data: SchemaUser, db: Session = Depends(get_db)):
    """
    data: SchemaUser, La fonction attend un argument formulaire de type SchemaUser (qui est une classe). 
    Cela indique que cette route s'attend à recevoir des données du type SchemaUser dans le corps de la requête POST.

    Depends(get_db). Cela garantit que la session de base de données est automatiquement créée et fournie à la fonction au moment de l'exécution.
    """

    await CompteUser(formulaire=data, db=db)
    return CompteUser





async def CompteUser(formulaire, db):
     #blindage :
    user = db.query(Utilisateur).filter(Utilisateur.email == formulaire.email).first()
    if user:
        #si l'email est déjà prise alors renvoyer une erreur
        raise HTTPException(status_code=422, detail="Email déjà utilisée. Veuillez en trouver une autre.")


    new_user = Utilisateur (
        nom = formulaire.nom,
        prenom = formulaire.prenom,
        email = formulaire.email,
        mdp = hash_mdp(formulaire.mdp),  #hash le mdp
        ville = formulaire.ville,
        sport = formulaire.sport
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
