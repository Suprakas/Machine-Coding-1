export default function Pagination({ pageNo, setPageNo }) {
  const prevThreeNoArray = Array.from(
    {
      length: 3,
    },
    (_, index) => pageNo - 1 - index,
  )
    .filter((value) => value > 0)
    .reverse();

  const nextFourNoArray = Array.from(
    {
      length: 4,
    },
    (_, index) => pageNo + index,
  );
  const paginationArray = [...prevThreeNoArray, ...nextFourNoArray];
  console.log(paginationArray);
  const handleNext = () => {
    return setPageNo(pageNo + 1);
  };

  const handleBack = () => {
    return setPageNo(pageNo - 1);
  };
  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div className="page-btn" onClick={handleBack}>
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArray.map((value, index) => {
        return (
          <div
            key={index}
            className={value === pageNo ? `page-btn active` : `page-btn`}
            onClick={() => setPageNo(value)}
          >
            {value}
          </div>
        );
      })}
      <div className="page-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
