import "./DrinkButtons.css";
import { Button } from "./UI/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  const Header = () => {
    const message = "Would you like coffee or tea?";
    return <>{message}</>;
  };

  return (
    <>
      <Header />
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
