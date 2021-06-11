import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export function FooterContainer() {
    return (
        <div className='container1'>
            <div className='wrapper'>
                <div className='row'>
                    <div className="column">
                        <h3 className='title'>AbouUs</h3>
                        <a className="link" href="#">Story</a>
                        <a className="link" href="/login">login</a>
                        <a className="link" href="#">Story</a>

                    </div>
                    <div className="column">
                        <h3 className='title'> Reservation</h3>
                        <a className="link" href="/booking" style={{ color: "black" }}>booking</a>
                        <h4 className="link" href="#"><span>Tel : </span>04555466677</h4>
                        <h4 className="link" href="#"><span>Email : </span>spandi@giaml.com</h4>

                    </div>
                    <div className="column">
                        <h3 className='title'>Services</h3>
                        <h4 className="link" href="#">Wedding</h4>
                        <h4 className="link" href="#">Birthday</h4>
                        <h4 className="link" href="#">Others</h4>

                    </div>
                    <div className="column">
                        <h3 className='title'> Social Media</h3>
                        <a className="link" href="#">
                            <FacebookIcon />
                        </a>
                        <a className="link" href="#">
                            <InstagramIcon />
                        </a>
                        <a className="link" href="#">
                            <LinkedInIcon />
                        </a>

                    </div>


                </div>
            </div>
        </div>
    )
}


