import AchievementItem from './AchievementItem';

function Achievements() {

    return (

        <div style={{ marginBottom: "91px", marginTop: "91px", marginLeft: "112px", }}>
            <div className='a-grid' style={{ whiteSpace: "nowrap", alignItems: "space-between" }}>

                <div>
                    <div style={{ textAlign: "start" }} className='feature-title'>Our 18 years of<br />achievements</div>
                    <div style={{ textAlign: "start" }} className='feature-subtitle'>With our super powers we have reached this</div>
                </div>
                <div style={{ marginRight: "170px" }}>
                    <div style={{ marginBottom: "40px" }} className='a-grid'>
                        <AchievementItem icon='robust.svg' title='10.000+' sub='Downloads per day' />
                        <AchievementItem icon='multiple_layouts.svg' title='2 million' sub='Users' />
                    </div>
                    <div className='a-grid'>
                        <AchievementItem icon='better_components.svg' title='500+' sub='Clients' />
                        <AchievementItem icon='countries.svg' title='140+' sub='Countries' />
                    </div>
                </div>

            </div>
            <div style={{ marginTop: "100px" }} />
            <div style={{ display: "flex" }}>
                <div style={{ marginTop: "30px" }}>
                    <div style={{ textAlign: "start" }} className='feature-title'>Easy integrations<br />with 170+ tools</div>
                    <div style={{ textAlign: "start" }} className='feature-subtitle'>Connect Landify with your favourite tools that you use<br />daily and keep things on track.</div>
                </div>
                <div className="a-container">
                    <img src={require("../../assets/icons/vector.svg").default} alt='vector'/>
                    <div className='item'>
                        <div style={{display:"flex"}}>
                            <img src={require("../../assets/icons/logo1.svg").default} alt='logo1' />
                            <div style={{ marginRight: "64px" }} />
                            <img src={require("../../assets/icons/slack.svg").default} alt='slack' />
                            <div style={{ marginRight: "64px" }} />

                            <img src={require("../../assets/icons/settings.svg").default} alt='settings'/>
                            <div style={{ marginRight: "64px" }} />

                            <img src={require("../../assets/icons/green_logo.svg").default} alt='green_logo'/>
                        </div>
                        <div style={{display:"flex", marginTop:"64px", marginLeft:"64px"}}>
                            <img src={require("../../assets/icons/drop_box.svg").default} alt='drop_box'/>
                            <div style={{ marginRight: "64px" }} />
                            <img src={require("../../assets/icons/monkey_logo.svg").default} alt='monkey_logo'/>
                            <div style={{ marginRight: "64px" }} />

                            <img src={require("../../assets/icons/blue_logo.svg").default} alt=''blue_logo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Achievements;