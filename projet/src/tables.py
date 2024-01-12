from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship 
from .BaseDeDonnee import BDD

class Utilisateur(BDD):
    __tablename__ = "users"        # utile pour la création de la table

    UserID = Column(Integer, primary_key=True, index=True)
    nom = Column(String(50))
    prenom = Column(String(50))
    email = Column(String(50)) 
    mdp = Column(String(250))
    ville = Column(String(50))
    sport = Column(String(50))

class Sport(BDD):
    __tablename__ = "sports"       # utile pour la création de la table

    SportID = Column(Integer, primary_key=True, index=True)
    sport = Column(String(50))


