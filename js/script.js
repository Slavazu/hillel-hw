function counter(initialValue = 0) {
  let count = initialValue;
  let increaseCount = 0;
  let decreaseCount = 0;
  let valueCount = 0;

  const increase = () => {
    count += 1;
    increaseCount += 1;
  };

  const decrease = () => {
    count -= 1;
    decreaseCount += 1;
  };

  const value = () => {
    valueCount += 1;
    return count;
  };

  const getStatistic = () => {
    const stat = {
      increaseCount,
      decreaseCount,
      valueCount,
    };
    return stat;
  };

  const reset = () => {
    count = 0;
    increaseCount = 0;
    decreaseCount = 0;
    valueCount = 0;
  };

  return {
    increase,
    decrease,
    value,
    getStatistic,
    reset,
  };
}

const counter1 = counter();
const counter2 = counter(10);

counter1.increase();
counter1.decrease();
counter1.increase();

counter2.increase();
counter2.increase();

console.log(counter1.value());
console.log(counter2.value());

console.log(counter1.getStatistic());
console.log(counter2.getStatistic());

counter1.reset();
console.log(counter1.value());
