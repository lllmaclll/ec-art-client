import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function PerformingArtDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>PerformingArtDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default PerformingArtDetail