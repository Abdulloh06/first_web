import './ManageStyles.scss';

function Manage() {
    return (
        <div className='background'>

            <div style={{marginRight:"112px"}}>
                <h1 className='m-title'>Manage all projects from<br /> your mobile</h1>
                <div className='m-sub'>Download the app to manage your projects, keep track of the<br /> progress and complete tasks without procastinating. Stay on track<br /> and complete on time!</div>

                <div className='app-text'>Get the App</div>
                <img height="40px" width='135px' onClick="" src={require('../../assets/images/google_play.png')} />
                <img style={{ marginLeft: "12px" }} height="40px" width='135px' onClick="" src={require('../../assets/images/app_store.png')} />

            </div>

            <img width="40%" src={require('../../assets/images/phones.png')}/>
        </div>
    )
}

export default Manage;