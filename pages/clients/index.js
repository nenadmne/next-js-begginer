import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1> Clients Page </h1>
      <ul>
        {clients.map((item) => (
          <li key={item.id}>
            <Link href={`/clients/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
