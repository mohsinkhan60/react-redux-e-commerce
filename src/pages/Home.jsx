import CastroNew from "../components/Home/CastroNew";
import Category from "../components/Home/Category";
import Collection from "../components/Home/Collection";
import Header from "../components/Home/Header";
import Instagram from "../components/Home/Instagram";
import Season from "../components/Home/Season";

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

export const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Collection />
      <Season />
      <CastroNew />
      <Instagram />
    </div>
  );
};
export default Home;
