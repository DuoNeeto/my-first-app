import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  // COMPONENTS
  const Header = () => {
    // VARIABLES
    const greeting = "Welcome to our humble Cafe!";
    const description = <p>A great place to meet people.</p>;
    return (
      <>
        <p>{greeting}</p>
        {description}
      </>
    );
  };

  return (
    <>
      <div className="App">
        <h1>Hello Friend!</h1>
        <Header />
        <DrinkButtons />
      </div>
    </>
  );
};

// BUG: <DrinkButtons /> Zorgt dat alle andere tekst verdwijnt.
