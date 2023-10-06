import './SideBar.css';
import SideBarLink from './SideBarLink';

function SideBar() {
    return (
        <div className='SideBarContainer'>
            <h1>George Bell React CV</h1>
            <SideBarLink title='A bit about me' />
            <hr />
            <SideBarLink title='Education' />
            <hr />
            <SideBarLink title='Employment' />
            <hr />
            <SideBarLink title='Hobbies' />
            <hr />
            <SideBarLink title='Maybe some iFrames' />
        </div>

    );
}
export default SideBar;
