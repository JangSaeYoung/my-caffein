export type CampType = "popular" | "sale";

export interface InCamp {
  id: number;
  name: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface InCommunity {
  id: number;
  tags: string[];
  title: string;
  questions: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickname: string;
  content: string;
}
