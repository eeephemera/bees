"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              variant="h5"
              color="white"
              className="mb-4"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Шмелиная Ферма
            </Typography>
            <Typography color="white" className="mb-12 font-normal" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Ваш надежный партнер в опылении!
            </Typography>
          </div>
          <div className="text-center md:text-right">
            <Typography variant="h5" color="white" className="mb-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Контакты
            </Typography>
            <Typography color="white" className="mb-2 font-normal" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Телефон: +7 (XXX) XXX-XX-XX
            </Typography>
            <Typography color="white" className="mb-12 font-normal" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Email: info@bumblebeefarm.ru
            </Typography>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            &copy; {CURRENT_YEAR} Шмелиная Ферма. Все права защищены.
          </Typography>

          <div className="flex gap-2">
            <a href="https://t.me/yourtelegram" target="_blank">
              <IconButton variant="text" color="white" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-telegram text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank">
              <IconButton variant="text" color="white" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
