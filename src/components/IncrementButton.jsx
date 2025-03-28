function IncrementButton({ setCount }) {
  return (
    <div className="returnContainer">
      {" "}
      <button
        className="IncrementBtn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment by 1
      </button>
    </div>
  );
}

export default IncrementButton;
