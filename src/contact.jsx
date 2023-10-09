import "./App.css"
function Contact() {
    return (
        <>
            <section class="third" id="Contact">
                <h1 class="cont">Dont worry for contact i`m available</h1>
                <h1 class="cont">If Not Now, When? Contact ME NOW!</h1>
                <div class="third-container">
                    
                    <div class="dic2">
                        <form action="action_page.php">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                            <input type="submit" value="Submit"></input>

                        </form>
                        
                    </div>
                   
                </div>
                
            </section>
        </>
    );
}
export default Contact
Contact()