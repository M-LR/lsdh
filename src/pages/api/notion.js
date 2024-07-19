// pages/api/notion.js
import { Client } from '@notionhq/client';

// Configuration du client Notion avec la clé API
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Fonction pour récupérer une page Notion
const getPage = async (pageId) => {
  return await notion.pages.retrieve({ page_id: pageId });
};

// Fonction pour récupérer les blocs enfants d'une page Notion
const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    blocks.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }

  return blocks;
};

export default async function handler(req, res) {
  const { pageId } = req.query;

  if (!pageId) {
    return res.status(400).json({ error: 'Missing pageId' });
  }

  try {
    const page = await getPage(pageId);
    const blocks = await getBlocks(pageId);
    res.status(200).json({ page, blocks });
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    res.status(500).json({ error: 'Failed to fetch page data', details: error.message });
  }
}
