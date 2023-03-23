interface IDebounce {
  (func: any, timer?: number): (...args: any) => void;
}

export const debounce = (func: IDebounce, timer = 1000) => {
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, 1000);
  };
};
