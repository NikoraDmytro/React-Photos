import { observer } from "mobx-react";
import React from "react";
import { CommentSectionProps } from "../../shared/types/PropsTypes";
import { AddCommentForm } from "../AddCommentForm/index";

export const CommentSection = observer(
  ({ comments }: CommentSectionProps): JSX.Element => {
    return (
      <div className="commentSection">
        <span className="commentsQuantity">{comments.length} comment(s)</span>
        <AddCommentForm />
        <ul className="comments">
          {comments.length ? (
            comments.map((comment) => (
              <li key={comment.id}>
                <p className="commentHeader">
                  <b>{comment.userName || "Anonymous"}</b>{" "}
                  <time>{new Date(comment.date).toLocaleDateString()}</time>
                </p>
                <p className="commentText">{comment.text}</p>
              </li>
            ))
          ) : (
            <h3>No Comments</h3>
          )}
        </ul>
      </div>
    );
  }
);
