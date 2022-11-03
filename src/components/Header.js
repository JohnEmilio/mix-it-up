import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header () {
    return (
        <header>
            <div className="header-content">
                <div className='header-logo'>
                    <i className="fa-solid fa-martini-glass-citrus"></i>
                    <h3 className="header-title">Mix It Up Cocktails</h3>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="list-item"><a href="/">Home</a></li>
                        <li className="list-item"><a href="/signup">Sign Up</a></li>
                        <li className="list-item"><a href="/dashboard">My Mixes</a></li>
                        <li className="list-item"><a href="/login">Login</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}