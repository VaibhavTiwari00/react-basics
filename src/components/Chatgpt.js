import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function getAllItems() {
    return items;
  }

  function getItemById(id) {
    return items.find((item) => item.id === id);
  }

  function updateItem(id, updatedItem) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, ...updatedItem };
        }
        return item;
      })
    );
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>My Items</h1>
      <ItemForm addItem={addItem} />
      <ItemList
        items={getAllItems()}
        getItemById={getItemById}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

function ItemForm({ addItem }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { id: Date.now(), name };
    addItem(newItem);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

function ItemList({ items, getItemById, updateItem, deleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item
            item={item}
            getItemById={getItemById}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        </li>
      ))}
    </ul>
  );
}

function Item({ item, getItemById, updateItem, deleteItem }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(item.name);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave(event) {
    event.preventDefault();
    updateItem(item.id, { name });
    setEditing(false);
  }

  function handleDelete() {
    deleteItem(item.id);
  }

  if (editing) {
    return (
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    return (
      <div>
        <span>{item.name}</span>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}

export default App;
