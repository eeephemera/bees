export default function ContactPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Свяжитесь с нами</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
        <p className="text-lg text-gray-700 mb-4">Если у вас есть вопросы о шмелиных колониях или вы хотите стать дилером, пожалуйста, свяжитесь с нами.</p>
        <p className="text-lg text-gray-700 mb-4">Мы открыты для сотрудничества и готовы предложить выгодные условия для перепродажи.</p>
        <p className="text-xl font-semibold text-blue-600">Email: info@beesresale.com</p>
        <p className="text-xl font-semibold text-blue-600">Телефон: +7 (XXX) XXX-XX-XX</p>
        <p className="text-lg text-gray-700 mt-4">Оставьте вашу заявку через форму ниже, и мы свяжемся с вами в ближайшее время.</p>
        {/* Add a contact form here later if needed */}
      </div>
    </div>
  );
} 