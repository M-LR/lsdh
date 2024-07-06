import React from 'react';
import Image from 'next/image';



const About = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className='flex items-center justify-center rounded-t-md w-full max-w-3xl md:w-2/3 p-4 bg-violet-300 dark:bg-violet-800 dark:text-violet-100'>
                    <Image
                        src="/images/lsh_logo.png"
                        alt="Logo de l'association des Studios du héron"
                        width={300}
                        height={300}
                    />    
                </div>    
            </div>
            <div className={`flex items-center justify-center`}>
                <div className='rounded-b-md w-full max-w-3xl md:w-2/3 p-4 bg-violet-100 dark:bg-violet-600 dark:text-violet-100'>
                   
                    <p><span className='italic font-semibold'>LSH</span> est une association loi 1901 fondée en juin 2024. Elle est dédiée à la production audiovisuelle et soutient et promeut la création de contenus audiovisuels en mettant en valeur le travail collectif et la collaboration artistique.</p><p>Par ailleurs, nous nous attachons lors de nos productions à défendre des valeurs humaines, inclusives et éco-responsables, en faisant intervenir des personnalités avec lesquelles chacun·ne est susceptible de s’identifier. Nous mettons un point d’honneur à ce que nos tournages se déroulent pour toutes et tous les participant·e·s de la manière la plus confortable possible.  </p>
                </div>
            </div> 
        </>  
    );
};

export default About;