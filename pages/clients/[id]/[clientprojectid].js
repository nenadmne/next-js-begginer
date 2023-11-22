import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return <h1> The Selected project of a given client</h1>;
}
