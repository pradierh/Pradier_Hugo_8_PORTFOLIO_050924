// IntroductionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, ArrowRight, Code, Cloud, Database } from 'lucide-react';
import Link from 'next/link';

const IntroductionSection = () => {
	return (
		<motion.div
			className="py-24"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Personal Introduction */}
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
				>
					<div className="max-w-3xl">
						<motion.blockquote
							className="text-2xl font-light text-gray-800 leading-relaxed mb-8 relative"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.9 }}
						>
							<span className="absolute -left-8 top-0 text-6xl text-gray-200">
								"
							</span>
							Passionné par la technologie et les systèmes complexes, je suis en
							quête d'une opportunité de stage en DevOps où je pourrai allier ma
							curiosité technique à ma volonté d'optimiser et d'automatiser les
							processus.
						</motion.blockquote>

						<p className="text-lg text-gray-600 mb-6">
							Actuellement en formation DevOps et Cloud Engineering, je cherche
							à mettre en pratique mes compétences dans un environnement
							professionnel dynamique et innovant.
						</p>

						<motion.div
							className="flex gap-4 text-sm text-gray-500"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.1 }}
						>
							<span className="flex items-center gap-2">
								<Target className="w-4 h-4 text-gray-400" />
								Stage DevOps • 6 mois
							</span>
							<span>|</span>
							<span>Disponible dès maintenant</span>
						</motion.div>
					</div>
				</motion.div>

				{/* Focus Areas */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					<motion.div
						className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors duration-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.3 }}
						whileHover={{ y: -5 }}
					>
						<Code className="w-8 h-8 text-gray-700 mb-4" />
						<h3 className="text-lg font-medium mb-2">Infrastructure as Code</h3>
						<p className="text-gray-600 text-sm">
							Terraform, Ansible, et automatisation des déploiements
						</p>
					</motion.div>

					<motion.div
						className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors duration-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.4 }}
						whileHover={{ y: -5 }}
					>
						<Cloud className="w-8 h-8 text-gray-700 mb-4" />
						<h3 className="text-lg font-medium mb-2">Cloud Engineering</h3>
						<p className="text-gray-600 text-sm">
							AWS, conteneurisation et orchestration Kubernetes
						</p>
					</motion.div>

					<motion.div
						className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors duration-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
						whileHover={{ y: -5 }}
					>
						<Database className="w-8 h-8 text-gray-700 mb-4" />
						<h3 className="text-lg font-medium mb-2">CI/CD Pipeline</h3>
						<p className="text-gray-600 text-sm">
							Jenkins, GitLab CI, et pratiques DevOps modernes
						</p>
					</motion.div>
				</div>

				{/* About Button */}
				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.6 }}
				>
					<Link
						href="/about"
						className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
					>
						<span className="text-base">Learn More About Me</span>
						<ArrowRight
							size={16}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default IntroductionSection;
