import './HomeStyle.scss';
import CustomNavbar from '../Navbar/CustomNavbar';
import LogoCarousel from '../LogoCarousel/LogoCarousel';

import phone from '../../assets/images/phone.png'
import playIcon from '../../assets/icons/play_icon.svg';


function HomeWidget() {

    return (
        <div>
            <div style={{ marginBottom: "92px" }}>
                <CustomNavbar />
            </div>

            <div style={{ marginLeft: "112px", marginRight:"196px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{ alignSelf: "center"}}>
                        <h1 className='title'>The easiest way to<br />manage projects</h1>
                        <div className='subtitle'>From the small stuff to the big picture, organizes the work so teams know<br />what to do, why it matters, and how to get it done.</div>
                        <div style={{textAlign:"start"}}>
                            <button className="button">Get Started</button>
                            <button className="button-tr"> <div><center style={{textAlign:"start"}}>
                                <img src={playIcon} style={{marginRight:'10px', alignSelf:"start"}}/>Watch video</center></div></button>
                        </div>
                    </div>
                    <img src={phone} height="640px" width="320px" alt='' />
                </div>
            </div>
            <div style={{width:"80%", marginTop: "115px", marginLeft:"10%", marginBottom: "100px"}}>
                <LogoCarousel/>
            </div>
        </div>

    );

}

export default HomeWidget;