export type Photo = {
  id: number;
  url: string;
};

export type PhotoModalProps = {
  close: () => void;
};

export type Comment = {
  id: number | string;
  userName?: string;
  text: string;
  date: Date;
};

export type PhotoData = Photo & {
  comments: Comment[];
};
