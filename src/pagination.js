import React, { useEffect, useState } from "react";

const PaginationCompo = () => {
  const [album, setAlbum] = useState();
  const [totalPages, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        if (data.length % 10 === 0) {
          setTotalPage(data.length / 10);
        } else setTotalPage(data.length / 10 + 1);
      });
  }, []);
  return (
    <>
      <div
        style={{ display: "flex", minWidth: "100vw", justifyContent: "center" }}
      >
        <table>
          <tr>
            <th>Album Title</th>
          </tr>
          {album
            ?.slice((currentPage - 1) * 10, currentPage * 10)
            .map((item, ind) => (
              <tr>
                <td>{item.title}</td>
              </tr>
            ))}
        </table>
      </div>
      <div
        style={{
          minWidth: "100vw",
          justifyContent: "center",
          display: "flex",
          marginTop: "1em",
        }}
      >
        <button
          onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <p style={{ minWidth: "4em", textAlign: "center", margin: 0 }}>
          {currentPage}
        </p>
        <button
          onClick={() =>
            currentPage < totalPages && setCurrentPage((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default PaginationCompo;
