export const InputFilter = ({ onKeyUp }) => {
  return (
    <input
      type="text"
      id="first_name"
      className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
      placeholder="Filter podcasts..."
      onKeyUp={onKeyUp}
      required
    ></input>
  );
};
