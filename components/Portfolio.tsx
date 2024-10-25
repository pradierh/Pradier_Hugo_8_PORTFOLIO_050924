'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import StackSection from './StackSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import IntroductionSection from './IntroductionSection';

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

// Interfaces

interface ProjectData {
	name: string;
	description: string;
	image: string;
	liveUrl?: string;
	githubUrl?: string;
	stack: Array<{
		name: string;
		icon: string;
	}>;
}

const HeroSection = () => {
	return (
		<>
			{/* Section Hero Existante */}
			<div className="px-24 pt-20 flex">
				{/* Texte à gauche */}
				<motion.div
					className="flex-1"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-sm text-gray-600 mb-4">
						Based in Paris, France
					</div>
					<h1 className="text-6xl font-normal mb-12">Hi, this is Hugo ! 👋</h1>

					<div className="space-y-2 text-sm">
						<div className="flex gap-2">
							<span className="text-gray-600">Currently →</span>
							<span>Searching for a DevOps internship in healthcare</span>
						</div>
						<div className="flex gap-2">
							<span className="text-gray-600">Previously →</span>
							<span>Full-Stack Web Developer</span>
						</div>
						<div className="flex gap-2">
							<span className="text-gray-600">On the side →</span>
							<span>
								Studying for IIT Madras Data Science bachelor entrance exam{' '}
							</span>
						</div>
					</div>
				</motion.div>

				{/* Photo à droite */}
				<motion.div
					className="relative flex-shrink-0 ml-20"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					{/* Cercles décoratifs animés */}
					<motion.div
						className="absolute inset-0 rounded-full border-2 border-gray-200"
						animate={{
							scale: [1, 1.1, 1],
							rotate: [0, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
					<motion.div
						className="absolute inset-0 rounded-full border-2 border-gray-300"
						animate={{
							scale: [1.1, 1, 1.1],
							rotate: [360, 0],
						}}
						transition={{
							duration: 15,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>

					{/* Conteneur de la photo */}
					<motion.div
						className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						{/* Photo */}
						<img
							src="/images/photo_pro.jpg"
							alt="Portrait professionnel"
							className="w-full h-full object-cover"
						/>

						{/* Overlay brillant */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
							animate={{
								x: ['100%', '-100%'],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatDelay: 5,
								ease: 'easeInOut',
							}}
						/>
					</motion.div>

					{/* Points décoratifs */}
					{[...Array(8)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-2 h-2 bg-gray-400 rounded-full"
							style={{
								left: `${50 + 45 * Math.cos((2 * Math.PI * i) / 8)}%`,
								top: `${50 + 45 * Math.sin((2 * Math.PI * i) / 8)}%`,
							}}
							animate={{
								scale: [0, 1, 0],
								opacity: [0, 1, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								delay: i * 0.2,
								ease: 'easeInOut',
							}}
						/>
					))}
				</motion.div>
			</div>

			{/* Nouvelle Section Introduction */}
			<motion.div
				className="mt-32 px-24"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
			>
				{/* Citation personnelle */}
				<motion.div
					className="max-w-3xl mx-auto text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
				>
					<blockquote className="text-2xl font-light text-gray-600 italic">
						"Passionate about bridging the gap between healthcare and
						technology, I strive to create innovative solutions that make a real
						difference."
					</blockquote>
				</motion.div>

				<IntroductionSection />
			</motion.div>
		</>
	);
};

const ProjectItem = ({ name, description, image }: ProjectData) => (
	<motion.div
		className="group flex items-center justify-between border-t border-gray-300 py-6"
		whileHover={{ x: 10 }}
	>
		<div className="flex items-center gap-6">
			<img src={image} alt={name} className="w-16 h-16 rounded-lg" />
			<div>
				<h3 className="font-medium">{name}</h3>
				<p className="text-sm text-gray-600 italic">{description}</p>
			</div>
		</div>
		<ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
	</motion.div>
);

const ProjectCard = ({
	project,
	index,
}: {
	project: ProjectData;
	index: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
		>
			<motion.div
				className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-500 relative"
				whileHover={{ y: -10, scale: 1.02 }}
				layout
			>
				{/* Image avec overlay au hover */}
				<div className="relative h-48 overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
						whileHover={{ opacity: 1 }}
					/>
					<motion.img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5 }}
					/>

					{/* Boutons flottants sur l'image au hover */}
					<motion.div
						className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						initial={{ y: 20 }}
						whileHover={{ y: 0 }}
					>
						{project.liveUrl && (
							<motion.a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span>Live Demo</span>
								<ArrowUpRight size={16} />
							</motion.a>
						)}
						{project.githubUrl && (
							<motion.a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span>GitHub</span>
								<ArrowUpRight size={16} />
							</motion.a>
						)}
					</motion.div>
				</div>

				{/* Contenu */}
				<motion.div
					className="p-6 space-y-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					<motion.h3
						className="text-xl font-medium"
						whileHover={{ x: 5 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						{project.name}
					</motion.h3>
					<p className="text-gray-600 text-sm">{project.description}</p>

					{/* Stack avec animations */}
					<motion.div className="space-y-2">
						<p className="text-xs text-gray-500">Technologies utilisées</p>
						<div className="flex flex-wrap gap-3">
							{project.stack.map((tech, techIndex) => (
								<motion.div
									key={tech.name}
									className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.1 * techIndex }}
									whileHover={{
										scale: 1.05,
										y: -2,
									}}
								>
									<motion.img
										src={tech.icon}
										alt={tech.name}
										className="w-4 h-4"
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.5 }}
									/>
									<span className="text-xs text-gray-600">{tech.name}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Effet de brillance au hover */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
					style={{
						background:
							'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
						backgroundSize: '200% 200%',
					}}
					animate={{
						backgroundPosition: ['0% 0%', '200% 200%'],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

const ProjectsSection = () => {
	const projects: ProjectData[] = [
		{
			name: 'Wreflect',
			description:
				'To write is to reflect. Une application de journaling avec analytics et IA pour améliorer la réflexion personnelle.',
			image: '/images/screen.png',
			liveUrl: 'https://wreflect.com',
			githubUrl: 'https://github.com/username/wreflect',
			stack: [
				{ name: 'React', icon: '/react-logo.svg' },
				{ name: 'Next.js', icon: '/nextjs-logo.svg' },
				{ name: 'Tailwind', icon: '/tailwind-logo.svg' },
				{ name: 'Node.js', icon: '/nodejs-logo.svg' },
			],
		},
		{
			name: 'Wreflect3',
			description:
				'To write is to reflect. Une application de journaling avec analytics et IA pour améliorer la réflexion personnelle.',
			image: '/images/screen.png',
			liveUrl: 'https://wreflect.com',
			githubUrl: 'https://github.com/username/wreflect',
			stack: [
				{ name: 'React', icon: '/react-logo.svg' },
				{ name: 'Next.js', icon: '/nextjs-logo.svg' },
				{ name: 'Tailwind', icon: '/tailwind-logo.svg' },
				{ name: 'Node.js', icon: '/nodejs-logo.svg' },
			],
		},
		{
			name: 'Wreflect4',
			description:
				'To write is to reflect. Une application de journaling avec analytics et IA pour améliorer la réflexion personnelle.',
			image: '/images/screen.png',
			liveUrl: 'https://wreflect.com',
			githubUrl: 'https://github.com/username/wreflect',
			stack: [
				{ name: 'React', icon: '/react-logo.svg' },
				{ name: 'Next.js', icon: '/nextjs-logo.svg' },
				{ name: 'Tailwind', icon: '/tailwind-logo.svg' },
				{ name: 'Node.js', icon: '/nodejs-logo.svg' },
			],
		},
		{
			name: 'Wreflect2',
			description:
				'To write is to reflect. Une application de journaling avec analytics et IA pour améliorer la réflexion personnelle.',
			image: '/images/screen.png',
			liveUrl: 'https://wreflect.com',
			githubUrl: 'https://github.com/username/wreflect',
			stack: [
				{ name: 'React', icon: '/react-logo.svg' },
				{ name: 'Next.js', icon: '/nextjs-logo.svg' },
				{ name: 'Tailwind', icon: '/tailwind-logo.svg' },
				{ name: 'Node.js', icon: '/nodejs-logo.svg' },
			],
		},
		// ... autres projets
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
					Side Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{projects.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}
				</div>

				{/* Bouton View All Projects */}
				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<Link
						href="/projects"
						className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
					>
						<span>View All Projects</span>
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
};

const Portfolio = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<HeroSection />
				<StackSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
			</div>
		</div>
	);
};

export default Portfolio;
