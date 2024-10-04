import CastroNew from "../components/Home/CastroNew"
import Category from "../components/Home/Category"
import Collection from "../components/Home/Collection"
import Header from "../components/Home/Header"
import Instagram from "../components/Home/Instagram"
import Season from "../components/Home/Season"


export const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Collection  />
      <Season />
      <CastroNew />
      <Instagram />
    </div>
  )
}
export default Home