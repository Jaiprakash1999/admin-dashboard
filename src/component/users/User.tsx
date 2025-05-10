import { useState } from "react";
import Pagination from "../../common-component/Pagination";
import useGetUsers from "../hooks/useGetUsers";
import SearchInput from "../../common-component/SearchInpput";

import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { users = {}, isLoading } = useGetUsers({ currentPage });
  const { data = [], per_page, total } = users || {};

  const handleChange = (e) => {
    const { value } = e.target || {};
    setQuery(value);
  };

  const filteredData = data.filter(
    (user) =>
      user.first_name.toLowerCase().includes(query.toLowerCase()) ||
      user.last_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full relative">
      <div className="w-full md:w-1/4 mb-6">
        <SearchInput
          inputValue={query}
          onChange={handleChange}
          placeholder={"search by first name & last name"}
        />
      </div>
      <DesktopView isLoading={isLoading} filteredData={filteredData} />
      <MobileView isLoading={isLoading} filteredData={filteredData} />
      <div className="mt-8 pb-8">
        <Pagination
          totalRecords={total}
          countsPerPage={per_page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default User;
