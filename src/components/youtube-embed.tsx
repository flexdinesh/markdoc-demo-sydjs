export default function YouTubeEmbed({ url, label }: { url: string; label: string }) {
  return (
    <div>
      <iframe
        style={{ width: "60%", aspectRatio: "16 / 9" }}
        src={url}
        title={label}
        frame-border="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
