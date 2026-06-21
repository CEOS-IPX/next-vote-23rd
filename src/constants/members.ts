export type Role = "PM" | "DESIGN" | "FRONT-END" | "BACK-END";

export type Member = {
  name: string;
  school: string;
  department: string;
};

const DEFAULT_SCHOOL = "CEOS UNIV";
const DEFAULT_DEPARTMENT = "Computer Science";

const m = (name: string): Member => ({
  name,
  school: DEFAULT_SCHOOL,
  department: DEFAULT_DEPARTMENT,
});

export const MEMBERS: Record<Role, Member[]> = {
  PM: [
    m("문현승"),
    m("오유준"),
    m("안민용"),
    m("이소은"),
    m("안세빈"),
    m("안서연"),
    m("이정원"),
    m("변성우"),
    m("조아현"),
    m("김채원"),
  ],
  DESIGN: [
    m("문수인"),
    m("고다현"),
    m("김미소"),
    m("오상헌"),
    m("김예린"),
    m("김은홍"),
    m("김정원"),
    m("권지민"),
    m("우유민"),
    m("이우림"),
  ],
  "FRONT-END": [
    m("박유민"),
    m("권오진"),
    m("이윤서"),
    m("구민교"),
    m("이승연"),
    m("황영준"),
    m("남기림"),
    m("김민서"),
    m("김홍엽"),
    m("오유진"),
  ],
  "BACK-END": [
    m("임종훈"),
    m("안준석"),
    m("황신애"),
    m("최우혁"),
    m("김동욱"),
    m("최승원"),
    m("오지송"),
    m("김태익"),
    m("김태희"),
    m("김도현"),
  ],
};
