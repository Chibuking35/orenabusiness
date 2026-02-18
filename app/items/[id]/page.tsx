import Image from "next/image";
import { items } from "@/lib/data";
import Link from "next/link";
import UserDropdown from "@/components/UserDropdown";

export default async function ItemDetail({ params }: { params: { id: string } }) {
  // Unwrap params if it is a promise
  const { id } = await params; // <-- unwrap params here

  const item = items.find((i) => String(i.id) === id);

  if (!item) return <p className="p-6">Item not found</p>;

  return (
    <div className="p-6 pt-20 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 ">
        <div className="md:w-1/2">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={500}
            className="w-full  object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2 text-gray-600">{item.title}</h1>
          <p className="text-xl text-green-600 mb-4">{item.price}</p>
          <p className="text-gray-500 text-base mb-6">{item.description}</p>
        
   
              <UserDropdown />
        </div>
      </div>
    </div>
  );
}
