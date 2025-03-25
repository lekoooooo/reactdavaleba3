function IncrementButton({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>increment by 1</button>
  );
}

export default IncrementButton;
