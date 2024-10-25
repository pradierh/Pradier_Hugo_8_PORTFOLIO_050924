// components/ResourcesPage.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Book,
	Youtube,
	Headphones,
	Globe,
	Code,
	Server,
	Database,
	Cloud,
	Video,
	BookOpen,
	MessageSquare,
	ArrowUpRight,
} from 'lucide-react';

interface Resource {
	title: string;
	description: string;
	link: string;
	type: 'video' | 'book' | 'website' | 'podcast' | 'course' | 'documentation';
	tags: string[];
	rating: number;
	isPaid: boolean;
}

interface ResourceCategory {
	id: string;
	name: string;
	icon: React.ReactNode;
	description: string;
	resources: Resource[];
}

const categories: ResourceCategory[] = [
	{
		id: 'web-development',
		name: 'Web Development',
		icon: <Code className="w-6 h-6" />,
		description: 'Resources for learning frontend and backend web development',
		resources: [
			{
				title: 'freeCodeCamp',
				description:
					'Interactive platform for learning web development with hands-on projects',
				link: 'https://www.freecodecamp.org',
				type: 'course',
				tags: ['HTML', 'CSS', 'JavaScript', 'React'],
				rating: 5,
				isPaid: false,
			},
			{
				title: 'The Odin Project',
				description: 'Full stack curriculum for learning web development',
				link: 'https://www.theodinproject.com',
				type: 'course',
				tags: ['Full Stack', 'JavaScript', 'Ruby'],
				rating: 5,
				isPaid: false,
			},
			// Ajoutez vos autres ressources
		],
	},
	{
		id: 'devops',
		name: 'DevOps & Cloud',
		icon: <Cloud className="w-6 h-6" />,
		description:
			'Cloud computing, DevOps practices, and infrastructure resources',
		resources: [
			{
				title: 'DevOps Roadmap',
				description: 'Comprehensive guide to becoming a DevOps engineer',
				link: 'https://roadmap.sh/devops',
				type: 'website',
				tags: ['DevOps', 'Cloud', 'Infrastructure'],
				rating: 5,
				isPaid: false,
			},
			// Ajoutez vos autres ressources
		],
	},
	{
		id: 'data-engineering',
		name: 'Data Engineering',
		icon: <Database className="w-6 h-6" />,
		description:
			'Resources for learning data engineering and big data technologies',
		resources: [
			// Ajoutez vos ressources
		],
	},
	// Ajoutez d'autres catégories
];

const ResourcesPage = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState('');

	const filteredCategories = categories.filter(
		(category) =>
			category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			category.resources.some(
				(resource) =>
					resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					resource.tags.some((tag) =>
						tag.toLowerCase().includes(searchQuery.toLowerCase())
					)
			)
	);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Header */}
			<motion.div
				className="mb-16"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="text-5xl font-light mb-6">Learning Resources</h1>
				<p className="text-xl text-gray-600 max-w-3xl">
					A curated collection of resources that helped me in my journey to
					become a full-stack developer and cloud engineer.
				</p>
			</motion.div>

			{/* Barre de recherche */}
			<motion.div
				className="max-w-2xl mx-auto mb-16"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<input
					type="text"
					placeholder="Search resources by name, category, or tag..."
					className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</motion.div>

			{/* Grille des catégories */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				{filteredCategories.map((category) => (
					<motion.div
						key={category.id}
						className="group"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ y: -5 }}
					>
						<button
							className={`w-full text-left p-8 rounded-xl border transition-all duration-300
                ${
									selectedCategory === category.id
										? 'bg-gray-900 text-white border-gray-900'
										: 'bg-white border-gray-200 hover:border-gray-900'
								}`}
							onClick={() =>
								setSelectedCategory(
									selectedCategory === category.id ? null : category.id
								)
							}
						>
							<div className="flex items-center gap-4 mb-4">
								<div
									className={`p-3 rounded-lg transition-colors duration-300
                  ${
										selectedCategory === category.id
											? 'bg-white/10'
											: 'bg-gray-100 group-hover:bg-gray-200'
									}`}
								>
									{category.icon}
								</div>
								<h2 className="text-xl font-medium">{category.name}</h2>
							</div>
							<p
								className={`text-sm mb-4 transition-colors duration-300
                ${
									selectedCategory === category.id
										? 'text-gray-300'
										: 'text-gray-600'
								}`}
							>
								{category.description}
							</p>
							<div className="text-sm">
								{category.resources.length} resources available
							</div>
						</button>
					</motion.div>
				))}
			</div>

			{/* Liste des ressources */}
			<AnimatePresence>
				{selectedCategory && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="space-y-8"
					>
						<h3 className="text-2xl font-medium mb-8">
							{categories.find((c) => c.id === selectedCategory)?.name}{' '}
							Resources
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{categories
								.find((c) => c.id === selectedCategory)
								?.resources.map((resource, index) => (
									<motion.a
										key={resource.title}
										href={resource.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-all duration-300"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ y: -5 }}
									>
										<div className="flex justify-between items-start mb-4">
											<div className="flex items-center gap-3">
												{resource.type === 'video' && (
													<Video className="w-5 h-5 text-red-500" />
												)}
												{resource.type === 'book' && (
													<Book className="w-5 h-5 text-blue-500" />
												)}
												{resource.type === 'website' && (
													<Globe className="w-5 h-5 text-green-500" />
												)}
												{resource.type === 'podcast' && (
													<Headphones className="w-5 h-5 text-purple-500" />
												)}
												{resource.type === 'course' && (
													<BookOpen className="w-5 h-5 text-yellow-500" />
												)}
												{resource.type === 'documentation' && (
													<MessageSquare className="w-5 h-5 text-gray-500" />
												)}
												<h4 className="text-lg font-medium">
													{resource.title}
												</h4>
											</div>
											<ArrowUpRight className="w-5 h-5 text-gray-400" />
										</div>
										<p className="text-gray-600 mb-4">{resource.description}</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{resource.tags.map((tag) => (
												<span
													key={tag}
													className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
												>
													{tag}
												</span>
											))}
										</div>
										<div className="flex justify-between items-center text-sm text-gray-500">
											<div className="flex items-center gap-1">
												{[...Array(5)].map((_, i) => (
													<span
														key={i}
														className={`w-4 h-4 ${
															i < resource.rating
																? 'text-yellow-400'
																: 'text-gray-200'
														}`}
													>
														★
													</span>
												))}
											</div>
											<span>{resource.isPaid ? 'Paid' : 'Free'}</span>
										</div>
									</motion.a>
								))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ResourcesPage;
