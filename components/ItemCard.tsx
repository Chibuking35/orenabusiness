import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ item }: any) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition">
        <h3 className="font-semibold text-gray-700 p-2">
          {item.title}
        </h3>

        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <p className="text-sm text-gray-500">{item.price}</p>
        </div>
      </div>
    </Link>
  );
}
