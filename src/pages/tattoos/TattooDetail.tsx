import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function TattooDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>TattooDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default TattooDetail