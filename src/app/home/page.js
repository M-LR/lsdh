"use client";
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { CiBookmarkCheck } from "react-icons/ci";

const Page = () => {
  const [pageContent, setPageContent] = useState(null);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const pageId = process.env.NEXT_PUBLIC_NOTION_HOME_PAGE_ID;
        
        if (!pageId) {
          console.error("L'ID de la page Notion n'est pas défini");
          return;
        }

        const response = await fetch(`/api/notion?pageId=${pageId}`);
        const data = await response.json();
        setPageContent(data.page);
        setBlocks(data.blocks);
      } catch (error) {
        console.error("Erreur lors de la récupération de la page Notion:", error);
      }
    };

    fetchPageContent();
  }, []);

  return (
    <div className="flex items-center justify-center">
      

      {pageContent ? (
        <div>
          <h1 className='text-2xl'>{pageContent.properties.title.title[0].text.content}</h1>
          {/* Afficher les blocs de texte ici */}
          {blocks.map((block) => {
            if (block.type === 'paragraph') {
              return <p key={block.id}>{block.paragraph.rich_text[0]?.text.content}</p>;
            }
            return null;
          })}
        </div>
      ) : (
       <p>chargement de la page</p>
      )}
    </div>
  );
};

export default Page;
