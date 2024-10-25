// components/CertificationsPage.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Badge,
	Calendar,
	Award,
	ExternalLink,
	Search,
	Filter,
	Check,
} from 'lucide-react';

interface Certification {
	id: string;
	title: string;
	organization: string;
	category: string;
	date: string;
	description: string;
	skills: string[];
	credentialUrl?: string;
	badge: string;
	status: 'Completed' | 'In Progress' | 'Upcoming';
	expiry?: string;
}

const CertificationsPage = () => {
	const categories = [
		'All',
		'Cloud & DevOps',
		'Web Development',
		'Data Engineering',
		'Security',
		'AI & Machine Learning',
		'Blockchain',
	];

	const certifications: Certification[] = [
		{
			id: 'cert-1',
			title: 'AWS Certified Solutions Architect',
			organization: 'Amazon Web Services',
			category: 'Cloud & DevOps',
			date: 'February 2024',
			description:
				'Design of distributed systems and architectures using AWS technologies.',
			skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability'],
			credentialUrl: 'https://aws.amazon.com',
			badge: '/images/certifications/aws-sa.png',
			status: 'Completed',
			expiry: 'February 2027',
		},
		// Ajoutez vos autres certifications ici
	];

	const [selectedCategory, setSelectedCategory] = useState('All');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredCertifications = certifications.filter(
		(cert) =>
			(selectedCategory === 'All' || cert.category === selectedCategory) &&
			(cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				cert.organization.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Header */}
			<div className="flex justify-between items-start mb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-4"
				>
					<h1 className="text-4xl font-light">Certifications</h1>
					<p className="text-xl text-gray-600 max-w-2xl">
						Professional certifications and achievements in various domains of
						technology.
					</p>
				</motion.div>

				<motion.div
					className="flex items-center gap-4"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<div className="relative">
						<Search
							className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							size={20}
						/>
						<input
							type="text"
							placeholder="Search certifications..."
							className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</motion.div>
			</div>

			{/* Categories Filter */}
			<motion.div
				className="mb-12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className="flex flex-wrap gap-3">
					{categories.map((category, index) => (
						<motion.button
							key={category}
							className={`px-4 py-2 rounded-xl text-sm transition-colors ${
								selectedCategory === category
									? 'bg-gray-900 text-white'
									: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
							onClick={() => setSelectedCategory(category)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 * index }}
						>
							{category}
						</motion.button>
					))}
				</div>
			</motion.div>

			{/* Certifications Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				layout
			>
				<AnimatePresence mode="popLayout">
					{filteredCertifications.map((cert) => (
						<motion.div
							key={cert.id}
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className="group"
						>
							<motion.div
								className="bg-white p-6 rounded-2xl border border-gray-200 h-full hover:border-gray-900 transition-colors duration-300"
								whileHover={{ y: -5 }}
							>
								{/* Header */}
								<div className="flex items-start justify-between mb-6">
									<div className="flex items-center gap-4">
										<div className="relative">
											<img
												src={cert.badge}
												alt={cert.organization}
												className="w-16 h-16 object-contain rounded-xl bg-gray-50 p-2"
											/>
											{cert.status === 'Completed' && (
												<div className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full">
													<Check size={12} />
												</div>
											)}
										</div>
										<div>
											<h3 className="font-medium text-lg group-hover:text-gray-900">
												{cert.title}
											</h3>
											<p className="text-gray-600 text-sm">
												{cert.organization}
											</p>
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="space-y-4">
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<div className="flex items-center gap-1">
											<Calendar size={14} />
											<span>{cert.date}</span>
										</div>
										{cert.expiry && (
											<div className="flex items-center gap-1">
												<Badge size={14} />
												<span>Expires: {cert.expiry}</span>
											</div>
										)}
									</div>

									<p className="text-gray-600 text-sm">{cert.description}</p>

									{/* Skills */}
									<div className="flex flex-wrap gap-2">
										{cert.skills.map((skill) => (
											<span
												key={skill}
												className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-600"
											>
												{skill}
											</span>
										))}
									</div>

									{/* Actions */}
									{cert.credentialUrl && (
										<motion.a
											href={cert.credentialUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm"
											whileHover={{ x: 5 }}
										>
											View Credential
											<ExternalLink size={14} />
										</motion.a>
									)}
								</div>
							</motion.div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Empty State */}
			{filteredCertifications.length === 0 && (
				<motion.div
					className="text-center py-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<p className="text-gray-600">
						No certifications found matching your criteria.
					</p>
				</motion.div>
			)}
		</div>
	);
};

export default CertificationsPage;
