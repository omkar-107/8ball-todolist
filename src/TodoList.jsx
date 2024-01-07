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
    const newTodo = document.querySelector("input").value;
    if (newTodo === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  // ... other code

  return (
    
    <div className="flex flex-col items-center justify-center  bg-[#262626] min-h-screen">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-4 p-4"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Magic 8ball</span> To do list</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="p-2 mb-4 bg-gray-200 text-gray-800 rounded"
        required = "true"
      />
      <button
        onClick={handleAddTodo}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Todo
      </button>

      <div className=" flex justify-between  items-center ">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" // Adjusted viewBox to make it smaller
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 1.1 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          className="mb-4 cursor-pointer w-48 "
          style={{ width: "30vw", height: "40vh" , userSelect : "none"}} // Set width and height directly
        
        >
          <circle
            cx="10"
            cy="10"
            r="5"
            stroke="black"
            stroke-width="2"
            fill="black"
          />{" "}
     
          <polygon points="10,6 6,13 14,13" fill="white" />
          <text
            x="10"
            y="10"
            textAnchor="middle"
            fill="black"
            fontSize="1px"
            dy=".3em"
          
          >
            {currentTodo}
          </text>
        </motion.svg>

        <div >
          {todos.length > 0 && (
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            { todos.map((todo, index) => (
              <li key={index} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                {todo}
              </li>
            ))}
            
          </ul>
          )}
        </div>
        {todos.length === 0 && (
          <div className="text-white text-2xl font-semibold">
            All todos completed!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
