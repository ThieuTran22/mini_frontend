/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '64px': '64px',
        '6px': '6px',
        '20px': '20px',
        '15px': '15px',
        '35px': '35px',
        '500px': '500px',
      },
      height: {
        '500px': '500px',
        '64px': '64px',
        '6px': '6px',
        '100%': '100%',
        '900px': '900px',
      },
      zIndex: {
        '1': '1',
      },
      margin: {
        '0': '0',
        '16px': '16px',
      },
      padding: {
        '24px': '24px',
      },
      customColors: {
        red: '#ff0000',
        green: '#00ff00',
        blue: '#0000ff',
        yellow: '#ffff00',
        cyan: '#00ffff',
        pink: '#ff00ff',
        orange: '#ff7f00',
        lime: '#7fff00',
        aqua: '#00ff7f',
        cobalt: '#007fff',
        purple: '#7f00ff',
        magenta: '#ff007f',
        gray: '#7f7f7f',
        olive: '#7f7f00',
        teal: '#007f7f',
        maroon: '#7f007f',
        darkGreen: '#007f00',
        darkRed: '#7f0000',
        darkBlue: '#00007f',
        darkGray: '#333333',
        mediumGray: '#666666',
        lightGray: '#999999',
        veryLightGray: '#cccccc',
        brown: '#666600',
        seaGreen: '#006666',
      }
    },
  },

  daisyUI: {
    styled: true,
  },
}
