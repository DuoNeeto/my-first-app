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
        <Button>{drinkOne}</Button>
        <Button>{drinkTwo}</Button>
      </div>
    </>
  );
};
