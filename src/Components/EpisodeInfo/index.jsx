export const EpisodeInfo = ({ title, description, src, type }) => {
  return (
    <div className="shadow-lg w-full p-4">
      <p className="ml-2 font-bold text-2xl">{title}</p>
      <div
        className="ml-2 mt-1 mb-8 italic"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <audio controls>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
