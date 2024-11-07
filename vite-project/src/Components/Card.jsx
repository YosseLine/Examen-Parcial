const Card = ({ nombre, pokemon }) => {
  console.log(nombre, pokemon)
  return (
    <div className="card">
      <h2>Hola {nombre}!</h2>
      <p>Sabemos que tu pokemon favorito es:</p>
      <div
        className="color-box"
        style={{
          backgroundColor: color,
        }}
      >
        <span>{pokemon}</span>
      </div>
    </div>
  );
};

export default Card;
