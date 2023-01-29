import * as React from 'react';
import { isNumber } from '../../functions';

type Options = {
  min?: number;
  max?: number;
};

type ValueParams = number | ((value: number) => number);

const getTargetNumber = (value: number, option: Options = {}) => {
  const { min, max } = option;

  let target = value;
  if (max && isNumber(max)) {
    target = Math.min(max, target);
  }
  if (min && isNumber(min)) {
    target = Math.max(min, target);
  }
  return target;
};

const useCounter = (
  initialNumber: number,
  { min, max }: { min: number; max: number }
) => {
  const [current, setCurrent] = React.useState(() =>
    getTargetNumber(initialNumber, { min, max })
  );
  const setNumber = (value: ValueParams) => {
    setCurrent((prev) => {
      const target = isNumber(value) ? value : value(prev);
      return getTargetNumber(target, {
        min,
        max
      })
    })
  }
  // 递增
  const inc = React.useCallback((delta = 1) => {
    setNumber((prev) => prev + delta);
  }, []);
  // 递减
  const dec = React.useCallback((delta = 1) => {
    setNumber((prev) => prev - delta);
  }, []);
  // 设置特定的数
  const set = React.useCallback((value: number) => {
    setNumber(value);
  }, []);
  // 重置
  const reset = React.useCallback(() => {
    setNumber(initialNumber);
  }, []);
  return [
    current,
    {
      inc,
      dec,
      set,
      reset,
    },
  ] as const;
};

export default useCounter;
