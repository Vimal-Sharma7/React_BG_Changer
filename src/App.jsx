import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={ ()=> setcolor('red')}
            >
              RED
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={ ()=> setcolor('green')}
            >
              GREEN
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={ ()=> setcolor('yellow')}
            >
              YELLOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
