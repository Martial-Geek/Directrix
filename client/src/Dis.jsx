import React, { useState, useEffect } from "react";

// export default function Dis() {
//   const [dis, setDis] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/disease")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setDis([...dis, { message: json.message, ms2: json.ms2 }]);
//       });
//   }, []);

//   return (
//     <div>
//       {dis.map((item) => (
//         <div>
//           {item.message}
//           {item.ms2}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Dis() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace("http://127.0.0.1:8080/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return "Will redirect in 3 seconds...";
}
