import { FaGithub } from 'react-icons/fa'
import './footer.css'
function Footer() {
    return (
        <footer className="custom">
            <p className='foot'>Created by Vincenzo Atnonino Lisitano  © 2025</p>
            <div className="git">
                <FaGithub className='git-icon' /><a className='gitA' href="https://github.com/vincilisi">GitHub</a>
            </div>
        </footer>
    )
}
export default Footer