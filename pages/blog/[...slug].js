import { useRouter } from "next/router";

export default function BlogPosts() {
  const router = useRouter();
  console.log(router.query);
  return <h1> BlogPosts</h1>;
}
