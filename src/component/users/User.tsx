import { useState } from "react";
import Pagination from "../../common-component/Pagination";
import useGetUsers from "../hooks/useGetUsers";
import ListLoader from "../../common-component/LoadingState";
import SearchInput from "../../common-component/SearchInpput";

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
      <div className="w-1/4 mb-6">
        <SearchInput inputValue={query} onChange={handleChange} />
      </div>
      <div className="hidden md:block w-full border overflow-x-scroll  border-gray-200">
        <div className="text-left grid grid-cols-5 gap-5 overflow-x-scroll w-full p-4 items-center uppercase bg-[#F9FAFB] text-sm font-medium text-gray-800">
          <span className=""></span>
          <span className="">ID</span>
          <span className="">First Name</span>
          <span className="">Last Name</span>
          <span className="">Email</span>
        </div>
        {isLoading ? (
          <ListLoader />
        ) : (
          <div className="w-full">
            {filteredData.length > 0 ? (
              filteredData.map((user) => {
                const { first_name, avatar, last_name, id, email } = user || {};
                return (
                  <div
                    key={id}
                    className="grid grid-cols-5 gap-5  w-full border-t items-center p-2"
                  >
                    <span>
                      <img
                        src={avatar}
                        alt={`avator${id}`}
                        className=" object-fill h-12 w-12 rounded-full"
                      />
                    </span>
                    <span>{id}</span>
                    <span>{first_name}</span>
                    <span>{last_name}</span>
                    <span>{email}</span>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-4">No data found</div>
            )}
          </div>
        )}
      </div>
      <div className="md:hidden space-y-4">
        {data.map(({ id, first_name, last_name, email, avatar }) => (
          <div
            key={id}
            className="border rounded-xl p-4 shadow-sm flex gap-4 items-center"
          >
            <img
              src={avatar}
              alt={`avatar${id}`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-lg">
                {first_name} {last_name}
              </div>
              <div className="text-sm text-gray-600">{email}</div>
              <div className="text-xs text-gray-400">ID: {id}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-8">
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
