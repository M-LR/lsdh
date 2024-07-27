"use client";
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Card from "@/components/Card";
import Footer from '@/components/Footer';


export default function Home() {

  const [error, setError] = useState(null);
    const [heroTitle, setHeroTitle] = useState('');
    const [heroText, setHeroText] = useState('');
    const [mainText, setMainText] = useState('');
  
    // Récupération de l'ID de la base de données à partir des variables d'environnement
    const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

    useEffect(() => {
        fetch(`/api/notion?databaseId=${databaseId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          data.map((item) => {
            item.properties.page.rich_text.map((page) => {
                if (page.text.content === 'home section_1') {
                  item.properties.title.title.map((title) => {
                    setHeroTitle(title.text.content)
                  })
                  item.properties.text.rich_text.map((text)=> {  
                    setHeroText(text.text.content)
                  })
                }
                if (page.text.content === 'home section_2') {
                  item.properties.text.rich_text.map((text)=> {
                    setMainText(text.text.content)
                  })
                }
            })
          })
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(error.toString());
        }); 
      },[]);
 

  return (
    heroTitle ?
      <>
        <div className='flex flex-col md:flex-row justify-center items-center mt-32 mx-auto max-w-screen-2xl'>
          <Hero heroTitle={heroTitle} heroText={heroText} mainText={mainText} />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center my-32 mx-auto max-w-screen-2xl  py-10 shadow-xl dark:shadow-violet-600">
          <Card />
        </div>
        <Footer />
      </> 
    : 
   
    <div className="flex flex-col md:flex-row justify-center items-center  mt-52">
      <Loading /> 
    </div>
    
   
  );
}