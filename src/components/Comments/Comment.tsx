import styled from "styled-components";
import { IComment } from "types/type";

const Comment = ({ comment }: { comment: IComment }) => (
  <Container>
    <div>
      <img src="{comment.profile}" alt="" />
    </div>
    <div>
      <div className="comment-nickname">{comment.nickname}</div>
      <div className="comment-content">{comment.content}</div>
    </div>
  </Container>
);

export default Comment;

const Container = styled.div``;
