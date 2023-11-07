const Card = ({ name, title, age }) => {
  const eventHandler = () => {
    console.log("I am Pushpa");
  };
  return (
    <div className="card">
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>ID:{id}</p>
      <button onClick={props.click}></button>
    </div>
  );
};

export default Card;
