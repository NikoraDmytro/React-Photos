import { observer } from "mobx-react";
import React from "react";
import { Comment } from "../shared/types/PhotosTypes";
import { AddCommentForm } from "./AddCommentForm";

interface CommentSectionProps {
  comments: Comment[] | undefined;
  photoId: number;
}

export const CommentSection = observer(
  ({ comments, photoId }: CommentSectionProps): JSX.Element => {
    if (typeof comments === "undefined") return <h1>Loading</h1>;

    return (
      <div className="commentSection">
        <AddCommentForm photoId={photoId} />
        <span className="commentsQuantity">{comments.length} comment(s)</span>
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
