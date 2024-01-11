from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql://root@db/api_backend" 
#l'objet ConnexionBDD utilise la fonction create_engine qui permet la connexion à la base de données.
ConnexionBDD = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=ConnexionBDD)
"""
   - sessionmaker: Cette fonction crée une classe SessionLocal

   - autocommit=False: Désactive la validation automatique des transactions dans la base de données.
     Cela signifie que les transactions doivent être confirmées manuellement pour être persistantes.

   - autoflush=False: Désactive le mode "autoflush". L'autoflush peut déclencher automatiquement la synchronisation 
     entre la session et la base de données pour assurer la cohérence des données, mais ici, il est désactivé.

   - bind=ConnexionBDD: Lie la session à l'objet ConnexionBDD créé précédemment. Cela signifie que toutes les opérations effectuées 
     avec cette session seront exécutées sur la base de données définie par l'URL de connexion.
 
 """
#Cette fonction crée une classe BDD dans cet exemple, à partir de laquelle toutes les classes de modèle SQLAlchemy devraient hériter. 
BDD = declarative_base()