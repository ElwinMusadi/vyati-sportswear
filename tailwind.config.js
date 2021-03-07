module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      // '2xl': '1536px',
    },
    container: {
      center: 'true',
      padding: '1rem',
    },
    fontFamily: {
      'body': 'Poppins',
    },
    extend: {
      colors: {
        'black-sport': {
          500: '#242429',
          300: '#333333',
        },
        'gray-sport': {
          500: '#53505a',
          200: '#dbd9db',
        },
        gold: {
          800: '#b68438',
          500: '#ca9b46',
          300: '#deb866',
        }
      },
      spacing: {
        62: '15.5rem',
      },
      fontSize: {
        'xxs': '.625rem',
        '5.5xl': '3.25rem',
      },
      minHeight: {
        '248': '15.5rem',
        '276': '17.25rem',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      // },
      // backgroundImage: () => ({
      //   'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
      //   'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
      //   'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
      //   'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
      // }),
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      inset: ['hover', 'focus'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ],
}
