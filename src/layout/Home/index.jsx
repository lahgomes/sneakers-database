import Header from '../../components/Header'
import Cards from '../../components/Cards'

const HomeLayout = ({ sneakers }) => {
  console.log(sneakers.data)
  return (
    <>
      <Header>The Sneakers Shop</Header>
      <Cards />
    </>
  )
}
export default HomeLayout
