# TALC - Site Web pour Groupe de Danse

Ce projet est un site web destiné à un groupe de danse permettant de partager des photos, vidéos et actualités. À terme, il permettra également la vente de billets en ligne pour les galas.

## Fonctionnalités

### Phase 1 (Actuelle)

-   Publication de contenu (posts, photos, vidéos)
-   Galerie média
-   Interface utilisateur moderne et responsive
-   Système d'authentification

### Phase 2 (Future)

-   Vente de billets en ligne pour les galas
-   Calendrier des événements
-   Système de notification

## Structure du Projet

### Frontend (React)

-   Interface utilisateur moderne
-   Composants réutilisables
-   Responsive design

### Backend (Django + PostgreSQL)

-   API RESTful
-   Gestion des utilisateurs
-   Stockage des médias
-   Base de données PostgreSQL

## Installation

### Prérequis

-   Node.js et npm
-   Python 3.8+
-   PostgreSQL

### Installation du Frontend

```bash
cd frontend
npm install
npm start
```

### Installation du Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Sur Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Développement

Ce projet est en cours de développement.
