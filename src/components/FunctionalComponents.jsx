import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function App(props) {
  const name = useFormInput("Kartik");
  const surname = useFormInput("Arora");
  const width = useWindowWidth();
  useDocumentTitle(name.value + " " + surname.value);

  return (
    <section class="App">
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Surname">{width}</Row>
    </section>
  );
}

// CUSTOM HOOKS

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
