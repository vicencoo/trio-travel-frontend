import { useEffect, useRef, useState } from 'react';
import { X, Plus } from 'lucide-react';
import { DEFAULT_URL } from '../../defaults';

type ImageObject = Record<string, unknown>;

interface ImageUploaderProps<T = ImageObject> {
  value: (File | string | T)[];
  onChange: (images: (File | T)[]) => void;
  maxImages?: number;
  imageKey?: string;
}

export const ImageUploader = <T extends ImageObject>({
  value = [],
  onChange,
  imageKey,
  maxImages = 10,
}: ImageUploaderProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<(File | string | T)[]>(value);

  useEffect(() => {
    setImages(value);
  }, [value]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);
    const updated = [...images, ...newFiles].slice(0, maxImages);
    setImages(updated);
    onChange(updated);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    onChange(updated);
  };

  const getPreview = (img: File | string | T) => {
    if (img instanceof File) {
      return URL.createObjectURL(img);
    }

    if (typeof img === 'string') {
      return img;
    }

    if (imageKey && img[imageKey]) {
      const url = String(img[imageKey]);
      return url.startsWith('http') ? url : `${DEFAULT_URL}${url}`;
    }

    return '';
  };

  return (
    <div className='space-y-4'>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {images.map((img, index) => (
          <div key={index} className='relative overflow-hidden rounded-2xl'>
            <img
              src={getPreview(img)}
              alt='uploaded'
              className='h-32 w-full object-cover'
            />
            <button
              type='button'
              onClick={() => removeImage(index)}
              className='absolute top-2 right-2 rounded-full bg-black/60 p-1 text-white'
            >
              <X size={16} />
            </button>
          </div>
        ))}

        {images.length < maxImages && (
          <button
            type='button'
            onClick={() => inputRef.current?.click()}
            className='flex h-32 items-center justify-center rounded-2xl border-2 border-dashed'
          >
            <Plus />
          </button>
        )}
      </div>
    </div>
  );
};
