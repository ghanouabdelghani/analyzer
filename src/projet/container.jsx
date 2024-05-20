import React from "react";
import { useState } from "react";

const styleh = {
  margin: "0 auto",
  maxWidth: "1010px",
  minHeight: "calc(100vh - 100px)",
  padding: "0 25px",
  width: "100%",
};
const stylet = {
  display: "flex",
  marginTop: "70px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #FFFFFF",
  justifyContent: "space-between",
  padding: "15px 30px",
  marginRight: "80px",
  color: "#9e9e9e",
  fontSize: "14px",
  fontFamily: "poupin",
};

const stylearea = {
  backgroundColor: "#fff",
  border: "1px solid #f7f7f7",
  color: "#242424",
  fontSize: "20px",
  fontWeight: 400,
  marginBottom: "20px",
  marginTop: "20px",
  minHeight: "400px",
  outline: "none",
  padding: "30px",
  width: "86%",
};
const styled = {
  backgroundColor: "#fff",
  border: "1px solid #f7f7f7",
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  width: "88%",
};

export default function Container() {
  const [value, setvalue] = useState("");
  return (
    <div style={styleh}>
      <div style={stylet}>
        <p>Words</p>
        <p>Characters</p>
        <p>Sentences</p>
        <p>Paragraphs</p>
        <p>Pronouns</p>
      </div>
      <textarea
        style={stylearea}
        placeholder="Past your text here..."
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div style={styled}>
        <p>Average reacding time : - </p>
        <p>Longest word : - </p>
      </div>
    </div>
  );
}
