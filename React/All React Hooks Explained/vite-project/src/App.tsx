import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>(["Orange", "Red"]);
  const [addInput, setAddInput] = useState<string>("");
  const [updateInput, setUpdateInput] = useState<string>("");

  const [error, setError] = useState<string>("");

  const addItem = () => {
    if (addInput) {
      setItems([...items, addInput]);
      setAddInput("");
      setError("");
      return;
    }
    setError("There is no input");
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => index !== i));
  };

  const updateItem = (index: number, newItem: string) => {
    if (newItem) {
      const updateItems = [...items];
      updateItems[index] = newItem;

      setItems(updateItems);
    }
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item}</h2>
            <button>Update</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        );
      })}

      <br />

      <input
        type="text"
        placeholder="Add Item"
        value={addInput}
        onChange={(e) => setAddInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <p style={{ color: "red" }}>{error}</p>

      <input
        value={updateInput}
        type="text"
        placeholder="Update Item"
        onChange={(e) => setUpdateInput(e.target.value)}
      />
      <button onClick={() => updateItem(index, updateInput)}>Update</button>
    </>
  );
}

export default App;
