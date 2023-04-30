import '../assets/../css/about.css';
import video from '../assets/../images/video.mp4'


function About() {
  return (
    <main>
        <div class="about">
            <div class="about-us">
                <card>
                    <h2>ABOUT</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </card>
                <video autoPlay muted>
                     <source src={video} type="video/mp4"/>
                </video>
                
            </div>
            <div class="visit">
                {/* <iframe src="https://picsum.photos/300/150" sandbox="" style="order: 1"></iframe> */}
                <card>
                    <h2>You can also visit them</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </card>
            </div>
        </div>
    </main>
  );
}

export default About;