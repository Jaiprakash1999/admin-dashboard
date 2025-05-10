import Skeleton from "react-loading-skeleton";

const MobileLoading = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 mb-4 shadow-sm flex gap-4 items-center"
        >
          <Skeleton circle height={44} width={44} />
          <div className="w-full">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileLoading;
