"use client";

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Card from "@/components/Card";
import Footer from '@/components/Footer';

const fetchNotionData = async (databaseId) => {
  const response = await fetch(`/api/notion?databaseId=${databaseId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const processData = (data) => {
  let heroTitle = '';
  let heroText = '';
  let mainText = '';

  data.forEach((item) => {
    item.properties.page.rich_text.forEach((page) => {
      if (page.text.content === 'home section_1') {
        heroTitle = item.properties.title.title[0]?.text?.content || '';
        heroText = item.properties.text.rich_text[0]?.text?.content || '';
      }
      if (page.text.content === 'home section_2') {
        mainText = item.properties.text.rich_text[0]?.text?.content || '';
      }
    });
  });

  return { heroTitle, heroText, mainText };
};

export default function Home() {
  const [error, setError] = useState(null);
  const [heroTitle, setHeroTitle] = useState('');
  const [heroText, setHeroText] = useState('');
  const [mainText, setMainText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  useEffect(() => {
    const loadNotionData = async () => {
      try {
        const data = await fetchNotionData(databaseId);
        const { heroTitle, heroText, mainText } = processData(data);
        setHeroTitle(heroTitle);
        setHeroText(heroText);
        setMainText(mainText);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    loadNotionData();
  }, [databaseId]);

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
      <div className='flex flex-col md:flex-row justify-center items-center mt-32 mx-auto max-w-screen-2xl'>
        <Hero heroTitle={heroTitle} heroText={heroText} mainText={mainText} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-32 mx-auto max-w-screen-2xl py-10 shadow-xl dark:shadow-violet-600">
        <Card />
      </div>
      <Footer />
    </>
  );
}
