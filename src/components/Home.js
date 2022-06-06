import HomeContent from './Homepage/HomeContent'

function Home({ darkTheme }) {
  return (<div className='homepage'><HomeContent darkTheme={darkTheme} /></div>);
}

export default Home;