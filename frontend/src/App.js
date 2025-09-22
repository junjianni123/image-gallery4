import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [word, setWord] = React.useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(word);
  };

  return (
    <div>
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
