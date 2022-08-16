import { withSource } from './withSource'

const customViewports = {
  mobile1: {
    name: 'Device 1200px',
    styles: {
      width: '1200px',
      height: '700px',
    },
  },
  mobile2: {
    name: 'Device 1440px',
    styles: {
      width: '1440px',
      height: '700px',
    },
  },
  mobile3: {
    name: 'Device 1600px',
    styles: {
      width: '1680px',
      height: '700px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}

export const decorators = [
  withSource
]
