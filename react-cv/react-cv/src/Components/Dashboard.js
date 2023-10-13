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
                    title={"Education Section"}
                    bullets={[<li>Geography: 7</li>, <li>Maths: 9</li>, <li>Further Maths: 9</li>]}
                    paragraph={["Hi, this is", <strong> A TEST</strong>]} />
                <InfoCard
                    title="A bit about me"
                    paragraph="Hi, I'm George. I'm 22 years old and an aspiring front end web developer. This has been a passion of mine for a few years now but programming itself has always been an interest of mine since I was a child. Hopefully while I progress, I can turn this page into a place where I can show off some of my developed skills and also try some new things. I'm learning to use github properly at the moment too so I will try experimental things on a seperate branch to ensure I don't completely break this website and lose all progress." />
                <ActiveCard
                    title="Completion of this site"
                    content={<ProgressCircle
                        percentage={0.8} />} />
                <ActiveCard
                    title="not sure what to put here" />
                <InfoCard
                    title={"Education Section"}
                    bullets={[<li>Geography: 7</li>, <li>Maths: 9</li>, <li>Further Maths: 9</li>]}
                    paragraph={["Hi, this is", <strong> A TEST</strong>]} />
            </div>
        </div>
    )
}

export default Dashboard;