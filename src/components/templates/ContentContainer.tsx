// [START templates/ContentContainer]
import { FC, ReactNode } from "react";

const ContentContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="cursor-crosshair">
      {children}
    </div>
  )
}

export default ContentContainer;
// [END templates/ContentContainer]
