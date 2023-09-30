import {React, forwardRef, useState, useImperativeHandle} from "react";

function Counter(props, ref) {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    useImperativeHandle(ref, () => ({reset}))

    return (
      <div>
          Counter: {counter}
          <div className="flex justify-center items-center gap-4">
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
          </div>

      </div>
    );
}

export default forwardRef(Counter)