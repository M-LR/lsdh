"use client";

import React, { useState } from 'react';
import Loading from "@/components/Loading";
import Footer from '@/components/Footer';
import ContactFrom from '@/components/ContactForm';

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
          <div className="flex flex-col md:flex-row justify-center items-center mt-52">
            <Loading />
          </div>
        );
    }
    return (
        <>
          <div className='flex flex-col mb-20 md:flex-row justify-center items-center mt-20 mx-auto max-w-screen-2xl py-10 shadow-lg dark:shadow-violet-600'>
            <ContactFrom />
          </div>
          <Footer />
        </>
      );

};

export default Contact;