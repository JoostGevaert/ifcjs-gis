export default function HelloFriends() {
  const friends = ["Jeroen", "Siegert", "Jos", "Johannes", "Billy"];
  return (
    <>
      <h3>Some of Joost's friends:</h3>
      <ul>
        {friends.map((name, i) => (
          <li key={`${name}${i}`}>{name}</li>
        ))}
      </ul>
    </>
  );
}
