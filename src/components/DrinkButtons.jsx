export const DrinkButtons = () => {
  const message = "Would you like coffee or tea?";

  const Header = () => {
    // Dit heet een 'component'.
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
