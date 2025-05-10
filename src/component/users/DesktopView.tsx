import ListLoader from "../../common-component/LoadingState";

// Define the shape of a single user
type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Define the component's props
type DesktopViewProps = {
  isLoading?: boolean;
  filteredData?: User[];
};

const DesktopView = ({
  isLoading = false,
  filteredData = [],
}: DesktopViewProps) => {
  return (
    <div className="hidden text-primary md:block w-full border overflow-x-scroll border-gray-200">
      {/* Table header */}
      <div className="text-left grid grid-cols-5 gap-5 w-full p-4 items-center uppercase bg-[#F9FAFB] text-sm font-medium text-bold">
        <span></span>
        <span>ID</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
      </div>

      {/* Show loading state or user list */}
      {isLoading ? (
        <ListLoader />
      ) : (
        <div className="w-full text-primary">
          {/* Show user list if data is available */}
          {filteredData.length > 0 ? (
            filteredData.map((user) => {
              const { first_name, avatar, last_name, id, email } = user;
              return (
                <div
                  key={id}
                  className="grid grid-cols-5 gap-5 w-full border-t items-center p-2"
                >
                  <span>
                    <img
                      src={avatar}
                      alt={`avatar${id}`}
                      className="object-fill h-12 w-12 rounded-full"
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
            // Show message if no data is found
            <div className="text-center py-4">No data found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopView;
