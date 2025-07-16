'use client';

import React from 'react';
import { Typography, Card, CardBody, CardHeader, CardFooter, Button } from '@material-tailwind/react';
import { Navbar, Footer } from '@/components';
import Image from 'next/image';

export default function Catalog() {
  return (
    <>
      <Navbar alwaysOpaque={true} />
      <div className="container mx-auto px-8 py-16 pt-20 min-h-screen bg-gray-50">
        <Typography variant="h1" color="blue-gray" className="mb-8 text-center">
          Каталог Шмелей
        </Typography>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="mt-6 w-full md:w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/bombus-terrestris.jpg"
                alt="Bombus Terrestris"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bombus Terrestris - Большой Земляной Шмель
              </Typography>
              <Typography>
                Распространенный вид шмелей на территории Европы, культивируется большинством биолабораторий мира. Вид отличается крупным размером и длинным хоботком, они - идеальные опылители сельскохозяйственных культур.
              </Typography>

              <Typography variant="h6" color="blue-gray" className="mt-4 mb-2">
                Преимущества Bombus terrestris:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Активность: посещают цветки с раннего утра до позднего вечера, активно опыляя растения в радиусе 300 метров.</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Неагрессивность: рабочие шмели гораздо менее агрессивны по сравнению с пчелами, что позволяет безопасно работать в теплицах.</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Устойчивость к погодным условиям: эффективно работают при более низких температурах (от +10 ᵒС) и даже в облачную погоду.</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Незаменимость: использование шмелей является обязательным приемом в промышленных и фермерских теплицах.</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Ветеринарная безопасность: семьи шмелей подтверждены ветеринарным сертификатом.</Typography></li>
              </ul>

              <Typography variant="h6" color="blue-gray" className="mt-4 mb-2">
                Bombus terrestris опыляют:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 grid grid-cols-2 gap-1">
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Томаты</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Кабачки</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Тыква</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Сладкий перец</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Баклажаны</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Огурцы</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Жимолость</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Яблоня</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Голубика</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Земляника</Typography></li>
              </ul>

              <Typography variant="h6" color="blue-gray" className="mt-4 mb-2">
                Комплектация шмелиного улья:
              </Typography>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Коробка из влагостойкого картона</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Контейнер с сахарным сиропом</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Гнездовая пластиковая камера</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Семья шмелей</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Транспортировочная поилка</Typography></li>
                <li><Typography variant="paragraph" className="font-normal !text-gray-700">Инструкция</Typography></li>
              </ul>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Узнать больше</Button>
            </CardFooter>
          </Card>
          {/* Add more bumblebee cards here */}
        </div>
      </div>
      <Footer />
    </>
  );
} 