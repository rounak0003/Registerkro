import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  return (
    <>
      <section className="footer text-gray-200" style={{backgroundColor : "#011B5B"}}>
        <div className="lg:container mx-auto p-5">
          <footer className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/3 lg:w-1/5 p-3">
              <p>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
              <div className="flex flex-row gap-2 text-xl mt-3">
                <FaFacebook />
                <FaGoogle />
                <FaApple />
                <FaInstagram />
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 p-3">
              <h3 className="text-md font-semibold text-orange-400 mb-4">START A BUSINESS</h3>
              <ul className="flex flex-col gap-2">
                <li><a href="#">Features</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Solutions</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 p-3">
              <h3 className="text-md font-semibold text-orange-400 mb-4">GOVERNMENT REGISTRATION</h3>
              <ul className="flex flex-col gap-2">
                <li><a href="#">Partners</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">App</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 p-3">
              <h3 className="text-md font-semibold text-orange-400 mb-4">COMPLIANCE & TAX</h3>
              <ul className="flex flex-col gap-2">
                <li><a href="#">Channels</a></li>
                <li><a href="#">Scale</a></li>
                <li><a href="#">Watch the Demo</a></li>
                <li><a href="#">Our Competition</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 p-3">
              <h3 className="text-md font-semibold text-orange-400 mb-4">BIS & CDSCO</h3>
              <ul className="flex flex-col gap-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Media Kit</a></li>
              </ul>
            </div>

          </footer>

        <div className="text-center my-2">
          <button onClick={scrollToTop}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="#FFA229"/>
              <path d="M28 37.3331L28 19.9998M20 26.6665L27.0572 19.6093C27.5779 19.0886 28.4221 19.0886 28.9428 19.6093L36 26.6665" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
          </button>
        </div>

          <p className="text-center">&copy; 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </section>
    </>
  )
}

export default Footer