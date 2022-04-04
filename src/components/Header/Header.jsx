import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import './Header.css'


const Header = () => {
    const {user, logout} = useAuth()

    const logoutHandler = async () => {
        await logout();
    }

    return (
        <header className="header fixed">
            <h1 className="heading"> <Link to="/" className="link">KEEP IT</Link></h1>
            <div className="topbar_link">
                {user && <div className="header_info">{user.email}</div>}
                {user && <div onClick={logoutHandler} className="header_link link">Logout</div>}
            </div>
        </header>
    )
}

export default Header
