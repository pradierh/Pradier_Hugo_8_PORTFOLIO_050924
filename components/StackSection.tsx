'use client';

import { motion } from 'framer-motion';

const StackSection = () => {
	const stackCategories = {
		Languages: [
			{
				name: 'TypeScript',
				type: 'Language',
				icon: '/images/stack/typescript.svg',
			},
			{
				name: 'JavaScript',
				type: 'Language',
				icon: '/images/stack/javascript.svg',
			},
			{
				name: 'Python',
				type: 'Language',
				icon: '/images/stack/python.svg',
			},
			{
				name: 'C',
				type: 'Language',
				icon: '/images/stack/c.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'SQL',
				type: 'Database',
				icon: '/images/stack/sql.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'NoSQL',
				type: 'Database',
				icon: '/images/stack/nosql.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'CSS',
				type: 'Language',
				icon: '/images/stack/css.svg',
			},
			// ... autres langages
		],
		WebDevelopment: [
			{
				name: 'HTML',
				type: 'Markup',
				icon: '/images/stack/html.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'CSS',
				type: 'Style',
				icon: '/images/stack/css.svg',
			},
			{
				name: 'SCSS/SASS',
				type: 'Style',
				icon: '/images/stack/sass.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'Bootstrap',
				type: 'Framework',
				icon: '/images/stack/bootstrap.svg',
			},
			{
				name: 'Tailwind',
				type: 'Framework',
				icon: '/images/stack/tailwind.svg',
			},
			{
				name: 'Next.js',
				type: 'Framework',
				icon: '/images/stack/next.svg',
			},
			{
				name: 'React',
				type: 'Framework',
				icon: '/images/stack/react.svg',
			},
			// ... autres technologies de développement web
		],
		Backend: [
			{
				name: 'Node.js',
				type: 'Runtime',
				icon: '/images/stack/node-js.svg',
			},
			{
				name: 'Express',
				type: 'Framework',
				icon: '/images/stack/express.svg',
			},
			// ... autres technologies backend
		],
		DevOps: [
			{
				name: 'Docker',
				type: 'Containerization',
				icon: '/images/stack/docker.svg',
			},
			{
				name: 'Jenkins',
				type: 'CI/CD',
				icon: '/images/stack/jenkins.svg',
			},
			{
				name: 'Kubernetes',
				type: 'ContainerOrchestration',
				icon: '/images/stack/kubernetes.svg',
			},
			{
				name: 'AWS',
				type: 'CloudService',
				icon: '/images/stack/aws.svg',
			},
			{
				name: 'Terraform',
				type: 'IAC',
				icon: '/images/stack/terraform.svg',
			},
			{
				name: 'Ansible',
				type: 'IAC',
				icon: '/images/stack/ansible.svg',
			},
			{
				name: 'Prometheus',
				type: 'Monitoring',
				icon: '/images/stack/prometheus.svg',
			},
			{
				name: 'Grafana',
				type: 'Monitoring',
				icon: '/images/stack/grafana.svg',
			},
			{
				name: 'Datadog',
				type: 'Monitoring',
				icon: '/images/stack/datadog.svg',
			},
			{
				name: 'ElasticSearch',
				type: 'Logging',
				icon: '/images/stack/elastic.svg',
			},
			// ... autres technologies DevOps
		],
		Tools: [
			{
				name: 'Git',
				type: 'VersionControl',
				icon: '/images/stack/git.svg',
			},
			{
				name: 'GitHub',
				type: 'Collaboration',
				icon: '/images/stack/github.svg',
			},
			{
				name: 'Scrum',
				type: 'ProjectManagement',
				icon: '/images/stack/scrum.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'Agile',
				type: 'ProjectManagement',
				icon: '/images/stack/agile.svg', // Ajoutez l'icône appropriée
			},
			{
				name: 'Bash',
				type: 'Scripting',
				icon: '/images/stack/bash.svg',
			},
			{
				name: 'Linux',
				type: 'OperatingSystem',
				icon: '/images/stack/linux.svg',
			},
			// ... autres outils
		],
		// ... autres catégories
	};

	return (
		<motion.div
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
					Tech Stack
				</motion.h2>

				<div className="space-y-16">
					{Object.entries(stackCategories).map(
						([category, items], categoryIndex) => (
							<motion.div
								key={category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: categoryIndex * 0.2 }}
							>
								<h3 className="text-xl font-medium mb-8 text-gray-900">
									{category}
								</h3>

								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
									{items.map((item, index) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
										>
											<motion.div
												className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
												whileHover={{ y: -5 }}
											>
												<div className="w-12 h-12 flex items-center justify-center">
													<img
														src={item.icon}
														alt={item.name}
														className="w-10 h-10 object-contain"
													/>
												</div>
												<div>
													<h4 className="font-medium text-gray-900">
														{item.name}
													</h4>
													<span className="text-sm text-gray-500">
														{item.type}
													</span>
												</div>
											</motion.div>
										</motion.div>
									))}
								</div>
							</motion.div>
						)
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default StackSection;
