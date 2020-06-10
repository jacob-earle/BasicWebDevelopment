import React, {useState} from 'react'


//Example of creating a UI Element with hooks
//New and preferred way
function CounterExample(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                Plus
            </h1>
            <h1 onClick={() => setCount(count - 1)}>
                Minus
            </h1>
        </div>
    )
}

export default CounterExample;