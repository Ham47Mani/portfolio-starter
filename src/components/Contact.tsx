// ------ Motion
import {motion} from "framer-motion";

// ------- Variant
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <footer id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* ------ Text ------ */}
          <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xm uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-4xl lg:text-7xl leading-none mb-12">Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* ------ Form ------ */}
          <motion.form action=""  variants={fadeIn("left", 0.5)} initial="hidden" whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center"
          >
            <input type="text" placeholder="Your Name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input type="email" placeholder="Your email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea placeholder="Your message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            ></textarea>
            <button className="btn btn-lg lg:mr-auto">Send message</button>
          </motion.form>
        </div>
      </div>
    </footer>
  )
}

export default Contact;