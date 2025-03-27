import { PropsWithChildren } from "react";

export const HeadingOne = (props: PropsWithChildren) => {
  return (
    <h1 className="text-2xl font-semibold text-black my-6 font-inter">
      {props.children}
    </h1>
  );
};

export const HeadingTwo = (props: PropsWithChildren) => {
  return (
    <h2 className="text-xl text-gray-900 my-4 font-eudoxus-bold">
      {props.children}
    </h2>
  );
};

export const Paragraph = (props: PropsWithChildren) => {
  return (
    <p className="leading-loose my-4 text-sm font-inter">{props.children}</p>
  );
};

export const ListItem = (props: PropsWithChildren) => {
  return (
    <li className="ml-4 text-sm leading-loose">
      <span className="current ml-4 font-inter">{props.children}</span>
    </li>
  );
};
