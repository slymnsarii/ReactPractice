import React from "react";

const List = ({ people }) => {
  return (
    <>
      {
        //burda destruching yaptık prop için
        people.map((person) => {
          const { id, name, image, age } = person;
          return (
            //niye return ekledi izle ders sonlarına doğru
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })
      }
    </>
  );
};

export default List;
