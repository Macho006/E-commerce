"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  value: string
  onChange: (value: string) => void
}

export function ProductSort({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[220px] bg-white/80 backdrop-blur-sm">
        <SelectValue placeholder="Сортировать" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="new">Сначала новые</SelectItem>
        <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
        <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
        <SelectItem value="discount">По размеру скидки</SelectItem>
      </SelectContent>
    </Select>
  )
}
