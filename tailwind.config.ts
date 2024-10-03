import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";


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
  			'custom-gray': '#64748B',
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
  		},
      blue: {
        100: 'var(--blue-100)',
        300: 'var(--blue-300)',
        500: 'var(--blue-500)',
        700: 'var(--blue-700)',
        900: 'var(--blue-900)',
      },
      grey: {
        100: 'var(--grey-100)',
        300: 'var(--grey-300)',
        500: 'var(--grey-500)',
        700: 'var(--grey-700)',
        900: 'var(--grey-900)',
      },
      purple: {
        100: 'var(--purple-100)',
        300: 'var(--purple-300)',
        500: 'var(--purple-500)',
        700: 'var(--purple-700)',
        900: 'var(--purple-900)',
      },
      red: {
        100: 'var(--red-100)',
        300: 'var(--red-300)',
        500: 'var(--red-500)',
        700: 'var(--red-700)',
        900: 'var(--red-900)',
      },
      yellow: {
        100: 'var(--yellow-100)',
        300: 'var(--yellow-300)',
        500: 'var(--yellow-500)',
        700: 'var(--yellow-700)',
        900: 'var(--yellow-900)',
      },
    },
    fontSize: {
      custom: '19.39px',
    },
    lineHeight: {
      custom: '23.47px'
    },
    spacing: {
      boxSize: '100px',
      smallBoxSize: '25px',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    borderRadius: {
      lg: 'var(--radius)',
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      xl: 'var(--radius-xl)',
    },
  },
},
plugins: [tailwindcssAnimate],
};

export default config;

