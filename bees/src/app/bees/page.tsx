import Image from "next/image";

export default function BeesPage() {
  const bumblebeeColonies = [
    {
      id: 1,
      name: "Bombus Terrestris - Большой Земляной Шмель",
      image: "/images/bombus-terrestris.jpg", // Placeholder image
      description: "Распространенный вид шмелей на территории Европы, культивируется большинством биолабораторий мира. Вид отличается крупным размером и длинным хоботком, они - идеальные опылители сельскохозяйственных культур.",
      advantages: [
        { title: "Активность", description: "Шмели посещают цветки с раннего утра и до позднего вечера, активно опыляя растения в радиусе 300 метров от места расположения улья." },
        { title: "Не агресивны", description: "Рабочие шмели фуражиры гораздо менее агрессивны по сравнению с пчелами, что дает возможность овощеводам безопасно работать в теплицах." },
        { title: "Погода", description: "Шмели способны эффективно работать при более низких температурах. Шмель активно посещает растения уже при +10 ᵒС даже в облачную погоду." },
        { title: "Перемещение", description: "Эффективность применения шмелей остается высокой даже после открытия форточек для проветривания теплиц, когда пчелы могут покидать теплицу в поисках других источников нектара." },
        { title: "Незаменимость", description: "Использование семей шмелей стало незаменим и обязательным технологическим приемом в промышленных, фермерских теплицах, при семеноводстве, выращивании плодово-ягодных культур." },
        { title: "Безопасность", description: "Ветеринарная безопасность семей шмелей подтверждена ветеринарным сертификатом." }
      ],
      pollinates: ["Томаты", "Кабачки", "Тыква", "Сладкий перец", "Баклажаны", "Огурцы", "Жимолость", "Яблоня", "Голубика", "Земляника"],
      kitIncludes: ["Коробка из влагостойкого картона", "Контейнер с сахарным сиропом", "Гнездовая пластиковая камера", "Семья шмелей", "Гнездовая камера", "Канистра из пищевого пластика", "Транспортировочная поилка", "Инструкция", "Коробка улья"]
    },
    {
      id: 2,
      name: "Bombus Hypnorum - Осиный Шмель",
      image: "/images/bombus-hypnorum.jpg", // Placeholder image
      description: "Распространенный вид шмелей, часто встречающийся в городских условиях и лесах. Хорошо адаптируется к различным средам, является эффективным опылителем для широкого круга растений, включая садовые и плодовые деревья. Известен своей активностью при более прохладных температурах.",
      advantages: [
        { title: "Высокая адаптивность", description: "Способен обитать в различных биотопах, от лесов до городских парков." },
        { title: "Эффективное опыление", description: "Работает с широким спектром растений, включая садовые и лесные культуры." },
        { title: "Устойчивость к холоду", description: "Активен при низких температурах, что расширяет период опыления." },
        { title: "Быстрое развитие колонии", description: "Обеспечивает раннее и стабильное опыление." }
      ],
      pollinates: ["Яблоня", "Вишня", "Клубника", "Клевер", "Лён"],
      kitIncludes: [] // Add specific items later if needed
    },
    {
      id: 3,
      name: "Bombus lucorum - Беломордый Шмель",
      image: "/images/bombus-lucorum.jpg", // Placeholder image
      description: "Распространенный в Европе вид шмелей, отличающийся светлой окраской морды. Этот вид является ценным опылителем для многих сельскохозяйственных культур, особенно для тех, которые выращиваются в теплицах. Их высокая активность и способность работать в различных условиях делают их незаменимыми помощниками для фермеров.",
      advantages: [
        { title: "Эффективность", description: "Отлично опыляют овощные, ягодные и плодовые культуры, повышая урожайность." },
        { title: "Универсальность", description: "Подходят для использования как в открытом грунте, так и в закрытых теплицах." },
        { title: "Устойчивость", description: "Хорошо переносят изменения температуры и влажности." },
        { title: "Мирное поведение", description: "Неагрессивны и безопасны для работы рядом с людьми." }
      ],
      pollinates: ["Перец", "Баклажаны", "Огурцы", "Помидоры", "Клубника"],
      kitIncludes: [] // Add specific items later if needed
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Наши Шмели</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bumblebeeColonies.map((colony) => (
          <div key={colony.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            {colony.image && (
              <Image
                src={colony.image}
                alt={colony.name}
                width={300}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
            )}
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-center">{colony.name}</h2>
            <p className="text-gray-700 mb-4 text-center text-sm">{colony.description}</p>

            {colony.advantages.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Преимущества:</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  {colony.advantages.map((advantage, index) => (
                    <li key={index}><strong>{advantage.title}:</strong> {advantage.description}</li>
                  ))}
                </ul>
              </>
            )}

            {colony.pollinates.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Опыляют:</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4 columns-2">
                  {colony.pollinates.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {colony.kitIncludes.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Комплектация улья:</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  {colony.kitIncludes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="text-center mt-auto w-full">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                Узнать цену
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 