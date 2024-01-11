from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship 
from .BaseDeDonnee import BDD
"""
ce code ne sert que lors de l'execution du fichier docker-compose.yml avec la 
commande docker-compose up -d


ce code sera appelé par main.py
"""

class Utilisateur(BDD):
    __tablename__ = "users"

    UserID = Column(Integer, primary_key=True, index=True)
    email = Column(String(50)) 
    mdp = Column(String(50))


class Sport(BDD):
    __tablename__ = "sports"

    SportID = Column(Integer, primary_key=True, index=True)
    sport = Column(String(50))


