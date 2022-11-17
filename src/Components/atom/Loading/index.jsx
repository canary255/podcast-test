export const Loading = () => {
  return (
    <span class="flex h-6 w-6">
      <span class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-sky-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-6   w-6 bg-sky-500"></span>
    </span>
  );
};
