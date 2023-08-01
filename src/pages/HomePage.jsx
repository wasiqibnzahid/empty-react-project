import { useBearStore } from "../store/example-store";
const HomePage = () => {
  const bearStore = useBearStore();

  return (
    <div>
      <h1>HomePage</h1>
      <h4>Store Example</h4>
      <div>Count is : {bearStore.bears}</div>
      <button onClick={bearStore.increasePopulation}>Increase</button>
      <button onClick={bearStore.removeAllBears}>Delete All</button>
    </div>
  );
};

export default HomePage;
