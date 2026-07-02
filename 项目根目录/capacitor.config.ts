import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.voice.ledger',
  appName: 'Voice Ledger',

  webDir: 'dist',

  bundledWebRuntime: false,

  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  },
}

export default config
