import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, bgColor = "bg-transparent", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-8 md:h-10 rounded-[50px] px-3 border-none outline-none",
          bgColor,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
