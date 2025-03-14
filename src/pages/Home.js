import React from 'react';
import '../styles/home.css';
import usericon from '../components/user.png';
import resourceicon from '../components/resources.png';
import shareicon from '../components/share.png';
import calendaricon from '../components/calendar.png';
import fileicon from '../components/file.png';
import chaticon from '../components/chat.png';
import nexticon from '../components/next.png';
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="home">
      <div className="topsection">
        <h1>Connecting Minds,</h1>
        <h1>Building Futures</h1>
        <br />
        <p>Join Ghana's premier university collaboration. Connect with peers,</p>
        <p>share resources, and grow together</p>

        <Link to="/signin" className="JoinCommunity">Join Community</Link>
        <a href="#BrowseCourses" className="BrowseCourse">Browse Courses</a>
      </div>

      <div className="secondsection">
        <div>
          <img src={usericon} alt="Connect with Peers" className="section-icon" />
          <p>Connect with Peers</p>
        </div>
        <div>
          <img src={resourceicon} alt="Access Resources" className="section-icon" />
          <p>Access Resources</p>
        </div>
        <div>
          <img src={shareicon} alt="Share Knowledge" className="section-icon" />
          <p>Share Knowledge</p>
        </div>
      </div>

      <div className="thirdsection">
        <h2>Core Features</h2>
        <div className="innertabs-container">
          <div className="innertabs">
            <img src={chaticon} alt="Share Knowledge" className="thirdsection-icon" />
            <h4>Course Forums</h4>
            <p>Engage in course-specific</p>
            <p>discussions with students</p>
            <p>across Ghana's</p>
            <p>universities</p>
            <div className="last-line">
              <p>Browse Forums</p>
              <img src={nexticon} alt="Next" className="next-icon" />
            </div>
          </div>

          <div className="innertabs">
            <img src={fileicon} alt="Share Knowledge" className="thirdsection-icon" />
            <h4>Resource Library</h4>
            <p>Access and share lecture</p>
            <p>notes, past papers, and</p>
            <p>research materials.</p>
            <div className="last-line">
              <p>View Resources</p>
              <img src={nexticon} alt="Next" className="next-icon" />
            </div>
          </div>

          <div className="innertabs">
            <img src={usericon} alt="Share Knowledge" className="thirdsection-icon" />
            <h4>Peer Network</h4>
            <p>Connect with fellow</p>
            <p>students and find study</p>
            <p>partners for your courses.</p>
            <div className="last-line">
              <p>Find Peers</p>
              <img src={nexticon} alt="Next" className="next-icon" />
            </div>
          </div>

          <div className="innertabs">
            <img src={calendaricon} alt="Share Knowledge" className="thirdsection-icon" />
            <h4>Academic Events</h4>
            <p>Stay updated with</p>
            <p>workshops, seminars, and</p>
            <p>academic events.</p>
            <div className="last-line">
              <p>See Events</p>
              <img src={nexticon} alt="Next" className="next-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="lastsection">
        <h2>Student Experiences</h2>
        <div className="lastsection-container">
          <div className="lastsection-innertabs">
            <p>"This platform has helped me connect</p>
            <p>with students from other universities</p>
            <p>studying the same course. The shared</p>
            <p>resources are invaluable!"</p>
            <p className="experience-user"><b>Kwaku Sarpong</b></p>
            <p className="experience-paragraph">Computer Science, KNUST</p>
          </div>

          <div className="lastsection-innertabs">
            <p>"The discussion forums have been a</p>
            <p>game-changer for my studies. I can</p>
            <p>get help from peers whenever I'm</p>
            <p>stuck"</p>
            <p className="experience-user"><b>Sarah Agyemang</b></p>
            <p className="experience-paragraph">Geography, KNUST</p>
          </div>

          <div className="lastsection-innertabs">
            <p>"Being able to network with other</p>
            <p>students across Ghana has opened up</p>
            <p>so many opportunities for</p>
            <p>collaboration."</p>
            <p className="experience-user"><b>Daniel Addo</b></p>
            <p className="experience-paragraph">Business Administration, UCC</p>
          </div>
        </div>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default Home;