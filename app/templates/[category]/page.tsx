import Link from "next/link";

const designs = {
  wedding: [
    { id: "w1", name: "Classic Wedding", image: "/m1.jpg" },
    { id: "w2", name: "Floral Wedding", image: "/m2.jpg" },
  ],
  birthday: [
    { id: "b1", name: "Kids Birthday", image: "/w1.jpg" },
    { id: "b2", name: "Luxury Birthday", image: "/w2.jpg" },
  ],
};

type Category = keyof typeof designs;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: Category }>;
}) {
  const { category } = await params;

  const categoryDesigns = designs[category] || [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white min-h-screen ">
      {categoryDesigns.map((design) => (
        <Link
          key={design.id}
          href={`/templates/${category}/${design.id}`}
          className="border rounded-lg overflow-hidden shadow"
        >
          <img src={design.image} className="h-40 w-full object-cover" />
          <div className="p-3 text-center text-gray-600 font-semibold">
            {design.name}
          </div>
        </Link>
      ))}
    </div>
  );
}