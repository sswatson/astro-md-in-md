import { createSignal } from "solid-js";

export default function HelloWorld() {
  const [counter, setCounter] = createSignal(0);

  return (
    <>
      <button onClick={() => setCounter(counter() + 1)}>Clicked {counter()} times</button>
    </>
  );
}
