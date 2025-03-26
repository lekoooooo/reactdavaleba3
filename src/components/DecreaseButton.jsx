function DecrementButton({ setCount }) {
  return (
    <div className="returnContainer">
      {" "}
      <button
        className="decrementButton"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrease by 1
      </button>
    </div>
  );
}

export default DecrementButton;
