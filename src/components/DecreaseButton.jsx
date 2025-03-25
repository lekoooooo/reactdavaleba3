function DecrementButton({ setCount }) {
  return (
    <button
      className="decrementButton"
      onClick={() => setCount((prev) => prev - 1)}
    >
      Decrease by 1
    </button>
  );
}

export default DecrementButton;
