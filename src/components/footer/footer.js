import React from "react";

const Footer = ()=>{
    return(<footer>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <p className="copyright">© Copyright 2021 <a
                            href="https://catherinezgouras.com">catherinezgouras.com</a></p>
                    </div>
                    <div className="col-md-6 col-xs-12">

                        <ul className="social">
                            <li><a className="linkedin fa fa-linkedin" target='_blank' href="https://www.linkedin.com/in/catherinezgouras/"/>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer