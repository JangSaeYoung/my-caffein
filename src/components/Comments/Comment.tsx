import styled from "styled-components";
import fonts from "styles/fonts";
import { IComment } from "types/type";

const Comment = ({ comments }: { comments: IComment }) => (
  <Container>
    <img src="{comments.profile}" alt="" />
    <div>
      <div className="comment-nickname">{comments.nickname}</div>
      <div className="comment-content">{comments.content}</div>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 16px;
  background-color: red;

  .comment-nickname {
    ${fonts.Body2}
    font-weight: bold;
    padding-bottom: 4px;
  }
  .comment-content {
    ${fonts.Caption}
  }

  img {
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
`;

export default Comment;
