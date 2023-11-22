import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  console.log(router.query);
  return <h1> Page not found</h1>;
}
