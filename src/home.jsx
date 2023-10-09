import "./App.css"
function Home(){
    return (
        <>
        <section class="first" id="Home">
            <div class="img-container">
                <img src="perez.jpg" class="profile"></img>
                <h1 class="name">JohnHesper</h1>
                 
                <center><button class="button">Learn More</button></center>
                <center><button class="button">Hire me</button></center>     
            </div>
            <div class="bio">
                <p>WebDeveloper/ WebDesigner</p>
                <p>I am a web designer and web developer with a passion for creating beautiful, user-friendly,
                     and high-performing websites. I have over 5 years of experience in the industry,
                      and I have worked on a wide range of projects, 
                      from small personal websites to large e-commerce sites.</p>
            </div>
            <div class="motto">
                <h1>Building the future, one website at a time.</h1>

            </div>
            
        </section>
        </>
    );
}
export default Home
Home()