'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/sendEmail';
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import et from "@/language/et.json";
import ru from "@/language/ru.json";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : language === "et" ? et : ru;
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [messageSent, setMessageSent] = useState(false);

  async function onSubmit(data: FormData) {
    setMessageSent(false);

    try {
      await sendEmail(data);
      reset();
      setMessageSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {messageSent && (
        <p role="status">{translations.contact.messageSent}</p>
      )}
      <div>
        <label htmlFor='name'>{translations["contact form"].name}</label>
        <input
          id='name'
          type='text'
          placeholder={translations["contact form"].name}
          {...register('name', { required: true })}
        />
      </div>

      <div>
        <label htmlFor='email'>
          {translations["contact form"].email}
        </label>
        <input
          id='email'
          type='email'
          placeholder={translations["contact form"].email}
          {...register('email', { required: true })}
        />
      </div>

      <div>
        <label htmlFor='message'>
          {translations["contact form"].message}
        </label>
        <textarea
          id='message'
          rows={4}
          placeholder={translations["contact form"].message}
          {...register('message', { required: true })}
        ></textarea>
      </div>

      <div>
        <button type="submit">
          {translations["contact form"].submit}
        </button>
      </div>

      
    </form>
  );
};

export default Contact;