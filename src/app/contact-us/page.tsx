'use client';

import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Navbar, Footer } from '@/components';

export default function ContactUs() {
  return (
    <>
      <Navbar alwaysOpaque={true} />
      <Box className="container mx-auto px-8 py-16 pt-20 min-h-screen bg-gray-50">
        <Typography variant="h3" color="text.primary" sx={{ marginBottom: 8, textAlign: 'center' }}>
          Свяжитесь с нами
        </Typography>
        <Box className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
          <Box className="md:col-span-1">
            <Box sx={{ textAlign: 'center' }}>
              <EmailIcon sx={{ height: 32, width: 32, mx: 'auto', color: '#607d8b', marginBottom: 2 }} />
              <Typography variant="h5" color="text.primary" sx={{ marginBottom: 2 }}>
                Электронная почта
              </Typography>
              <Typography variant="body1" color="text.secondary">
                info@shmeleferma.com
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: 8 }}>
              <PhoneIcon sx={{ height: 32, width: 32, mx: 'auto', color: '#607d8b', marginBottom: 2 }} />
              <Typography variant="h5" color="text.primary" sx={{ marginBottom: 2 }}>
                Телефон
              </Typography>
              <Typography variant="body1" color="text.secondary">
                +7 (XXX) XXX-XX-XX
              </Typography>
            </Box>
          </Box>
          <Box className="md:col-span-2">
            <form className="mt-8">
              <Box sx={{ marginBottom: 4 }}>
                <TextField fullWidth label="Ваше имя" variant="outlined" size="medium" />
              </Box>
              <Box sx={{ marginBottom: 4 }}>
                <TextField fullWidth label="Ваш email" variant="outlined" size="medium" type="email" />
              </Box>
              <Box sx={{ marginBottom: 4 }}>
                <TextField fullWidth label="Тема" variant="outlined" size="medium" />
              </Box>
              <Box sx={{ marginBottom: 4 }}>
                <TextField fullWidth label="Ваше сообщение" variant="outlined" multiline rows={4} />
              </Box>
              <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 6 }}>
                Отправить сообщение
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
} 