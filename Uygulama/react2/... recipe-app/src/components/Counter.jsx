import React, { useState } from 'react'

const Counter = () => {

    console.log(useState("başlangıç değeri"))
    console.log(useState(0));
    const [counter, setCounter] = useState(5)


  return (
    <div>
        <h2>Counter</h2>
        <p>Butona {counter} kez tıklandı.</p>
        <button onClick={()=> setCounter((prevCount) => prevCount + 1) } >Tıkla</button>
    </div>
  )
}

export default Counter