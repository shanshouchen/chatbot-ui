import {DependencyList, EffectCallback, useEffect, useState} from "react";

export default function useOnceEffect(callback: EffectCallback, deps?: DependencyList) {
  const [data] = useState(null);

  useEffect(() => {
    if (data === null) {
      return callback();
    }
  }, [data]);
}