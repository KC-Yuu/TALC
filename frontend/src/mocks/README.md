# Données Fictives (Mocks)

Ce dossier contient des données fictives utilisées pendant le développement du frontend, avant l'intégration avec le backend.

## Structure

-   `index.js` - Point d'entrée qui exporte toutes les données fictives
-   `posts.js` - Données pour les articles/posts
-   `media.js` - Données pour les médias (galerie)
-   `events.js` - Données pour les événements
-   `users.js` - Données pour les utilisateurs

## Utilisation

Importez les données depuis le point d'entrée :

```javascript
import { posts, mediaItems, events, users } from "../mocks";
```

## Exemple d'utilisation dans un composant

```javascript
import React, { useState, useEffect } from "react";
import { posts } from "../mocks";

const PostsComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulation d'un appel API
        setTimeout(() => {
            setData(posts);
            setLoading(false);
        }, 500);

        // En production, remplacer par :
        // const fetchData = async () => {
        //   try {
        //     const response = await axios.get('/api/posts/');
        //     setData(response.data);
        //   } catch (error) {
        //     console.error('Erreur:', error);
        //   } finally {
        //     setLoading(false);
        //   }
        // };
        //
        // fetchData();
    }, []);

    // Reste du composant...
};
```

## Transition vers l'API réelle

Lorsque le backend sera prêt, il suffira de remplacer l'importation des données fictives par des appels API réels.

La structure des données fictives est conçue pour correspondre à la structure attendue des réponses API, ce qui facilitera la transition.
