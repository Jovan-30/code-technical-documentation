import './card.styles.css'

const Card = ({ name, email, id }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}`} />
      <h1>{name}</h1>
      <h3>{email}</h3>
    </div>
  )
}
export default Card;