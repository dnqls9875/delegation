const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];
/**
 * 1. navigation 클릭 이벤트 바인딩
 * 2. 태그 기본 동작 차단
 * 3. target 가져오기
 *
 * 4. 선택한 대상의 is-active 클래스 추가오기
 * 5. 나머지 li 요소들에게 is-active 클래스 제거하기
 * 6. data-index. 가져오기
 * 7. visual 안에 있는 img 요소를 선택
 * 8. img.src 변경 => 1.jgp
 * 9. img.alt 변경 => alt
 */

const navigation = getNode(".navigation");
const li = getNodes(".navigation > li");
const img = getNode(".visual img");

console.log(navigation);

const split = new SplitText("h3", { type: "chars" });

function handler(e) {
  e.preventDefault();

  // li를 수집
  const target = e.target.closest("li");
  const list = [...this.children];
  const index = target.dataset.index;

  if (!target) return;

  list.forEach((li) => li.classList.remove("is-active"));

  img.src = `./assets/part01/${data[index - 1].src}`;
  img.alt = data[index - 1].alt;

  // img.src = e.target.closest("a").href;

  gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.05,
    immediateRender: false,
    ease: "back(2)",
  });

  target.classList.add("is-active");
}

navigation.addEventListener("click", handler);
