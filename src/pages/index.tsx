import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";
import { RootState } from "@/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <header className="flex bg-blue-50"></header>
      <h1>Home Page {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </main>
  );
}
