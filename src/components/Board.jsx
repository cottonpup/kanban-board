import React, { useState } from 'react';
import Column from './Column';

export default function Board() {
  const [todoList, setTodoList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [dragged, setDragged] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();

    const newCard = { id: Date.now(), text: e.target.children[0].value };

    if (e.target.parentNode.id === 'To-do') {
      setTodoList([...todoList, newCard]);
    }
    if (e.target.parentNode.id === 'In Progress') {
      setProgressList([...progressList, newCard]);
    }
    if (e.target.parentNode.id === 'Done') {
      setDoneList([...doneList, newCard]);
    }

    e.target.children[0].value = '';
  };

  const removeItem = () => {
    console.log(dragged);
    if (dragged.column === 'To-do') {
      const filteredList = todoList.filter((card) => card.id !== dragged.id);
      console.log(filteredList);
      setTodoList(filteredList);
    }
    if (dragged.column === 'In Progress') {
      const filteredList = progressList.filter((card) => card.id !== dragged.id);
      console.log(filteredList);
      setProgressList(filteredList);
    }

    if (dragged.column === 'Done') {
      const filteredList = doneList.filter((card) => card.id !== dragged.id);
      console.log(filteredList);
      setDoneList(filteredList);
    }
  };

  const dropItem = (e) => {
    e.preventDefault();
    if (e.target.tagName === 'UL') {
      if (e.target.id === 'To-do') {
        removeItem();
        setTodoList([...todoList, dragged]);
      }
      if (e.target.id === 'In Progress') {
        removeItem();
        setProgressList([...progressList, dragged]);
      }
      if (e.target.id === 'Done') {
        removeItem();
        setDoneList([...doneList, dragged]);
      }
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
      <Column
        label="To-do"
        todos={todoList}
        addCard={handleAddItem}
        onDragStart={handleDragStart}
        onDrop={dropItem}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      />
      <Column
        label="In Progress"
        todos={progressList}
        addCard={handleAddItem}
        onDragStart={handleDragStart}
        onDrop={dropItem}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      />
      <Column
        label="Done"
        todos={doneList}
        onDragStart={handleDragStart}
        addCard={handleAddItem}
        onDrop={dropItem}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
      />
    </div>
  );
}
