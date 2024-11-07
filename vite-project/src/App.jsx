import { useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    console.log("event: ", event);
    event.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta.");
      setSubmitted(false);
      return;
    }
    if (pokemon.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta.");
      setSubmitted(false);
      return;
    } else{
      return Card;
    }
  

    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <div className="App">
        <h1>Elige un Pokemon</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ingresa tu pokemon favorito"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
          <button type="submit">ENVIAR</button>
        </form>

        {error && <div className="error">{error}</div>}

        {submitted && !error && <Card nombre={nombre} pokemon={pokemon} />}
      </div>
    </>
  );
}

export default App;

