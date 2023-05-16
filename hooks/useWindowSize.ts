import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import {isMobile} from "react-device-detect";

export default function useWindowSize(defaultSize: number = 640) {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const isPhone = !!windowSize.width && (isMobile || windowSize.width <= defaultSize);
  const isWeb = !!windowSize.width && !isMobile && windowSize.width > defaultSize;

  useEffect(() => {
    // 定义调整窗口大小的函数
    const handleResize = debounce(() => {
      // 获取窗口的大小信息
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 500);
    handleResize();
    window.addEventListener("resize", handleResize);
    // 卸载通过 useEffect 添加的事件监听器
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [isPhone, isWeb];
}