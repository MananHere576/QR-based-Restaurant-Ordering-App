import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
function QRCodeDisplay() {
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const { tableId } = useParams();
  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/qr/${tableId}`
        );
        setQRCodeUrl(response.data.qrCodeUrl);
      } catch (error) {
        console.error("Error fetching the QR code", error);
      }
    };
    fetchQRCode();
  }, [tableId]);
  return (
    <div>
      <h2>Scan this QR code to place your order</h2>
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt={`QR code for table ${tableId}`} />
      ) : (
        <p>Loading QR Code ....!!</p>
      )}
    </div>
  );
}
export default QRCodeDisplay;
