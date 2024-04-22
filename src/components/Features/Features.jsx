import './FeaturesStyle.scss'
import FeatureCard from './FeatureCard';

function Features() {

    return (
        <div style={{ marginTop: "96px", marginLeft: "112px", marginRight: "112px" }}>

            <div>
                <h1 className='feature-title'>Tailor-made features</h1>
                <span className='feature-subtitle'>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a <br /> document or visual presentation.</span>

                <FeatureCard/>
            </div>

        </div>
    )

}


export default Features;