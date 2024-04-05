from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
 
"""
    CryptContext,Il encapsule la logique de hachage, y compris le schéma de hachage (bcrypt dans ce cas), la gestion des dépréciations et d'autres paramètres liés au hachage.
 Ce contexte est ensuite utilisé pour générer des hachages sécurisés des mots de passe.
"""
mdp_context = CryptContext(schemes=["bcrypt"], deprecated=["auto"])
O2auth_schema = OAuth2PasswordBearer(tokenUrl="/Connexion/token")
def hash_mdp(mdp):
    return mdp_context.hash(mdp)

def decrypt_mdp(Crypte, NonCrypte):
    return mdp_context.verify(Crypte, NonCrypte)