import { Typography } from '@mui/material'
import FeaturedArtists from '../../components/FeaturedArtists'
import FeaturedProducts from '../../components/FeaturedProducts'
import Header from '../../components/Header'
import { featuredArtists, featuredProducts } from '../../mockUpdata'

function SculpturePage() {
  return (
    <>
      <Header />
      <Typography variant="h3" sx={{ p: 2, ml: 25, mr: 25, borderBottom: '1px solid lightgray', color: 'darkblue' }}>Sculpture</Typography>
      <FeaturedArtists artists={featuredArtists} />
      <br />
      <FeaturedProducts products={featuredProducts} />
    </>
  )
}

export default SculpturePage