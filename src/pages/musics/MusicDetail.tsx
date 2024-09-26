import { useParams } from "react-router-dom";
import Header from "../../components/Header";


function MusicDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>MusicDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default MusicDetail