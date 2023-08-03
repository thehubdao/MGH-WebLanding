interface VideoComponentProps {
  url: string;
}

export default function VideoComponent({ url }: VideoComponentProps) {
  return (
    <iframe
      width="1471"
      height="827"
      src={url}
      title="Youtube video"
      className="rounded-[38px] mx-8"
    ></iframe>
  )
}