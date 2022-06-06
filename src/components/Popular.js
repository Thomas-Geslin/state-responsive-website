import PopularTitle from './Popular/PopularTitle'
import PopularCard from './Popular/PopularCard'

function Popular ({ darkTheme }) {
    return (<div className='popular'><PopularTitle darkTheme={darkTheme} /><PopularCard darkTheme={darkTheme} /></div>)
}

export default Popular