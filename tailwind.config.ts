import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			figtree: [
  				'var(--font-figtree)'
  			]
  		},
  		fontWeight: {
  			figthin: '300',
  			figlight: '400',
  			figregular: '500',
  			figmedium: '600',
  			figsemibold: '700',
  			figbold: '800',
  			figextrabold: '900'
  		},
  		patterns: {
  			opacities: {
  				'5': '.05',
  				'10': '.10',
  				'20': '.20',
  				'40': '.40',
  				'60': '.60',
  				'80': '.80',
  				'100': '1'
  			},
  			sizes: {
  				'1': '0.25rem',
  				'2': '0.5rem',
  				'4': '1rem',
  				'6': '1.5rem',
  				'8': '2rem',
  				'16': '4rem',
  				'20': '5rem',
  				'24': '6rem',
  				'32': '8rem'
  			}
  		},
  		animation: {
  			'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite'
  		},
  		keyframes: {
  			'text-slide': {
  				'0%, 26.66%': {
  					transform: 'translateY(0%)'
  				},
  				'33.33%, 60%': {
  					transform: 'translateY(-25%)'
  				},
  				'66.66%, 93.33%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(-75%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [daisyui, scrollbar, require("tailwindcss-bg-patterns"), require("tailwindcss-animate")],
};

export default config;
