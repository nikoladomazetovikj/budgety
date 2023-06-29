function Card({ cardColor, cardTitle, sum, percentage }) {
    return (
        <div className={`card ${cardColor}`}>
            <h2 className="card-title text-center">{cardTitle}</h2>
            <p className="card-content text-center">
                {Number(sum)} {percentage ? `(${Number(percentage)}%)` : ''}
            </p>
        </div>
    );
}

export default Card;
