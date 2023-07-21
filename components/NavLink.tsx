import React from "react";
import Link from "next/link";

type Prop = {
  listItemName: string;
  className: string;
  href: string;
};

const NavLink = ({ listItemName, className, href }: Prop) => {
  return (
    <li>
      <Link href={href} className={className}>
        {listItemName}
      </Link>
    </li>
  );
};

export default NavLink;
