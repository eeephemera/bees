"use client";
import Image from "next/image";
import { Typography, IconButton } from "@mui/material";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              variant="h5"
              sx={{ color: 'white', marginBottom: 4 }}
            >
              Шмелиная Ферма
            </Typography>
            <Typography sx={{ color: 'white', marginBottom: 12, fontWeight: 400 }}>
              Ваш надежный партнер в опылении!
            </Typography>
          </div>
          <div className="text-center md:text-right">
            <Typography variant="h5" sx={{ color: 'white', marginBottom: 4 }}>
              Контакты
            </Typography>
            <Typography sx={{ color: 'white', marginBottom: 2, fontWeight: 400 }}>
              Телефон: +7 (XXX) XXX-XX-XX
            </Typography>
            <Typography sx={{ color: 'white', marginBottom: 12, fontWeight: 400 }}>
              Email: info@bumblebeefarm.ru
            </Typography>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between px-4 md:px-8">
          <Typography
            sx={{ color: 'white', textAlign: 'center', fontWeight: 400, opacity: 0.75 }}
          >
            &copy; {CURRENT_YEAR} Шмелиная Ферма. Все права защищены.
          </Typography>

          <div className="flex gap-2">
            <a href="https://t.me/yourtelegram" target="_blank">
              <IconButton sx={{ color: 'white' }}>
                <i className="fa-brands fa-telegram text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank">
              <IconButton sx={{ color: 'white' }}>
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
