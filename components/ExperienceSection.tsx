'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

interface Experience {
	id: string;
	company: string;
	role: string;
	period: string;
	location: string;
	description: string;
	achievements: string[];
	technologies: string[];
	logo: string;
	companyUrl?: string;
}

const ExperienceSection = () => {
	const experiences: Experience[] = [
		{
			id: '1',
			company: 'Talos Health Solutions',
			role: 'Web Development Intern',
			period: 'Feb 2021 - May 2023',
			location: 'Orlando, USA (remote)',
			description:
				'As a Web Development Intern at Talos Health Solutions, I enhanced the virtual congress platform through CSS/HTML modifications. I also administered the platform for organizers and sponsors, and managed sales while creating an Azure-based registration platform for Sanofi Algeria.',
			achievements: [
				'Enhanced virtual congress platform through CSS/HTML modifications',
				'Administered platform for organizers and sponsors',
				'Managed sales and created an Azure-based registration platform for Sanofi Algeria',
			],
			technologies: ['CSS', 'HTML', 'Azure'],
			logo: '/images/ths.png',
			companyUrl: 'https://taloshealthsolutions.com/',
		},
		{
			id: '2',
			company: 'E-mma',
			role: 'Local Manager',
			period: 'Apr 2020 - Dec 2020',
			location: 'Brussels, Belgium',
			description:
				'As a Local Manager at E-MMA, I led a team to promote diversity in technology, organized computer workshops for children to foster digital literacy, and raised awareness of E-MMA’s mission throughout Belgium.',
			achievements: [
				'Led team to promote diversity in technology',
				'Organized computer workshops for children to foster digital literacy',
				'Raised awareness of E-MMA’s mission throughout Belgium',
			],
			technologies: [],
			logo: '/images/emma.png',
			companyUrl: 'https://www.e-mma.org/',
		},
		{
			id: '3',
			company: 'Orange',
			role: 'Enterprise Architecture & Project Management Intern',
			period: 'June 2020 - Dec 2020',
			location: 'Brussels, Belgium',
			description:
				'As an Enterprise Architecture & Project Management Intern at Orange, I mapped the entire Orange Belgium computer park, collaborated with cross-functional teams to gather IT infrastructure details, and conducted analysis and documentation of existing IT infrastructure.',
			achievements: [
				'Mapped entire Orange Belgium computer park',
				'Collaborated with cross-functional teams to gather IT infrastructure details',
				'Conducted analysis and documentation of existing IT infrastructure',
			],
			technologies: [],
			logo: '/images/orange.webp',
			companyUrl: 'https://www.orange.fr/',
		},
		{
			id: '4',
			company: 'Kawempe Home Care',
			role: 'IT Support',
			period: 'March 2019 - August 2019',
			location: 'Kampala, Uganda',
			description:
				'As an IT Support at Kawempe Home Care, I contributed to a humanitarian project at an AIDS, cancer, and tuberculosis clinic by developing IT tools for efficient drug stock management. I also maintained and repaired computer equipment, and collaborated with a diverse team to optimize workflows and enhance clinic efficiency.',
			achievements: [
				'Contributed to humanitarian project at an AIDS, cancer, and tuberculosis clinic',
				'Developed IT tools for efficient drug stock management',
				'Maintained and repaired computer equipment',
				'Collaborated with a diverse team to optimize workflows and enhance clinic efficiency',
			],
			technologies: ['IT tools'],
			logo: '/images/khc.png',
			companyUrl: 'https://kawempehomecare.org/',
		},
		// Ajoutez vos autres expériences
	];

	return (
		<motion.section
			className="py-32"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-4xl font-light mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					Experience
				</motion.h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.id}
							className="relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
						>
							{/* Ligne de connexion */}
							{index !== experiences.length - 1 && (
								<div className="absolute left-8 top-16 bottom-0 w-px bg-gray-200" />
							)}

							<motion.div
								className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors duration-300"
								whileHover={{ y: -5 }}
							>
								<div className="p-8">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
										{/* Logo et informations principales */}
										<div className="flex items-start gap-6">
											<motion.div
												className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50"
												whileHover={{ scale: 1.05 }}
											>
												<img
													src={exp.logo}
													alt={exp.company}
													className="w-full h-full object-contain p-2"
												/>
											</motion.div>

											<div>
												<div className="flex items-center gap-3">
													<h3 className="text-xl font-medium">{exp.company}</h3>
													{exp.companyUrl && (
														<motion.a
															href={exp.companyUrl}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-400 hover:text-gray-600"
															whileHover={{ scale: 1.1 }}
														>
															<ExternalLink size={16} />
														</motion.a>
													)}
												</div>
												<p className="text-lg text-gray-600 mt-1">{exp.role}</p>
												<div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
													<div className="flex items-center gap-1">
														<Calendar size={14} />
														<span>{exp.period}</span>
													</div>
													<div className="flex items-center gap-1">
														<MapPin size={14} />
														<span>{exp.location}</span>
													</div>
												</div>
											</div>
										</div>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<motion.span
													key={tech}
													className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
													whileHover={{ scale: 1.05 }}
												>
													{tech}
												</motion.span>
											))}
										</div>
									</div>

									{/* Description et réalisations */}
									<div className="mt-6">
										<p className="text-gray-600">{exp.description}</p>

										<div className="mt-4 space-y-2">
											{exp.achievements.map((achievement, i) => (
												<motion.div
													key={i}
													className="flex items-start gap-2 text-gray-600"
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ delay: 0.2 + i * 0.1 }}
												>
													<ChevronRight
														size={16}
														className="mt-1 text-gray-400"
													/>
													<span>{achievement}</span>
												</motion.div>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default ExperienceSection;
