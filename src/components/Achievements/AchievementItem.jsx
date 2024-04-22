import './AchievementsStyle.scss'

function AchievementItem({icon, title, sub}) {
    
    return (
        <div style={{display:"flex"}} className='a-item'>
            <img style={{marginRight:"16px"}} src={require('../../assets/icons/'+ icon)} alt='icon'/>
            <div>
                <div style={{fontSize:"36px", fontWeight:"bold", whiteSpace:'nowrap'}}>{title}</div>
                <div style={{fontSize:"16px"}}>{sub}</div>
            </div>
        </div>
    )

}

export default AchievementItem;