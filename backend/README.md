# Backend TALC

API Django pour le site web du groupe de danse TALC.

## Fonctionnalités

-   API RESTful
-   Gestion des utilisateurs et authentification
-   Stockage et gestion des médias
-   Base de données PostgreSQL

## Installation

```bash
# Créer un environnement virtuel
python -m venv venv

# Activer l'environnement virtuel (Windows)
venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Appliquer les migrations
python manage.py migrate

# Lancer le serveur
python manage.py runserver
```

## Structure

-   `/talc_api` - Configuration principale du projet Django
-   `/users` - Application pour la gestion des utilisateurs
-   `/posts` - Application pour la gestion des posts
-   `/media` - Application pour la gestion des médias
-   `/events` - Application pour la gestion des événements (Phase 2)
-   `/tickets` - Application pour la gestion des billets (Phase 2)
