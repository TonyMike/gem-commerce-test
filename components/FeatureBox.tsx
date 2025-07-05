import { ReactNode } from 'react';

const FeatureBox = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-x-5">
      {icon}
      <div className="flex-1 ">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-dary-blue mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-grey max-w-[18rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBox;
