import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    return <button value={count} onClick={() => setCount((c) => c + 1)} >Counter {count}</button>;
}
