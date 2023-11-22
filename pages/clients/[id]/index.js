import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  const LoadProjectHandler = () => {
    router.push("/clients/max/projecta");
  };
  return (
    <div>
      <h1> The project of a given client</h1>
      <button onClick={LoadProjectHandler}> Load project a </button>
    </div>
  );
}
