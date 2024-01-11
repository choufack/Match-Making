from pydantic import BaseModel, EmailStr #EmailStr est une classe spécifique de Pydantic pour la validation des adresses e-mail.
"""
Pydantic utilise des annotations de type pour définir la structure des données, ce qui permet une validation automatique. 
Les types déclarés dans les modèles Pydantic, tels que str, int, EmailStr, etc., sont utilisés pour valider les données entrantes.
"""
class SchemaUser(BaseModel):
    """
        class SchemaUser(BaseModel): 
            Définit une classe appelée SchemaUser qui hérite de BaseModel.
            il devient donc un modèle de pydantic
    """
    nom:str
    prenom:str
    email:EmailStr
    mdp:str
    ville:str
    sport:str