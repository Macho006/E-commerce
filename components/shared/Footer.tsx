import Link from "next/link";
import Image from "next/image"; // Import Image from next/image for better optimization
import { Facebook, Instagram, Send, Youtube } from "lucide-react"; // Using standard icons

export const Footer = () => {
  return (
    <footer className="bg-[#F6F7FA] mt-16 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col items-start">
            {/* Use basic img tag if next/image issues persist, or configure next.config.ts */}
            {/* Using /logo 1.png because it is in public folder */}
            <div className="relative w-32 h-10 mb-6">
              <img src="/logo 1.png" alt="Behoof Logo" className="w-full h-full object-contain object-left" />
            </div>
            <p className="text-gray-400 mb-4">Мы в соц сетях</p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-lg transition-colors text-black">
                {/* vk icon is not in lucide by default usually, using simple svg or placeholder if needed. replacing with a generic generic icon or text if needed. assuming vk is not critical or using a custom svg */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.5c-.244 0-.46-.118-.65-.354l-1.84-2.316c-.236-.296-.46-.356-.67-.356-.37 0-.482.266-.482.72v1.54c0 .484-.15.766-1.354.766-2.004 0-4.088-1.226-5.586-3.298-2.246-3.136-2.83-5.264-2.83-5.71 0-.256.1-.486.586-.486h1.868c.394 0 .56.176.71.436.786 1.346 2.096 3.636 2.626 3.636.196 0 .284-.09.284-.576v-2.34c-.056-1.026-.612-1.112-.612-1.484 0-.174.15-.354.76-.354.75 0 1.012.35 1.05.996v2.094c0 .228.1.306.22.306.192 0 .34-.106.68-.444 1.296-1.294 1.516-2.73 1.57-2.766.026-.176.126-.296.48-.296h1.868c.56 0 .68.296.55.696-.13.43-1.492 2.536-1.74 3.036-.312.608-.266.868 0 1.25.266.386 1.18 1.714 1.34 2.126.17.432-.09.77-.67.77z" /></svg>
              </Link>
              <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-lg transition-colors text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </Link>
              <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-lg transition-colors text-black">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-lg transition-colors text-black">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-transparent hover:bg-gray-200 rounded-lg transition-colors text-black">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: User Links */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Пользователю</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Связаться с нами</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Поддержка пользователей</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">FAQ & Руководства</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Пользовательское соглашение</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Популярные категории</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Смартфоны</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Teteras electricas</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Стиральные машины</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Телевизоры</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Ноутбуки</Link></li>
            </ul>
          </div>

          {/* Column 4: Team */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Команда Behoof</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">О нас</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">Работа у нас</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-xs text-gray-400">
          Copyright © 2023 Behoof, Inc. Все права защищены
        </div>
      </div>
    </footer>
  );
};