"use client";

import { useState } from "react";

function removeDuplicateFromArray(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

export default function MyForm() {
  const [userInput, setUserInput] = useState("chicken");
  const [stringArray, setStringArray] = useState([]);

  const handleAddClick = () => {
    if (!userInput) {
      alert("please enter a string");
    } else {
      setStringArray([...stringArray, userInput]);
      setUserInput("");
    }
  };

  const handleSubmitClick = () => {
    const uniqueArray = removeDuplicateFromArray(stringArray);
    setStringArray(uniqueArray);
    return alert("All duplicates will be removed");
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={userInput} onChange={onChange} />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleSubmitClick}>submit</button>
      </div>

      <div>
        <p>
          <strong>Array:</strong>
        </p>
        <p>
          <strong> {stringArray.join(", ")}</strong>
        </p>
      </div>
    </div>
  );
}
