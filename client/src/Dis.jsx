import React, { useState, useEffect } from "react";

export default function Dis() {
  const [dis, setDis] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/disease")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDis([...dis, { message: json.message, ms2: json.ms2 }]);
      });
  }, []);

  return (
    <div>
      {dis.map((item) => (
        <div>
          {item.message}
          {item.ms2}
        </div>
      ))}
    </div>
  );
}
