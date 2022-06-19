import styled from "styled-components";
// import { IComment } from "types/type";

interface IComment {
  comment: IComment[];
  id: number;
  profile: string;
  nickname: string;
  content: string;
}

const Comment = ({ profile, nickname, content }: IComment) => {
  return (
    <Container>
      <div>
        <img src="{profile}" alt="" />
      </div>
      <div>
        <div className="comment-nickname">{nickname}</div>
        <div className="comment-content">{content}</div>
      </div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
`;
