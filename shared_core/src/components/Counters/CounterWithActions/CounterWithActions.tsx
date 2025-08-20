import React, { useEffect, useState } from "react";

import { CounterWithActionsProps } from "@src/entities/props";

import "@src/components/Counters/CounterWithActions/CounterWithActions.css";

export const CounterWithActions = ({
  className,
  limit,
  onChange,
}: CounterWithActionsProps) => {
  const [count, setCount] = useState<number>(1);

  const handleClickMinus = () => {
    setCount((state) => {
      if (state === 1) return 1;
      return state - 1;
    });
  };

  const handleClickPlus = () => {
    setCount((state) => {
      if (limit && state === limit) return limit;
      return state + 1;
    });
  };

  const onCountChange = () => {
    onChange(count);
  };

  useEffect(onCountChange, [count]);

  return (
    <div className={`counter-with-actions ${className}`}>
      <button
        className="counter-with-actions__action"
        onClick={handleClickMinus}
        aria-label="action minus"
      >
        &minus;
      </button>

      <h2 className="counter-with-actions__count">{count}</h2>

      <button
        className="counter-with-actions__action"
        onClick={handleClickPlus}
        aria-label="action plus"
      >
        &#x2B;
      </button>
    </div>
  );
};
