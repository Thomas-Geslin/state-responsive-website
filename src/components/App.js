import Header from './Header'
import Home from './Home'
import Icons from './Icons'
import Popular from './Popular'
import Value from './Value'
import Contact from './Contact'
import GetStarted from './GetStarted'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState('light');

  return darkTheme === 'light' ? (<div className='light'><Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} /><Home /><Icons /><Popular /><Value /><Contact /><GetStarted /><Footer /><ScrollTop /></div>)

                               : (<div className='dark'><Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Icons darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Popular darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Value darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Contact darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <GetStarted darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                       <ScrollTop />
                                  </div>)
}

export default App;
