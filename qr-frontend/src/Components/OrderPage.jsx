import { useParams } from "react-router";
import QRCodeDisplay from "./QRCodeDisplay";

function OrderPage() {
  const { tableId } = useParams();
  return (
    <div>
      <h1>Table {tableId}</h1>
      <QRCodeDisplay tableId={tableId} />
    </div>
  );
}
export default OrderPage;
