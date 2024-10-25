// components/AboutPage.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const AboutPage = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Section d'introduction */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="mb-20"
			>
				<motion.h1
					className="text-5xl font-light mb-8"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					About Me
				</motion.h1>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
					variants={fadeInUp}
				>
					<div className="space-y-6">
						<p className="text-lg text-gray-600">
							Hey! I'm Hugo, a passionate Full-Stack Developer with a unique
							background in healthcare technology. My journey combines my love
							for coding with my dedication to making a positive impact in
							healthcare.
						</p>
						<p className="text-lg text-gray-600">
							With experience in both tech and healthcare sectors, I bring a
							distinctive perspective to creating solutions that matter.
						</p>
					</div>
					<motion.div
						className="relative h-[400px] rounded-lg overflow-hidden"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
					>
						<img
							src="/images/profile/main-photo.jpg"
							alt="Working on projects"
							className="object-cover w-full h-full"
						/>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Section Tech Passion */}
			<motion.section
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="mb-20"
			>
				<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						className="relative h-[300px] rounded-lg overflow-hidden"
						variants={fadeInUp}
					>
						<img
							src="/images/profile/coding.jpg"
							alt="Coding session"
							className="object-cover w-full h-full"
						/>
					</motion.div>
					<motion.div className="space-y-6" variants={fadeInUp}>
						<h2 className="text-3xl font-light mb-4">Tech Passion</h2>
						<p className="text-lg text-gray-600">
							My fascination with technology started early. I love building
							solutions that solve real-world problems. From web applications to
							cloud infrastructure, I enjoy the entire development process.
						</p>
						<ul className="space-y-3 text-gray-600">
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								Full-Stack Development
							</li>
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								Cloud Architecture
							</li>
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								DevOps Practices
							</li>
						</ul>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Section Healthcare */}
			<motion.section
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="mb-20"
			>
				<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						className="space-y-6 order-2 md:order-1"
						variants={fadeInUp}
					>
						<h2 className="text-3xl font-light mb-4">Healthcare Impact</h2>
						<p className="text-lg text-gray-600">
							My experience in healthcare has shown me the incredible potential
							of technology to improve patient care and medical processes. I'm
							passionate about creating solutions that make healthcare more
							accessible and efficient.
						</p>
						<ul className="space-y-3 text-gray-600">
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								Healthcare Technology
							</li>
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								Medical Systems Integration
							</li>
							<li className="flex items-center gap-2">
								<span className="w-2 h-2 bg-gray-400 rounded-full"></span>
								Patient Care Solutions
							</li>
						</ul>
					</motion.div>
					<motion.div
						className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2"
						variants={fadeInUp}
					>
						<img
							src="/images/profile/healthcare.jpg"
							alt="Healthcare technology"
							className="object-cover w-full h-full"
						/>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Section Interests */}
			<motion.section
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-3 gap-8"
			>
				{[
					{
						title: 'Innovation',
						image: '/images/profile/innovation.jpg',
						description: 'Always exploring new technologies and methodologies',
					},
					{
						title: 'Collaboration',
						image: '/images/profile/collaboration.jpg',
						description:
							'Building strong relationships with teams and stakeholders',
					},
					{
						title: 'Growth',
						image: '/images/profile/growth.jpg',
						description: 'Continuous learning and professional development',
					},
				].map((item, index) => (
					<motion.div
						key={item.title}
						className="group relative overflow-hidden rounded-lg"
						variants={fadeInUp}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						transition={{ delay: index * 0.2 }}
					>
						<div className="relative h-[400px]">
							<img
								src={item.image}
								alt={item.title}
								className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-75" />
							<div className="absolute inset-0 p-6 flex flex-col justify-end">
								<h3 className="text-white text-xl font-medium mb-2">
									{item.title}
								</h3>
								<p className="text-gray-200">{item.description}</p>
							</div>
						</div>
					</motion.div>
				))}
			</motion.section>
		</div>
	);
};

export default AboutPage;
