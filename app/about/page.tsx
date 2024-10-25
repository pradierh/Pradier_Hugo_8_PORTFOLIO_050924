// app/about/page.tsx
import PageTransition from '@/components/PageTransition';
import AboutPage from '@/components/AboutPage';

export default function About() {
	return (
		<PageTransition>
			<AboutPage />
		</PageTransition>
	);
}
