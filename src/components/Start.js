import { useRef, useState } from "react";



export default function Start({ setUsername, setEmail }) {
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();
  const inputRefAgree = useRef();

  const [errorEmail, setErrorEmail] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  

  const handleClick = () => {
    const username = inputRefUsername.current.value;
    const email = inputRefEmail.current.value;
    const agree = inputRefAgree.current.checked;
    if(validateEmail(email) && agree){
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
        <p class="agree">
          <input type="checkbox" id="agree"  ref={inputRefAgree}/> <label for="agree">My information is solely used for this game purposes (winner announcement). Your personal data (nickname and email address) will be removed after the winner of this game is announced; for example at end of day. Only your username (or nickname) will be displayed on the leaderboard. Your email address will not be used/shared with any Microsoft marketing engine or 3rd party. Microsoft is allowed to change the winning object (price) at any moment.</label>
        </p>
        <button className="startButton" onClick={handleClick}>
          Let's go!
        </button>
      </div>
    </div>
  );
}