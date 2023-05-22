// ------ Countup
import CountUp from 'react-countup';

// ------ Intersection Observer Hook
import { useInView } from 'react-intersection-observer';

// ------ Framer Motion
import { motion } from 'framer-motion';

// ------ Variant
import { fadeIn } from '../variants';

// ------ Stat Item Type
import { statsItemType } from '../assets/constant/types';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const statsItems: statsItemType[] = [
    {
      end: 13,
      start: 0,
      text: <>Years of <br /> Experience</>,
    },
    {
      end: 15,
      start: 0,
      text: <>Projects <br /> Completed</>,
      k: 'k+'
    },
    {
      end: 12,
      start: 0,
      text: <>Satisfied <br /> Clients</>,
      k: 'k+'
    },
  ];

  return (
    <section id="about" className="section py-0" ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* ------ Image ------ */}
          <motion.div variants={fadeIn("right", 0.3)} initial='hidden' whileInView="show" 
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] min-h-[500px] mix-blend-lighten bg-center order-1 lg:order-none'></motion.div>
          {/* ------ Text ------ */}
          <motion.div  variants={fadeIn("left", 0.5)} initial='hidden' whileInView="show" 
            viewport={{once: false, amount: 0.3}} className='flex-1 text-center lg:text-start'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Font-end Developer with 5 years of experience.</h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cumque delectus nisi, similique hic numquam doloremque maiores dolorem accusamus soluta.</p>
            {/* ------ Stats ------ */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center lg:justify-start'>
              {
                statsItems.map((stat, i) => (
                  <div key={i}>
                    <div className='text-4xl font-tertiary text-gradient mb-2'>
                      {
                        inView ?
                        <>
                          <CountUp start={stat.start} end={stat.end} duration={3} /> 
                          {stat.k}
                        </> : null
                      }
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>
                      {
                        inView ? stat.text : null
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About