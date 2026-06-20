type VideoProps = {
  src: string;
};

export default function Video({ src }: VideoProps) {
  return (
    <video controls className="w-full rounded-md">
      <source src={src} type="video/mp4" />
    </video>
  );
} 