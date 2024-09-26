import Header from '../../components/Header'
import FeaturedProducts from '../../components/FeaturedProducts'
import FeaturedArtists from '../../components/FeaturedArtists'
import { Typography } from '@mui/material'
import { featuredArtists, featuredProducts } from '../../mockUpdata'

function PaintingPage() {

  return (
    <>
      <Header />
      <Typography variant="h3" sx={{ p: 2, ml: 25, mr: 25, borderBottom: '1px solid lightgray', color: 'darkblue' }}>Painting</Typography>
      <FeaturedArtists artists={featuredArtists} />
      <br />
      <FeaturedProducts products={featuredProducts} />
    </>
  )
}

export default PaintingPage