import React, { useState } from "react";

const containerStyle = {
  margin: "0 auto",
  maxWidth: "1010px",
  minHeight: "calc(100vh - 100px)",
  padding: "0 25px",
  width: "100%",
};

const headerStyle = {
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

const textareaStyle = {
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
  resize: "none",
};

const footerStyle = {
  backgroundColor: "#fff",
  border: "1px solid #f7f7f7",
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  width: "88%",
};

export default function Container() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [pronounCount, setPronounCount] = useState(0);
  const [Longest, setLongest] = useState("");
  const [reading, setreading] = useState("");

  const readingtime = (text) => {
    const wordsPerMinute = 200;
    const readingTim = Math.ceil(wordCount / wordsPerMinute);
    return readingTim;
  };

  const countLongestword = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let words = sentence.trim().split(/\s+/);

    let Longestword = words[0];
    console.log("ranna", Longestword);
    for (let index = 0; index < words.length; index++) {
      if (words[index].length > Longestword.length) {
        Longestword = words[index];
      }
    }
    return Longestword;
  };

  const countPronouns = (text) => {
    if (typeof text !== "string") return 0;

    const pronouns = [
      "he",
      "she",
      "it",
      "they",
      "we",
      "i",
      "you",
      "me",
      "him",
      "her",
      "us",
      "them",
      "myself",
      "yourself",
      "himself",
      "herself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
    ];
    const words = text.toLowerCase().split(" ");
    let count = 0;
    for (let word of words) {
      if (pronouns.includes(word)) count++;
    }
    return count;
  };

  const countParagraphs = (text) => {
    if (typeof text !== "string") return 0;
    const paragraphs = text
      .split("\n")
      .filter((paragraph) => paragraph.trim().length > 0).length;
    return paragraphs;
  };

  const countSentences = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let Scount = sentence.trim().split(/[.?!]/).length;
    return Scount;
  };

  const countCharacters = (text) => {
    if (typeof text !== "string") return 0;
    return text.replace(/\s+/g, "").length;
  };

  const countWords = (text) => {
    if (typeof text !== "string") return 0;
    const words = text
      .split(" ")
      .filter((word) => word.trim().length > 0).length;
    return words;
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(countWords(newText));
    setCharacterCount(countCharacters(newText));
    setSentenceCount(countSentences(newText));
    setParagraphCount(countParagraphs(newText));
    setPronounCount(countPronouns(newText));
    setLongest(countLongestword(newText));
    setreading(readingtime(newText));
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <p>Words: {wordCount}</p>
        <p>Characters: {characterCount}</p>
        <p>Sentences: {sentenceCount}</p>
        <p>Paragraphs: {paragraphCount}</p>
        <p>Pronouns: {pronounCount}</p>
      </div>
      <textarea
        onChange={handleTextChange}
        style={textareaStyle}
        placeholder="Paste your text here..."
        cols="30"
        rows="10"
      ></textarea>
      <div style={footerStyle}>
        <p>Average reading time: - {reading} min </p>
        <p>Longest word: - {Longest} </p>
      </div>
    </div>
  );
}
