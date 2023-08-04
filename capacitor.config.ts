import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thirukural.app',
  appName: 'thirukural',
  webDir: 'build',
  server: {
    androidScheme: 'https://thirukkural-ansaribrahim.netlify.app/',
    cleartext: true,
  },
};

export default config;
