import './FooterStyles.scss';

function Footer() {
    return (
        <div className='body'>
            <div className="footer">
                <div className="left">
                    <img width="32px" src={require("../../assets/images/main_logo.png")} />
                    <div style={{ marginTop: "24px", marginBottom: "12px" }} className='links'>
                        <a>Download Now</a>
                        <a>License</a>
                    </div>
                    <div style={{ marginBottom: "24px" }} className="links">
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">News</a>
                        <a href="#">Help</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="copyright">© 2021 Landify UI Kit. All rights reserved</div>
                </div>
                <div className="right">
                    <div className="get-app">Get the App</div>
                    <div className="app-links">
                        <img height="40px" width='135px' onClick="" src={require('../../assets/images/google_play.png')} />
                        <div style={{marginBottom:"16px"}}/>
                        <img height="40px" width='135px' onClick="" src={require('../../assets/images/app_store.png')} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;