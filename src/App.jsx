import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

// VARIABLES
const greeting = "Welcome to our humble Cafe!";
const description = <p>A great place to meet people.</p>;

// REACT COMPONENTS
const Header = () => {
  return (
    <>
      <p>{greeting}</p>
      {description}
    </>
  );
};

// THE APP
export const App = () => {
  return (
    <>
      <div>
        <h1>Hello Friend!</h1>
        <Header />
        <DrinkButtons />
      </div>
    </>
  );
};

// BUG: <DrinkButtons /> Zorgt dat alle andere tekst verdwijnt.
