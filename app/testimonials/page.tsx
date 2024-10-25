// app/testimonials/page.tsx
import PageTransition from '@/components/PageTransition';
import TestimonialsPage from '@/components/TestimonialsPage';

export default function Testimonials() {
	return (
		<PageTransition>
			<TestimonialsPage />
		</PageTransition>
	);
}
