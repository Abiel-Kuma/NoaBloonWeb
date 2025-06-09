import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        noabloon: {
          'light-green': '#99bc8b',
          'grayish-blue': '#789cb7',
          'deep-green': '#3c7f77',
          'light-green-50': '#f0f4ee',
          'light-green-100': '#e1e9dd',
          'light-green-200': '#c3d3bb',
          'light-green-300': '#a5bd99',
          'light-green-400': '#87a777',
          'light-green-500': '#99bc8b',
          'light-green-600': '#7a966f',
          'light-green-700': '#5b7053',
          'light-green-800': '#3c4a37',
          'light-green-900': '#1d251b',
          'grayish-blue-50': '#f1f4f6',
          'grayish-blue-100': '#e3e9ed',
          'grayish-blue-200': '#c7d3db',
          'grayish-blue-300': '#abbdc9',
          'grayish-blue-400': '#8fa7b7',
          'grayish-blue-500': '#789cb7',
          'grayish-blue-600': '#607d92',
          'grayish-blue-700': '#485e6e',
          'grayish-blue-800': '#303e49',
          'grayish-blue-900': '#181f25',
          'deep-green-50': '#edf2f1',
          'deep-green-100': '#dbe5e3',
          'deep-green-200': '#b7cbc7',
          'deep-green-300': '#93b1ab',
          'deep-green-400': '#6f978f',
          'deep-green-500': '#3c7f77',
          'deep-green-600': '#306660',
          'deep-green-700': '#244c48',
          'deep-green-800': '#183330',
          'deep-green-900': '#0c1918',
        },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;