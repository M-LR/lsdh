/**
 * @file Home.jsx
 * @description Composant principal pour la page d'accueil de l'application. Il récupère les données depuis Notion, traite ces données et affiche les sections Hero, Card et Footer.
 */

"use client";

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Card from "@/components/Card";
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

/**
 * @function fetchNotionData
 * @description Fonction asynchrone pour récupérer les données depuis l'API Notion.
 * @param {string} databaseId - ID de la base de données Notion.
 * @returns {Promise<Object>} Les données récupérées depuis Notion.
 */
const fetchNotionData = async (databaseId) => {
  const response = await fetch(`/api/notion?databaseId=${databaseId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

/**
 * @function processData
 * @description Traite les données récupérées depuis Notion pour extraire les titres et les textes des sections.
 * @param {Array} data - Les données récupérées depuis Notion.
 * @returns {Object} Un objet contenant les textes pour les sections Hero et Main.
 */
const processData = (data) => {
  
  let heroTitle = '';
  let heroText = '';
  let mainText = '';
  let values = [];
  let team = [];

  data.forEach((item) => {
    item.properties.page.rich_text.forEach((page) => {
      if (page.text.content === 'home section_1') {
        heroTitle = item.properties.title.title[0]?.text?.content || '';
        heroText = item.properties.text.rich_text[0]?.text?.content || '';
      }
      if (page.text.content === 'home section_2') {
        mainText = item.properties.text.rich_text[0]?.text?.content || '';
      }
      if (page.text.content === 'value') {
        values.push({
          title: item.properties.title.title[0]?.text?.content || '',
          text : item.properties.text.rich_text[0]?.text?.content || '',
          chip : item.properties.chip.rich_text[0]?.text?.content || '',
        })
      }
      if (page.text.content === 'team') {
        team.push({
          name: item.properties.title.title[0]?.text?.content || '',
          presentation : item.properties.text.rich_text[0]?.text?.content || '',
          status : item.properties.chip.rich_text[0]?.text?.content || '',
        })
      }
    });
  });

  return { heroTitle, heroText, mainText, values, team };
};

/**
 * @component
 * @description Composant principal pour la page d'accueil. Gère l'état de chargement et d'erreur, récupère et traite les données depuis Notion, et affiche les composants Hero, Card et Footer.
 */
export default function About() {
  const [error, setError] = useState(null);
  const [heroTitle, setHeroTitle] = useState('');
  const [heroText, setHeroText] = useState('');
  const [mainText, setMainText] = useState('');
  const [values, setValues] = useState([]);
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  useEffect(() => {
    const loadNotionData = async () => {
      try {
        const data = await fetchNotionData(databaseId);
        const { heroTitle, heroText, mainText, values, team } = processData(data);
        setHeroTitle(heroTitle);
        setHeroText(heroText);
        setMainText(mainText);
        setValues(values);
        setTeam(team);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    loadNotionData();
  }, [databaseId]);

  const { ref, inView } = useInView({
    threshold: 0.3,    // 30% du texte doit être visible pour déclencher l'animation
  });

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-52">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-52">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className='container-fluid py-1 bg-gradient-to-br from-violet-500/60 via-purple-600 to-violet-600 dark:from-violet-800 dark:via-purple-900 dark:to-violet-950 shadow-lg dark:shadow-violet-950'>
        <div className='flex flex-col md:flex-row justify-center items-center my-20 mx-auto max-w-screen-2xl pb-12' ref={ref} style={{
              transition: 'all 0.6s ease-out',
              transform: inView ? 'translateY(0)' : 'translateY(-80px)',
              opacity: inView ? 1 : 0,
            }}
          >
          <Hero 
            heroTitle={heroTitle} 
            heroText={heroText} 
            mainText={mainText}
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center my-20 mx-auto max-w-screen-2xl py-7">
        <Card values={values} team={team} />
      </div>
      <Footer />
    </>
  );
}
