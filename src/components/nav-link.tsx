import React from "react";

interface NavLinkProps extends React.ComponentProps<"a"> {
  children: String;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
