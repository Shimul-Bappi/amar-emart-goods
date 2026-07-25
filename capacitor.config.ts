import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.amaremart.goods',
  appName: 'Amar eMart Goods',
  webDir: 'out',
  server: {
    // During local development, you can point this to your local Next.js dev server:
    // url: 'http://192.168.1.XX:3000',
    // cleartext: true,
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#10b981",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    Camera: {
      // Configuration for native camera capture
      saveToGallery: false,
      allowEditing: true,
      resultType: "uri"
    }
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'amaremart'
  },
  android: {
    backgroundColor: '#ffffff',
    allowMixedContent: true,
    captureInput: true
  }
};

export default config;
