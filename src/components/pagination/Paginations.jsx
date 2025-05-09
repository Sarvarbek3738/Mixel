import React from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import "./Paginations.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const Paginations = ({ handlePageChange, totalPages, currentPage }) => {
  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      pageSize={1}
      onChange={handlePageChange}
      prevIcon={
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <GrPrevious /> orqaga
        </span>
      }
      nextIcon={
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          oldinga
          <GrNext />
        </span>
      }
    />
  );
};

export default Paginations;
