import './FeaturesStyle.scss';

function FeatureCard() {

    const itemList = [
        {
            icon: 'robust.svg',
            title: "Robust workflow",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
        },

        {
            icon: 'flexibility.svg',
            title: "Flexibility",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",

        },

        {
            icon: 'user_friendly.svg',
            title: "User friendly",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",

        },

    ];

    const secondItemList = [
        {
            icon: 'multiple_layouts.svg',
            title: "Multiple layouts",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
        },

        {
            icon: 'better_components.svg',
            title: "Better components",
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.`,
        },

        {
            icon: 'well_organised.svg',
            title: "Well organised",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
        },
    ];

    return (
        <div>
            <div className='grid'>
                {
                    itemList.map((item, i) => <div key={i} className='item'>
                        <img src={require("../../assets/icons/" + item.icon)} style={{alignSelf : "center"}} alt='item_icom' />
                        <h1 className='title'>{item.title}</h1>
                        <h5 className='subtitle'>{item.subtitle}</h5>
                    </div>)
                }
            </div>
            <div className='grid'>
                {
                    secondItemList.map((item, i) => <div key={i} className='item'>
                        <img src={require("../../assets/icons/" + item.icon)} style={{alignSelf : "center"}} alt='item_icom' />
                        <h1 className='title'>{item.title}</h1>
                        <h5 className='subtitle'>{item.subtitle}</h5>
                    </div>)
                }
            </div>
        </div>
    )

}

export default FeatureCard;