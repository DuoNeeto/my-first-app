export const DrinkButtons = () => {
  const Header = () => {
    const message = "Would you like coffee or tea?";
    return <>{message}</>;
  };

  return (
    <>
      <Header />
      <div className="button-group">
        <button className="button">Coffee</button>
        <button className="button">Tea</button>
      </div>
    </>
  );
};
