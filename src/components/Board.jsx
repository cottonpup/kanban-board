import React, { useState } from 'react';
import Column from './Column';

export default function Board() {
  const [todoList, setTodoList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [dragged, setDragged] = useState(null);
  const columns = [
    { label: 'To-do', list: todoList },
    { label: 'In Progress', list: progressList },
    { label: 'Done', list: doneList },
  ];
  // const [columns, setColumns] = useState([
  // { label: 'To-do', list: todoList },
  // { label: 'In Progress', list: progressList },
  // { label: 'Done', list: doneList },
  //   // { label: '', list: [] },
  // ]);

  const handleAddItem = (e) => {
    e.preventDefault();

    const newCard = { id: Date.now(), text: e.target.children[0].value };

    switch (e.target.closest('ul').id) {
      case 'To-do':
        setTodoList([...todoList, newCard]);
        break;

      case 'In Progress':
        setProgressList([...progressList, newCard]);
        break;

      case 'Done':
        setDoneList([...doneList, newCard]);
        break;

      default:
        break;
    }

    e.target.children[0].value = '';
  };

  const removeItem = () => {
    switch (dragged.column) {
      case 'To-do':
        setTodoList(todoList.filter((card) => card.id !== dragged.id));
        break;

      case 'In Progress':
        setProgressList(progressList.filter((card) => card.id !== dragged.id));
        break;

      case 'Done':
        setDoneList(doneList.filter((card) => card.id !== dragged.id));
        break;

      default:
        break;
    }
  };

  const dropItem = (e) => {
    e.preventDefault();
    let parentNodes = e.target.closest('ul');

    switch (true) {
      case parentNodes.id === 'To-do' && dragged.column !== 'To-do':
        setTodoList(() => [...todoList, dragged]);
        removeItem(parentNodes.id);
        break;

      case parentNodes.id === 'In Progress' && dragged.column !== 'In Progress':
        setProgressList(() => [...progressList, dragged]);
        removeItem(parentNodes.id);
        break;

      case parentNodes.id === 'Done' && dragged.column !== 'Done':
        setDoneList(() => [...doneList, dragged]);
        removeItem(parentNodes.id);
        break;

      default:
        break;
    }
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    return false;
  };

  const onDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (card) => {
    return (e) => {
      setDragged({ column: e.target.parentNode.id, id: card.id, text: card.text });
    };
  };

  return (
    <div className="flex justify-center content-center space-x-5 mx-10 my-4">
      {columns.map((col, i) => (
        <Column
          key={i}
          label={col.label}
          todos={col.list}
          addCard={handleAddItem}
          onDragStart={handleDragStart}
          onDrop={dropItem}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
        />
      ))}
    </div>
  );
}
