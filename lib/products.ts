import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid";
import Watch from "@/assets/image/2272131 1.svg";
import Headphones from "@/assets/image/2272131 1 (1).svg";
import PS from "@/assets/image/2272131 1 (2).svg";
import Phones from "@/assets/image/2272131 1 (3).svg";
import Tablet from "@/assets/image/2272131 1 (4).svg";
import Accessory from "@/assets/image/2272131 1 (5).svg";
import Laptop from "@/assets/image/2272131 1 (6).svg";
import Speakers from "@/assets/image/2272131 1 (7).svg";

export const products: Product[] = [
  {
    id: uuidv4(),
    title: "iPhone 17 Pro Max",
    slug: "iphone-17-promax",
    category: "Наушники",

    rating: {
      expert_score: 4.9,
      user_score: 4.7,
      reviews_count: 1205,
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
    description:
      "Инновационный дизайн iPhone 17 Pro обеспечивает исключительную прочность, рекордное время автономной работы и раскрывает невероятную мощь чипа A19 Pro. Система камер Pro Fusion с разрешением 48 Мп имеет самый длинный телеобъектив iPhone с 8-кратным оптическим зумом, а также новую фронтальную камеру Center Stage для более качественных групповых селфи и видеосъемки Dual Capture. Передняя панель покрыта защитным покрытием Ceramic Shield 2, обеспечивающим в 3 раза лучшую защиту от царапин, задняя панель – в 4 раза более устойчивой к трещинам, а цельнометаллический корпус из кованого алюминия эффективно рассеивает тепло. Встроенные инструменты Apple Intelligence, такие как Clean Up и другие, также доступны.",
    discount: 13,

    image: Phones,
  },
  {
    id: uuidv4(),
    title: "Apple MacBook Pro 16",
    slug: "macbook-pro-16-2025",
    category: "Ноутбуки",

    rating: {
      expert_score: 4.9,
      user_score: 4.7,
      reviews_count: 1205,
    },
    attributes: [
      { title: "Дизайн", value: 4 },
      { title: "Батарея", value: 2 },
      { title: "Дисплей", value: 3 },
      { title: "Камера", value: 5 },
      { title: "Ответ", value: 5 },
      { title: "Портативность", value: 5 },
    ],
    price: 184990,
    colors: ["#e7e7e7", "#f67e37", "#47527c"],
    storage_options: ["512 ГБ", "1 ГБ", "2 ТБ", "4 ТБ"],
    specifications: {
      camera: "48 MPx",
      os: "iOS",
      display_diagonal: '16.2"',
      charging: "Беспроводная",
    },
    description:
      "Новый MacBook Pro 16 с чипом M4 задает недосягаемую планку производительности для самых сложных творческих и инженерных задач. Архитектура чипа M4, построенная на базе 3-нанометрового техпроцесса второго поколения, включает в себя обновленное 16-ядерное Neural Engine, оптимизированное для работы с Apple Intelligence и локального запуска нейросетей.16-дюймовый дисплей Liquid Retina XDR теперь поддерживает пиковую яркость до 1800 нит в режиме HDR и оснащен новой технологией антибликового покрытия. Система охлаждения была полностью переработана для обеспечения бесшумной работы даже при рендеринге видео в 8K или компиляции огромных массивов кода. Благодаря феноменальной энергоэффективности M4, MacBook Pro обеспечивает до 24 часов работы без подзарядки, оставаясь самой автономной профессиональной станцией в мире. Обновленная камера 12 Мп Center Stage с поддержкой Desk View и массив из шести динамиков со студийным качеством звука делают это устройство идеальным инструментом для удаленной работы и создания контента.",
    discount: 13,

    image: Laptop,
  },
  {
    id: uuidv4(),
    title: "Apple iPad Pro 12.9",
    slug: "iphone-17-promax",
    category: "Планшеты",

    rating: {
      expert_score: 4.9,
      user_score: 4.7,
      reviews_count: 1205,
    },
    attributes: [
      { title: "Дизайн", value: 4 },
      { title: "Батарея", value: 2 },
      { title: "Дисплей", value: 3 },
      { title: "Камера", value: 5 },
      { title: "Ответ", value: 5 },
      { title: "Портативность", value: 5 },
    ],
    price: 184990,
    colors: ["#e7e7e7", "#f67e37", "#47527c"],
    storage_options: ["256 ГБ", "512 ГБ", "1 ТБ", "2 ТБ"],
    specifications: {
      camera: "48 MPx",
      os: "iOS",
      display_diagonal: '12.9"',
      charging: "Проводная",
    },
    description:
      "iPad Pro 13 — это радикальное переосмысление того, каким может быть планшет. В основе устройства лежит инновационный дисплей Ultra Retina XDR, выполненный по технологии Tandem OLED, который объединяет свет от двух панелей для достижения невероятной яркости и точности цветопередачи. Вся эта мощь заключена в невозможно тонкий алюминиевый корпус толщиной всего 5.1 мм. Сердцем планшета стал чип M4, созданный для задач искусственного интеллекта и сложного графического моделирования. Благодаря обновленному графическому процессору с поддержкой трассировки лучей и аппаратному ускорению сеток, iPad Pro 13 справляется с рендерингом в Octane или монтажом в Final Cut Pro быстрее многих ноутбуков. Поддержка нового Apple Pencil Pro и обновленной клавиатуры Magic Keyboard превращает планшет в полноценную творческую студию. Новая горизонтально ориентированная камера 12 Мп с технологией Center Stage делает видеозвонки максимально естественными.",
    discount: 13,

    image: Tablet,
  },
];
