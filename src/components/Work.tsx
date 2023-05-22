// ------ Motion
import {motion} from 'framer-motion';

// ------ Variant
import { fadeIn } from '../variants';

// ------ Images
import img1 from "../assets/imgs/portfolio-img1.png";
import img2 from "../assets/imgs/portfolio-img2.png";
import img3 from "../assets/imgs/portfolio-img3.png";
import { workItemType } from '../assets/constant/types';

const workItems: workItemType[] = [
  {
    title: "Project Title",
    preTitle: "UI/UX Design",
    imgSrc: img1
  },
  {
    title: "Project Title",
    preTitle: "UI/UX Design",
    imgSrc: img2
  },
  {
    title: "Project Title",
    preTitle: "UI/UX Design",
    imgSrc: img3
  },
]

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* ------ Text ------ */}
          <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show"
            className='text-center lg:text-start flex-1'
          >
            <h2 className="h2 leading-tight text-accent">
              My latest <br /> Work.
            </h2>
            <p className='max-w-sm mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quae officia sint blanditiis molestias possimus dolorum dicta! Omnis, vel architecto.</p>
            <button className="btn btn-sm">View all projects</button>
          </motion.div>
          {
            workItems.map((work, i) => (
              /* ------ Images ------ */
              <motion.div variants={fadeIn("up", (0.3 + 0.2 * i))} initial="hidden" whileInView="show"
                className='group relative overflow-hidden border-2 border-white/50 rounded-xl flex-1' key={i}
              >
                {/* --- Overlay --- */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300'></div>
                {/* --- Image --- */}
                <img src={work.imgSrc} alt="work image" className='group-hover:scale-125 transition-all duration-500' />
                {/* --- Pretitle --- */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                  <span className="text-gradient">{work.preTitle}</span>              
                </div>
                {/* --- Title --- */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
                  <span className='text-3xl text-white'>{work.title}</span>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work;