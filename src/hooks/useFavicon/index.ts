import * as React from "react";
import useDisplayDevError from "../useDisplayDevError";
/**
 * 
 * @param href favicon 的地址
 */
 const ImgTypeMap = {
  SVG: 'image/svg+xml',
  ICO: 'image/x-icon',
  GIF: 'image/gif',
  PNG: 'image/png',
};

type ImgTypes = keyof typeof ImgTypeMap;

const useFavicon: (href: string) => void  = (href) => {
  const dispatchError = useDisplayDevError()

  React.useEffect(() => {
    if (!href) {
      dispatchError("请确认有效图片作为favicon");
      return;
    }
    const cutUrl = href.split('.');
    const imgSuffix = cutUrl[cutUrl.length - 1].toLocaleUpperCase() as ImgTypes;
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = ImgTypeMap[imgSuffix];
    link.href = href;
    link.rel = "shortcut icon"
  }, [href])

  
  
}

export default useFavicon;