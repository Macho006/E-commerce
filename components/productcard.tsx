import { Heart, BarChart2 } from 'lucide-react';
import Iphone from '@/public/Iphone.svg';


export default function ProductCard() {
    const stats: { label: string; value: number }[] = [
        { label: 'Дизайн', value: 4 },
        { label: 'Батарея', value: 2 },
        { label: 'Дисплей', value: 4 },
        { label: 'Камера', value: 5 },
        { label: 'Ответ', value: 5 },
        { label: 'Портативность', value: 4 },
    ];

    return (
        <div className="bg-white rounded-[32px] p-10 flex flex-col md:flex-row gap-6 relative shadow-sm hover:shadow-lg transition-shadow border border-gray-50">
            <div className="absolute top-6 right-6 flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                    <Heart size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                    <BarChart2 size={20} />
                </button>
            </div>
            <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Портативные колонки</span>
                <h3 className="text-sm font-bold text-gray-800 mb-6 text-center md:text-left leading-tight">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                </h3>
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-4xl">
                        <img src={Iphone.src} alt="iPhone" />
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-4 pt-4 md:pt-0">
                {stats.map((stat) => (
                    <div key={stat.label} className="group">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[11px] font-medium text-gray-500">{stat.label}</span>
                        </div>
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <div
                                    key={step}
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step <= stat.value ? 'bg-red-500' : 'bg-gray-100'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}