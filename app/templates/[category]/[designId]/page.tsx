"use client";

import { useState, use, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
  const [showDropdown, setShowDropdown] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  if (!design) return <div>Design Not Found</div>;

  // 🔥 Download Handler
  const handleDownload = async (type: "png" | "jpg" | "pdf") => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      useCORS: true,
      scale: 2,
    });

    if (type === "png") {
      const link = document.createElement("a");
      link.download = `${designId}_design.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }

    if (type === "jpg") {
      const link = document.createElement("a");
      link.download = `${designId}_design.jpg`;
      link.href = canvas.toDataURL("image/jpeg", 1.0);
      link.click();
    }

    if (type === "pdf") {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${designId}_design.pdf`);
    }

    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-center p-6 py-17 gap-6 md:py-20 bg-white min-h-screen">
      
      {/* Preview */}
      <div
        ref={previewRef}
        className="relative w-100 h-125 bg-cover bg-center border shadow-md"
        style={{ backgroundImage: `url(${design.background})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
          {Object.entries(formData).map(([key, value], index) => (
            <p key={index} className="text-black text-xl font-semibold">
              {value}
            </p>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-4 w-100">
        {design.fields.map((field) => (
          <input
            key={field.name}
            placeholder={field.label}
            className="border p-2 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                [field.name]: e.target.value,
              })
            }
          />
        ))}
      </div>

      {/* 🔽 Download Dropdown */}
      <div className="relative mt-4">
        <button
          onClick={() => handleDownload("jpg")} // ✅ Default JPG
          className="bg-red-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
        >
          Download
          
          {/* Arrow */}
          <span
            onClick={(e) => {
              e.stopPropagation(); // Prevent JPG download
              setShowDropdown(!showDropdown);
            }}
            className="text-sm text-black cursor-pointer"
          >
            ▼
          </span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
            <button
              onClick={() => handleDownload("png")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              PNG
            </button>
            <button
              onClick={() => handleDownload("jpg")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              JPG
            </button>
            <button
              onClick={() => handleDownload("pdf")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}