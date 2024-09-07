export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Currently building my Portfolio',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Booki',
		des: `Development of the user interface for Booki, a booking platform for accommodations and activities. The project focuses on converting a mockup into a responsive and accessible website, using HTML and CSS.`,
		img: '/project1.png',
		iconLists: ['/html.svg', '/css.svg'],
		link: 'https://github.com/pradierh/Pradier_Hugo_2_booki_042424.git',
	},
	{
		id: 2,
		title: 'Portfolio Architecte',
		des: 'Developed a professional portfolio website for photographer Sophie Bluel, showcasing her work and expertise. The project emphasizes responsive design, accessibility, and the implementation of modern web development practices using HTML, CSS, and JavaScript.',
		img: '/sophie.png',
		iconLists: ['/html.svg', '/css.svg', '/js.svg'],
		link: 'https://github.com/pradierh/Pradier_Hugo_3_interiorarchitect_080524.git',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Web Development @OpenClassrooms (Bac +2)',
		desc: 'Completed the Web Developer pathway at OpenClassrooms, mastering front-end and back-end development skills including HTML, CSS, JavaScript, Node.js, and databases.',
		className: 'md:col-span-2',
		thumbnail: '/OC.png',
	},
	{
		id: 2,
		title: 'DevOps @DataScientest (Bac +3/4',
		desc: 'Completed the DevOps pathway at DataScientest, gaining expertise in continuous integration, continuous deployment, cloud computing, and containerization technologies like Docker and Kubernetes.',
		className: 'md:col-span-2',
		thumbnail: '/DS.png',
	},
];
