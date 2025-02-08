import SearchResult from "./SearchResult";

const Results = ({ data, ai }) => {
  // return <></>;

  // if (data == null) return null;

  return data.map((entry, i) => {
    return (
      <>
        {" "}
        {ai != null ? (
          <SearchResult data={entry} ai={ai[i]} />
        ) : (
          <SearchResult
            data={entry}
            ai={{ verified: false, name: "loading" }}
          />
        )}
      </>
    );
  });
};

export default Results;
