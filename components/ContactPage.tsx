// components/ContactPage.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Mail,
	Linkedin,
	Github,
	MapPin,
	Clock,
	Send,
	Calendar,
	MessageSquare,
} from 'lucide-react';

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Implémentez ici la logique d'envoi du formulaire
		console.log('Form submitted:', formData);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			{/* Header */}
			<motion.div
				className="mb-20"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="text-5xl font-light mb-6">Get in Touch</h1>
				<p className="text-xl text-gray-600 max-w-3xl">
					Have a project in mind or want to discuss potential opportunities? I'd
					love to hear from you.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
				{/* Informations de contact */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
				>
					<div className="space-y-12">
						{/* Section Disponibilité */}
						<div>
							<h2 className="text-2xl font-light mb-6">Availability</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
									<Clock className="w-6 h-6 text-gray-400 mt-1" />
									<div>
										<h3 className="font-medium mb-1">Working Hours</h3>
										<p className="text-gray-600">Monday - Friday</p>
										<p className="text-gray-600">9:00 AM - 6:00 PM (GMT+1)</p>
									</div>
								</div>
								<div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
									<Calendar className="w-6 h-6 text-gray-400 mt-1" />
									<div>
										<h3 className="font-medium mb-1">Response Time</h3>
										<p className="text-gray-600">Usually within 24 hours</p>
									</div>
								</div>
							</div>
						</div>

						{/* Section Contact Direct */}
						<div>
							<h2 className="text-2xl font-light mb-6">Direct Contact</h2>
							<div className="space-y-4">
								<motion.a
									href="mailto:hpradier@icloud.com"
									className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors group"
									whileHover={{ y: -2 }}
								>
									<Mail className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
									<div>
										<h3 className="font-medium mb-1">Email</h3>
										<p className="text-gray-600">hpradier@icloud.com</p>
									</div>
								</motion.a>
								<motion.a
									href="https://linkedin.com/in/hugo-pradier"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors group"
									whileHover={{ y: -2 }}
								>
									<Linkedin className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
									<div>
										<h3 className="font-medium mb-1">LinkedIn</h3>
										<p className="text-gray-600">Connect with me</p>
									</div>
								</motion.a>
								<motion.a
									href="https://github.com/pradierh"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-900 transition-colors group"
									whileHover={{ y: -2 }}
								>
									<Github className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
									<div>
										<h3 className="font-medium mb-1">GitHub</h3>
										<p className="text-gray-600">Check out my code</p>
									</div>
								</motion.a>
							</div>
						</div>

						{/* Section Localisation */}
						<div>
							<h2 className="text-2xl font-light mb-6">Location</h2>
							<motion.div
								className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
								whileHover={{ y: -2 }}
							>
								<MapPin className="w-6 h-6 text-gray-400 mt-1" />
								<div>
									<h3 className="font-medium mb-1">Based in</h3>
									<p className="text-gray-600">Paris, France</p>
									<p className="text-sm text-gray-500 mt-1">
										Available for remote work worldwide
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Formulaire de contact */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4 }}
				>
					<div className="bg-white rounded-2xl p-8 border border-gray-200">
						<h2 className="text-2xl font-light mb-8">Send a Message</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Name
									</label>
									<motion.input
										whileFocus={{ scale: 1.01 }}
										type="text"
										id="name"
										name="name"
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
										placeholder="Your name"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<motion.input
										whileFocus={{ scale: 1.01 }}
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
										placeholder="your@email.com"
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Subject
									</label>
									<motion.input
										whileFocus={{ scale: 1.01 }}
										type="text"
										id="subject"
										name="subject"
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
										placeholder="What's this about?"
										value={formData.subject}
										onChange={(e) =>
											setFormData({ ...formData, subject: e.target.value })
										}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Message
									</label>
									<motion.textarea
										whileFocus={{ scale: 1.01 }}
										id="message"
										name="message"
										rows={6}
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
										placeholder="Your message..."
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										required
									/>
								</div>
							</div>

							<motion.button
								type="submit"
								className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Send className="w-5 h-5" />
								Send Message
							</motion.button>
						</form>

						{/* Quick Response Note */}
						<div className="mt-6 flex items-start gap-3 text-sm text-gray-500">
							<MessageSquare className="w-5 h-5 mt-0.5" />
							<p>
								I aim to respond to all messages within 24 hours. For immediate
								inquiries, please reach out via LinkedIn.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactPage;
