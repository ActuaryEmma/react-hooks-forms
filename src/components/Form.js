import React from "react";

function Form({onClickFirst, onClickLast,firstName, lastName}) {
  
  return (
    <form>
      <input onChange={onClickFirst} type="text" value={firstName} />
      <input onChange={onClickLast}type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
