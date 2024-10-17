// [START components/atoms/ExternalLinkButton]
import { FC, Fragment, ReactNode } from "react";
import Link from "next/link";

export const ExternalLinkButton: FC<{ link: string, icon: ReactNode }> = ({ link, icon }) => {
  return (
    <Fragment>
      <Link href={link} target="_blank">
        {icon}
      </Link>
    </Fragment>
  )
}

// [END   components/atoms/ExternalLinkButton]
