'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileLaunchGuide() {
  const [activeTab, setActiveTab] = useState<'capacitor' | 'pwa' | 'checklist' | 'permissions'>('capacitor');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'icon-1024': true,
    'manifest': true,
    'responsive': true,
    'camera-web': true,
    'duns': false,
    'apple-dev': false,
    'google-dev': false,
    'privacy': false,
    'screenshots-ios': false,
    'screenshots-android': false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = Object.keys(checkedItems).length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white text-lg">🚀</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Mobile Launch Roadmap</h1>
                <p className="text-xs text-gray-500">iOS & Android App Store Guide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs"
                className="px-3 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Tech Specs
              </Link>
              <Link 
                href="/"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm"
              >
                App Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-10 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
            ✨ Native SDK Installed & Configured
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            How to Launch Amar eMart Goods on iOS & Android
          </h1>
          <p className="text-emerald-100 text-base sm:text-lg max-w-2xl">
            We have already pre-configured <strong className="text-white">Capacitor 7</strong> in this project with camera capture support. Choose your launch path below to compile native binaries for Apple App Store and Google Play Store.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex overflow-x-auto bg-white p-1 rounded-2xl shadow-sm border border-gray-200 gap-1">
          {[
            { id: 'capacitor', label: '📱 Native App (Capacitor)', badge: 'Recommended' },
            { id: 'pwa', label: '🌐 PWA Quick Launch', badge: 'Instant' },
            { id: 'permissions', label: '🔐 Camera & Hardware' },
            { id: 'checklist', label: '✅ Store Readiness Checklist', count: `${completedCount}/${totalCount}` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {tab.badge}
                </span>
              )}
              {tab.count && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="max-w-4xl mx-auto px-4 mt-6">
        {/* TAB 1: CAPACITOR NATIVE BUILD */}
        {activeTab === 'capacitor' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Step-by-Step: Compiling Native iOS (.ipa) & Android (.apk/.aab)
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Because this app is built with mobile-first responsive design and standard web APIs, using <strong className="text-gray-900">Capacitor</strong> is the fastest and most reliable way to launch on app stores without rebuilding from scratch in Swift or Kotlin.
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-base">Step 1: Build the Web App Production Bundle</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">Terminal</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Compile the Next.js application into optimized static assets ready to be wrapped by the native webview.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-xl font-mono text-sm overflow-x-auto">
                    <code>npm run build</code>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-base">Step 2: Add iOS & Android Native Platforms</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Already Installed in Repo!</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    We have already installed <code>@capacitor/ios</code> and <code>@capacitor/android</code>. To generate the native Xcode and Android Studio project folders on your local machine, run:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-xl font-mono text-sm overflow-x-auto space-y-1">
                    <div><code>npx cap add ios</code></div>
                    <div><code>npx cap add android</code></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-base">Step 3: Sync Assets & Plugins</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">Terminal</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Whenever you update the web code or add a new capacitor plugin (like offline storage or barcode scanning), sync it to the native projects:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-xl font-mono text-sm overflow-x-auto">
                    <code>npx cap sync</code>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-base">Step 4: Open in Xcode & Android Studio</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold">IDE Required</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Open the native projects in their respective IDEs to sign the app with your developer certificates, test on physical simulators, and build production release bundles:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gray-900 text-blue-400 p-3 rounded-xl font-mono text-sm">
                      <div className="text-xs text-gray-400 mb-1"># For Apple App Store (Requires macOS):</div>
                      <code>npx cap open ios</code>
                    </div>
                    <div className="bg-gray-900 text-amber-400 p-3 rounded-xl font-mono text-sm">
                      <div className="text-xs text-gray-400 mb-1"># For Google Play Store:</div>
                      <code>npx cap open android</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span>⚡</span> Why This Strategy Wins for E-Commerce Inventory
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-emerald-400 mb-1">Single Codebase</h4>
                  <p className="text-gray-300 text-xs">
                    You maintain one TypeScript/Next.js codebase for Web, iOS, and Android. Any bug fix or inventory rule change instantly applies everywhere.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-400 mb-1">Native Hardware Speed</h4>
                  <p className="text-gray-300 text-xs">
                    Capacitor bridges directly to native camera APIs, providing zero-latency photo capture for rapid cataloging of retail goods.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-amber-400 mb-1">App Store Compliant</h4>
                  <p className="text-gray-300 text-xs">
                    Meets Apple App Store Review Guidelines (Section 4.2 Minimum Functionality) because of rich native UI interactions, modals, and camera workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PWA QUICK LAUNCH */}
        {activeTab === 'pwa' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 text-2xl">🌐</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Progressive Web App (PWA) Instant Launch</h2>
                  <p className="text-sm text-gray-500">Bypass App Stores and deploy directly to user devices in seconds</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We have already integrated a Web App Manifest (<code>public/manifest.json</code>), Apple touch icon headers, and mobile viewport locking. This means any business owner can install Amar eMart Goods directly to their home screen with native full-screen feel!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* iOS Instructions */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🍎</span>
                    <h3 className="font-bold text-gray-900">Installation on iOS (iPhone / iPad)</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                    <li>Open this web URL in <strong className="text-gray-900">Safari</strong> on your iPhone.</li>
                    <li>Tap the <strong className="text-blue-600">Share</strong> button (square with arrow pointing up) at the bottom of the screen.</li>
                    <li>Scroll down and tap <strong className="text-gray-900">&quot;Add to Home Screen&quot;</strong>.</li>
                    <li>Name the app <strong>&quot;eMart Goods&quot;</strong> and tap <strong>Add</strong> in the top right.</li>
                    <li>The app will appear on your home screen and launch without browser address bars!</li>
                  </ol>
                </div>

                {/* Android Instructions */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🤖</span>
                    <h3 className="font-bold text-gray-900">Installation on Android</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                    <li>Open this web URL in <strong className="text-gray-900">Google Chrome</strong> on your Android phone.</li>
                    <li>Tap the <strong className="text-gray-900">three dots menu (⋮)</strong> in the top right corner.</li>
                    <li>Select <strong className="text-emerald-600">&quot;Install app&quot;</strong> or <strong className="text-gray-900">&quot;Add to Home screen&quot;</strong>.</li>
                    <li>Confirm installation when prompted.</li>
                    <li>Chrome will generate an APK container automatically and place the icon on your app drawer!</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* PWA Pros/Cons Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">PWA vs App Store Deployment Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-left">
                      <th className="p-3 font-semibold text-gray-900">Feature</th>
                      <th className="p-3 font-semibold text-emerald-600">PWA (Instant)</th>
                      <th className="p-3 font-semibold text-blue-600">App Store / Play Store (Capacitor)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 font-medium text-gray-700">Approval Time</td>
                      <td className="p-3 text-emerald-600 font-semibold">0 seconds (Instant)</td>
                      <td className="p-3 text-gray-600">1 to 5 business days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-700">Store Developer Fee</td>
                      <td className="p-3 text-emerald-600 font-semibold">$0 Free</td>
                      <td className="p-3 text-gray-600">Apple: $99/yr | Google: $25 one-time</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-700">Camera Access</td>
                      <td className="p-3 text-gray-600">Yes (via HTML5 MediaDevices API)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Yes (Native hardware speed & gallery save)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-700">Offline Push Notifications</td>
                      <td className="p-3 text-gray-600">Limited (Requires web push setup)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Full APNS / FCM native support</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-700">Brand Trust & Discoverability</td>
                      <td className="p-3 text-gray-600">Direct link distribution</td>
                      <td className="p-3 text-emerald-600 font-semibold">High (Searchable in App Store & Google Play)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAMERA & PERMISSIONS */}
        {activeTab === 'permissions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                🔐 Configuring Native Camera & Privacy Permissions
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                To comply with strict iOS and Android privacy guidelines when capturing retail inventory product photos, you must declare usage descriptions in your native configuration files.
              </p>

              <div className="space-y-6">
                {/* iOS Info.plist */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span>🍎</span> iOS: Xcode <code>Info.plist</code> Configuration
                    </h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2.5 py-1 rounded-full font-semibold">Required by Apple</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Add the following XML keys to your iOS <code>ios/App/App/Info.plist</code> file so the system prompts the user with a friendly explanation when opening the camera:
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`<key>NSCameraUsageDescription</key>
<string>Amar eMart Goods uses your camera to take product photos for cataloging inventory.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Allow saving captured product photos directly to your device photo gallery.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Select existing product images from your photo gallery to attach to inventory items.</string>`}
                  </pre>
                </div>

                {/* Android Manifest */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span>🤖</span> Android: <code>AndroidManifest.xml</code> Configuration
                    </h3>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-semibold">Required by Google Play</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    In <code>android/app/src/main/AndroidManifest.xml</code>, ensure these permission tags are inside the root <code>&lt;manifest&gt;</code> element:
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-feature android:name="android.hardware.camera" android:required="false" />`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: STORE READINESS CHECKLIST */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">App Store & Google Play Submission Checklist</h2>
                  <p className="text-sm text-gray-500">Track your engineering and business readiness before publishing</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-600">{progressPct}%</span>
                  <p className="text-xs text-gray-400">{completedCount} of {totalCount} completed</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-6">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full transition-all duration-500" 
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {[
                  { id: 'icon-1024', category: 'Assets', title: 'App Icons (1024x1024 PNG)', desc: 'Pre-configured in manifest, generate native splash assets using @capacitor/assets.' },
                  { id: 'manifest', category: 'Assets', title: 'Web App Manifest & Metadata', desc: 'Configured with theme color #10b981 and standalone display mode.' },
                  { id: 'responsive', category: 'UX / UI', title: 'Touch-Optimized Mobile Viewport', desc: 'Tap targets are >44px with safe-area padding and disabled text-zoom.' },
                  { id: 'camera-web', category: 'Technical', title: 'Camera Capture Fallback & WebRTC', desc: 'Tested working on mobile browsers and native webview.' },
                  { id: 'privacy', category: 'Legal', title: 'Privacy Policy URL Hosted Online', desc: 'Required by both App Store and Google Play explaining why camera access is needed.' },
                  { id: 'apple-dev', category: 'Account', title: 'Apple Developer Account ($99/year)', desc: 'Enables access to App Store Connect and TestFlight beta distribution.' },
                  { id: 'duns', category: 'Account', title: 'DUNS Number (For Apple Business Accounts)', desc: 'Required if enrolling as a company ("Amar eMart Goods") rather than an individual.' },
                  { id: 'google-dev', category: 'Account', title: 'Google Play Console Account ($25 one-time)', desc: 'Enables publishing to Android app drawer and Play Store.' },
                  { id: 'screenshots-ios', category: 'Marketing', title: 'iOS App Store Screenshots (6.7" & 6.5" iPhone)', desc: 'Take screenshots of Product Entry, Dashboard, and Category List.' },
                  { id: 'screenshots-android', category: 'Marketing', title: 'Google Play Screenshots & Feature Graphic (1024x500)', desc: 'Prepare promo banner showing retail inventory management in action.' },
                ].map((item) => {
                  const isChecked = checkedItems[item.id];
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked 
                          ? 'bg-emerald-50/60 border-emerald-300' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-emerald-500 text-white' : 'border-2 border-gray-300 bg-white'
                      }`}>
                        {isChecked && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                            item.category === 'Assets' ? 'bg-purple-100 text-purple-700' :
                            item.category === 'UX / UI' ? 'bg-blue-100 text-blue-700' :
                            item.category === 'Technical' ? 'bg-emerald-100 text-emerald-700' :
                            item.category === 'Legal' ? 'bg-red-100 text-red-700' :
                            item.category === 'Account' ? 'bg-amber-100 text-amber-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.category}
                          </span>
                          <h4 className={`font-semibold text-sm ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
