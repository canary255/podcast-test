export const CardWithAvatar = () => {
  return (
    <div class="container mx-auto px-3 py-16">
      <div className="relative shadow-lg w-72 h-32">
        <div className="absolute flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg"
            alt="Album"
          />
        </div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-center">Elysium</p>
          <p class="text-slate-500 text-center ">Author: Stratovarius</p>
        </div>
      </div>
    </div>
  );
};
