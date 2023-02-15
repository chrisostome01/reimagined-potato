import React from "react";

export default function CustomComponent({ value }) {
  return (
    <button className="border border-gray-600 text-gray-600 py-3 w-[250px] font-bold">
      {value}
    </button>
  );
}
