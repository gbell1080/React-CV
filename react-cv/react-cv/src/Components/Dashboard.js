import './Dashboard.css';
import InfoCard from './InfoCard';
import ActiveCard from './ActiveCard';
import ProgressCircle from './ProgressCircle';
import JokeAPI from './JokeAPI';

function Dashboard() {
    return (
        <div className='DashboardContainer'>
            <h1>Welcome to my page!</h1>
            <div className='InfoCardContainer'>
                <InfoCard
                    title="A bit about me"
                    paragraph="Hi, I'm George. I'm 22 years old and an aspiring front end web developer. This has been a passion of mine for a few years now but programming itself has always been an interest of mine since I was a child. Hopefully while I progress, I can turn this page into a place where I can show off some of my developed skills and also try some new things. I'm learning to use github properly at the moment too so I will try experimental things on a seperate branch to ensure I don't completely break this website and lose all progress." />
                <ActiveCard
                    title="Completion of this site"
                    content={<ProgressCircle
                        percentage={0.8} />} />
                <ActiveCard
                    title="JokeAPI integration"
                    content={<JokeAPI />} />
                <InfoCard
                    title={"Key Skills"}
                    bullets={[<li>Excellent understanding of HTML, CSS, and JavaScript</li>,
                    <li>Learning ReactJS</li>,
                    <li>More than substantial knowledge of python and using it to analyse data.</li>,
                    <li>Excellent communication skills</li>,
                    <li>More than substantial knowledge of all office365 programs</li>,
                    <li>Ability to work in a team</li>,
                    <li>Able to lead a team through problems by providing multiple solutions and seeing which everyone agrees with</li>,
                    <li>Observational. I have the foresight to see and stop a problem before it happens</li>,
                    <li>Computational/logical thinking</li>,
                    <li>Completed CompTIA IT Fundamentals+</li>,
                    <li>Completed Microsft's MD-101</li>
                    ]} />
                <InfoCard
                    title="Crew Member at McDonald’s, Rock Ferry"
                    paragraph={"Responsibilities:"}
                    bullets={[<li>Cooking/preparing food for the customers quickly and consistently while keeping up with the high standards. </li>,
                    <li>Speaking to customers face to face, answering any enquiries about allergy information or even something as simple as taking an order at the till followed by taking payment.</li>,
                    <li>Cleaning very often keeping the restaurant in clean and healthy conditions, ranging from grill cleaning to mopping the floor.</li>,
                    <li>Stocking up, responding to shouts from different areas of the store then going to the appropriate storeroom to retrieve the items required.</li>
                    ]} />
                <ActiveCard
                    title="IFrame of some of the JS games I have made" />
                <ActiveCard
                    title="IFrame of some of the JS games I have made" />
                <InfoCard
                    title={"Crew Trainer at McDonald’s, Rock Ferry"}
                    paragraph={"Responsibilities:"}
                    bullets={[<li>Maintain the same responsibilities as crew member, but now have the responsibility of training new staff correctly and ensuring they are taught about all health and safety procedure and why we need to follow it.</li>,
                    <li>Also carry the responsibility of running the kitchen occasionally. This involves placing staff on stations in an efficient manor to ensure production is optimised. In addition to this I must verify that all staff have had breaks and then start preparing cleaning lists in order to maintain restaurant cleanliness.</li>,
                    <li>Handling customer complaints was another part of the added responsibility of this role. Speaking to an often angry customer in a calming manor and retrieving any additional food or drink that was not up to standard for the customer.</li>
                    ]} />
                <InfoCard
                    title={"Desktop Technician, British Library, Boston Spa"}
                    paragraph={"Responsibilities:"}
                    bullets={[<li>Responding to first line calls, helping other BL staff members get back on track with their work with no IT problems</li>,
                    <li>Setting up new computers for new starters, ensuring they are set up with the correct software and permissions</li>,
                    <li>Responding to second line calls, these require more time, effort, and investigating than the first line calls</li>,
                    <li>Creating documentation for common solutions to the problems I come accross</li>,
                    <li>Have taken on additional responsibilities such as TOPDesk Admin, responding to calls for changes to TOPDesk, also heavily involved with changing the new starter process within IT</li>,]}

                />
                <ActiveCard
                    title="IFrame of some of the JS games I have made" />
                <ActiveCard
                    title="IFrame of some of the JS games I have made" />
                <InfoCard
                />
            </div>
        </div>
    )
}

export default Dashboard;