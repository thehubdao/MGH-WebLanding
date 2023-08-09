interface VideoUIProps {
    url: string;
  }
  
  export default function VideoUI({ url }: VideoUIProps) {
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