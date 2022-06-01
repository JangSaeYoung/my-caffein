export interface Camp {
    id: number;
    name: string;
    type: "popular" | "sale";
    status?: "모집전" | "모집중" | "모집완로";
    startDate: string;
    thumbnail: string;
}

export interface Camp{
    field?: string;
    skill?: string;
}

// let case1:Camp ={
//     id: 0,
//     name: "React 실무 프로젝트 역량 업그레이드",
//     type: "popular",
//     status: "모집중",
//     startDate: "1월 9일",
//     thumbnail: "URL",
// }