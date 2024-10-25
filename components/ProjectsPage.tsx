// components/ProjectsPage.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Calendar } from 'lucide-react';

interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	category: string[];
	technologies: Array<{
		name: string;
		icon: string;
	}>;
	liveUrl?: string;
	githubUrl?: string;
	date: string;
}

const projects: Project[] = [
	{
		id: 'project-1',
		title: 'Healthcare Management System',
		description:
			'A comprehensive platform for managing patient records and medical appointments',
		longDescription:
			'A full-stack application built to streamline healthcare operations. Features include patient management, appointment scheduling, electronic health records, and real-time analytics.',
		image: '/images/projects/healthcare-system.jpg',
		category: ['Healthcare', 'Full Stack'],
		technologies: [
			{ name: 'React', icon: '/images/logos/react.svg' },
			{ name: 'Node.js', icon: '/images/logos/nodejs.svg' },
			{ name: 'MongoDB', icon: '/images/logos/mongodb.svg' },
			{ name: 'Docker', icon: '/images/logos/docker.svg' },
		],
		liveUrl: 'https://healthcare-project.com',
		githubUrl: 'https://github.com/username/healthcare-project',
		date: '2024',
	},
	// Ajoutez vos autres projets ici
];

const categories = [
	'All',
	'Healthcare',
	'Full Stack',
	'DevOps',
	'Web',
	'Mobile',
];

const ProjectsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const filteredProjects = projects.filter(
		(project) =>
			selectedCategory === 'All' || project.category.includes(selectedCategory)
	);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-16"
			>
				<h1 className="text-5xl font-light mb-6">Projects</h1>
				<p className="text-xl text-gray-600 max-w-3xl">
					A collection of my development projects, ranging from healthcare
					solutions to web applications and DevOps implementations.
				</p>
			</motion.div>

			{/* Filtres */}
			<motion.div
				className="flex flex-wrap gap-4 mb-12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				{categories.map((category) => (
					<motion.button
						key={category}
						className={`px-6 py-2 rounded-full text-sm transition-colors
              ${
								selectedCategory === category
									? 'bg-gray-900 text-white'
									: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
						onClick={() => setSelectedCategory(category)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{category}
					</motion.button>
				))}
			</motion.div>

			{/* Grille de projets */}
			<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
				<AnimatePresence>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className="group"
							onClick={() => setSelectedProject(project)}
						>
							<motion.div
								className="bg-white rounded-xl overflow-hidden border border-gray-200 
                         hover:border-gray-400 transition-all duration-500 cursor-pointer"
								whileHover={{ y: -10 }}
							>
								{/* Image du projet */}
								<div className="relative h-64 overflow-hidden">
									<motion.div
										className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500 z-10"
									/>
									<motion.img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover"
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.5 }}
									/>

									{/* Actions sur hover */}
									<motion.div
										className="absolute inset-0 z-20 flex items-center justify-center gap-4 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
										initial={{ y: 20 }}
										whileHover={{ y: 0 }}
									>
										{project.liveUrl && (
											<motion.a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 
                                 rounded-full hover:bg-gray-100"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												onClick={(e) => e.stopPropagation()}
											>
												<Globe size={16} />
												<span>Live Demo</span>
											</motion.a>
										)}
										{project.githubUrl && (
											<motion.a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 
                                 rounded-full hover:bg-gray-100"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												onClick={(e) => e.stopPropagation()}
											>
												<Github size={16} />
												<span>GitHub</span>
											</motion.a>
										)}
									</motion.div>
								</div>

								{/* Contenu */}
								<div className="p-6 space-y-4">
									<div className="flex justify-between items-start">
										<h3 className="text-xl font-medium">{project.title}</h3>
										<div className="flex items-center text-sm text-gray-500">
											<Calendar size={14} className="mr-1" />
											{project.date}
										</div>
									</div>
									<p className="text-gray-600">{project.description}</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<div
												key={tech.name}
												className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 
                                 rounded-full text-sm text-gray-600"
											>
												<img
													src={tech.icon}
													alt={tech.name}
													className="w-4 h-4"
												/>
												{tech.name}
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Modal de détails du projet */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative h-80">
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="p-8 space-y-6">
								<div className="flex justify-between items-start">
									<h2 className="text-3xl font-medium">
										{selectedProject.title}
									</h2>
									<button
										onClick={() => setSelectedProject(null)}
										className="text-gray-500 hover:text-gray-700"
									>
										<ArrowUpRight />
									</button>
								</div>

								<p className="text-gray-600 leading-relaxed">
									{selectedProject.longDescription}
								</p>

								<div className="space-y-4">
									<h3 className="text-lg font-medium">Technologies Used</h3>
									<div className="flex flex-wrap gap-3">
										{selectedProject.technologies.map((tech) => (
											<div
												key={tech.name}
												className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
											>
												<img
													src={tech.icon}
													alt={tech.name}
													className="w-5 h-5"
												/>
												{tech.name}
											</div>
										))}
									</div>
								</div>

								<div className="flex gap-4">
									{selectedProject.liveUrl && (
										<a
											href={selectedProject.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 
                               rounded-full hover:bg-gray-800 transition-colors"
										>
											<Globe size={18} />
											Visit Website
										</a>
									)}
									{selectedProject.githubUrl && (
										<a
											href={selectedProject.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 
                               rounded-full hover:bg-gray-200 transition-colors"
										>
											<Github size={18} />
											View Source
										</a>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ProjectsPage;
