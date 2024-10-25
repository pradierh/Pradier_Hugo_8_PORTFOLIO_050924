// app/resources/page.tsx
import PageTransition from '@/components/PageTransition';
import ResourcesPage from '@/components/ResourcesPage';

export default function Resources() {
	return (
		<PageTransition>
			<ResourcesPage />
		</PageTransition>
	);
}
