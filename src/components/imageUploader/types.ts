export type ImageObject = Record<string, unknown>;

export interface ImageUploaderProps<T = ImageObject> {
  value: (File | string | T)[];
  onChange: (images: (File | T)[]) => void;
  maxImages?: number;
  imageKey?: string;
  onDeleteOld?: (img: string | T) => void;
}
