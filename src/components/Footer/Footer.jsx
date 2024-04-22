import './FooterStyles.scss';

function Footer() {
    return (
        <div className='body'>
            <div className="footer">
                <div className="left">
                    <img width="32px" src={require("../../assets/images/main_logo.png")} alt='main_logo'/>
                    <div style={{ marginTop: "24px", marginBottom: "12px" }} className='links'>
                        <a>Download Now</a>
                        <a>License</a>
                    </div>
                    <div style={{ marginBottom: "24px" }} className="links">
                        <a href="#about">About</a>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#news">News</a>
                        <a href="#help">Help</a>
                        <a href="#contant">Contact</a>
                    </div>
                    <div className="copyright">© 2021 Landify UI Kit. All rights reserved</div>
                </div>
                <div className="right">
                    <div className="get-app">Get the App</div>
                    <div className="app-links">
                        <img height="40px" width='135px' onClick="" src={require('../../assets/images/google_play.png')} alt='play_store'/>
                        <div style={{marginBottom:"16px"}}/>
                        <img height="40px" width='135px' onClick="" src={require('../../assets/images/app_store.png')} alt='app_store'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;