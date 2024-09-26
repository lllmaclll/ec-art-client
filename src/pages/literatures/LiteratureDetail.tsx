import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function LiteratureDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>LiteratureDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default LiteratureDetail