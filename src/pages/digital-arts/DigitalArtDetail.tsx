import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function DigitalArtDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>DigitalArtDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default DigitalArtDetail