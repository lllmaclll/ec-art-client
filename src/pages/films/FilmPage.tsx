import Header from '../../components/Header'
import FeaturedArtists from '../../components/FeaturedArtists'
import FeaturedProducts from '../../components/FeaturedProducts'
import { Typography } from '@mui/material'
import { featuredArtists, featuredProducts } from '../../mockUpdata'

function FilmPage() {
  return (
    <>
      <Header />
      <Typography variant="h3" sx={{ p: 2, ml: 25, mr: 25, borderBottom: '1px solid lightgray', color: 'darkblue' }}>Film</Typography>
      <FeaturedArtists artists={featuredArtists} />
      <br />
      <FeaturedProducts products={featuredProducts} />
    </>
  )
}

export default FilmPage