// lib/notion.js

// Importation de la bibliothèque Notion SDK pour interagir avec l'API de Notion
import { Client } from '@notionhq/client';

// Création d'une instance du client Notion avec le token d'authentification
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Exportation de la fonction asynchrone getData pour récupérer les données d'une base de données Notion
export default async function getData(databaseId) {
    try {
        // Utilisation du client Notion pour interroger la base de données spécifiée par son ID
        const response = await notion.databases.query({ database_id: databaseId });

        // Retourne les résultats de la requête
        return response.results;
    } catch (error) {
        // Capture et lance une erreur en cas de problème avec la requête
        throw error;
    }
}
