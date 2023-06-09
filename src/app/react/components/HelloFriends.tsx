export default function HelloFriends() {
  const friends = ["Jeroen", "Siegert", "Jos", "Johannes", "Billy", "Lars"];
  return (
    <>
      <h3 className="mt-2">Some of Joost&apos;s friends</h3>
      <ul className="space-y-0.5 list-disc list-inside">
        {friends.map((name, i) => (
          <li key={`${name}${i}`}>{name}</li>
        ))}
      </ul>
    </>
  );
}
