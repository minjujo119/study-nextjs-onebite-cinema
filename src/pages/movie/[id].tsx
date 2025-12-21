import style from "./[id].module.css";

const mockData = {
  id: 5,
  title: "위플래시",
  releaseDate: "2025-03-12",
  company: "(주)NEW",
  genres: ["드라마"],
  subTitle:
    "“세상에서 제일 해로운 말이 뭔지 알아? ‘그 정도면 잘했어’야” 미친놈 vs 미친놈, 집념과 광기가 폭발한다!",
  description:
    "뉴욕의 명문 음악 학교에 다니지만 특별히 주목받지 못하던 드러머 앤드류. 최고의 드러머를 꿈꾸며 연습에만 매진하던 그는 어느 날, 우연히 교내 최고의 밴드를 이끄는 플레쳐 교수의 눈에 띄어 그의 밴드에 발탁된다. 그러나 모욕적인 폭언과 폭력을 휘두르며 완벽을 강요하는 플레쳐 교수의 무자비한 교수법으로 인해 앤드류는 능력을 증명해야 한다는 생각에 점차 미쳐가고, 앤드류가 광기에 휩싸일수록 플레쳐 교수의 완벽을 향한 집념 역시 높아지는데…! “세상에서 제일 해로운 말이 뭔지 알아? ‘그 정도면 잘했어’야” 미친놈 vs 미친놈, 집념과 광기가 폭발한다!",
  runtime: 106,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250211_13%2F1739238451278AUJm0_JPEG%2Fmovie_image.jpg",
};

export default function Page() {
  const {
    // id,
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = mockData;
  return (
    <div>
      <div
        className={style.image_box}
        style={{ backgroundImage: `url(${posterImgUrl})` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.text_box}>
        <h1>{title}</h1>
        <p>{`${releaseDate} / ${genres} / ${runtime}`}</p>
        <p>{company}</p>
        <h2>{subTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
