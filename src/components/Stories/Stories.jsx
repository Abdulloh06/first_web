import './StoriesStyle.scss';
import quote from '../../assets/images/quote.png';
import StoryCard from './StoryCard';

function Stories() {

    return (
        <div className='story-stack'>
            <img src={quote} className='quote' alt='quote' />

            <div className='column'>
                <div style={{width:"80%"}}>
                    <h1 className='title'>Real Stories from Real<br />Customers</h1>
                    <span className='sub'>Get inspired by these stories.</span>

                    <div style={{ marginTop: "64px", marginLeft: "104px", maxWidth:"75%"}}>
                        <StoryCard
                            logo='hubspot.svg'
                            text="To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
                        />
                    </div>
                </div>
                <div style={{ marginLeft: "32px" }}>
                    <StoryCard
                        logo="airbnb.svg"
                        text='I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.'
                    />
                    <div style={{ marginTop: "32px" }} />

                    <StoryCard
                        logo='strapi.svg'
                        text="Landify saved our time in designing my company page."
                    />
                </div>
            </div>
        </div>
    );

}

export default Stories;