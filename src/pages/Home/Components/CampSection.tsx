import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CampCard from '../../../components/CampCard/CampCard';
import { InCamp  } from '../../../types/type'
import React, {useState, useEffect} from 'react';

// 캠프 카드 들어가는 구역



interface InProps {
    title: string;
    camps: InCamp[];
}


const CampSection= ( { title, camps }: InProps )=>{

        const cards = [
            {
                "id": 0,
                "name": "직접 해보는 페이스북 마케팅 실무",
                "type": "Popular",
                "status": "모집중",
                "startDate": "2월 28일",
                "thumbnail": "",
                "field": "" ,
                "skill": "" 
              },
              {
                "id": 1,
                "name": "React 실무 프로젝트 역량 업그레이드",
                "type": "Popular",
                "status": "모집중",
                "startDate": "1월 9일",
                "thumbnail": "",
                "field": "" ,
                "skill": ""
              },
              {
                "id": 2,
                "name": "개발자 없이 SQL로 데이터 출력하고 대시보드 만들기",
                "type": "Popular",
                "status": "모집중",
                "startDate": "2월 13일",
                "thumbnail": "",
                "field": "" ,
                "skill": ""
              },
              {
                "id": 3,
                "name": "자바스크립트를 잡아라",
                "type": "Popular",
                "status": "모집중",
                "startDate": "5월 25일",
                "thumbnail": "",
                "field": "" ,
                "skill": ""
              },
        ];

        const salecards = [
            {
                "id": 0,
                "name": "IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무",
                "type": "Popular",
                "status": "모집중",
                "startDate": "2월 28일",
                "thumbnail": "",
                "field": "IT" ,
                "skill": "백엔드" 
              },
              {
                "id": 1,
                "name": "SQL 입문부터 활용까지 - 데이터 분석 보고서 작성",
                "type": "Popular",
                "status": "모집중",
                "startDate": "1월 9일",
                "thumbnail": "",
                "field": "IT" ,
                "skill": "SQL"
              },
              {
                "id": 2,
                "name": "인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z",
                "type": "Popular",
                "status": "모집중",
                "startDate": "2월 13일",
                "thumbnail": "",
                "field": "IT" ,
                "skill": "인공지능"
              },
              {
                "id": 3,
                "name": " 클라우드 AWS 구축부터 운영까지 실무 AtoZ",
                "type": "Popular",
                "status": "모집중",
                "startDate": "5월 25일",
                "thumbnail": "",
                "field": "IT" ,
                "skill": "백엔드"
              },
        ];


    return (
    <Container>
        <div className="section-title">인기 부트 캠프</div>

        <div className="camp-cards">
        {
        cards.map((camp) => (
            <CampCard camp={camp} key={camp.id} field={false}   />
        ))
        }
        </div>
        <div className="section-title">특가 할인 캠프</div>
        <div className="camp-cards">
        {
            salecards.map((camp) => (
                <CampCard camp={camp} key={camp.id}  field={true} />
            ))
        }
</div>
    </Container>
);
    };

export default CampSection;



const Container = styled.div`


  /* padding: 0px 16px;

  display: flex;
  flex-direction: column;
    width: 960px;
    height: 323px;
    margin-top: 624px;
    margin-left: 240px;
    margin-right: 240px;

  .section-title {
      margin-bottom: 8px;
      font-weight: bold;
  }
 
    
    .camp-cards {
    a {
      flex: 1;
    }
    @media (min-width: 680px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    } 
}*/
`