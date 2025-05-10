import Skeleton from "react-loading-skeleton";
import useGetUsers from "../hooks/useGetUsers";

const Dashboard = () => {
  const currentPage = 1;
  const { users = {}, isLoading } = useGetUsers({ currentPage });
  const { data = [] } = users || {};
  const totalUsers = data.length || 0;
  const activeUsers = data.length || 0;
  const stats = [
    { title: "Total Users", value: totalUsers },
    { title: "Active Users", value: activeUsers },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item) => {
        const { title, value } = item || {};
        return (
          <div
            className="flex p-5 flex-shrink-0 flex-col text-center justify-center items-center"
            style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
          >
            <div className="">{title} </div>
            <div className="text-[#6C8BFC] font-semibold text-lg mt-3">
              {isLoading ? <Skeleton width={100} /> : value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
