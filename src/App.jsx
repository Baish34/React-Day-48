import { useState } from "react";
import "./App.css";

function ImageList() {
  const [selectedImage, setSelectedImage] = useState(
    "https://placehold.co/50x50?text=Image1",
  );

  const image1 = "https://placehold.co/50x50?text=Image1";
  const image2 = "https://placehold.co/50x50?text=Image2";
  const image3 = "https://placehold.co/50x50?text=Image3";

  const images = [image1, image2, image3];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <img src={selectedImage} style={{ width: "100px", height: "100px" }} />
      <div>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>
    </div>
  );
}

function AddItem() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, text: `Item ${items.length + 1}` },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

function ChangeBackgroundColor() {
  const [background, setBackground] = useState("lightBlue");

  const colors = [
    "lightBlue",
    "lightGreen",
    "lightPink",
    "lightGrey",
    "lightYellow",
  ];

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackground(randomColor);
  };

  return (
    <div style={{ backgroundColor: background, padding: "20px" }}>
      <p>Background Color is {background}</p>
      <button onClick={handleColorChange}>Change Color</button>
    </div>
  );
}

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <p>{isLoading ? "Loading..." : "Content has loaded."}</p>
      <button onClick={toggleLoading}>Toggle Loading</button>
    </div>
  );
}

function ItemList() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ["Item 1", "Item 2", "Item 3"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            style={{
              color: selectedItem === item ? "blue" : "inherit",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <ImageList />
      <hr />
      <AddItem />
      <hr />
      <ChangeBackgroundColor />
      <hr />
      <ToggleLoading />
      <hr />
      <ItemList />
    </main>
  );
}
