const Card = ({ title, description }) => {
  return <div>{title}: {description}</div>;
};

const cards = [
  { id: 1, title: "Card 1", description: "Title and description from props" },
  { id: 2, title: "Card 2", description: "Different title and description" },
  { id: 3, title: "Card 3", description: "Different title and description" },
];
function CardComponent() {
  return (
    <div>
      {cards.map((card) => <Card key={card.id} title={card.title} description={card.description} />)}
    </div>
  );
}

export default CardComponent;