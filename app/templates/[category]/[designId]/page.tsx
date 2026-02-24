"use client";

import { useState, use, useRef } from "react";
import html2canvas from "html2canvas";

const designData = {
  b2: {
    background: "/m2.jpg",
    fields: [
      { name: "coupleName", label: "Couple Name" },
      { name: "date", label: "Wedding Date" },
      { name: "venue", label: "Venue" },
    ],
  },
  b1: {
    background: "/m1.jpg",
    fields: [
      { name: "name", label: "Celebrant Name" },
      { name: "age", label: "Age" },
      { name: "date", label: "Date" },
    ],
  },
  w1: {
    background: "/m1.jpg",
    fields: [
      { name: "name", label: "Celebrant Name" },
      { name: "age", label: "Age" },
      { name: "date", label: "Date" },
    ],
  },
  w2: {
    background: "/m1.jpg",
    fields: [
      { name: "name", label: "Celebrant Name" },
      { name: "age", label: "Age" },
      { name: "date", label: "Date" },
    ],
  },
};

type DesignId = keyof typeof designData;

export default function DesignPage({
  params,
}: {
  params: Promise<{ designId: DesignId }>;
}) {
  const { designId } = use(params);

  const design = designData[designId];

  const [formData, setFormData] = useState<Record<string, string>>({});

  // Add ref for preview div
  const previewRef = useRef<HTMLDivElement>(null);

  if (!design) return <div>Design Not Found</div>;

  // Download as JPG
  const handleDownload = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, { useCORS: true });
    const link = document.createElement("a");
    link.download = `${designId}_design.jpg`; // JPG extension
    link.href = canvas.toDataURL("image/jpeg", 1.0); // JPG format
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-6 py-17 gap-6 md:py-20 bg-white min-h-screen">
      {/* Preview div */}
      <div
        ref={previewRef}
        className="relative w-100 h-125 bg-cover bg-center"
        style={{ backgroundImage: `url(${design.background})` }}
      >
        {Object.entries(formData).map(([key, value], index) => (
          <p key={index} className="text-black text-xl text-center mt-4">
            {value}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-100">
        {design.fields.map((field) => (
          <input
            key={field.name}
            placeholder={field.label}
            className="border p-2 rounded text-gray-600"
            onChange={(e) =>
              setFormData({
                ...formData,
                [field.name]: e.target.value,
              })
            }
          />
        ))}
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-600 text-black  px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Download 
      </button>
    </div>
  );
}