export interface InCamp {
    id: number;
    name: string;
    type: "popular" | "sale";
    status?: "모집전" | "모집중" | "모집완로"; 
    field: string;
    skill: string;
    startDate: string;
    thumbnail: string;
}

export interface InCommunity{
    id: number;
    tags: string;  //상단태그들
    title: string; //제목 
    questions: string; //질문
}

export interface InComent{
    id: number;
    img: string; //프로필 이미지 주소 string으로 받는다.
    name: string; //코멘트 달아준 사람 이름/닉네임
    answer: string; //코멘트 내용
}
                        