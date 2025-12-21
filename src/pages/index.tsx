import SearchLayout from "@/component/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <h2>한입 시네마 Home</h2>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
