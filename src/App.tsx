import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <div className="text-ellipsis text-red-600">Hello world</div>;
}

export default App;
