import { InputHTMLAttributes } from "react";
import { Comment } from "./PhotosTypes";

export type PhotoModalProps = {
  close: () => void;
};

export type ModalHeaderProps = {
  imageUrl: string;
  close: () => void;
};

export type CommentSectionProps = {
  comments: Comment[];
};

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};
