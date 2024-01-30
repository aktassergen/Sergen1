export function HelloMessage (props) {
    console.log('props', props)
  
  
    // Her komponent sayfada bir şeyleri render etmek istiyorsa JSX döndürmesi gerekir
    // JSX bir HTML DEĞİLDİR!
  
    // JSX'in HTML'den farklı olduğu noktalar neler?
    // 1. Sadece bir element return edilebilir.
    // 2. Elementlere class verirken "className" isimini kullanmamız gerekir.
    return <div>
      {/* JSX içerisinde JS ifade yazmak istiyorsak süslü parantezler içerisine almamız gerekir: */}
      <h1 className="title">Hello {props.name}, how are you today? </h1>
      <span>React'e Hoşgeldin!</span>
    </div>
  }
  