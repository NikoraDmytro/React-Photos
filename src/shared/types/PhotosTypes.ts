export type Photo = {
  id: number;
  url: string;
};

export type PhotoModalProps = {
  photo: Photo | undefined;
  close: () => void;
};
