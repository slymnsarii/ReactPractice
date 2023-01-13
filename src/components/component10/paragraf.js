import React, { useState } from "react";
import data from "./data (1)";
import "./text.css";

const Paragraf = () => {
  //kaç paragraf oldugunu state yaparız çğnkü sürekli bir değişim olacak
  const [count, setCount] = useState(0);

  //girilen her değer için data'daki String dizinin her elmanını mapleme ile p'nin içine yerleştirip yazdırıcaz
  //web'de 3 yazdığında count=3 olacak ve diziye gidip 3 tane elemanı mapleyip ayrı bir dizi yapacak
  const [text, setText] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = count; /* yeni oluşack olan dizinin eleman sayısı */
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    setText(
      data.slice(0, amount)
    ); /*slice:datadaki diziden 0'dan 3. indexe kadar olan elemanlarını al ve setText'e ata */
  };

  return (
    <section className="section-center">
      <h3>Kaç Tane Paragraf</h3>
      <form action="">
        <label htmlFor="amount">Paragraphs</label>{" "}
        {/*  htmlFor = html'deki for oluyor id ile bağlanan */}
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />{" "}
        {/* onChange çalıştığında setCount çalışıp ondaki değeri atayacak */}
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
        <button className="btn btn-danger" onClick={() => setCount(0)}>
          {" "}
          {/* e.preventDefault(); tarzı uygulama kullanmadığımız için sayfa baştan yükleniyor */}
          Clear
        </button>
      </form>{" "}
      {/* formun default değeri butona bastığında sayfa yeniden yüklenir preventDefault ile bu önllenir */}
      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default Paragraf;
