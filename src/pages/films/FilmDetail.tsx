import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function FilmDetail() {
  const { productId } = useParams();  // ดึง productId จาก URL
  return (
    <>
      <Header />
      <div>FilmDetail</div>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default FilmDetail