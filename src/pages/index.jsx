import HomeLayout from '../layout/Home'

const Home = ({ sneakers }) => {
  return <HomeLayout sneakers={sneakers} />
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://www.thesneakerdatabase.com/api/newReleases`,
  )
  const sneakers = await response.json()

  return {
    props: { sneakers },
  }
}

export default Home
