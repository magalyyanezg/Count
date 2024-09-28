import Contex from "@/context/count";

export default function CoutView() {
  function increment(setCount) {
    setCount((prev) => (prev + 1));
  }

  return (
    <Contex.Consumer>
      {(context) => (
        <div>
          <p> {context.count }</p>
          <button onClick={() => increment(context.setCount)}>
            Increment
          </button>
        </div>
      )}
    </Contex.Consumer>
  );
}
