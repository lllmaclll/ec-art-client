import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function PhotographyDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>PhotographyDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default PhotographyDetail