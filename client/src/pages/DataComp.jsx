import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function DataComp() {
  const [state, setState] = useState({ items: [], DataisLoaded: false });
  const [val, setVal] = useState("");
  const [doc, setDoc] = useState({ items: [], DataisLoaded: false });

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((res) => res.json())
      .then((json) => {
        setDoc({ items: json, DataisLoaded: true });
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/doc?area=${val}`)
      .then((res) => res.json())
      .then((json) => {
        setState({ items: json, DataisLoaded: true });
      });
  }

  function handleChange(e) {
    setVal(e.target.value);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "Roboto Slab, serif",
          fontSize: "55px",
          textAlign: "center",
          margin: "3rem auto",
        }}
      >
        Doctor Information
      </h1>
      <div className="Form">
        <form
          onSubmit={(event) => handleClick(event)}
          style={{ textAlign: "center", margin: "5rem auto" }}
        >
          <input
            type="text"
            placeholder="Search By Area"
            value={val}
            onChange={(event) => handleChange(event)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="table-1" style={{ width: "70%", margin: "4rem auto" }}>
        <Table striped bordered hover variant="dark">
          {state.items.length === 0 ? (
            state.DataisLoaded === true ? (
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Nothing Found</th>
                </tr>
              </thead>
            ) : (
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>
                    Your search results will display here!
                  </th>
                </tr>
              </thead>
            )
          ) : (
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Area</th>
                <th>Speciality</th>
              </tr>
            </thead>
          )}
          <tbody>
            {state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.area}</td>
                <td>{item.spec}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="table-2" style={{ width: "70%", margin: "4rem auto" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Area</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {doc.items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.area}</td>
                <td>{item.spec}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Alert
        key="secondary"
        variant="secondary"
        style={{ width: "70%", margin: "5rem auto", textAlign: "center" }}
      >
        Are you a medical professional. Can't find your name here?{" "}
        <Alert.Link href="/docrecm/add">Click to add</Alert.Link>
      </Alert>
    </div>
  );
}

export default DataComp;
