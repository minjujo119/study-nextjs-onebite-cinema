import SearchLayout from "@/component/search-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>{q} 영화 상세페이지</h1>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
