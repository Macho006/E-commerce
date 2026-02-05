import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Product } from "@/types/product";

export const products: Product[] = [
  // Phones
  {
    id: uuidv4(),
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
  },
  {
    id: uuidv4(),
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
  },
  {
    id: uuidv4(),
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
  },
  // Tablets
  {
    id: uuidv4(),
    title: "HUAWEI MatePad Pro 13.2",
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
  },
  {
    id: uuidv4(),
    title: "Samsung Galaxy Tab S11 Ultra 5G",
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
  },
  {
    id: uuidv4(),
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
  },
  // Laptops
  {
    id: uuidv4(),
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
  },
  {
    id: uuidv4(),
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
  },
  {
    id: uuidv4(),
    title: "Lenovo ThinkPad T14 Gen 6",
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
  },
];
