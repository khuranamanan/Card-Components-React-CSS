import Card from "./Card";
import { imageDetails } from "./data";
import "./index.css";

export default function App() {
  const multipleCardsMapped = imageDetails.map((item) => (
    <Card imageDetails={item} key={item.id} />
  ));

  return <div className="App">{multipleCardsMapped}</div>;
}
