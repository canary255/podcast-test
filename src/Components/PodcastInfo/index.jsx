export const PodcastInfo = ({ title, author, children, src, id }) => {
  return (
    <div className="shadow-lg w-64">
      <div className="my-auto mt-4 mb-4">
        <a href={`/podcast/${id}`}>
          <img className="w-48 h-48 mx-auto rounded" src={src} alt="Album" />
        </a>
      </div>
      <hr className="ml-3 mr-3" />
      <div className="mt-4 mb-4">
        <a href={`/podcast/${id}`}>
          <p className="ml-4 font-bold text-gray-900">{title}</p>
          <p className="ml-4 italic">by {author}</p>
        </a>
      </div>
      <hr className="ml-3 mr-3" />
      <div className="my-auto mt-4 pb-4">
        <p className="ml-2 font-bold text-gray-900 text-sm">Description:</p>
        <p
          className="ml-2 mr-2 italic text-sm"
          dangerouslySetInnerHTML={{ __html: children }}
        ></p>
      </div>
    </div>
  );
};
