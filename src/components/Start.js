import { useRef } from "react";



export default function Start({ setUsername, setEmail }) {
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();

  const handleClick = () => {
    inputRefUsername.current.value && setUsername(inputRefUsername.current.value);
    inputRefEmail.current.value && setEmail(inputRefEmail.current.value);
  };

  return (
    <div className="start">
      
      <div className="form-register">
        <input
          className="startInput"
          placeholder="Your full name or nickname"
          ref={inputRefUsername}
        />
        <input
          className="startInput"
          placeholder="Your email address"
          ref={inputRefEmail}
        />
        <button className="startButton" onClick={handleClick}>
          Let's go!
        </button>
      </div>
    </div>
  );
}