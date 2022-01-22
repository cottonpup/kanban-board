import React from 'react';
import Card from './Card';

export default function Column({
  label,
  todos,
  addCard,
  onDrop,
  onDragEnter,
  onDragOver,
  onDragStart,
}) {
  return (
    <>
      <ul
        id={label}
        className="py-5 px-5 w-1/3 space-y-4 bg-white rounded-xl shadow-md"
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      >
        <p>{label}</p>
        {todos.map((todo) => (
          <Card key={todo.id} id={todo.id} text={todo.text} onDragStart={onDragStart} />
        ))}
        <form onSubmit={addCard}>
          <input
            type="text"
            placeholder="Add card.."
            className="text-gray-800 px-5 py-2 bg-blue-50  w-full rounded-md"
          />
        </form>
      </ul>
    </>
  );
}
