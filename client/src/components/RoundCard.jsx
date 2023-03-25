import React from "react";
import Card from "react-bootstrap/Card";

export default function (props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "20rem",
        background: "linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)",
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
            fontSize: "2.55rem",
            color: "#e6e6fa",
            margin: "1.6rem",
          }}
        ></i>
        <Card.Text>{props.des}</Card.Text>
        <Card.Link href="#" style={{ color: "#D2042D " }}>
          Card Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
