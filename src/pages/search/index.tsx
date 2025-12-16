import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>검색결과 : {q}</h1>
    </div>
  );
}
