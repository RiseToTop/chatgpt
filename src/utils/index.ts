type CallbackFunction<T> = (...args: T[]) => void;

export function useDebounce<T>(
  callback: CallbackFunction<T>,
  delay: number
): CallbackFunction<T> {
  let timeout: NodeJS.Timeout;

  return function debouncedCallback(...args: T[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// 设置 localStorage 的函数
export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

// 读取 localStorage 的函数
export function getLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function getLastFourElements(
  array: {
    role: string;
    content: string;
  }[]
) {
  // 如果数组长度小于等于 4，直接返回整个数组
  if (array.length <= 4) {
    return array;
  } else {
    // 如果数组长度大于 4，返回倒数 4 个元素
    return array.slice(-4);
  }
}
