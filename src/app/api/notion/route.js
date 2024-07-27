// app/api/notion/route.js
// Documentation de l'API Notion :
// https://developers.notion.com/
// https://developers.notion.com/docs/working-with-databases

// Importation de la fonction getData du module notion
import getData from "@/lib/notion";

// Fonction asynchrone pour gérer les requêtes GET à cette route API
// Dans un route handler de Next.js, les noms des fonctions doivent correspondre aux méthodes HTTP qu'ils traitent. Par exemple, GET pour les requêtes GET, POST pour les requêtes POST, et ainsi de suite.
// Cela permet à Next.js de router correctement les requêtes entrantes vers les fonctions appropriées.
export async function GET(request) {

    // Récupération de l'ID de la base de données à partir des variables d'environnement
    // const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

    // Récupération de l'ID de la base de données à partir de la requête
    // new URL(request.url) : Cette ligne crée un nouvel objet URL en utilisant l'URL de la requête request.url. L'objet URL permet de manipuler et d'extraire des informations spécifiques de l'URL.
    // { searchParams } : Ceci utilise la déstructuration pour extraire la propriété searchParams de l'objet URL. searchParams est un objet de type URLSearchParams qui permet d'accéder aux paramètres de requête (les parties après le ? dans une URL).
    const { searchParams } = new URL(request.url);
    const databaseId = searchParams.get('databaseId');

    // Vérification si l'ID de la base de données est défini
    if (!databaseId) {
        return new Response(JSON.stringify({ error: 'Database ID is not defined' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        // Appel de la fonction getData pour récupérer les données de la base de données Notion
        const data = await getData(databaseId);
        
        // Retourne les données sous forme de réponse JSON avec un statut de succès (200)
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Capture et retourne une erreur en cas de problème avec la récupération des données
        return new Response(JSON.stringify({ error: 'Failed to fetch data from Notion', details: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
