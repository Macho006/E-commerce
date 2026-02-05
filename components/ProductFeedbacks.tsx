import { Star } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/product";

export function ProductFeedbacks({ product }: { product: Product }) {
  const feedbacks = product.feedbacks;
  if (!feedbacks || feedbacks.length === 0) return null;

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 space-y-5">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="break-inside-avoid p-4 bg-gray-100 rounded-2xl"
        >
          <div className="flex gap-3">
            <div className="relative size-12 rounded-full overflow-hidden bg-gray-50 ring-2 ring-white shadow-sm">
              <Image
                src={feedback.image}
                alt={feedback.user.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-medium text-gray-700">{feedback.user.name}</p>
              <div className="flex gap-3 items-center">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={
                        i < feedback.stars
                          ? "fill-primary stroke-primary"
                          : "fill-gray-200 stroke-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">{feedback.timestamp}</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-3">
            <h4 className="font-semibold text-gray-700 text-lg">
              {feedback.title}
            </h4>
            <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
              {feedback.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
