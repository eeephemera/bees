'use client';

import React from 'react';
import { Typography, Input, Textarea, Button, CardBody } from '@material-tailwind/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Navbar, Footer } from '@/components';

export default function ContactUs() {
  return (
    <>
      <Navbar alwaysOpaque={true} />
      <div className="container mx-auto px-8 py-16 pt-20 min-h-screen bg-gray-50">
        <Typography variant="h1" color="blue-gray" className="mb-8 text-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Свяжитесь с нами
        </Typography>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
          <div className="md:col-span-1">
            <CardBody className="text-center"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <EnvelopeIcon className="h-8 w-8 mx-auto text-blue-gray-500 mb-2" />
              <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Электронная почта
              </Typography>
              <Typography variant="paragraph" color="gray" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                info@shmeleferma.com
              </Typography>
            </CardBody>
            <CardBody className="text-center mt-8" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <PhoneIcon className="h-8 w-8 mx-auto text-blue-gray-500 mb-2" />
              <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Телефон
              </Typography>
              <Typography variant="paragraph" color="gray" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                +7 (XXX) XXX-XX-XX
              </Typography>
            </CardBody>
          </div>
          <div className="md:col-span-2">
            <form className="mt-8">
              <div className="mb-4">
                <Input type="text" label="Ваше имя" size="lg" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
              </div>
              <div className="mb-4">
                <Input type="email" label="Ваш email" size="lg" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
              </div>
              <div className="mb-4">
                <Input type="text" label="Тема" size="lg" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
              </div>
              <div className="mb-4">
                <Textarea label="Ваше сообщение" size="lg" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>
              </div>
              <Button variant="gradient" color="blue" fullWidth className="mt-6" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 