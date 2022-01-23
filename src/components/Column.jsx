import React from 'react';
import Card from './Card';
import Container from './Container';

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
    <Container
      id={label}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
    >
      {label ? <p>{label}</p> : ''}
      {todos.map((todo) => (
        <Card key={todo.id} id={todo.id} text={todo.text} onDragStart={onDragStart} />
      ))}
      <form onSubmit={addCard}>
        <input
          type="text"
          placeholder={label ? 'Add card..' : 'Add column..'}
          className="text-gray-800 px-5 py-2 bg-blue-50  w-full rounded-md"
        />
      </form>
    </Container>
  );
}
