import React, { useState } from "react";
import data from "./data (3)";
import List from "./list";
//import "./list (1).css"; component12 için yoruma aldım

const Listele = () => {
  //baslangıç değeri  data isimli dizi
  const [people, setPeople] = useState(data);
  const [geriAl, setGeriAl] = useState(false);

  const bringBack = () => {
    setPeople(data);
    setGeriAl(!geriAl); //mevcut degerinin tersini alırız böylece
  };

  const clearAll = () => {
    setPeople([]);
    setGeriAl(!geriAl); //mevcut degerinin tersini alırız böylece
  };

  return (
    <main>
      <section>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {geriAl ? (
          <button onClick={bringBack}>Bring Back</button>
        ) : (
          <button onClick={clearAll}>Clear All</button>
        )}
      </section>
    </main>
  );
};

export default Listele;
