import React from "react";
import Card from "react-bootstrap/Card";

export default function (props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "22rem",
        // background: "linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)",
        background: "#57A0D2",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "25px",
            fontFamily: "Montserrat, sand-seriff",
            margin: "1.4rem auto",
          }}
        >
          {props.title}
        </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <i
          class={props.class}
          style={{
            fontSize: "3.5em",
            color: "#e6e6fa",
            margin: "1.6rem",
          }}
        ></i>
        <Card.Text>{props.des}</Card.Text>
        <Card.Link href="#" style={{ color: "#FFF000" }}>
          Card Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
