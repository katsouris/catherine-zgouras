import React from "react";

const Footer = ()=>{
    return(<footer>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <p className="copyright">© Copyright 2016 <a
                            href="http://stefanieellis.com">stefanieellis.com</a> | Headshot Images by <a
                            href="https://michaelhansonphotography.com" target="_blank">Michael Hanson</a></p>
                    </div>
                    <div className="col-md-6 col-xs-12">

                        <ul className="social">


                            <li><a className="twitter fa fa-twitter" href="https://twitter.com/stlfoodgirl"/></li>

                            <li><a className="linkedin fa fa-linkedin" href="https://www.linkedin.com/pub/stefanie-ellis/7/b44/2b"/>
                            </li>


                            <li><a className="instagram fa fa-instagram" href="https://www.instagram.com/stefanieinseattle/"/></li>


                        </ul>


                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer