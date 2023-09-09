import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ cards, sections, onFilter }) => {
    return (
      <>
        <div className="cards">
          {sections.map(section => (
            <div className="sort" key={section.id}>
              <div className="sortLink" onClick={() => onFilter(section)}>{section.title}</div>
            </div>
          ))}
  
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </>
    );
  };
  
  export default CardList;