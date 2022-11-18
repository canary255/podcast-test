export const fetchData = async (url, setData, setFilteredData, signal) => {
  return fetch(url, { signal: signal })
    .then((response) => response.json())
    .then((data) => {
      setData(() => {
        return data.feed.entry;
      });

      setFilteredData(() => {
        return data.feed.entry;
      });
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Successfully aborted operation");
      } else {
        console.log("error", error);
      }
    });
};
