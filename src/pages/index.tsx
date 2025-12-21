import SearchLayout from "@/component/search-layout";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/component/movie-item";
import style from "./index.module.css";

const recommendMovies = [
  {
    id: 1,
    title: "미키 17",
    releaseDate: "2025-02-28",
    company: "워너 브라더스 코리아",
    genres: ["모험", "드라마", "SF", "코미디"],
    subTitle: "당신은 몇 번째 미키입니까?",
    description:
      "“당신은 몇 번째 미키입니까?” 친구 ‘티모’와 함께 차린 마카롱 가게가 쫄딱 망해 거액의 빚을 지고 못 갚으면 죽이겠다는 사채업자를 피해 지구를 떠나야 하는 ‘미키’. 기술이 없는 그는, 정치인 ‘마셜’의 얼음행성 개척단에서 위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다. 4년의 항해와 얼음행성 니플하임에 도착한 뒤에도 늘 ‘미키’를 지켜준 여자친구 ‘나샤’. 그와 함께, ‘미키’는 반복되는 죽음과 출력의 사이클에도 익숙해진다. 그러나 ‘미키 17’이 얼음행성의 생명체인 ‘크리퍼’와 만난 후 죽을 위기에서 돌아와 보니 이미 ‘미키 18’이 프린트되어 있다. 행성 당 1명만 허용된 익스펜더블이 둘이 된 ‘멀티플’ 상황. 둘 중 하나는 죽어야 하는 현실 속에 걷잡을 수 없는 사건이 기다리고 있었으니… “자알 죽고, 내일 만나”",
    runtime: 137,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250207_265%2F1738893336962Cn1Vd_JPEG%2Fmovie_image.jpg",
  },
  {
    id: 2,
    title: "검은 수녀들",
    releaseDate: "2025-01-24",
    company: "(주)NEW",
    genres: ["미스터리", "드라마"],
    subTitle:
      "금지된 곳으로 갈 준비가 되었습니다. 원칙은 단 하나, 무조건 살린다!",
    description:
      "금지된 곳으로 갈 준비가 되었습니다. ‘유니아’ 수녀(송혜교)는 ‘희준’(문우진)의 몸에 숨어든 악령이 12형상 중 하나라고 확신한다. 당장 올 수 없는 구마 사제를 기다리다가 부마자가 희생될 것이 분명한 상황. 결국 ‘유니아’는 소년을 구하기 위해 ‘서품을 받지 못한 수녀는 구마를 할 수 없다’는 금기를 깨기로 결심한다. 하지만 담당의는 ‘희준’을 살릴 수 있는 것은 오직 의학이라 믿는 ‘바오로’ 신부(이진욱). 우연한 기회에 그의 제자 ‘미카엘라’ 수녀(전여빈)의 비밀을 알아챈 ‘유니아’는 ‘희준’을 병원에서 빼내기 위해 막무가내로 도움을 요청한다. ‘미카엘라’는 거침없는 ‘유니아’ 에게 반발심을 느끼지만, 동질감이 느껴지는 ‘희준’을 위해 힘을 보태기로 한다. 마침내 두 수녀는 수단과 방법을 가리지 않고 오직 소년을 살리기 위한 위험한 의식을 시작하는데... 원칙은 단 하나, 무조건 살린다!",
    runtime: 114,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250120_54%2F1737354989887Wp150_JPEG%2Fmovie_image.jpg",
  },
  {
    id: 3,
    title: "아이유 콘서트 : 더 위닝",
    releaseDate: "2025-01-24",
    company: "CGV ICECON, CJ 4DPLEX",
    genres: ["공연실황"],
    subTitle: "최초의 아이콘 아이유, 100번째 콘서트로 완성된 찬란한 기록",
    description:
      "최초의 아이콘 아이유, 100번째 콘서트로 완성된 찬란한 기록. 'Love wins all', '홀씨', 'Shopper', 'Celebrity', 'Last Fantasy' 등 수많은 명곡으로 서울월드컵경기장을 가득 채운 아이유와 유애나의 뜨거운 에너지와 함성. 상암 하늘을 수놓은 환상적인 드론쇼까지! 승리를 위해 달려온 여정의 마지막 챕터가 지금 스크린에서 펼쳐진다!",
    runtime: 124,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250108_174%2F1736328720692tngqd_JPEG%2Fmovie_image.jpg",
  },
];

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={`${style.movie_list} ${style.recommend}`}>
          {recommendMovies.map((recommend) => (
            <MovieItem key={recommend.id} {...recommend} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={`${style.movie_list} ${style.all}`}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
