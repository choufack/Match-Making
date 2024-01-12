from passlib.context import CryptContext


"""
    CryptContext,Il encapsule la logique de hachage, y compris le schéma de hachage (bcrypt dans ce cas), la gestion des dépréciations et d'autres paramètres liés au hachage.
 Ce contexte est ensuite utilisé pour générer des hachages sécurisés des mots de passe.
"""
mdp_context = CryptContext(schemes=["bcrypt"], deprecated=["auto"])

def hash_mdp(mdp):
    return mdp_context.hash(mdp)