import './SideBarLink.css';

function SideBarLink({ title }) {
    return (
        <div className='SideBarLinkContainer'>
            <h2 className='Title'>{title}</h2>
        </div>
    )
}
export default SideBarLink;
