import Header from '../../components/Header'
import FeaturedArtists from '../../components/FeaturedArtists'
import FeaturedProducts from '../../components/FeaturedProducts'
import { Typography } from '@mui/material'
import { featuredArtists, featuredProducts } from '../../mockUpdata'

function TattooPage() {
  return (
    <>
      <Header />
      <Typography variant="h3" sx={{ p: 2, ml: 25, mr: 25, borderBottom: '1px solid lightgray', color: 'darkblue' }}>Tattoo</Typography>
      <FeaturedArtists artists={featuredArtists} />
      <br />
      <FeaturedProducts products={featuredProducts} />
    </>
  )
}

export default TattooPage