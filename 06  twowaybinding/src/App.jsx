import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const submithandler = () => {
    e.preventDefault();
    console.log("for submited by", title);
    setTitle('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default App;
