import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function SculptureDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>SculptureDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default SculptureDetail