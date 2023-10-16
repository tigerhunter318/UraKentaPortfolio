import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.div style={{ display: 'flex' }}>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					I'm not just a web developer, I'm an AI Expert 👍🏻 with ChatGPT, LangChain and Large Language Model.
					I have 6+ years of Web/Mobile development as a Full Stack Developer.
					And over 3 years of AI expertise, enabling me to provide comprehensive solutions for your business needs.
					I specialize in developing GPT applications using Python and advanced technologies like Langchain, LLM, Pinecone, Weaviate, and FAISS.
					This allows me to create intelligent applications 📱 that meet your specific requirements. 💉
					I can automate processes 🏧 and integrate systems using the ChatGPT API and Python-based solutions.
					With my experience in integrating ⛑OpenAI's ChatGPT and GPT 4 API, I can ensure smooth user interactions.
					I also have the ability to design problem sets for various AI use cases, 💪🏻 providing tailored solutions for your business goals.
					😃Overall, I offer services in developing GPT applications, automation, system integration, and prompt engineering to help your business succeed with AI technology.
				</motion.p>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					<img
						src={"public/1.jpg"}
						alt="web-development"
						className="w-16 h-16 object-contain myphoto"
					/>
				</motion.p>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
