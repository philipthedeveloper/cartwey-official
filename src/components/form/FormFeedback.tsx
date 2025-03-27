import React, { PropsWithChildren } from "react";

interface FeedbackProps extends PropsWithChildren {
  type: string;
}

export const FormFeedback = ({ children }: FeedbackProps) => {
  return (
    <div className="w-full mt-0.5 text-xs text-secondary font-medium">
      {children}
    </div>
  );
};
