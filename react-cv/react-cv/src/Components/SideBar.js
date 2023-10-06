import './SideBar.css';
import SideBarLink from './SideBarLink';

function SideBar() {
    return (
        <div className='SideBarContainer'>
            <h1>George Bell React CV</h1>
            <SideBarLink title='A bit about me' />
            <SideBarLink title='Education' />
            <SideBarLink title='Employment' />
            <SideBarLink title='Hobbies' />
            <SideBarLink title='Maybe some iFrames' />
        </div>

    );
}


export default SideBar;