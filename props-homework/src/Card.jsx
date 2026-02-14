const Card = ({ age, name, male, sport, hello, childs }) => {
  return (
    <div>
      <h1>
        {age} - {name}, male-{male == true ? "true" : "false"}
      </h1>
      <p>
        I play voleyball - {sport.voleyball == true ? "true" : "false"},
        football - {sport.football == true ? "true" : "false"}
        <br />
        Say - {hello()}
        <br />I have childs:{" "}
        {childs.map((item) => (
          <span>{item}</span>
        ))}
      </p>
    </div>
  );
};
export default Card;
