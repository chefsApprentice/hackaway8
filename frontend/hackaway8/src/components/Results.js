import SearchResult from "./SearchResult";

const Results = ({ data }) => {
  return data.map((entry) => {
    return <SearchResult data={entry} />;
  });
};

export default Results;
