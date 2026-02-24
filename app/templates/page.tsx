import Link from "next/link";

const categories = [
  { id: "wedding", name: "Wedding Cards", image: "/m1.jpg" },
  { id: "birthday", name: "Birthday Cards", image: "/m3.jpg" },
];

export default function TemplatesPage() {
  return (
    <div className="grid md:py-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 min-h-screen bg-white">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/templates/${cat.id}`}
          className="border rounded-lg overflow-hidden shadow max-h-50"
        > <div className="p-3 text-center text-gray-600 font-semibold">
            {cat.name}
          </div>
          <img src={cat.image} className="h-40 w-full object-cover" />
         
        </Link>
      ))}
    </div>
  );
}