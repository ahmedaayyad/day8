/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'headline': '20px',
        'caption-bold': '13px',
        'title-1': '32px',
        'body-bold': '16px',
        'caption-normal': '13px',
        'body-normal': '16px',
        'title-3': '22px',
        'button-large': '16px',
        'body-link-bold': '16px',
      },
      lineHeight: {
        'headline': '24px',
        'caption-bold': '16px',
        'title-1': '40px',
        'body-bold': '24px',
        'caption-normal': '16px',
        'body-normal': '24px',
        'title-3': '24px',
        'button-large': '24px',
        'body-link-bold': '20px',
      },
      letterSpacing: {
        'headline': '-0.2px',
        'caption-bold': '0px',
        'title-1': '-0.96px',
        'body-bold': '-0.16px',
        'caption-normal': '0px',
        'body-normal': '-0.16px',
        'title-3': '-0.22px',
        'button-large': '-0.16px',
        'body-link-bold': '-0.16px',
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '40px',
      },
      colors: {
        'black': {
          100: 'rgba(0, 0, 0, 1)',
          60: 'rgba(0, 0, 0, 0.6)',
          40: 'rgba(0, 0, 0, 0.4)',
          10: 'rgba(0, 0, 0, 0.1)',
          5: 'rgba(0, 0, 0, 0.05)',
        },
        'white': {
          100: 'rgba(255, 255, 255, 1)',
          60: 'rgba(255, 255, 255, 0.6)',
          20: 'rgba(255, 255, 255, 0.2)',
        },
        'brand-orange': {
          100: 'rgba(255, 86, 52, 1)',
        },
        'semantic-red': {
          100: 'rgba(225, 14, 14, 1)',
        },
        'dark-mode': {
          'text-40': 'rgba(238, 238, 238, 0.4)',
          'text-100': 'rgba(238, 238, 238, 1)',
          'bg-5': 'rgba(221, 221, 221, 0.05)',
        },
      },
      borderRadius: {
        'round-5': '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
