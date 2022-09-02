import { useRef } from "react";



export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      
      <input
        className="startInput"
        placeholder="Please provide your full name"
        ref={inputRef}
      />
      <button className="startButton btn btn-outline-light" onClick={handleClick}>
        Let's go!
      </button>
    </div>
  );
}