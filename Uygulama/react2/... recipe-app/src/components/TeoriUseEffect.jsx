import React, {useEffect, useState} from 'react'

const TeoriUseEffect = () => {
    const [counter, setCounter] = useState(5)
     //useEffect, component ilk render edildiğinde ve props, state değiştiğinde yeniden tetiklenir.
     useEffect(()=> {
        // yan etki işlemleri burada gerçekleştirilir.
        console.log('useEffect Çalıştı');

        // temizleme işlemleri (cleanup) burada gerçekleştirilir.
        return () => {
            console.log("useEffect temizlendi.");
        }
    }, [counter])
  return (
    <div>
        <h2>Counter</h2>
        <p>Butona {counter} kez tıklandı.</p>
        <button onClick={()=> setCounter((prevCount) => prevCount + 1) } >Tıkla</button>
    </div>
  )
}

export default TeoriUseEffect