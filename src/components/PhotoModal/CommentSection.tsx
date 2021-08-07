import { observer } from "mobx-react";
import React from "react";
import { CommentSectionProps } from "../../shared/types/PropsTypes";
import { AddCommentForm } from "../AddCommentForm/index";

export const CommentSection = observer(
  ({ comments }: CommentSectionProps): JSX.Element => {
    const CommentsList = comments.map((item) => {
      const userName = item.userName || "Anonymous";
      const date = new Date(item.date).toLocaleDateString();
      const text = item.text;

      return (
        <li key={item.id}>
          <p className="commentHeader">
            <b>{userName}</b>
            <time>{date}</time>
          </p>
          <p className="commentText">{text}</p>
        </li>
      );
    });

    return (
      <div className="commentSection">
        <span className="commentsQuantity">{comments.length} comment(s)</span>
        <AddCommentForm />
        <ul className="comments">
          {comments.length ? CommentsList : <h3>No Comments</h3>}
        </ul>
      </div>
    );
  }
);
