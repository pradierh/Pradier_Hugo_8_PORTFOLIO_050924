'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink, Book } from 'lucide-react';
import Link from 'next/link';

interface Education {
	id: string;
	title: string;
	institution: string;
	date: string;
	location: string;
	description: string;
	skills: string[];
	badge: string;
	websiteUrl?: string;
	status: 'Completed' | 'In Progress' | 'Upcoming';
}

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
			duration: 0.8,
			ease: 'easeOut',
		},
	}),
};

const EducationSection = () => {
	const education: Education[] = [
		{
			id: 'edu-2',
			title: 'Data Engineering Program',
			institution: 'DataScientest X Mines Paris - PSL',
			date: 'February 2025 – April 2025',
			location: 'Paris, France',
			description:
				'Executive Education in Data Engineering focusing on building scalable data solutions and ETL pipelines.',
			skills: ['Data Engineering', 'Big Data', 'ETL', 'Data Architecture'],
			badge: '/images/ds.jpg',
			status: 'Upcoming',
			websiteUrl: 'https://www.minesparis.psl.eu/',
		},
		{
			id: 'edu-3',
			title: 'Cloud DevOps Engineering Program',
			institution: 'DevUniversity X Paris Sorbonne',
			date: 'February 2025 – April 2025',
			location: 'Paris, France',
			description:
				'Executive Education in Data Engineering focusing on building scalable data solutions and ETL pipelines.',
			skills: ['Data Engineering', 'Big Data', 'ETL', 'Data Architecture'],
			badge: '/images/devuniversity.jpeg',
			status: 'In Progress',
			websiteUrl: 'https://www.minesparis.psl.eu/',
		},
		{
			id: 'edu-4',
			title: 'Full-Stack Web Developer Program',
			institution: 'OpenClassrooms',
			date: 'February 2025 – April 2025',
			location: 'Paris, France',
			description:
				'Executive Education in Data Engineering focusing on building scalable data solutions and ETL pipelines.',
			skills: ['Full-Stack', 'SEO', 'React', 'Back-End'],
			badge: '/images/openclassrooms.png',
			status: 'Completed',
			websiteUrl: 'https://www.minesparis.psl.eu/',
		},
	];

	return (
		<motion.section
			className="py-32"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl font-light mb-6">Education</h2>
				</motion.div>

				{/* Timeline Container */}
				<div className="relative">
					{/* Ligne verticale with gradient */}
					<motion.div
						className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"
						style={{ zIndex: 1 }}
						initial={{ height: 0 }}
						whileInView={{ height: '100%' }}
						viewport={{ once: true }}
						transition={{ duration: 1.5, ease: 'easeOut' }}
					/>

					{/* Education Items */}
					<div className="space-y-24">
						{education.map((edu, index) => (
							<motion.div
								key={edu.id}
								className="relative py-8"
								custom={index}
								initial="initial"
								whileInView="animate"
								viewport={{
									once: true,
									margin: '-100px',
								}}
								variants={fadeInAnimationVariants}
							>
								{/* Timeline Point */}
								<motion.div
									className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
									initial={{ scale: 0, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.2,
										duration: 0.5,
										type: 'spring',
										stiffness: 200,
									}}
								>
									<div className="absolute w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
										<div className="w-4 h-4 rounded-full bg-gray-900 relative">
											<motion.div
												className="absolute inset-0 rounded-full bg-gray-900"
												animate={{
													scale: [1, 1.5, 1],
													opacity: [0.5, 0, 0.5],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: 'easeInOut',
												}}
											/>
										</div>
									</div>
								</motion.div>

								{/* Content */}
								<div
									className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
										index % 2 === 0 ? 'md:text-right' : ''
									}`}
								>
									<motion.div
										className={`group bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden
                      ${index % 2 === 0 ? 'md:order-1' : ''}`}
										initial={{
											opacity: 0,
											x: index % 2 === 0 ? 100 : -100,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										viewport={{ once: true }}
										transition={{
											duration: 0.8,
											delay: index * 0.2 + 0.4,
											type: 'spring',
											stiffness: 100,
										}}
										whileHover={{ y: -5 }}
									>
										{/* Hover gradient effect */}
										<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: index * 0.2 + 0.6,
											}}
											className="relative z-10"
										>
											<div className="flex items-start justify-between mb-4">
												<img
													src={edu.badge}
													alt={edu.institution}
													className="w-16 h-16 object-contain rounded-lg"
												/>
												<span
													className={`px-3 py-1 rounded-full text-sm ${
														edu.status === 'Completed'
															? 'bg-green-100 text-green-800'
															: edu.status === 'In Progress'
															? 'bg-blue-100 text-blue-800'
															: 'bg-yellow-100 text-yellow-800'
													}`}
												>
													{edu.status}
												</span>
											</div>

											<h3 className="text-xl font-medium mb-2">{edu.title}</h3>
											<p className="text-gray-600 text-sm mb-4">
												{edu.institution}
											</p>

											<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
												<div className="flex items-center gap-2">
													<Calendar size={14} />
													<span>{edu.date}</span>
												</div>
												<div className="flex items-center gap-2">
													<MapPin size={14} />
													<span>{edu.location}</span>
												</div>
											</div>

											<p className="text-gray-600 mb-6">{edu.description}</p>

											<div className="flex flex-wrap gap-2 mb-6">
												{edu.skills.map((skill) => (
													<motion.span
														key={skill}
														className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
														initial={{ opacity: 0, scale: 0.8 }}
														whileInView={{ opacity: 1, scale: 1 }}
														viewport={{ once: true }}
														transition={{ delay: index * 0.1 }}
													>
														{skill}
													</motion.span>
												))}
											</div>

											{edu.websiteUrl && (
												<motion.a
													href={edu.websiteUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
													whileHover={{ x: 5 }}
												>
													Visit Institution
													<ExternalLink size={14} />
												</motion.a>
											)}
										</motion.div>
									</motion.div>

									<motion.div
										className={`flex items-center ${
											index % 2 === 0 ? 'justify-start' : 'justify-end'
										}`}
										initial={{
											opacity: 0,
											x: index % 2 === 0 ? -100 : 100,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										viewport={{ once: true }}
										transition={{
											duration: 0.8,
											delay: index * 0.2 + 0.5,
										}}
									>
										<div className="space-y-4">
											<div className="flex items-center gap-2">
												<Award className="w-5 h-5 text-gray-400" />
												<span className="text-gray-600">Academic Program</span>
											</div>
											<div className="flex items-center gap-2">
												<Book className="w-5 h-5 text-gray-400" />
												<span className="text-gray-600">
													Professional Training
												</span>
											</div>
										</div>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				{/* Call to Action Button */}
				<motion.div
					className="flex justify-center mt-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<Link
						href="/certifications"
						className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
					>
						<span className="text-base">View All Certifications</span>
						<ExternalLink
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default EducationSection;
