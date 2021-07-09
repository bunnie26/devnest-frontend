const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default Card;
