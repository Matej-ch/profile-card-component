import './App.scss'
import ProfileCard from './ProfileCard'
import victorImage from './assets/image-victor.jpg'
import bgPatternTop from './assets/bg-pattern-top.svg'
import bgPatternBottom from './assets/bg-pattern-bottom.svg'

function App() {

    return (
        <>
            <img className='bg-pattern top' src={bgPatternTop} alt=""/>
            <ProfileCard name={'Victor Crest'}
                         age={'26'}
                         img={victorImage}
                         city={'London'}
                         statistics={{followers: '80K', likes: '803K', photos: '1.4K'}}/>
            <img className='bg-pattern bottom' src={bgPatternBottom} alt=""/>
        </>
    )
}

export default App
