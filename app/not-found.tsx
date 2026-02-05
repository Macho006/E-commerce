import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-5">
      <p className="font-extrabold text-7xl">Упс...</p>
      <p className="font-semibold text-2xl">Страница не найдена</p>
      <p>Тут что то упало и это не страшно! Но мы все сохранили ;)</p>
      <Link href="/home" className="bg-primary rounded-lg text-white p-6">
        Перейти на главную
      </Link>
    </div>
  );
}
