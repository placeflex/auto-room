import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";
import { RootState } from "@/store";

// components
import { Container } from "@/components/Container";
import { Header } from "@/components/Layout/Header";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Home Page {count}</h1>

          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </Container>
      </main>
    </>
  );
}
