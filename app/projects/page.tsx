// app/projects/page.tsx
import PageTransition from '@/components/PageTransition';
import ProjectsPage from '@/components/ProjectsPage';

export default function Projects() {
	return (
		<PageTransition>
			<ProjectsPage />
		</PageTransition>
	);
}
