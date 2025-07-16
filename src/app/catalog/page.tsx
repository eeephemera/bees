'use client';

import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Navbar, Footer } from '@/components';
import Image from 'next/image';

export default function Catalog() {
  return (
    <>
      <Navbar alwaysOpaque={true} />
      <Box className="container mx-auto px-8 py-16 pt-20 min-h-screen bg-gray-50">
        <Typography variant="h3" color="text.primary" sx={{ marginBottom: 8, textAlign: 'center' }}>
          Каталог Шмелей
        </Typography>
        <Box className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card sx={{ marginTop: 6, width: { xs: '100%', md: 384 } }}>
            <CardMedia component="img" height="224" image="/image/bombus-terrestris.jpg" alt="Bombus Terrestris" />
            <CardContent>
              <Typography variant="h5" color="text.primary" sx={{ marginBottom: 2 }}>
                Bombus Terrestris - Большой Земляной Шмель
              </Typography>
              <Typography variant="body1">
                Распространенный вид шмелей на территории Европы, культивируется большинством биолабораторий мира. Вид отличается крупным размером и длинным хоботком, они - идеальные опылители сельскохозяйственных культур.
              </Typography>

              <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
                Преимущества Bombus terrestris:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Активность: посещают цветки с раннего утра до позднего вечера, активно опыляя растения в радиусе 300 метров.</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Неагрессивность: рабочие шмели гораздо менее агрессивны по сравнению с пчелами, что позволяет безопасно работать в теплицах.</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Устойчивость к погодным условиям: эффективно работают при более низких температурах (от +10 ᵒС) и даже в облачную погоду.</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Незаменимость: использование шмелей является обязательным приемом в промышленных и фермерских теплицах.</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Ветеринарная безопасность: семьи шмелей подтверждены ветеринарным сертификатом.</Typography></li>
              </ul>

              <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
                Bombus terrestris опыляют:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 grid grid-cols-2 gap-1">
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Томаты</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Кабачки</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Тыква</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Сладкий перец</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Баклажаны</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Огурцы</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Жимолость</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Яблоня</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Голубика</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Земляника</Typography></li>
              </ul>

              <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
                Комплектация шмелиного улья:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Коробка из влагостойкого картона</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Контейнер с сахарным сиропом</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Гнездовая пластиковая камера</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Семья шмелей</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Транспортировочная поилка</Typography></li>
                <li><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>Инструкция</Typography></li>
              </ul>
            </CardContent>
            <Box sx={{ padding: 2.5, paddingTop: 0 }}>
              <Button variant="contained">Узнать больше</Button>
            </Box>
          </Card>
          {/* Add more bumblebee cards here */}
        </Box>
      </Box>
      <Footer />
    </>
  );
} 