import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
		<>
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}></main>
		</>
	);
}
