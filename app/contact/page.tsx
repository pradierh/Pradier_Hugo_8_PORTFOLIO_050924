// app/contact/page.tsx
import PageTransition from '@/components/PageTransition';
import ContactPage from '@/components/ContactPage';

export default function Contact() {
	return (
		<PageTransition>
			<ContactPage />
		</PageTransition>
	);
}
