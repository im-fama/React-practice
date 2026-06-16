import '../css/Controls.css';

function Controls({ count, setCount }) {
  return (
    <div>
      <button id="increment-btn" onClick={() => setCount(count + 1)}>+ Increment</button>
      <button id="decrement-btn" onClick={() => setCount(count - 1)}>- Decrement</button>
      <button id="reset-btn" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Controls;