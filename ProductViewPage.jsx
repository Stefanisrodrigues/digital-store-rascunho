import Layout from "../components/Layout"
import BuyBox from "../components/BuyBox"
import Gallery from "../components/Gallery"


const ProductViewPage = () => {
  return (
    <Layout>
        <div id="ProductViewPage">
          <Gallery/>
          <BuyBox/>
        </div>
    </Layout>
  
  )
}

export default ProductViewPage