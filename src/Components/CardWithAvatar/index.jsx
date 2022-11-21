export const CardWithAvatar = ({ author, children, src }) => {
  return (
    <div className="container mx-auto px-3 py-16 mb-16">
      <div className="shadow-lg">
        <img
          className="w-auto h-auto rounded-full mx-auto transform -translate-y-1/2"
          src={src}
          alt="Album"
        />
        <div className="-mt-20">
          <p className="text-center pb-2">{children}</p>
          <p className="text-slate-500 text-center pb-4">Author: {author}</p>
        </div>
      </div>
    </div>
  );
};
