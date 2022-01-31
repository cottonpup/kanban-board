import React from 'react';
import Card from './Card';
import Container from './Container';

export default function Column({ label, addCard, cards }) {
  return (
    <Container>
      <p>{label}</p>
      <form onSubmit={(e) => addCard(e)}>
        <input
          type="text"
          placeholder={'Add card..'}
          className="text-gray-800 px-5 py-2 bg-blue-50  w-full rounded-md"
        />
      </form>
      {cards.map((card) => (
        <Card key={card.id} text={card.text}></Card>
      ))}
    </Container>
  );
}
