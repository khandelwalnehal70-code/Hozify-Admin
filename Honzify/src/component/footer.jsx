import "./footer.css"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
      
            <div className="footer-container">
            <div className="left">
                <p>Optimistic Engineering for Modern</p>
                <p>Services. Connecting the dots between</p>
                <p>quality and convenience.</p>

                <div className="icons">
                <AiFillInstagram />
                <FaFacebook  />
                <FaLinkedin />
                
</div>

            </div>
            <div className="Foot1">
                 <span><h4>Service categories</h4>
                
                <ul>
                    <li> Home Cleaning</li>
                    <li>Electrical</li>
                    <li>Beauty & Salon</li>
                    <li>Business Solutions</li>
                </ul>
                </span>
            </div>
            <div className="Foot2">
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="Foot3">
                <h4>Resources</h4>
                <ul>
                    <li>Partner Hub</li>
                    <li>Franchise</li>
                    <li>Community</li>
                    <li>Blog</li>
                </ul>

            </div>

            <div className="Foot4">
                <h4>Newsletter</h4>

                <p>Get the latest on new Services.</p>
                <div className="news">
                <input
                    type="email"
                    placeholder="Your email"
                />
                <button className="Butt">
                    Subscribe
                </button>
                </div>
                </div>
                </div>
                <div >

                    <hr /> 
                    <div className="last">
                    <h3 >2024 Hozify.Optimistic Engineering for Modern services
                    </h3>
                    </div>
                </div>        
</footer>  
    );

}
export default Footer;