import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					// Add your navbar configs here
				],
				sidebar: {
					// Add your sidebar configs here
				},
				github: 'https://github.com/Blackman99/sveltepress',
				logo: '/logo.png',
				themeColor: {
				light: '#EDEBE6',      // page bg (light)
				dark:  '#1F1B1B',      // page bg (dark)
				primary: '#5A96AF',    // teal
				hover:   '#7BABBF',    // teal hover
				gradient: { start: '#5A96AF', end: '#734239' } // optional
				},
				preBuildIconifyIcons: {
					lucide: ['book', 'church', 'calendar'],
					mdi: ['account-group', 'script-text-outline'],
					ph: ['target', 'hands-praying']
				}
			}),
			siteConfig: {
				title: 'Next Level Global',
				description: 'A free Christ centered discipleship program',
			},
		}),
	],
})

export default config
