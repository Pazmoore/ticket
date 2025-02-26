'use client';
import React from "react";
import { useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "./page.module.scss";
import Image from "next/image";
import Modal from '@/pages/Modal'; 

const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    avatarUrl: yup.string().url('Must be a valid URL').required('Avatar URL is required'),
});

type FormData = {
    fullName: string;
    email: string;
    avatarUrl: string;
};

const Page = () => {
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<FormData>({
      resolver: yupResolver(schema),
    });

    const [ticketData, setTicketData] = useState<FormData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setValue('fullName', parsedData.fullName || '');
          setValue('email', parsedData.email || '');
          setValue('avatarUrl', parsedData.avatarUrl || '');
        }
      }, [setValue]);


  const formData = watch(); 

  useEffect(() => {
    if (formData) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    localStorage.removeItem('formData');
    setTicketData(data); 
    setIsModalOpen(true); 
  };
  const closeModal = () => {
    setIsModalOpen(false); 
  };


  return (
    <div className={styles.container}>
        <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data); 
        localStorage.removeItem('formData'); 
      })}className={styles.form}
        >
            <div className={styles.img}>
                <Image
                    src="/images/banner.png"
                    alt="logo"
                    width={250}
                    height={250}
                    quality={100}
                />
            </div>
            <div className={styles.box}>
                <div className={styles.form}>
                    <label>Avatar</label>
                    <input type="url" placeholder='Upload Your URL' {...register('avatarUrl')} />
                    {errors.avatarUrl && <p>{errors.avatarUrl.message}</p>}
                </div>
                <div className={styles.form}>
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name' {...register('fullName')} />
                    {errors.fullName && <p>{errors.fullName.message}</p>}
                </div>
                <div className={styles.form}>
                    <label>Email</label>
                    <input type="email" placeholder='Email' {...register('email')} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <button type="submit">Generate Ticket</button>
            </div>
        </form>

      {isModalOpen && ticketData && (
        <Modal ticketData={ticketData} onClose={closeModal} />
      )}
    </div>
    
  );
};

export default Page;





