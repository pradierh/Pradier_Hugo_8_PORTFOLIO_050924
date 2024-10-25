// components/TestimonialsPage.tsx
'use client';

import { motion } from 'framer-motion';
import { Quote, Linkedin, ArrowRight, Building, Calendar } from 'lucide-react';

interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	image: string;
	testimonial: string;
	relationship: string;
	date: string;
	linkedinUrl?: string;
	companyLogo?: string;
	projectName?: string;
}

const testimonials: Testimonial[] = [
	{
		id: '1',
		name: 'Julie Martin',
		role: 'Project Manager',
		company: 'Talos Health Solutions',
		image: '/images/testimonials/julie.jpg',
		companyLogo: '/images/companies/talos.png',
		testimonial:
			"Hugo's ability to bridge the gap between healthcare requirements and technical solutions is exceptional. His work on our patient management system demonstrated not only his technical expertise but also his deep understanding of healthcare processes.",
		relationship: 'Direct Manager',
		date: 'Jan 2024',
		linkedinUrl: 'https://linkedin.com/in/julie-martin',
		projectName: 'Patient Management System',
	},
	{
		id: '2',
		name: 'Marc Chen',
		role: 'Lead Developer',
		company: 'E-mma',
		image: '/images/testimonials/marc.jpg',
		companyLogo: '/images/companies/emma.png',
		testimonial:
			'Working with Hugo was a great experience. His dedication to writing clean, maintainable code and his enthusiasm for learning new technologies made him an invaluable team member. He consistently delivered high-quality solutions and was always willing to help others.',
		relationship: 'Team Lead',
		date: 'Dec 2023',
		linkedinUrl: 'https://linkedin.com/in/marc-chen',
	},
	// Ajoutez d'autres témoignages
];

const TestimonialsPage = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Header */}
			<motion.div
				className="mb-20"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="text-5xl font-light mb-6">Testimonials</h1>
				<p className="text-xl text-gray-600 max-w-3xl">
					Words from colleagues and clients I've had the pleasure to work with
					throughout my journey.
				</p>
			</motion.div>

			{/* Testimonials Grid */}
			<div className="grid grid-cols-1 gap-12">
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={testimonial.id}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<div className="relative">
							{/* Card Content */}
							<motion.div
								className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								{/* Quote Icon */}
								<div className="absolute -top-4 left-8 bg-gray-900 text-white p-2 rounded-full">
									<Quote size={20} />
								</div>

								{/* Main Content */}
								<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
									{/* Profile Section */}
									<div className="md:col-span-1">
										<div className="flex flex-col items-center text-center">
											<div className="relative mb-4">
												<img
													src={testimonial.image}
													alt={testimonial.name}
													className="w-24 h-24 rounded-full object-cover"
												/>
												{testimonial.companyLogo && (
													<img
														src={testimonial.companyLogo}
														alt={testimonial.company}
														className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-white"
													/>
												)}
											</div>
											<h3 className="font-medium">{testimonial.name}</h3>
											<p className="text-sm text-gray-600">
												{testimonial.role}
											</p>
											<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
												<Building size={12} />
												<span>{testimonial.company}</span>
											</div>
											{testimonial.linkedinUrl && (
												<a
													href={testimonial.linkedinUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="mt-4 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
												>
													<Linkedin size={16} />
													<span className="text-sm">Connect</span>
												</a>
											)}
										</div>
									</div>

									{/* Testimonial Content */}
									<div className="md:col-span-3">
										<div className="space-y-6">
											<blockquote className="text-gray-600 leading-relaxed">
												"{testimonial.testimonial}"
											</blockquote>

											{/* Additional Info */}
											<div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
												<div className="flex items-center gap-2">
													<span className="text-sm text-gray-500">
														Relationship:
													</span>
													<span className="text-sm font-medium">
														{testimonial.relationship}
													</span>
												</div>
												<div className="flex items-center gap-2">
													<Calendar size={14} className="text-gray-500" />
													<span className="text-sm">{testimonial.date}</span>
												</div>
												{testimonial.projectName && (
													<div className="flex items-center gap-2">
														<ArrowRight size={14} className="text-gray-500" />
														<span className="text-sm">
															{testimonial.projectName}
														</span>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Call to Action */}
			<motion.div
				className="text-center mt-20"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
			>
				<p className="text-gray-600 mb-6">
					Interested in working together or learning more about my experience?
				</p>
				<motion.a
					href="/contact"
					className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Get in Touch
					<ArrowRight size={18} />
				</motion.a>
			</motion.div>
		</div>
	);
};

export default TestimonialsPage;
