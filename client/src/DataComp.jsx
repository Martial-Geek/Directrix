// import React, { useState, useEffect } from "react"
// import axios from "axios";

// const [user, setUser]= useState;

// const fetchData = () => {
//   return axios.get("https://localhost:5000")
//         .then((response) => setUser(response.data));
// }

// useEffect(() => {
//   fetchData();
// },[])

// console.log(user);

// function App(){
//   return <h1>{user}</h1>
// }

// import React from "react";
// class DataComp extends React.Component {

//     // Constructor
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }

//     // ComponentDidMount is used to
//     // execute the code
//     componentDidMount() {
//         fetch(
// "http://localhost:5000/")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div> ;

//         return (
//         <div className = "App">
//             <h1> Fetch data from an api in react</h1>  {
//                 items.map((item) => (
//                 <ol key = { item.id } >
//                     Full_Name: { item.name },
//                     </ol>
//                 ))
//             }
//         </div>
//     );
// }
// }

import React from "react";
import { useState } from "react";

function DataComp() {
  const [state, setState] = useState({ items: [], DataisLoaded: false });

  fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then((json) => {
      setState({ items: json, DataisLoaded: true });
    });

  return (
    <div className="App">
      <h1> Fetch data from an api in react</h1>{" "}
      {state.items.map((item) => (
        <ol key={item.id}>Full_Name: {item.name},</ol>
      ))}
    </div>
  );
}

export default DataComp;

// class App extends React.Component {
//   state = {
//     name: ""
//   }

//   state= [];

//   componentDidMount() {
//     fetch("http://localhost:5000")
//       .then(res => res.json())
//       .then(data => this.setState(data))
//   }

//   componentDidMount() {
//     fetch("http://localhost:5000")
//       .then(console.log(res));
//   }

//   render() {
//     return (
//       <h1>Hello {this.state}!</h1>
//     )
//   }
// }

// export default App;
