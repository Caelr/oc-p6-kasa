import Banner from '../components/Banner'
import Listing from '../components/Listing'
import image from '/home.jpg?url'

export default function Home() {
  return (
    <>
      <Banner image={image} title="Chez vous, partout et ailleurs" />
      <Listing />
    </>
  )
}
