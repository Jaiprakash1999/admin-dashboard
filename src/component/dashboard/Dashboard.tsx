import Skeleton from "react-loading-skeleton";
import useGetUsers from "../hooks/useGetUsers";

// Define the shape of each stat item
type Stat = {
  title: string;
  value: number;
};

const Dashboard = () => {
  const currentPage = 1;
  const { users = { data: [] }, isLoading } = useGetUsers({ currentPage });

  const totalUsers: number = users?.data?.length ?? 0;
  const activeUsers: number = users?.data?.length ?? 0;

  const stats: Stat[] = [
    { title: "Total Users", value: totalUsers },
    { title: "Active Users", value: activeUsers },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item, index) => {
        const { title, value } = item;
        return (
          <div
            key={index}
            className="flex p-5 flex-shrink-0 flex-col text-center justify-center items-center"
            style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
          >
            <div>{title}</div>
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
