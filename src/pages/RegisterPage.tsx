"use client"

import Container from '@/components/shared/Container';
import ContentCentered from '@/components/shared/ContentCentered';

import RegisterForm from '@/components/shared/RegisterForm';
import React from 'react';


const RegisterPage = () => {
  return (
    <Container>
      <ContentCentered>
        <h1 className='text-2xl font-bold mb-4 mt-6'>Create an account</h1>
        <RegisterForm />
      </ContentCentered>
    </Container>
  );
};

export default RegisterPage;
