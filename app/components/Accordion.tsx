'use client';
import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {title}
      </button>
      {open && (
        <div className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}
