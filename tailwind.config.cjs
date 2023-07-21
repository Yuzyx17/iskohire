/** @type {import('tailwindcss').Config}*/

const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  darkMode: 'class',
  content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],

  theme: {
    screens: {
      'mobile-s': '320px',
      'mobile-m': '375px',
      'mobile-l': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop':'1280px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
};

module.exports = config;
