function Card(children) {
    return (
        <div className={`card ${children.cardColor}`}>
            <h2 className="card-title text-center">{children.cardTitle}</h2>
            <p className="card-content text-center">XXXX  (X%)</p>
        </div>
    );
}
export default Card;