// components/NavBar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import {
	Github,
	Linkedin,
	Mail,
	Menu,
	X,
	ChevronDown,
	ExternalLink,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const { scrollY } = useScroll();

	useEffect(() => {
		const updateScrollState = () => {
			setIsScrolled(window.scrollY > 20);
		};

		scrollY.onChange(updateScrollState);
		return () => {
			// Cleanup if needed
		};
	}, [scrollY]);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Certifications', href: '/certifications' },
		{ name: 'Contact', href: '/contact' },
	];

	const resetActiveLinks = () => {
		const links = document.querySelectorAll('.nav-link-indicator');
		links.forEach((link) => link.classList.remove('scale-x-100'));
	};

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo et Nom */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Link href="/" className="flex items-center gap-3">
							<span className="text-xl font-medium">Hugo Pradier</span>
						</Link>
					</motion.div>

					{/* Navigation - Desktop */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								whileHover={{ y: -2 }}
							>
								<Link
									href={item.href}
									className="relative group"
									onClick={() => resetActiveLinks()}
								>
									<span
										className={`nav-link ${
											pathname === item.href ? 'text-gray-900' : 'text-gray-600'
										}`}
									>
										{item.name}
									</span>
									<motion.span
										className={`nav-link-indicator absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left transition-transform ${
											pathname === item.href ? 'scale-x-100' : 'scale-x-0'
										}`}
										initial={false}
										animate={{
											scaleX: pathname === item.href ? 1 : 0,
										}}
										transition={{ duration: 0.2 }}
									/>
								</Link>
							</motion.div>
						))}
					</div>

					{/* Liens sociaux - Desktop */}
					<div className="hidden md:flex items-center gap-4">
						<motion.a
							href="https://github.com/pradierh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900 transition-colors"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github size={20} />
						</motion.a>
						<motion.a
							href="https://linkedin.com/in/hugopradier"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900 transition-colors"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Linkedin size={20} />
						</motion.a>
						<motion.a
							href="mailto:hpradier@icloud.com"
							className="text-gray-600 hover:text-gray-900 transition-colors"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Mail size={20} />
						</motion.a>
						<motion.a
							href="/images/cv.pdf"
							target="_blank"
							className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span>Resume</span>
							<ExternalLink size={16} />
						</motion.a>
					</div>

					{/* Bouton Menu - Mobile */}
					<motion.button
						className="md:hidden text-gray-600 hover:text-gray-900"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						whileTap={{ scale: 0.95 }}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</motion.button>
				</div>
			</div>

			{/* Menu Mobile */}
			<motion.div
				className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
				initial={{ opacity: 0, height: 0 }}
				animate={{
					opacity: isMenuOpen ? 1 : 0,
					height: isMenuOpen ? 'auto' : 0,
				}}
				transition={{ duration: 0.3 }}
			>
				<div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-lg">
					{navItems.map((item) => (
						<motion.div key={item.name} whileTap={{ scale: 0.98 }}>
							<Link
								href={item.href}
								className={`block py-3 px-4 rounded-lg ${
									pathname === item.href
										? 'bg-gray-100 text-gray-900'
										: 'text-gray-600 hover:bg-gray-50'
								}`}
								onClick={() => {
									setIsMenuOpen(false);
									resetActiveLinks();
								}}
							>
								{item.name}
							</Link>
						</motion.div>
					))}
					<div className="flex justify-center gap-6 pt-4 border-t border-gray-100 mt-4">
						<motion.a
							href="https://github.com/pradierh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github size={24} />
						</motion.a>
						<motion.a
							href="https://linkedin.com/in/hugo-pradier"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-900"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Linkedin size={24} />
						</motion.a>
						<motion.a
							href="mailto:hpradier@icloud.com"
							className="text-gray-600 hover:text-gray-900"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Mail size={24} />
						</motion.a>
					</div>
				</div>
			</motion.div>
		</motion.nav>
	);
};

export default NavBar;
