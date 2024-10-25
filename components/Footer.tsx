// components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	Github,
	Linkedin,
	Mail,
	Twitter,
	Instagram,
	ArrowUpRight,
	Download,
	Heart,
	Coffee,
} from 'lucide-react';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section principale */}
				<div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Colonne 1 - À propos */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						<h3 className="text-lg font-medium">Hugo Pradier</h3>
						<p className="text-gray-600 text-sm">
							Full-Stack Developer passionate about creating innovative
							solutions in healthcare and technology.
						</p>
						<motion.button
							onClick={scrollToTop}
							className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
							whileHover={{ y: -2 }}
						>
							Back to top
							<ArrowUpRight size={16} />
						</motion.button>
					</motion.div>

					{/* Colonne 2 - Navigation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<h3 className="text-lg font-medium mb-4">Navigation</h3>
						<ul className="space-y-3">
							{[
								{ name: 'Home', href: '/' },
								{ name: 'About', href: '/about' },
								{ name: 'Projects', href: '/projects' },
								{ name: 'Testimonials', href: '/testimonials' },
								{ name: 'Resources', href: '/resources' },
								{ name: 'Contact', href: '/contact' },
							].map((item) => (
								<motion.li key={item.name} whileHover={{ x: 5 }}>
									<Link
										href={item.href}
										className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-2"
									>
										{item.name}
										<ArrowUpRight
											size={14}
											className="opacity-0 group-hover:opacity-100"
										/>
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Colonne 3 - Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<h3 className="text-lg font-medium mb-4">Get in Touch</h3>
						<div className="space-y-3">
							<motion.a
								href="mailto:hpradier@icloud.com"
								className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-2 group"
								whileHover={{ x: 5 }}
							>
								<Mail size={16} />
								hpradier@icloud.com
								<ArrowUpRight
									size={14}
									className="opacity-0 group-hover:opacity-100"
								/>
							</motion.a>
							<motion.div
								className="flex items-center gap-4"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								{[
									{
										icon: <Github size={20} />,
										href: 'https://github.com/yourusername',
									},
									{
										icon: <Linkedin size={20} />,
										href: 'https://linkedin.com/in/yourprofile',
									},
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-gray-900 transition-colors"
										whileHover={{ y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										{social.icon}
									</motion.a>
								))}
							</motion.div>
						</div>
					</motion.div>

					{/* Colonne 4 - Download CV */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="space-y-4"
					>
						<h3 className="text-lg font-medium">Download</h3>
						<motion.a
							href="/cv.pdf"
							target="_blank"
							className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Download size={16} />
							Download CV
						</motion.a>
						<motion.div
							className="flex items-center gap-2 text-sm text-gray-500"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<Coffee size={14} />
							<span>Available for freelance work</span>
						</motion.div>
					</motion.div>
				</div>

				{/* Barre de copyright */}
				<motion.div
					className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<div className="flex items-center gap-2">
						<span>© {new Date().getFullYear()} Hugo Pradier.</span>
						<span className="hidden md:inline">|</span>
						<span>All rights reserved.</span>
					</div>
					<motion.div
						className="flex items-center gap-2"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<span>Made with</span>
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
						>
							<Heart size={14} className="text-red-500" />
						</motion.div>
						<span>in Paris, France</span>
					</motion.div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
