import { Skeleton } from "@/components/ui/skeleton";

const CustomSkeleton = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col mt-4 pb-32">
          <ul className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-full max-w-xl mx-auto rounded-2xl p-6"
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomSkeleton;
