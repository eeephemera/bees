'use client';

import React from 'react';
import { Typography, TextField, Button, Box, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Navbar, Footer } from '@/components';

export default function ContactUs() {
  return (
    <>
      <Navbar alwaysOpaque={true} />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
        <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 4, sm: 6, md: 8 } }}>
          {/* Removed main "Свяжитесь с нами" heading */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(2, 1fr)' }, gap: { xs: 6, md: 10 }, alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Card sx={{ boxShadow: 4, borderRadius: 3, p: 4, textAlign: 'center' }}>
                <CardContent sx={{ p: 0 }}>
                  <EmailIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" color="text.primary" sx={{ mb: 1.5, fontWeight: 'bold' }}>
                    Электронная почта
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    info@shmeleferma.com
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 4, borderRadius: 3, p: 4, textAlign: 'center' }}>
                <CardContent sx={{ p: 0 }}>
                  <PhoneIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" color="text.primary" sx={{ mb: 1.5, fontWeight: 'bold' }}>
                    Телефон
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    +7 (XXX) XXX-XX-XX
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={{ boxShadow: 4, borderRadius: 3, p: { xs: 4, md: 6 } }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" color="text.primary" sx={{ mb: 5, textAlign: 'center', fontWeight: 'bold' }}>
                    Напишите нам
                  </Typography>
                  <form>
                    <Box sx={{ mb: 4 }}>
                      <TextField
                        fullWidth
                        label="Ваше имя"
                        placeholder="Введите ваше имя"
                        variant="outlined"
                        size="medium"
                        sx={{
                          backgroundColor: '#ffffff',
                          borderRadius: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#9e9e9e', // Darker gray border
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                            paddingY: '12px', // Increase vertical padding inside input
                          },
                          '& .MuiInputBase-input': {
                            paddingY: '4px', // Adjust internal padding to center text
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                      <TextField
                        fullWidth
                        label="Ваш email"
                        placeholder="Введите ваш email"
                        variant="outlined"
                        size="medium"
                        type="email"
                        sx={{
                          backgroundColor: '#ffffff',
                          borderRadius: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#9e9e9e',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                            paddingY: '12px',
                          },
                          '& .MuiInputBase-input': {
                            paddingY: '4px',
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                      <TextField
                        fullWidth
                        label="Тема"
                        placeholder="Введите тему сообщения"
                        variant="outlined"
                        size="medium"
                        sx={{
                          backgroundColor: '#ffffff',
                          borderRadius: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#9e9e9e',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                            paddingY: '12px',
                          },
                          '& .MuiInputBase-input': {
                            paddingY: '4px',
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                      <TextField
                        fullWidth
                        label="Ваше сообщение"
                        placeholder="Введите ваше сообщение"
                        variant="outlined"
                        multiline
                        rows={6}
                        sx={{
                          backgroundColor: '#ffffff',
                          borderRadius: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#9e9e9e',
                            },
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                            paddingY: '12px',
                          },
                          '& .MuiInputBase-input': {
                            paddingY: '4px',
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      disableElevation // Remove default elevation for a flatter look
                      sx={{
                        mt: 2,
                        py: 2,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        borderRadius: 2,
                        textTransform: 'none', // Prevent uppercase
                        boxShadow: 'none', // Remove shadow completely for flat look
                        '&:hover': {
                          bgcolor: 'primary.dark', // Darken on hover
                          boxShadow: 'none',
                          transform: 'none',
                        },
                      }}
                    >
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
} 