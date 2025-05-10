import MobileLoading from "../../common-component/MobileLoading";

// Define the structure of a user
type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Define props for the MobileView component
type MobileViewProps = {
  isLoading?: boolean;
  filteredData?: User[];
};

const MobileView = ({
  isLoading = false,
  filteredData = [],
}: MobileViewProps) => {
  return (
    <div className="md:hidden text-primary space-y-4">
      {/* Show loading state if data is being fetched */}
      {isLoading ? (
        <MobileLoading />
      ) : (
        <div className="w-full">
          {/* Render user cards if data is available */}
          {filteredData.length > 0 ? (
            filteredData.map((user) => {
              const { first_name, avatar, last_name, id, email } = user;
              return (
                <div
                  key={id}
                  className="border rounded-xl p-4 mb-4 shadow-sm flex gap-4 items-center"
                >
                  {/* User Avatar */}
                  <img
                    src={avatar}
                    alt={`avatar${id}`}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  {/* User Info */}
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
            // Show message if no data
            <div className="text-center py-4">No data found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileView;
