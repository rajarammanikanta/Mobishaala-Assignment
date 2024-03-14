import { Component } from 'react'
import ReactPlayer from 'react-player'
import { FaWhatsapp } from "react-icons/fa"
import './index.css'

class Home extends Component {
    render() {
        const playerRef = null
        return (
            <>
                <div className="background-container">
                    <div className='left-container'>
                        <div className='mainheading-content-container'>
                            <h1 className='main-heading'>Mobishaala</h1>
                            <p className='content'>Create your <span className='span'>Digital Classroom</span> in 5 mins for <span className='span'>FREE</span> & connect to 1+ Million Students.</p>
                        </div>
                        <div className="facts-container">
                            <ul className='list-container'>
                                <li className='list-item'>No technical knowledge required.</li>
                                <li className='list-item'>Quickly setup live class,tests,notes,ebooks and more.</li>
                                <li className='list-item'>Reach out to millions of students anywhere anytime</li>
                            </ul>
                        </div>
                        <div className='institute-container'>
                            <p className='Institute-heading'>Institute/Teacher</p>
                            <button className="get-started-button">Get Started</button>
                        </div>
                        <div className='student-container'>
                            <p className='Institute-heading'>Student</p>
                            <button className="get-started-button">Download App</button>
                            <button className='talk-to-us-button'>
                                <div className='whatsapp-icon-container'>
                                    <FaWhatsapp className='whatsapp-icon' />
                                    <p>Talk to us</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='video-player-container'>
                            <ReactPlayer ref={playerRef} url='www.youtube.com/watch?v=jg5d59ligW4' controls={true} className="video-player" />
                        </div>

                        <div>
                            <button className="get-started-button">Buy</button>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <h1 className='footer-main-heading'>Mobishaala</h1>
                    <div className='footer-inner-container'>


                        <div className='vison-and-address-container'>
                            <div className='vison-container'>
                                <p className='footer-heading'>Vision</p>
                                <p className='footer-desc'>Empower Institutions & Teachers with state of the art digital classroom Technlogy</p>
                            </div>
                            <div className='vison-container'>
                                <p className='footer-heading'>Address</p>
                                <p className='footer-desc'><span className='footer-span-heading'>Registered Office:</span> 804, 5th Cross the main, 4th Block Koramangala Bangalore, Karnataka 560034</p>
                                <p className='footer-desc'><span className='footer-span-heading'>Corporate Office:</span> 293, Westend Marg, near Saket, Saidulajab, Saket, New Delhi, 110030</p>
                            </div>
                        </div>


                        <div className='vison-container'>
                            <p className='footer-heading'>Quick Links</p>
                            <p className='footer-desc'>Blog</p>
                            <p className='footer-desc'>Andriod App</p>
                            <p className='footer-desc'>IOS App</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default Home