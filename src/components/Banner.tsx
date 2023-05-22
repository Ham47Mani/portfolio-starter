import { socialType } from "../assets/constant/types";

// ------ Images
import Avatar from "../assets/imgs/avatar.svg";
// ------ Icons
import {FaGithub, FaYoutube, FaDribbble} from "react-icons/fa";
// ------ Type Animation
import {TypeAnimation} from "react-type-animation";
// ----- Framer Motion
import {motion} from "framer-motion";
// ------ Variants
import { fadeIn } from "../variants";

const socialItem : socialType[] = [
  {
    link: "#",
    icons: <FaGithub />
  },
  {
    link: "#",
    icons: <FaYoutube />
  },
  {
    link: "#",
    icons: <FaDribbble />
  },
]

const Banner = () => {
  return (
    <section id="home" className="section min-h-[78vh] lg:min-h-[85vh] flex items-center -mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10">
          {/* ------ Text ------ */}
          <div className="flex-1 text-center lg:text-left font-secondary">
            <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" 
              className="text-5xl font-bold lg:text-8xl"
            >
              HAMMANI <span>Bou</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" 
              className="mb-6 text-4xl lg:text-6xl font-secondary font-semibold uppercase"
            >
              <span className="text-white mr-2">I am a</span>
              <TypeAnimation repeat={Infinity} speed={50} wrapper="span"
                sequence={["Developer", 2000, "Progarmmer", 2000, "Designer", 2000]}
                className="text-accent font-extrabold"
              />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show"
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis sit, veritatis fugit sint nulla fuga veniam velit illo vitae.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.9)} initial="hidden" whileInView="show" 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </motion.div>
            {/* ------ Socials ------ */}
            <motion.div variants={fadeIn("up", 1.1)} initial="hidden" whileInView="show" 
              className='flex text-2xl gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              {
                socialItem.map((social, i) => (
                  <a href={social.link} key={i} className="text-white/50 hover:text-white">
                    {social.icons}
                  </a>
                ))
              }
            </motion.div>
          </div>
          {/* ------ Images ------ */}
          <motion.div variants={fadeIn("down", 0.3)} initial="hidden" whileInView="show"
            className="hidden lg:flex flex-1 max-w-xs lg:max-w-md"
          >
            <img src={Avatar} alt="About image" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner