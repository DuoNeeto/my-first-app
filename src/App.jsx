import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { coffee, tea } from "./utils/data";
import { DrinkChoice } from "./components/DrinkChoice";

export const App = () => {
  const userDrink = coffee; // Het is belangrijk dat je geen {} gebruikt, anders werkt het niet.

  const Header = () => {
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
        <DrinkChoice drink={userDrink} />
      </div>
    </>
  );
};
