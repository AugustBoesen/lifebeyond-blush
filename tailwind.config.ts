import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'palette-1': 'var(--palette-1)',
        'palette-2': 'var(--palette-2)',
        'palette-3': 'var(--palette-3)',
        'palette-4': 'var(--palette-4)',
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)'],
        cinzel: ['var(--font-cinzel)'],
        della: ['var(--font-della)'],
      }
    },
  },
  plugins: [],
}
export default config
