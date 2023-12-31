import './SideBar.css';
import { FaBars } from 'react-icons/fa';
import SideBarLink from './SideBarLink';
import { useState, useEffect } from 'react';

let clicked = false;

function dropdown() {
    clicked = !clicked;
    {
        clicked && (

            <> <div className='buttonClickedContainer'>
                <SideBarLink title='A bit about me' />
                <SideBarLink title='Education' />
                <SideBarLink title='Employment' />
                <SideBarLink title='Hobbies' />
                <SideBarLink title='Maybe some iFrames' />
            </div></>
        )
    }
    console.log('clicked')
}


function SideBar() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='SideBarContainer'>
            <h1>George Bell React CV</h1>
            {!showButton && (
                <><SideBarLink title='A bit about me' /><SideBarLink title='Education' /><SideBarLink title='Employment' /><SideBarLink title='Hobbies' /><SideBarLink title='Maybe some iFrames' /></>
            )}

            {showButton && (
                <button onClick={dropdown()}>
                    <FaBars className='cross-btn' />
                </button>
            )}
        </header>
    );
}

export default SideBar;