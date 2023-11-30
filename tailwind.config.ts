import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(to top right, #f8f9f9, #b3b8d6, #a0b4e8);',
      },
      clipPath: {
        'heptagon': 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);',
      },
      width: {
        fill: '-webkit-fill-available',
      },
    },
  },
  plugins: [],
}
export default config
