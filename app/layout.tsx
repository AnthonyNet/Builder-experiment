import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import {Tracking} from '../components/Tracking'
import './globals.css'

// Load the Ubuntu font with the specified subsets
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: "F13-Cybertech",
	description: "Kybernetická bezpečnost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className={ubuntu.className}>
				{children}
				<Tracking />
			</body>
		</html>
	);
}
