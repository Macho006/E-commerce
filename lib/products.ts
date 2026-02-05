import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Product } from "@/types/product";

export const products: Product[] = [
  // Phones
  {
    id: uuidv4(),
    brand: "Apple",
    title: "iPhone 17 Pro Max",
    slug: "iphone-17-promax",
    category: "Смартфоны",
    rating: {
      expert_score: 4.9,
      user_score: 4.7,
      reviews_count: 1205,
    },
    image: "/17promax-org.png",
    imagesByColor: {
      "#e7e7e7": [
        "/iphone-17-pro-sil.png",
        "/iphone-17-pro-sil1.png",
        "/iphone-17-pro-sil2.png",
      ],
      "#f67e37": [
        "/17promax-org.png",
        "/17promax1-org.png",
        "/17promax2-org.png",
      ],
      "#47527c": [
        "/iphone-17-pro-blu.png",
        "/iphone-17-pro-blu1.png",
        "/iphone-17-pro-blu2.png",
      ],
    },
    attributes: [
      { title: "Дизайн", value: 4 },
      { title: "Батарея", value: 2 },
      { title: "Дисплей", value: 3 },
      { title: "Камера", value: 5 },
      { title: "Ответ", value: 5 },
      { title: "Портативность", value: 5 },
    ],
    price: 184_990,
    colors: ["#e7e7e7", "#f67e37", "#47527c"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ", "2 ТБ"],
    specifications: {
      camera: "48 MPx (Triple System + Tetraprism)",
      os: "iOS",
      display_diagonal: '6.9"',
      charging: "Беспроводная",
    },

    detailed_specs: {
      factory: [
        { label: "Тип", value: "смартфон" },
        { label: "Модель", value: "iPhone 17 Pro Max" },
        { label: "Год релиза", value: "2025" },
      ],
      screen: [
        { label: "Диагональ", value: '6.9"' },
        { label: "Разрешение экрана", value: "2796×1290" },
        { label: "Плотность пикселей", value: "460 ppi" },
        { label: "Технология", value: "OLED (Super Retina XDR)" },
        { label: "Цвета", value: "1 млрд" },
        {
          label: "Особенности",
          value: "Dynamic Island, Always-On display, ProMotion 120Hz",
        },
      ],
      camera: [
        { label: "Разрешение камеры", value: "48 Мп" },
        { label: "Система", value: "Pro Camera System" },
      ],
    },
    description:
      "Инновационный дизайн iPhone 17 Pro обеспечивает исключительную прочность, рекордное время автономной работы и раскрывает невероятную мощь чипа A19 Pro. Система камер Pro Fusion с разрешением 48 Мп имеет самый длинный телеобъектив iPhone с 8-кратным оптическим зумом, а также новую фронтальную камеру Center Stage для более качественных групповых селфи и видеосъемки Dual Capture. Передняя панель покрыта защитным покрытием Ceramic Shield 2, обеспечивающим в 3 раза лучшую защиту от царапин, задняя панель – в 4 раза более устойчивой к трещинам, а цельнометаллический корпус из кованого алюминия эффективно рассеивает тепло. Встроенные инструменты Apple Intelligence, такие как Clean Up и другие, также доступны.",
    discount: 13,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Восхитительный мобильный",
        description:
          "Я перешел с Samsung через 7 лет без iPhone, так что это странно и возвращаюсь, однако я еще не был разочарован, единственное, чего мне может не хватать, это лучшей камеры, но этого достаточно, вам нужно все выяснить еще раз, но, очевидно, рекомендация отсюда.",
        image: "https://i.pravatar.cc/150?u=1",
        timestamp: "12.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Jerome Bell" },
      },
      {
        id: uuidv4(),
        title: "Просто работает",
        description:
          "Этот телефон просто работает. Моментальный отклик на любое действие. Все механизмы отлажены. В совокупности с остальными девайсами от apple образует органичную инфраструктуру, которой легко и просто пользоваться.",
        image: "https://i.pravatar.cc/150?u=2",
        timestamp: "13.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Eleanor Pena" },
      },
      {
        id: uuidv4(),
        title: "Производительность на высоте",
        description:
          "Самое заметное это производительность, прям новый уровень в быстродействии, в повседневных задачах просто летает, отличные камеры, но сильно выпирают из корпуса. Экран смотрится отлично, единственное что беспокоит сколько проживет OLED матрица.",
        image: "https://i.pravatar.cc/150?u=3",
        timestamp: "14.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Guy Hawkins" },
      },
      {
        id: uuidv4(),
        title: "Камера выше всяких похвал",
        description:
          "По камере могу сказать что после 11 айфона особой разницы днем в хороших условиях не видно, а ночью... (+зум и супер стаб).",
        image: "https://i.pravatar.cc/150?u=4",
        timestamp: "15.10.23",
        stars: 4,
        user: { id: uuidv4(), name: "Bessie Cooper" },
      },
      {
        id: uuidv4(),
        title: "Немного разочарован аккумулятором",
        description:
          "Ужасный аккумулятор, держит только 24 часа, иногда даже меньше. При этом Bluetooth hi-fi отключены. Навигатором вообще не пользуюсь, видео не смотрю. В общем ужас!!!",
        image: "https://i.pravatar.cc/150?u=5",
        timestamp: "16.10.23",
        stars: 3,
        user: { id: uuidv4(), name: "Robert Fox" },
      },
      {
        id: uuidv4(),
        title: "Лучший экран",
        description:
          "Экран просто поражает воображение. Цвета сочные, яркости хватает даже под прямым солнцем. 120 Гц делают работу с интерфейсом невероятно плавной.",
        image: "https://i.pravatar.cc/150?u=6",
        timestamp: "17.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Jacob Jones" },
      },
      {
        id: uuidv4(),
        title: "Премиальные материалы",
        description:
          "Титан ощущается очень круто. Телефон стал легче, но при этом чувствуется его надежность. Цвет 'Natural Titanium' просто бомба.",
        image: "https://i.pravatar.cc/150?u=7",
        timestamp: "18.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Kristin Watson" },
      },
      {
        id: uuidv4(),
        title: "Дорого, но оно того стоит",
        description:
          "Цена конечно кусается, но за такой уровень технологий денег не жалко. Экосистема Apple работает безупречно.",
        image: "https://i.pravatar.cc/150?u=8",
        timestamp: "19.10.23",
        stars: 4,
        user: { id: uuidv4(), name: "Cody Fisher" },
      },
      {
        id: uuidv4(),
        title: "iOS как всегда на высоте",
        description:
          "Система работает идеально. Никаких лагов, все интуитивно понятно. Новые ИИ фишки реально помогают в повседневной жизни.",
        image: "https://i.pravatar.cc/150?u=9",
        timestamp: "20.10.23",
        stars: 5,
        user: { id: uuidv4(), name: "Jane Cooper" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "ZTE Nubia",
    title: "REDMAGIC 11 Pro",
    slug: "redmagic-11-pro",
    category: "Смартфоны",
    rating: {
      expert_score: 4.8,
      user_score: 4.7,
      reviews_count: 1334,
    },
    image: "/redm.png",
    imagesByColor: {
      "#000000": ["/redmb.png", "/redmb1.png"],
      "#e5e5e5": ["/redm.png", "/redm1.png"],
    },
    attributes: [
      { title: "Производительность", value: 5 },
      { title: "Охлаждение", value: 5 },
      { title: "Дисплей", value: 5 },
      { title: "Батарея", value: 4 },
    ],
    price: 139_990,
    colors: ["#000000", "#e5e5e5"],
    storage_options: ["512 ГБ", "1 ТБ"],
    specifications: {
      camera: "50 MPx",
      os: "Android 15",
      display_diagonal: '6.9"',
      charging: "Быстрая 120W",
    },
    detailed_specs: {
      factory: [
        { label: "Процессор", value: "Snapdragon 8 Gen 4" },
        { label: "Охлаждение", value: "ICE 14.0 (Active Fan)" },
      ],
      screen: [
        { label: "Тип", value: "AMOLED" },
        { label: "Частота", value: "165 Гц" },
      ],
      camera: [{ label: "Основная камера", value: "50 Мп" }],
    },
    description:
      "REDMAGIC 11 Pro — ультимативный игровой смартфон с активным охлаждением.",
    discount: 15,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Игровой зверь",
        description:
          "Тянет любые игры на максималках. Кулер реально помогает, телефон почти не греется даже после часа в Genshin Impact.",
        image: "https://i.pravatar.cc/150?u=10",
        timestamp: "05.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Alex Fox" },
      },
      {
        id: uuidv4(),
        title: "Экран без вырезов – это кайф",
        description:
          "Подэкранная камера стала почти невидимой. Смотреть контент и играть одно удовольствие. Экран 165 Гц поражает скоростью.",
        image: "https://i.pravatar.cc/150?u=11",
        timestamp: "06.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Dmitry Sokolov" },
      },
      {
        id: uuidv4(),
        title: "Дизайн из будущего",
        description:
          "Выглядит очень эффектно. Подсветка кулера и прозрачные элементы корпуса привлекают внимание. Сборка очень качественная.",
        image: "https://i.pravatar.cc/150?u=12",
        timestamp: "07.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Igor Kozlov" },
      },
      {
        id: uuidv4(),
        title: "Батарея держит долго",
        description:
          "6500 мАч – это серьезно. Хватает на целый день активного гейминга. Зарядка 120 Вт просто молниеносная.",
        image: "https://i.pravatar.cc/150?u=13",
        timestamp: "08.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Oleg Petrov" },
      },
      {
        id: uuidv4(),
        title: "Камера средняя",
        description:
          "Для игрового телефона норм, но до айфона или пикселя далеко. Днем снимает хорошо, ночью шумит.",
        image: "https://i.pravatar.cc/150?u=14",
        timestamp: "09.11.23",
        stars: 4,
        user: { id: uuidv4(), name: "Marina Ivanova" },
      },
      {
        id: uuidv4(),
        title: "Звук просто пушка",
        description:
          "Стереодинамики очень громкие и объемные. В играх можно ориентироваться по звуку без наушников.",
        image: "https://i.pravatar.cc/150?u=15",
        timestamp: "10.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Sergey Volkov" },
      },
      {
        id: uuidv4(),
        title: "Тяжеловат",
        description:
          "Телефон реально крупный и тяжелый. Одной рукой пользоваться сложно, но для игр это скорее плюс.",
        image: "https://i.pravatar.cc/150?u=16",
        timestamp: "11.11.23",
        stars: 4,
        user: { id: uuidv4(), name: "Andrey Sidorov" },
      },
      {
        id: uuidv4(),
        title: "Софт на любителя",
        description:
          "Оболочка RedMagic OS специфическая, много геймерских настроек, но иногда встречаются странные переводы.",
        image: "https://i.pravatar.cc/150?u=17",
        timestamp: "12.11.23",
        stars: 4,
        user: { id: uuidv4(), name: "Elena Pavlova" },
      },
      {
        id: uuidv4(),
        title: "Лучший за свои деньги из игровых",
        description:
          "Если вам нужен телефон именно для игр, то это лучший вариант на рынке. Аналоги стоят намного дороже.",
        image: "https://i.pravatar.cc/150?u=18",
        timestamp: "13.11.23",
        stars: 5,
        user: { id: uuidv4(), name: "Maxim Kozlov" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "Google",
    title: "Google Pixel 10 Pro",
    slug: "google-pixel-10-pro",
    category: "Смартфоны",
    rating: {
      expert_score: 4.7,
      user_score: 4.5,
      reviews_count: 986,
    },
    image: "/pixel10pg.png",
    imagesByColor: {
      "#f1f1f1": [
        "/pixel10pg.png",
        "/pixel10pg1.png",
        "/pixel10pg2.png",
        "/pixel10pg3.png",
      ],
      "#1f1f1f": [
        "/pixel10pbg.png",
        "/pixel10pbg1.png",
        "/pixel10pbg2.png",
        "/pixel10pbg3.png",
      ],
      "#4f6ef7": [
        "/pixel10pb.png",
        "/pixel10pb1.png",
        "/pixel10pb2.png",
        "/pixel10pb3.png",
      ],
    },
    attributes: [
      { title: "Дизайн", value: 4 },
      { title: "Батарея", value: 4 },
      { title: "Дисплей", value: 5 },
      { title: "Камера", value: 5 },
      { title: "Производительность", value: 4 },
      { title: "ИИ", value: 5 },
    ],
    price: 149_990,
    colors: ["#f1f1f1", "#1f1f1f", "#4f6ef7"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ"],
    specifications: {
      camera: "50 MPx (AI Triple Camera)",
      os: "Android 15",
      display_diagonal: '6.8"',
      charging: "Беспроводная",
    },
    detailed_specs: {
      factory: [
        { label: "Тип", value: "Смартфон" },
        { label: "Процессор", value: "Google Tensor G5" },
        { label: "Год релиза", value: "2025" },
      ],
      screen: [
        { label: "Диагональ", value: '6.8"' },
        { label: "Разрешение", value: "3120×1440" },
        { label: "Технология", value: "LTPO OLED" },
        { label: "Частота", value: "1–120 Гц" },
      ],
      camera: [
        { label: "Основная", value: "50 Мп" },
        { label: "Широкоугольная", value: "48 Мп" },
        { label: "Телефото", value: "48 Мп (5×)" },
      ],
    },
    description:
      "Google Pixel 10 Pro — флагман с упором на ИИ, фотографию и чистый Android.",
    discount: 8,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Лучшая камера в мире ИИ",
        description:
          "Алгоритмы Google творят чудеса. Фотографии получаются идеальными в любых условиях. Функция Magic Editor просто невероятна.",
        image: "https://i.pravatar.cc/150?u=19",
        timestamp: "20.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Dmitry Morozov" },
      },
      {
        id: uuidv4(),
        title: "Чистый Android – это блаженство",
        description:
          "Никакого лишнего софта, все работает плавно и быстро. Обновления приходят первыми. ИИ-фишки реально полезны в жизни.",
        image: "https://i.pravatar.cc/150?u=20",
        timestamp: "21.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Artem Popov" },
      },
      {
        id: uuidv4(),
        title: "Экран Super Actua великолепен",
        description:
          "Яркость запредельная, на солнце все видно идеально. Цветопередача очень точная. Глаза не устают.",
        image: "https://i.pravatar.cc/150?u=21",
        timestamp: "22.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Svetlana Sokolova" },
      },
      {
        id: uuidv4(),
        title: "Дизайн на любителя",
        description:
          "Вид камеры сзади специфический, но мне нравится. Материалы корпуса очень приятные на ощупь.",
        image: "https://i.pravatar.cc/150?u=22",
        timestamp: "23.12.23",
        stars: 4,
        user: { id: uuidv4(), name: "Kirill Vasiliev" },
      },
      {
        id: uuidv4(),
        title: "Автономность могла быть лучше",
        description:
          "Живет уверенно день, но до рекордов далеко. Зарядка не самая быстрая по современным меркам.",
        image: "https://i.pravatar.cc/150?u=23",
        timestamp: "24.12.23",
        stars: 4,
        user: { id: uuidv4(), name: "Olga Romanova" },
      },
      {
        id: uuidv4(),
        title: "Процессор Tensor G5 стал лучше",
        description:
          "Телефон почти не греется, все тяжелые приложения летают. Google хорошо поработала над оптимизацией.",
        image: "https://i.pravatar.cc/150?u=24",
        timestamp: "25.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Nikita Orlov" },
      },
      {
        id: uuidv4(),
        title: "Связь держит отлично",
        description:
          "Там где старый пиксель терял сеть, этот ловит уверенно. Модем наконец-то довели до ума.",
        image: "https://i.pravatar.cc/150?u=25",
        timestamp: "26.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Yulia Belyakova" },
      },
      {
        id: uuidv4(),
        title: "Звук динамиков на уровне",
        description:
          "Громко, чисто, есть даже намеки на бас. Для просмотра YouTube и сериалов в самый раз.",
        image: "https://i.pravatar.cc/150?u=26",
        timestamp: "27.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Roman Kulikov" },
      },
      {
        id: uuidv4(),
        title: "Лучший смартфон для работы",
        description:
          "Интеграция с сервисами Google бесшовная. Поиск по экрану, перевод в реальном времени – незаменимые вещи.",
        image: "https://i.pravatar.cc/150?u=27",
        timestamp: "28.12.23",
        stars: 5,
        user: { id: uuidv4(), name: "Pavel Fedorov" },
      },
    ],
  },
  // Tablets
  {
    id: uuidv4(),
    brand: "Huawei",
    title: "MatePad Pro 13.2",
    slug: "huawei-matepad-pro-13-2",
    category: "Планшеты",
    rating: {
      expert_score: 4.6,
      user_score: 4.4,
      reviews_count: 512,
    },
    image: "/matepad13-g.png",
    imagesByColor: {
      "#eee8c3": ["/matepad13-g.png", "/matepad13-g1.png", "/matepad13-g2.png"],
      "#2c2c2c": ["/matepad13-b.png", "/matepad13-b1.png", "/matepad13-b2.png"],
    },
    attributes: [
      { title: "Дисплей", value: 5 },
      { title: "Производительность", value: 4 },
      { title: "Батарея", value: 4 },
      { title: "Дизайн", value: 5 },
    ],
    price: 189_990,
    colors: ["#eee8c3", "#2c2c2c"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ"],
    specifications: {
      camera: "13 MPx",
      os: "HarmonyOS",
      display_diagonal: '13.2"',
      charging: "USB-C",
    },
    detailed_specs: {
      factory: [
        { label: "Тип", value: "Планшет" },
        { label: "Процессор", value: "Kirin 9000S" },
      ],
      screen: [
        { label: "Разрешение", value: "2880×1920" },
        { label: "Технология", value: "OLED" },
        { label: "Частота", value: "144 Гц" },
      ],
      camera: [
        { label: "Основная камера", value: "13 Мп" },
        { label: "Фронтальная", value: "16 Мп" },
      ],
    },
    description:
      "MatePad Pro 13.2 — мощный планшет с OLED-дисплеем и экосистемой Huawei.",
    discount: 12,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Лучший экран среди планшетов",
        description:
          "OLED панель от Huawei просто шикарна. Цвета сочные, черный цвет настоящий. Частота 144 Гц делает все очень плавным.",
        image: "https://i.pravatar.cc/150?u=28",
        timestamp: "10.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Ivan Smirnov" },
      },
      {
        id: uuidv4(),
        title: "Тонкий и легкий",
        description:
          "Удивительно, как в такой тонкий корпус вместили столько мощи. Вес почти не чувствуется, руки не устают.",
        image: "https://i.pravatar.cc/150?u=29",
        timestamp: "11.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Denis Petrov" },
      },
      {
        id: uuidv4(),
        title: "HarmonyOS стала удобнее",
        description:
          "Интерфейс очень отзывчивый. Многозадачность реализована отлично, можно комфортно работать с несколькими окнами.",
        image: "https://i.pravatar.cc/150?u=30",
        timestamp: "12.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Ekaterina Ivanova" },
      },
      {
        id: uuidv4(),
        title: "Зарядка пушка",
        description:
          "Заряжается очень быстро для планшета. Буквально за 40 минут почти полный заряд. Это очень экономит время.",
        image: "https://i.pravatar.cc/150?u=31",
        timestamp: "13.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Mikhail Kozlov" },
      },
      {
        id: uuidv4(),
        title: "Звук поражает",
        description:
          "6 динамиков выдают очень качественный звук. Смотреть фильмы – одно удовольствие, даже не нужны колонки.",
        image: "https://i.pravatar.cc/150?u=32",
        timestamp: "14.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Alexey Volkov" },
      },
      {
        id: uuidv4(),
        title: "Нет сервисов Google",
        description:
          "Это главный минус, но почти все можно поставить через AppGallery или GBox. Если вы готовы к этому, то планшет топ.",
        image: "https://i.pravatar.cc/150?u=33",
        timestamp: "15.01.24",
        stars: 4,
        user: { id: uuidv4(), name: "Natalia Pavlova" },
      },
      {
        id: uuidv4(),
        title: "Стилус M-Pencil работает идеально",
        description:
          "Для рисования и заметок просто супер. Задержка минимальная, чувствительность к нажатию очень точная.",
        image: "https://i.pravatar.cc/150?u=34",
        timestamp: "16.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Viktor Sidorov" },
      },
      {
        id: uuidv4(),
        title: "Хорошая фронталка",
        description:
          "Для видеозвонков подходит отлично. Лицо всегда в центре внимания, качество картинки четкое.",
        image: "https://i.pravatar.cc/150?u=35",
        timestamp: "17.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Svetlana Morozova" },
      },
      {
        id: uuidv4(),
        title: "Премиальный вид",
        description:
          "Материалы корпуса очень дорогие, сборка идеальная. Выглядит как настоящий флагман.",
        image: "https://i.pravatar.cc/150?u=36",
        timestamp: "18.01.24",
        stars: 5,
        user: { id: uuidv4(), name: "Konstantin Lebedev" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "Samsung",
    title: "Galaxy Tab S11 Ultra 5G",
    slug: "samsung-tab-s11-ultra-5g",
    category: "Планшеты",
    rating: {
      expert_score: 4.8,
      user_score: 4.6,
      reviews_count: 764,
    },
    image: "/tabs11.jpg",
    imagesByColor: {
      "#2f2f2f": ["/tabs111.jpg", "/tabs11.jpg"],
      "#dcdcdc": ["/tabs11s.jpg", "/tabs11s1.jpg"],
    },
    attributes: [
      { title: "Дисплей", value: 5 },
      { title: "Производительность", value: 5 },
      { title: "Батарея", value: 4 },
      { title: "Мультимедиа", value: 5 },
    ],
    price: 209_990,
    colors: ["#2f2f2f", "#dcdcdc"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ"],
    specifications: {
      camera: "13 MPx",
      os: "Android 15 (One UI)",
      display_diagonal: '14.6"',
      charging: "USB-C 45W",
    },
    detailed_specs: {
      factory: [
        { label: "Процессор", value: "Snapdragon 8 Gen 4 for Galaxy" },
        { label: "Связь", value: "5G / Wi-Fi 7" },
      ],
      screen: [
        { label: "Тип", value: "Dynamic AMOLED 2X" },
        { label: "Частота", value: "120 Гц" },
      ],
      camera: [
        { label: "Основная камера", value: "13 Мп" },
        { label: "Фронтальная", value: "12 Мп Ultra Wide" },
      ],
    },
    description:
      "Galaxy Tab S11 Ultra — флагманский планшет Samsung с огромным AMOLED-экраном и 5G.",
    discount: 10,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Замена ноутбуку",
        description:
          "С режимом DeX этот планшет реально заменяет ноут в поездках. Экран 14.6 дюймов позволяет комфортно работать с таблицами.",
        image: "https://i.pravatar.cc/150?u=37",
        timestamp: "05.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Oleg Titov" },
      },
      {
        id: uuidv4(),
        title: "Яркость и контраст на высоте",
        description:
          "Dynamic AMOLED 2X — это лучшее, что есть на рынке. Цвета просто сбивают с ног. Смотреть HDR контент – оргазм для глаз.",
        image: "https://i.pravatar.cc/150?u=38",
        timestamp: "06.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Elena Petrova" },
      },
      {
        id: uuidv4(),
        title: "SPen в комплекте",
        description:
          "Приятно, что не нужно докупать отдельно. Работает плавно, много полезных фишек для заметок и управления жестами.",
        image: "https://i.pravatar.cc/150?u=39",
        timestamp: "07.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Andrey Ivanov" },
      },
      {
        id: uuidv4(),
        title: "Мощный процессор",
        description:
          "Snapdragon 8 Gen 4 тянет все. Планшет не тормозит даже при запуске нескольких тяжелых приложений одновременно.",
        image: "https://i.pravatar.cc/150?u=40",
        timestamp: "08.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Maria Sokolova" },
      },
      {
        id: uuidv4(),
        title: "Очень большой",
        description:
          "В метро или самолете пользоваться сложновато из-за размеров. Но для дома и офиса – идеально.",
        image: "https://i.pravatar.cc/150?u=41",
        timestamp: "09.02.24",
        stars: 4,
        user: { id: uuidv4(), name: "Dmitry Orlov" },
      },
      {
        id: uuidv4(),
        title: "Автономность радует",
        description:
          "Несмотря на огромный экран, заряда хватает на 10-12 часов активного использования. Быстрая зарядка 45 Вт спасает.",
        image: "https://i.pravatar.cc/150?u=42",
        timestamp: "10.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Anna Smirnova" },
      },
      {
        id: uuidv4(),
        title: "Камеры лучшие в планшетах",
        description:
          "Фронталка с широким углом идеальна для конференций. Задняя камера тоже снимает вполне достойно.",
        image: "https://i.pravatar.cc/150?u=43",
        timestamp: "11.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Sergey Kozlov" },
      },
      {
        id: uuidv4(),
        title: "Звук великолепный",
        description:
          "Четыре динамика от AKG выдают очень объемный звук с хорошими низкими частотами.",
        image: "https://i.pravatar.cc/150?u=44",
        timestamp: "12.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Vera Dmitrieva" },
      },
      {
        id: uuidv4(),
        title: "Дорого, но оправдано",
        description:
          "Если нужен ультимативный планшет на Android, то альтернатив просто нет. Своих денег стоит на 100%.",
        image: "https://i.pravatar.cc/150?u=45",
        timestamp: "13.02.24",
        stars: 5,
        user: { id: uuidv4(), name: "Anton Volkov" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "Apple",
    title: "iPad Pro 12.9 M4",
    slug: "ipad-pro-12-9-m4",
    category: "Планшеты",
    rating: {
      expert_score: 4.8,
      user_score: 4.6,
      reviews_count: 842,
    },
    image: "/ipad-s.jpg",
    imagesByColor: {
      "#e5e5e5": ["/ipad-s.jpg", "/ipad-s1.jpg", "/ipad-s2.jpg"],
      "#2b2b2b": ["/ipad-ss.jpg", "/ipad-s1s.jpg", "/ipad-s2s.jpg"],
    },
    attributes: [
      { title: "Дизайн", value: 5 },
      { title: "Батарея", value: 4 },
      { title: "Дисплей", value: 5 },
      { title: "Производительность", value: 5 },
      { title: "Камера", value: 4 },
      { title: "Портативность", value: 4 },
    ],
    price: 219_990,
    colors: ["#e5e5e5", "#2b2b2b"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ", "2 ТБ"],
    specifications: {
      camera: "12 MPx (Wide)",
      os: "iPadOS",
      display_diagonal: '12.9"',
      charging: "USB-C (Thunderbolt)",
    },

    detailed_specs: {
      factory: [
        { label: "Тип", value: "Планшет" },
        { label: "Модель", value: "iPad Pro 12.9 M4" },
        { label: "Год релиза", value: "2025" },
        { label: "Процессор", value: "Apple M4" },
      ],
      screen: [
        { label: "Диагональ", value: '12.9"' },
        { label: "Разрешение экрана", value: "2732×2048" },
        { label: "Плотность пикселей", value: "264 ppi" },
        { label: "Технология", value: "Ultra Retina XDR (OLED)" },
        { label: "Частота обновления", value: "ProMotion 120Hz" },
        {
          label: "Особенности",
          value: "Mini-LED, True Tone, HDR, 1600 нит (пик)",
        },
      ],
      camera: [
        { label: "Основная камера", value: "12 Мп" },
        {
          label: "Фронтальная камера",
          value: "12 Мп Ultra Wide (Center Stage)",
        },
        { label: "Видео", value: "4K до 60 fps" },
      ],
    },
    description:
      "iPad Pro 12.9 с чипом M4 — ультимативный планшет для профессионалов, творчества и работы.",
    discount: 10,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Магия M4",
        description:
          "Чип M4 – это что-то невероятное. Планшет быстрее моего старого макбука. Монтаж 4K видео в Lumafusion идет без единого лага.",
        image: "https://i.pravatar.cc/150?u=46",
        timestamp: "18.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Pavel Morozov" },
      },
      {
        id: uuidv4(),
        title: "Экран Tandem OLED – чудо",
        description:
          "Черный цвет как в космосе. Глубина картинки поразительная. Яркость в 1600 нит позволяет работать на пляже.",
        image: "https://i.pravatar.cc/150?u=47",
        timestamp: "19.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Julia Petrova" },
      },
      {
        id: uuidv4(),
        title: "Невероятно тонкий",
        description:
          "Он реально тоньше чем iPod Nano был когда-то. Держать в руках одно удовольствие, но страшно согнуть.",
        image: "https://i.pravatar.cc/150?u=48",
        timestamp: "20.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Artem Sidorov" },
      },
      {
        id: uuidv4(),
        title: "iPadOS все еще ограничена",
        description:
          "Железо от суперкомпьютера, а система от телефона. Apple, дайте нам уже macOS lite на этот девайс!",
        image: "https://i.pravatar.cc/150?u=49",
        timestamp: "21.03.24",
        stars: 4,
        user: { id: uuidv4(), name: "Oleg Kulikov" },
      },
      {
        id: uuidv4(),
        title: "Камеры для профи",
        description:
          "Фронталка теперь на длинной стороне – наконец-то! Качество видеозвонков идеальное. LiDAR помогает в работе.",
        image: "https://i.pravatar.cc/150?u=50",
        timestamp: "22.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Irina Voronova" },
      },
      {
        id: uuidv4(),
        title: "Дорогие аксессуары",
        description:
          "Сам планшет дорогой, а клавиатура и стилус стоят как бюджетный ноутбук. Это нужно учитывать при покупке.",
        image: "https://i.pravatar.cc/150?u=51",
        timestamp: "23.03.24",
        stars: 4,
        user: { id: uuidv4(), name: "Maxim Fedorov" },
      },
      {
        id: uuidv4(),
        title: "Звук как из колонок",
        description:
          "Четыре динамика выдают очень чистый и громкий звук. Басы реально чувствуются корпусом.",
        image: "https://i.pravatar.cc/150?u=52",
        timestamp: "24.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Natalia Belova" },
      },
      {
        id: uuidv4(),
        title: "Автономность стабильна",
        description:
          "Держит стандартные 10 часов. Хотелось бы больше, но с такой тонкостью это и так подвиг инженерии.",
        image: "https://i.pravatar.cc/150?u=53",
        timestamp: "25.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Kirill Romanov" },
      },
      {
        id: uuidv4(),
        title: "Лучший инструмент для художника",
        description:
          "С Pencil Pro открылись новые возможности. Жест сжатия и вращение кисти – это очень удобно.",
        image: "https://i.pravatar.cc/150?u=54",
        timestamp: "26.03.24",
        stars: 5,
        user: { id: uuidv4(), name: "Elena Lebedeva" },
      },
    ],
  },
  // Laptops
  {
    id: uuidv4(),
    brand: "ASUS",
    title: "ASUS ExpertBook P3 G2",
    slug: "asus-expertbook-p3-g2",
    category: "Ноутбуки",
    rating: {
      expert_score: 4.5,
      user_score: 4.4,
      reviews_count: 318,
    },
    image: "/asus-expertbook-p3-g2-silver.webp",
    imagesByColor: {
      "#cfcfcf": [
        "/asus-expertbook-p3-g2-silver.webp",
        "/asus-expertbook-p3-g2-silver1.webp",
        "/asus-expertbook-p3-g2-silver2.webp",
      ],
    },
    attributes: [
      { title: "Производительность", value: 4 },
      { title: "Надежность", value: 5 },
      { title: "Портативность", value: 5 },
      { title: "Автономность", value: 4 },
      { title: "Клавиатура", value: 4 },
    ],
    price: 129_990,
    colors: ["#cfcfcf"],
    storage_options: ["512 ГБ", "1 ТБ"],
    specifications: {
      camera: "1080p IR",
      os: "Windows 11 Pro",
      display_diagonal: '14"',
      charging: "USB-C",
    },

    detailed_specs: {
      factory: [
        { label: "Тип", value: "Ноутбук" },
        { label: "Серия", value: "ExpertBook P" },
        { label: "Год релиза", value: "2025" },
        { label: "Процессор", value: "Intel Core Ultra 7" },
      ],
      screen: [
        { label: "Диагональ", value: '14"' },
        { label: "Разрешение", value: "1920×1200" },
        { label: "Матрица", value: "IPS" },
        { label: "Соотношение сторон", value: "16:10" },
        { label: "Яркость", value: "400 нит" },
      ],
      camera: [
        { label: "Веб-камера", value: "Full HD + IR" },
        { label: "Безопасность", value: "Windows Hello, TPM 2.0" },
      ],
    },
    description:
      "ASUS ExpertBook P3 G2 — корпоративный ноутбук с повышенной надежностью, легким корпусом и длительной автономностью.",
    discount: 9,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Рабочая лошадка",
        description:
          "Ноутбук идеально подходит для работы. Легкий, прочный, клавиатура очень удобная для долгой печати. Батарею держит весь рабочий день.",
        image: "https://i.pravatar.cc/150?u=55",
        timestamp: "10.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Andrey Nikitin" },
      },
      {
        id: uuidv4(),
        title: "Надежность превыше всего",
        description:
          "Беру его во все командировки. Корпус по военному стандарту внушает доверие. Портов хватает для любого случая.",
        image: "https://i.pravatar.cc/150?u=56",
        timestamp: "11.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Igor Stepanov" },
      },
      {
        id: uuidv4(),
        title: "Хороший экран для работы",
        description:
          "Матовое покрытие спасает от бликов. Соотношение 16:10 очень удобно для работы с документами и почтой.",
        image: "https://i.pravatar.cc/150?u=57",
        timestamp: "12.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Olga Vasilyeva" },
      },
      {
        id: uuidv4(),
        title: "Тихий и холодный",
        description:
          "Даже при нагрузке вентиляторы почти не слышно. Корпус остается прохладным под руками.",
        image: "https://i.pravatar.cc/150?u=58",
        timestamp: "13.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Dmitry Popov" },
      },
      {
        id: uuidv4(),
        title: "Звук так себе",
        description:
          "Динамики тихие и плоские. Для конференций норм, но для музыки лучше использовать наушники.",
        image: "https://i.pravatar.cc/150?u=59",
        timestamp: "14.04.24",
        stars: 3,
        user: { id: uuidv4(), name: "Svetlana Sokolova" },
      },
      {
        id: uuidv4(),
        title: "Тачпад отличный",
        description:
          "Большой, отзывчивый, жесты Windows работают безупречно. Мышка почти не нужна.",
        image: "https://i.pravatar.cc/150?u=60",
        timestamp: "15.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Yuri Orlov" },
      },
      {
        id: uuidv4(),
        title: "Безопасность радует",
        description:
          "Шторка на камере, сканер отпечатка и ИК-камера для Windows Hello – чувствую себя защищенным.",
        image: "https://i.pravatar.cc/150?u=61",
        timestamp: "16.04.24",
        stars: 5,
        user: { id: uuidv4(), name: "Konstantin Ivanov" },
      },
      {
        id: uuidv4(),
        title: "Внешний вид строгий",
        description:
          "Ничего лишнего, минималистичный дизайн. Выглядит профессионально в любой бизнес-обстановке.",
        image: "https://i.pravatar.cc/150?u=62",
        timestamp: "17.04.24",
        stars: 4,
        user: { id: uuidv4(), name: "Mikhail Sergeyev" },
      },
      {
        id: uuidv4(),
        title: "Дороговато",
        description:
          "За эти деньги можно найти мощнее, но тут упор на надежность и поддержку, что для бизнеса важнее.",
        image: "https://i.pravatar.cc/150?u=63",
        timestamp: "18.04.24",
        stars: 4,
        user: { id: uuidv4(), name: "Roman Kuzmin" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "Apple",
    title: "MacBook Pro 16",
    slug: "macbook-pro-16-2025",
    category: "Ноутбуки",
    rating: {
      expert_score: 4.9,
      user_score: 4.7,
      reviews_count: 1205,
    },
    image: "/macbook-pro-16-2025s1.webp",
    imagesByColor: {
      "#2b292b": [
        "/macbook-pro-16-2025s.webp",
        "/macbook-pro-16-2025s1.webp",
        "/macbook-pro-16-2025s2.webp",
        "/macbook-pro-16-2025s3.webp",
      ],
      "#e2e4e6": [
        "/macbook-pro-16-2025.webp",
        "/macbook-pro-16-20251.webp",
        "/macbook-pro-16-20252.webp",
        "/macbook-pro-16-20253.webp",
      ],
    },
    attributes: [
      { title: "Дизайн", value: 4 },
      { title: "Батарея", value: 5 },
    ],
    price: 270_990,
    colors: ["#2b292b", "#e2e4e6"],
    storage_options: ["512 ГБ", "1 ТБ", "2 ТБ", "4 ТБ"],
    specifications: {
      camera: "12 MPx Center Stage",
      os: "macOS",
      display_diagonal: '16.2"',
      charging: "MagSafe 3",
    },

    detailed_specs: {
      factory: [
        { label: "Тип", value: "Ноутбук" },
        { label: "Процессор", value: "Apple M4 Max" },
      ],
      screen: [
        { label: "Тип матрицы", value: "Liquid Retina XDR" },
        { label: "Яркость", value: "1600 нит (пиковая)" },
      ],
    },

    description: "Новый MacBook Pro 16 с чипом M4...",
    discount: 13,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Монстр производительности",
        description:
          "M4 Max – это просто за гранью. Рендеринг видео в 8K проходит так быстро, что я не успеваю заварить кофе. Лучшая покупка для видеографа.",
        image: "https://i.pravatar.cc/150?u=64",
        timestamp: "15.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Alexander Volkov" },
      },
      {
        id: uuidv4(),
        title: "Экран – шедевр",
        description:
          "Liquid Retina XDR выдает такую картинку, что глаза отдыхают. Черный цвет идеальный, детали в тенях видны как никогда.",
        image: "https://i.pravatar.cc/150?u=65",
        timestamp: "16.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Victoria Kotova" },
      },
      {
        id: uuidv4(),
        title: "Батарейка бесконечная",
        description:
          "Работаю целый день без зарядки при средней нагрузке. Apple сотворила чудо с энергопотреблением этих чипов.",
        image: "https://i.pravatar.cc/150?u=66",
        timestamp: "17.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Dmitry Fedorov" },
      },
      {
        id: uuidv4(),
        title: "Греется при рендере",
        description:
          "Под максимальной нагрузкой кулеры слышно, и корпус становится теплым. Но это ожидаемо при такой мощи.",
        image: "https://i.pravatar.cc/150?u=67",
        timestamp: "18.05.24",
        stars: 4,
        user: { id: uuidv4(), name: "Sergey Orlov" },
      },
      {
        id: uuidv4(),
        title: "Клавиатура и тачпад – эталон",
        description:
          "Печатать – одно удовольствие. Тачпад лучший в мире, жесты macOS делают работу невероятно быстрой.",
        image: "https://i.pravatar.cc/150?u=68",
        timestamp: "19.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Elena Romanova" },
      },
      {
        id: uuidv4(),
        title: "Тяжелый",
        description:
          "Версия на 16 дюймов довольно массивная. В рюкзаке ощущается, но для замены десктопа это идеальный формат.",
        image: "https://i.pravatar.cc/150?u=69",
        timestamp: "20.05.24",
        stars: 4,
        user: { id: uuidv4(), name: "Artem Kulikov" },
      },
      {
        id: uuidv4(),
        title: "Звук – космос",
        description:
          "Встроенные динамики звучат лучше многих бюджетных колонок. Объем и бас поражают для ноутбука.",
        image: "https://i.pravatar.cc/150?u=70",
        timestamp: "21.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Maria Lebedeva" },
      },
      {
        id: uuidv4(),
        title: "Центральная камера супер",
        description:
          "Center Stage на 12 Мп работает четко, всегда держит меня в кадре. Качество картинки на голову выше старых моделей.",
        image: "https://i.pravatar.cc/150?u=71",
        timestamp: "22.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Nikita Smirnov" },
      },
      {
        id: uuidv4(),
        title: "Стоит каждой копейки",
        description:
          "Да, цена огромная, но это инструмент, который окупается быстро за счет экономии времени. Профессионалы оценят.",
        image: "https://i.pravatar.cc/150?u=72",
        timestamp: "23.05.24",
        stars: 5,
        user: { id: uuidv4(), name: "Oleg Vinogradov" },
      },
    ],
  },
  {
    id: uuidv4(),
    brand: "Lenovo",
    title: "ThinkPad T14 Gen 6",
    slug: "thinkpad-t14-gen-6",
    category: "Ноутбуки",
    rating: {
      expert_score: 4.7,
      user_score: 4.6,
      reviews_count: 642,
    },
    image: "/t146.png",
    imagesByColor: {
      "#141414": ["/t146.png", "/t1461.png", "/t1462.png", "/t1463.png"],
    },
    attributes: [
      { title: "Клавиатура", value: 5 },
      { title: "Надежность", value: 5 },
      { title: "Производительность", value: 4 },
      { title: "Портативность", value: 4 },
      { title: "Безопасность", value: 5 },
    ],
    price: 159_990,
    colors: ["#141414"],
    storage_options: ["512 ГБ", "1 ТБ", "2 ТБ"],
    specifications: {
      camera: "5 MP IR",
      os: "Windows 11 Pro",
      display_diagonal: '14"',
      charging: "USB-C / Thunderbolt 4",
    },

    detailed_specs: {
      factory: [
        { label: "Тип", value: "Ноутбук" },
        { label: "Серия", value: "ThinkPad T" },
        { label: "Год релиза", value: "2025" },
        { label: "Процессор", value: "Intel Core Ultra 7 vPro" },
      ],
      screen: [
        { label: "Диагональ", value: '14"' },
        { label: "Разрешение", value: "2880×1800" },
        { label: "Матрица", value: "OLED" },
        { label: "Частота", value: "120 Гц" },
        { label: "Яркость", value: "500 нит" },
      ],
      camera: [
        { label: "Веб-камера", value: "5 MP + IR" },
        { label: "Безопасность", value: "vPro, TPM 2.0, сканер отпечатка" },
      ],
    },
    description:
      "ThinkPad T14 Gen 6 — бизнес-ноутбук с легендарной клавиатурой, OLED-экраном и корпоративной безопасностью.",
    discount: 11,
    feedbacks: [
      {
        id: uuidv4(),
        title: "Легендарная клавиатура",
        description:
          "Ради этой клавиатуры я и покупаю ThinkPad. Ход клавиш идеальный, печатать можно бесконечно без усталости.",
        image: "https://i.pravatar.cc/150?u=73",
        timestamp: "10.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Viktor Petrov" },
      },
      {
        id: uuidv4(),
        title: "OLED экран – жирный плюс",
        description:
          "Яркость и контрастность на высоте. Цвета очень сочные. Для работы с кодом и текстом – идеально.",
        image: "https://i.pravatar.cc/150?u=74",
        timestamp: "11.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Andrey Ivanov" },
      },
      {
        id: uuidv4(),
        title: "Корпус прочный",
        description:
          "Видно что собран на века. Ничего не люфтит и не скрипит. Дизайн классический, мужской.",
        image: "https://i.pravatar.cc/150?u=75",
        timestamp: "12.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Ilya Kozlov" },
      },
      {
        id: uuidv4(),
        title: "Батарейку бы побольше",
        description:
          "OLED экран потребляет прилично, поэтому заряда хватает на часов 6-7. Могло быть и лучше для такой цены.",
        image: "https://i.pravatar.cc/150?u=76",
        timestamp: "13.06.24",
        stars: 4,
        user: { id: uuidv4(), name: "Dmitry Sokolov" },
      },
      {
        id: uuidv4(),
        title: "Портов за глаза",
        description:
          "Есть всё: RJ45, HDMI, USB-A, Thunderbolt. Не нужны никакие переходники, что очень радует.",
        image: "https://i.pravatar.cc/150?u=77",
        timestamp: "14.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Artem Fedorov" },
      },
      {
        id: uuidv4(),
        title: "Трэкпоинт – вещь",
        description:
          "Кто умеет пользоваться, тот поймет. Удобнее любого тачпада в определенных ситуациях.",
        image: "https://i.pravatar.cc/150?u=78",
        timestamp: "15.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Pavel Morozov" },
      },
      {
        id: uuidv4(),
        title: "Громкие вентиляторы",
        description:
          "При нагрузке шумноват. Шум не раздражающий, но заметный в тихом офисе.",
        image: "https://i.pravatar.cc/150?u=79",
        timestamp: "16.06.24",
        stars: 4,
        user: { id: uuidv4(), name: "Yuri Belyakov" },
      },
      {
        id: uuidv4(),
        title: "Веб-камера отличная",
        description:
          "5 Мп камера выдает очень достойную картинку. Шторка приватности на месте.",
        image: "https://i.pravatar.cc/150?u=80",
        timestamp: "17.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Sergey Volkov" },
      },
      {
        id: uuidv4(),
        title: "Лучший для программиста",
        description:
          "Соотношение надежности, клавиатуры и софта делает его идеальным выбором для разработки.",
        image: "https://i.pravatar.cc/150?u=81",
        timestamp: "18.06.24",
        stars: 5,
        user: { id: uuidv4(), name: "Anton Pavlov" },
      },
    ],
  },
];
