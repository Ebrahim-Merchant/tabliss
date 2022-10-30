import { FC, useEffect } from "react";

const iFrame: FC<any> = ({ data }) => {
  useEffect(() => {
    const style = document.createElement("iframe");

    style.id = "CustomIframe";
    style.src = "https://google.com"
    style.width = "400px"
    style.width = "400px"

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default iFrame;
