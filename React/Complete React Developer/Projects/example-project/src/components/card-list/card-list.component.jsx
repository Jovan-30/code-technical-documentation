import Card from "../card/card.component";

import './card-list.styles.css'

const CardList = ({ monsters }) => {
  return (
    <div className="card-list-container">
      {
        monsters.map((monster, index) => {
          return (
            <Card
              key={`${monster.name}-${index}`}
              name={monster.name}
              email={monster.email}
              id={monster.id}
            />
          )
        })
      }
    </div>
  )
};

export default CardList;