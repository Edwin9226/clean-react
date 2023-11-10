import React from "react";

export type LinkProps = {
  link: string;
  urls: string;
};

const Link: React.FC<LinkProps> = ({ link, urls }) => {
  return (
    <div>
      <a href={urls}> Read more about {link} </a>
    </div>
  );
};

export default Link;
