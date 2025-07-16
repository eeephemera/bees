"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header
        className="grid !min-h-[49rem] bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/bees-background.jpg')" }}
      >
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4 text-xl sm:text-5xl md:text-6xl break-words" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Высококачественные <br /> Колонии Шмелей для Опыления
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white text-sm sm:text-lg break-words"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Предлагаем высококачественные колонии шмелей для эффективного опыления сельскохозяйственных культур в теплицах и на открытом грунте. Увеличьте урожайность и качество плодов с нашими шмелями!
            </Typography>
            
            
          </div>
          {/* Removed Image component here */}
        </div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ backgroundPositionX: ["100%", "95%", "100%"] }}
        transition={{
          duration: 0.8,
          backgroundPositionX: { repeat: Infinity, ease: "linear", duration: 5 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md"
        style={{ backgroundImage: "url('/image/flying-bees.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100px", backgroundPosition: "right top" }}
      >
        <div className="px-4">
          <Typography variant="h2" color="blue-gray" className="mb-3 text-xl sm:text-3xl" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Наши преимущества
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-900 lg:w-5/12 break-words"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Мы предлагаем здоровые и активные колонии шмелей, гарантируя высокую эффективность опыления и увеличение урожайности ваших культур, что увеличивает производство на 30-40%. Наши шмели работают даже в сложных условиях, обеспечивая стабильный результат.
          </Typography>
        </div>
      </motion.div>
      {/* Removed 'Почему Шмели?' section */}
    </div>
  );
}
export default Hero;
