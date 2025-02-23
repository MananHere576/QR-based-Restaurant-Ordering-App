import { useParams } from "react-router";

function MenuPage() {
  const { tableId } = useParams();
  return <h1>Menu Page {tableId}</h1>;
}

export default MenuPage;
