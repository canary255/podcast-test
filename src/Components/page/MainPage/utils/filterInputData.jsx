export const filterInputData = (e, data) => {
  const value = e.target.value;
  return data.filter(
    (filtered) =>
      filtered["im:artist"]?.label
        .toLowerCase()
        .includes(value.toLowerCase()) ||
      filtered["im:name"]?.label.toLowerCase().includes(value.toLowerCase())
  );
};
