import React, { useState } from "react";
import { motion } from "framer-motion";

const TodoList = () => {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const handleDragEnd = () => {
    const randomIndex = Math.floor(Math.random() * todos.length);
    const selectedTodo = todos[randomIndex];
    setCurrentTodo(selectedTodo);
    setTodos(todos.filter((todo) => todo !== selectedTodo));
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="p-2 mb-4 bg-gray-200 text-gray-800 rounded w-full"
        />
        <button
          onClick={handleAddTodo}
          className="p-2 mb-4 bg-blue-600 text-white rounded w-full"
        >
          Add Todo
        </button>

        <div className="flex justify-center items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            className="mb-4 cursor-pointer"
            style={{ width: "70vw", height: "70vh" }}
          >
            <circle
              cx="10"
              cy="10"
              r="5"
              stroke="black"
              strokeWidth="2"
              fill="black"
            />
            <polygon points="10,6 6,13 14,13" fill="white" />
            <text
              x="10"
              y="10"
              textAnchor="middle"
              fill="black"
              fontSize="1px"
              dy=".3em"
              className="bg-black "
            >
              {currentTodo}
            </text>
          </motion.svg>

          <div className="mt-8">
            {todos.map((todo, index) => (
              <div key={index} className="mb-2">
                {todo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;