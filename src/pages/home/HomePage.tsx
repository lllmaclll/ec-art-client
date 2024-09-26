import Header from '../../components/Header'
import SlideGallery from '../../components/SlideGallery'
import Category from '../../components/Category'
import FeaturedProducts from '../../components/FeaturedProducts'
import FeaturedArtists from '../../components/FeaturedArtists'
import Footer from '../../components/Footer'
import { featuredArtists, featuredProducts } from '../../mockUpdata'

function HomePage() {
  return (
    <>
    <Header />
    <SlideGallery />
    <Category />
    <br />
    <FeaturedProducts products={featuredProducts} />
    <br />
    <FeaturedArtists artists={featuredArtists} />
    <br />
    <Footer />
  </>
  )
}

export default HomePage