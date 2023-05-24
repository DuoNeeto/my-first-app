import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { coffee, tea } from "./utils/data";

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
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      </div>
    </>
  );
};
