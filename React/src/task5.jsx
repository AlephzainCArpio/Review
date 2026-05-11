const people = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 24 },
  { id: 5, name: "Emma", age: 21 }
];

function RenderingLists() {
  return (
    <div>
      {people.map((person) => (
        <p key={person.id}>
          {person.name}, {person.age}
        </p>
      ))}
    </div>
  );
}

export default RenderingLists;