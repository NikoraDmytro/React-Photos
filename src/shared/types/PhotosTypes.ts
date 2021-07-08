export type Photo = {
  id: number;
  url: string;
};

export type PhotoModalProps = {
  photoId: number;
  close: () => void;
};

export type Comment = {
  id: number | string;
  name?: string;
  text: string;
  date: number;
};

export type PhotoInfo = Photo & {
  Comments: Comment[] | [];
};
