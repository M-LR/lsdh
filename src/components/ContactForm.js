
import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
import { Image } from "@nextui-org/react";


// Définition du schéma de validation avec Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Le nom est requis')
    .min(3, 'Le nom doit contenir au moins 3 caractères'),
  email: Yup.string()
    .required('L\'email est requis')
    .email('L\'email doit être valide'),
  message: Yup.string()
    .required('Le message est requis')
    .min(10, 'Le message doit contenir au moins 10 caractères'),
});

export default function ContactForm() {

  // Utilisation de useForm avec le resolver Yup pour la validation
  const { register, handleSubmit, formState: { errors, isSubmitted, isSubmitSuccessful }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  
  // Fonction de soumission du formulaire
  const  onSubmit = async (data) => {
   
    try {
      emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, data, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY,
      })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email envoyé avec succès ! 🚀');
        reset()
      });
      
    } catch (error) {
        console.log('FAILED...', error);
        alert('Échec de l\'envoi de l\'email.');
    }


  };
  
  return (
  <div className="flex flex-col items-center w-full">

    <div className="w-full p-4 relative">
      <h1 className="text-4xl text-center">Vous souhaitez nous contacter ? 👀</h1>
      <div></div>
    </div>


    <div className="flex md:flex-row flex-col justify-center w-full mt-4">

      <div className="flex flex-1 justify-center mx-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto p-4">
          <div>
            <Input
              {...register('name')}
              clearable
              bordered
              label="Nom"
              color={errors?.name ? "danger" : "primary"}
              fullWidth
            />
            <p className="text-red-600">{errors?.name ? errors.name.message : ''}</p>
          </div>
          <Spacer y={4} />

          <div>
            <Input
              {...register('email')}
              clearable
              bordered
              label="Email"
              description="Nous ne partagerons pas votre email."
              color={errors?.email ? "danger" : "primary"}
              fullWidth
            />
            <p className="text-red-600">{errors?.email ? errors.email.message : ''}</p>
          </div>
          <Spacer y={1.5} />

          <div>
            <Textarea
              {...register('message')}
              bordered
              label="Message"
              color={errors?.message ? "danger" : "primary"}
              fullWidth
              rows={4}
            />
            <p className="text-red-600">{errors?.message ? errors.message.message : ''}</p>
          </div>

          <Spacer y={3} />
          { isSubmitSuccessful ? 'email envoyé ! 🚀 ' : <Button disabled={isSubmitted} type="submit" color="primary" shadow>
            Envoyer
          </Button>}
          
        </form>
      </div>


      <div className="flex flex-1 items-center justify-center mt-8 sm:mt-4">
        <Image
          alt="nextui logo"
          height={500}
          radius="sm"
          src="./images/contact.svg"
          width={500}
        />
      </div>
    </div>
  </div>
  );
}
