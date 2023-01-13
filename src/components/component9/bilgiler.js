import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import data from "./data";

const Bilgiler = () => {
  const [index, setIndex] = useState(0); //useState dizinin index numaralarını taşır, obje taşımaz

  //index=0 old icin ilk olarak objenin elemanlarını alacak
  const { id, isim, tarih, metin, resim } = data[index]; //başlangıçta datanın 0.indexi sonra artacak next'e basınca

  const sonraki = (nxt) => {
    if (nxt > data.length - 1) nxt = 0;
    setIndex(nxt);
  };

  const onceki = (prv) => {
    if (prv < 0) prv = data.length - 1;
    setIndex(prv);
  };

  const rastgele = () => {
    let rnd = Math.floor(Math.random() * data.length);
    setIndex(rnd);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={resim} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{isim}</Card.Title>
          <Card.Title style={{ textAlign: "center" }}>{id}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{metin}</Card.Text>
          <Button variant="danger" onClick={() => onceki(index - 1)}>
            Previous
          </Button>
          <Button variant="warning" onClick={rastgele}>
            Random
          </Button>{" "}
          {/* herhangi bir parametre göndermeyeceksek fonksiyona direk ismini yazıp sonra oluştururuz o fonksiyonu */}
          <Button variant="primary" onClick={() => sonraki(index + 1)}>
            Next
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bilgiler;
