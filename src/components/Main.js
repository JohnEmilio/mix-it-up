import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-angle-down} from '@fortawesome/free-solid-svg-icons'


 export default function Main () {
    return (
        <main className='main'>
            <div className='main-background'>
                <div className='intro-wrapper'>
                    <h1 className="intro-header">Mix It Up!</h1>
                    <p className='intro-text'>Find your favorite cocktails, explore new recipes, and see what others are mixing up. Start <a href="/signup" className='orange-text'>mixing it up</a> today!</p>
                    {/* <div className="down-arrow"><i className="fa-solid fa-angle-down"></i></div> */}
                </div>
            </div>
        </main>
    )
 }