import MobileLoading from "../../common-component/MobileLoading";

const MobileView = ({ isLoading = false, filteredData = [] }) => {
  return (
    <div className="md:hidden space-y-4">
      {isLoading ? (
        <MobileLoading />
      ) : (
        <div className="w-full">
          {filteredData.length > 0 ? (
            filteredData.map((user) => {
              const { first_name, avatar, last_name, id, email } = user || {};
              return (
                <div
                  key={id}
                  className="border rounded-xl p-4 mb-4 shadow-sm flex gap-4 items-center"
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

export default MobileView;
