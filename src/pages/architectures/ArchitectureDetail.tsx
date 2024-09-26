import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function ArchitectureDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>ArchitectureDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default ArchitectureDetail