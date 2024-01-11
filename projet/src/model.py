from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship 
from .BaseDeDonnee import BDD
"""
ce code ne sert que lors de l'execution du fichier docker-compose.yml avec la 
commande docker-compose up -d

elle permet de créer les tables de la BDD api_backend
"""

class utilisateurs(BDD):
    __tablename__ = "users"

    UserID = Column(Integer, primary_key=True, index=True)
    email = Column(String(50)) 
    mdp = Column(String(50))


class reservation(BDD):
    id = Column(Integer, primary_key=True, index=True)
    UserID = Column(Integer, ForeignKey("users.UserID"))  #clé étrangère de la table users
    