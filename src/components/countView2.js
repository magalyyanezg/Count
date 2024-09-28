import  { useContext } from "react";
import Contex from "@/context/count";

export default function CountView() {
    const storage  = useContext(Contex)
  function increment(setCount) {
    setCount((prev) => (prev + 1));
  }

  return (
    
        <div>
            <p> {storage.count }</p>
          <button onClick={() => increment(storage.setCount)}>
            Increment
          </button>
          
        </div>
      )
}
