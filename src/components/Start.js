import { useRef, useState } from "react";



export default function Start({ setUsername, setEmail }) {
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();

  const [errorEmail, setErrorEmail] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  

  const handleClick = () => {
    const username = inputRefUsername.current.value;
    const email = inputRefEmail.current.value;
    if(validateEmail(email)){
      username && setUsername(inputRefUsername.current.value);
      email && setEmail(inputRefEmail.current.value);
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };

  

  return (
    <div className="start">
      
      <div className="form-register">
        <input
          className="startInput"
          minlength="3" 
          required
          placeholder="Your full name or nickname"
          ref={inputRefUsername}
        />
        <input
          className={errorEmail ? "startInput error" : "startInput"}
          type="email"
          minlength="3" 
          required
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