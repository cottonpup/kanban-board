import React from 'react';

export default function Card({ text, id, onDragStart }) {
  return (
    <>
      <li
        draggable
        onDragStart={onDragStart({ text, id })}
        className="py-8 px-8 h-10 rounded-xl shadow-md bg-slate-200 flex justify-center items-center"
      >
        {text}
      </li>
    </>
  );
}
