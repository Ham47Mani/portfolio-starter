import { servicesType } from "../assets/constant/types";

// ------ Icons
import { BsArrowUpRight } from "react-icons/bs";

// ------ Motion
import {motion} from "framer-motion";

// ------ Variant
import { fadeIn } from "../variants";

// ------ Services Data
const services: servicesType[] = [
  {
    name: "UI / UX Design",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim soluta omnis in.",
    link: "Learn More"
  },
  {
    name: "Developement",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim soluta omnis in.",
    link: "Learn More"
  },
  {
    name: "Digital Marketing",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim soluta omnis in.",
    link: "Learn More"
  },
  {
    name: "Product Branding",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim soluta omnis in.",
    link: "Learn More"
  },
]

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* ------ Text ------ */}
          <motion.div variants={fadeIn("right", 0.3)} initial='hidden' whileInView="show" 
            viewport={{once: false, amount: 0.3}}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 min-h-full text-center lg:text-start mx-auto"
          >
            <h2 className="h2 text-accent mb-6 capitalize">What i do</h2>
            <h3 className="h3 max-w-md mb-16">
            I'm a Freelance Font-end Developer with 5 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* ------ Services ------ */}
          <motion.div variants={fadeIn("left", 0.5)} initial='hidden' whileInView="show" 
            viewport={{once: false, amount: 0.3}} className="flex-1"
          >
            {/* ------ Service List ------ */}
            {
              services.map((service, i) => (
                <div key={i} className="border-b border-white/20 lg:h-32 mb-10 flex">
                  <div className="max-w-md">
                    <h4 className="text-xl tracking-wider font-primary font-semibold mb-6">{service.name}</h4>
                    <p className="font-secondary leading-tight">{service.desc}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="#" className="w-10 h-10 btn mb-10 flex justify-center items-center">
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient transition text-sm">
                      {service.link}
                    </a>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services;