export const CardWithAvatar = () => {
  return (
    <div className="shadow-lg w-72 h-48">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src="https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg"
        alt="Album"
      />
      <p className="text-center">Elysium</p>
      <p class="text-slate-500 text-center">Author: Stratovarius</p>
    </div>
  );
};
