export const Loading = () => {
  return (
    <span className="flex h-6 w-6 static">
      <span className="top-5 right-10 animate-ping absolute inline-flex h-6 w-6 rounded-full bg-sky-400 opacity-75"></span>
      <span className="absolute top-5 right-10 inline-flex rounded-full h-6   w-6 bg-sky-500"></span>
    </span>
  );
};
