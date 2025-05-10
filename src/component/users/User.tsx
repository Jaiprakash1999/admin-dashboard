import { useState } from "react";
import Pagination from "../../common-component/Pagination";
import useGetUsers from "../hooks/useGetUsers";
import SearchInput from "../../common-component/SearchInpput";

import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  // add other fields as needed
};

type UserResponse = {
  data: User[];
  per_page: number;
  total: number;
};

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { users = {}, isLoading, error } = useGetUsers({ currentPage });

  const { data = [], per_page = 6, total = 0 } = (users || {}) as UserResponse;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target || {};
    setQuery(value);
  };

  const filteredData = data.filter(
    (user: { first_name: string; last_name: string }) =>
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
      {!error ? (
        <>
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
        </>
      ) : (
        error
      )}
    </div>
  );
};

export default User;
