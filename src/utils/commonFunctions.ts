type Func = (...args: any[]) => any;

export function debounce<F extends Func>(func: F, delay: number): F {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: Parameters<F>) {
    const context = this;

    clearTimeout(timeoutId as ReturnType<typeof setTimeout>);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  } as F;
}
