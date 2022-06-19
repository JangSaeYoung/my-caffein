export type CampType = "popular" | "sale";

export interface InCamp {
  id: number;
  name: string;
  type: string;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface InCommunity {
  // id: number;
  // tags: string[];
  // title: string; //제목
  // questions: string; //질문
  // comments: IComment[];

  id: number;
  tags: string;
  title: string;
  questions: string;
  comments: string;
}

export interface IComment {
  id: number;
  profile: string;
  nickname: string;
  content: string;
}
