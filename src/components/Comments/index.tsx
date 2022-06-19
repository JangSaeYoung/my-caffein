import styled from "styled-components";
import { IComment } from "types/type";
import Comment from "./Comment";

const Comments = () => {
  const comments = [
    {
      id: 0,
      profile: "",
      nickname: "dodo123",
      content: "안녕하세요.",
    },
    {
      id: 1,
      profile: "",
      nickname: "콩순이",
      content: "그맘알아요.",
    },
    {
      id: 2,
      profile: "",
      nickname: "다발이",
      content: "제가 알고 있는 것은.",
    },
  ];

  return (
    <Container>
      {comments.map(comments => (
        <Comment
          key={comments.id}
          comment={[]}
          id={0}
          profile={""}
          nickname={""}
          content={""}
        />
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div``;
