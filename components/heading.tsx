import { Icon } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: Icon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    
      <>
  <div className="px-4 lg:px-8 flex items-center gap-x-4 mb-8">
    <div className={cn("p-3 w-fit rounded-full bg-purple-200", bgColor)}>
      <Icon className={cn("w-12 h-12 text-purple-500", iconColor)} />
    </div>
    <div>
      <h2 className="text-4xl font-semibold text-gray-800">{title}</h2>
      <p className="text-base text-gray-600">
        {description}
      </p>
    </div>
  </div>
</>
  );
};
