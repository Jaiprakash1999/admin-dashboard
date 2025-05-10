import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListLoader = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-5 items-center gap-5 border-t  p-2 text-gray-700"
        >
          <Skeleton circle height={44} width={44} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ))}
    </>
  );
};

export default ListLoader;
