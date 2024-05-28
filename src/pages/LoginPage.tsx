"use client"

import Container from '@/components/shared/Container';
import ContentCentered from '@/components/shared/ContentCentered';

import LoginForm from '@/components/shared/LoginForm';
import React from 'react';


const LoginPage = () => {
  return (
    <Container>
      <ContentCentered>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <LoginForm />
      </ContentCentered>
    </Container>
  );
};

export default LoginPage;
