import Image from "next/image";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ParallaxSection backgroundImage="/images/bees-background.jpg" height="h-[500px]">
        <div className="text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-6xl font-bold mb-4">
            Добро пожаловать на <span className="text-blue-400">Bees Resale</span>
          </h1>
          <p className="text-2xl">
            Ваш источник качественных шмелиных колоний для опыления теплиц.
          </p>
        </div>
      </ParallaxSection>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center py-16">
        <h2 className="text-4xl font-bold mb-8">О нас</h2>
        <p className="mt-3 text-lg max-w-2xl">
          Мы специализируемся на перепродаже высококачественных шмелиных колоний для сельскохозяйственных нужд. Наши шмели помогут вам значительно увеличить урожайность в теплицах и на открытом грунте.
        </p>
        <p className="mt-3 text-lg max-w-2xl">
          Свяжитесь с нами, чтобы узнать о ценах и условиях сотрудничества. Мы предлагаем индивидуальные решения для каждого клиента.
        </p>
      </main>
    </div>
  );
}
