import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return <h1> Portfolio page identifier </h1>;
}
