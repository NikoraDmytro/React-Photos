import React from "react";
import { Comment } from "../shared/types/PhotosTypes";
import { parseDate } from "../utils/functions/parseDate";

interface CommentSectionProps {
  Comments: Comment[] | undefined;
}

export const CommentSection = ({
  Comments,
}: CommentSectionProps): JSX.Element => {
  if (typeof Comments === "undefined") return <h1>Loading</h1>;

  const Comment = ({ comment }: { comment: Comment }) => {
    const date = new Date(comment.date);
    return (
      <li key={comment.id}>
        <p className="CommentHeader">
          <b>{comment.name || "Anonymous"}</b> <time>{parseDate(date)}</time>
        </p>
        <p className="CommentText">{comment.text}</p>
      </li>
    );
  };

  return (
    <div className="CommentSection">
      <span className="CommentsNumber">{Comments.length} comment(s)</span>
      <ul className="Comments">
        {Comments.length ? (
          Comments?.map((comment) => <Comment comment={comment} />)
        ) : (
          <h3>No Comments</h3>
        )}
      </ul>
    </div>
  );
};
