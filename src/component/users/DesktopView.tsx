import ListLoader from "../../common-component/LoadingState";

const DesktopView = ({ isLoading = false, filteredData = [] }) => {
  return (
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
  );
};

export default DesktopView;
