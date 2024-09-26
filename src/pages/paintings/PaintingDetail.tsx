import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function PaintingDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>PaintingDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default PaintingDetail