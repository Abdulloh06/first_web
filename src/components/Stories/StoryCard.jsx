import './StoriesStyle.scss';


function StoryCard({logo, text}) {

    return (
        <div className='story-card'>
            <img src={require('../../assets/icons/' + logo)} height='32px' width='112px' style={{ marginBottom: "32px" }} alt='icon' />
            <div direction='horizontal'>
                <img src={require('../../assets/images/quote.png')} style={{ height: '13px', width: '16px', alignSelf: "start" }} alt="quote" />
                <div>
                    <div style={{ fontSize: "18px"}}>
                        {text}
                    </div>
                    <div className='title'>Jane Cooper</div>
                    <div>CEO, Airbnb</div>
                </div>
            </div>
        </div>
    )

}

export default StoryCard;