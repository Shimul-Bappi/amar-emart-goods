import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white text-lg">📋</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Technical Specification</h1>
                <p className="text-xs text-gray-500">Amar eMart Goods</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/mobile"
                className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm font-semibold border border-emerald-200 transition-colors flex items-center gap-1.5"
              >
                <span>📱</span>
                <span>Mobile Guide</span>
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-emerald max-w-none">
          
          {/* Title Section */}
          <div className="text-center mb-12 not-prose">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              📱 Mobile-First Web Application
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Amar eMart Goods</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Product Catalog & Inventory Management System for Small to Medium Retail Businesses
            </p>
          </div>

          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Executive Summary</h2>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mt-4 not-prose">
              <h3 className="font-semibold text-emerald-800 mb-3">Core Purpose</h3>
              <p className="text-gray-700 mb-4">
                Amar eMart Goods enables business owners to quickly capture, catalog, and organize products 
                across six predefined categories with automatic form generation tied to image upload, 
                reducing manual data entry and streamlining inventory tracking.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <span className="text-3xl mb-2 block">📸</span>
                  <p className="text-sm font-medium text-gray-900">Photo Capture</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <span className="text-3xl mb-2 block">📦</span>
                  <p className="text-sm font-medium text-gray-900">6 Categories</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <span className="text-3xl mb-2 block">⚡</span>
                  <p className="text-sm font-medium text-gray-900">Quick Entry</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <span className="text-3xl mb-2 block">📊</span>
                  <p className="text-sm font-medium text-gray-900">Stock Tracking</p>
                </div>
              </div>
            </div>
          </section>

          {/* User Flow Diagram */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">User Flow Diagram</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mt-4 not-prose overflow-x-auto">
              <div className="flex items-center justify-center min-w-max gap-4">
                {[
                  { icon: '🏠', label: 'Dashboard', desc: 'View stats & quick actions' },
                  { icon: '📁', label: 'Select Category', desc: 'Choose from 6 categories' },
                  { icon: '📸', label: 'Capture/Upload', desc: 'Add product image' },
                  { icon: '📝', label: 'Fill Form', desc: 'Enter product details' },
                  { icon: '✅', label: 'Save', desc: 'Product added to inventory' },
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-2">
                        {step.icon}
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">{step.label}</p>
                      <p className="text-xs text-gray-500 text-center max-w-[100px]">{step.desc}</p>
                    </div>
                    {index < 4 && (
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 not-prose">
              {[
                { icon: '🎨', name: 'Art & Crafts', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                { icon: '📚', name: 'Stationery & Education', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                { icon: '👗', name: 'Fashion & Clothing', color: 'bg-pink-50 border-pink-200 text-pink-700' },
                { icon: '💄', name: 'Beauty & Personal Care', color: 'bg-rose-50 border-rose-200 text-rose-700' },
                { icon: '🛒', name: 'Daily Grocery & Snacks', color: 'bg-green-50 border-green-200 text-green-700' },
                { icon: '💻', name: 'Electronics & Computers', color: 'bg-slate-50 border-slate-200 text-slate-700' },
              ].map((cat, i) => (
                <div key={i} className={`rounded-xl p-4 border-2 ${cat.color}`}>
                  <span className="text-3xl mb-2 block">{cat.icon}</span>
                  <p className="font-semibold">{cat.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Wireframes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Screen Wireframes</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
              
              {/* Dashboard Wireframe */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-emerald-500 text-white p-3 text-center text-sm font-medium">
                    Dashboard View
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-emerald-100 rounded-lg p-3 h-16"></div>
                      <div className="bg-blue-100 rounded-lg p-3 h-16"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-amber-100 rounded-lg p-3 h-16"></div>
                      <div className="bg-red-100 rounded-lg p-3 h-16"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">Quick Add Categories</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="bg-gray-100 rounded-lg p-2 h-12"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Form Wireframe */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-emerald-500 text-white p-3 text-center text-sm font-medium">
                    Product Form
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center text-gray-400 text-2xl">
                      📷
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg h-8"></div>
                      <div className="bg-gray-100 rounded-lg h-16"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-lg h-8"></div>
                        <div className="bg-gray-100 rounded-lg h-8"></div>
                      </div>
                      <div className="bg-gray-100 rounded-lg h-8"></div>
                    </div>
                    <div className="bg-emerald-500 rounded-lg h-10"></div>
                  </div>
                </div>
              </div>

              {/* Product List Wireframe */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-emerald-500 text-white p-3 text-center text-sm font-medium">
                    Product List
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 rounded-lg h-8"></div>
                    <div className="flex gap-2 overflow-hidden">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-400">Filter</div>
                      ))}
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} className="bg-gray-50 rounded-lg p-2 flex gap-2">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1 space-y-1">
                          <div className="bg-gray-200 rounded h-3 w-3/4"></div>
                          <div className="bg-gray-100 rounded h-2 w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Database Schema */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Database Schema</h2>
            <div className="bg-gray-900 rounded-2xl p-6 mt-4 overflow-x-auto not-prose">
              <pre className="text-sm text-green-400 font-mono">
{`-- Products Table
CREATE TABLE products (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  description   TEXT NOT NULL,
  category      category_enum NOT NULL,
  price_code    VARCHAR(100) NOT NULL,
  price         DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  comments      TEXT,
  image_url     TEXT,
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW()
);

-- Category Enum
CREATE TYPE category_enum AS ENUM (
  'art_crafts',
  'stationery_education',
  'fashion_clothing',
  'beauty_personal_care',
  'daily_grocery_snacks',
  'electronics_computers'
);

-- Index for category filtering
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_created_at ON products(created_at DESC);`}
              </pre>
            </div>
          </section>

          {/* Feature Prioritization */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Feature Prioritization</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4 not-prose">
              
              {/* MVP Features */}
              <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">MVP</span>
                  <h3 className="font-semibold text-emerald-800">Core Features</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Category-based product entry workflow',
                    'Camera capture & image upload',
                    'Auto-generated product forms',
                    'Full CRUD operations for products',
                    'Product list with filtering & sorting',
                    'Stock quantity tracking',
                    'Mobile-responsive design',
                    'Real-time search functionality',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice-to-Have Features */}
              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">FUTURE</span>
                  <h3 className="font-semibold text-amber-800">Nice-to-Have</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Barcode/QR code scanning',
                    'AI-powered product recognition',
                    'Multi-user access with roles',
                    'Sales tracking & analytics',
                    'Low stock alerts & notifications',
                    'Export to CSV/PDF',
                    'Offline mode with sync',
                    'Cloud image storage',
                    'Batch product import',
                    'Price history tracking',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4 not-prose">
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Frontend</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Next.js 16', desc: 'React framework with App Router' },
                    { name: 'React 19', desc: 'UI component library' },
                    { name: 'TypeScript', desc: 'Type-safe JavaScript' },
                    { name: 'Tailwind CSS 4', desc: 'Utility-first styling' },
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">
                          {tech.name.split(' ')[0].slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Backend</h3>
                <div className="space-y-2">
                  {[
                    { name: 'PostgreSQL', desc: 'Relational database' },
                    { name: 'Drizzle ORM', desc: 'Type-safe database queries' },
                    { name: 'Next.js API Routes', desc: 'Serverless API endpoints' },
                    { name: 'Node.js', desc: 'JavaScript runtime' },
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-xs">
                          {tech.name.split(' ')[0].slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Development Note */}
            <div className="mt-6 bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">📱 Mobile Development Options</h3>
              <p className="text-gray-700 mb-4">For native mobile app development, consider:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-gray-900">React Native</p>
                  <p className="text-xs text-gray-500">Cross-platform (iOS & Android)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-gray-900">Flutter</p>
                  <p className="text-xs text-gray-500">Google&apos;s cross-platform SDK</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-gray-900">PWA</p>
                  <p className="text-xs text-gray-500">Progressive Web App (current)</p>
                </div>
              </div>
            </div>
          </section>

          {/* UX Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">UX Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4 not-prose">
              {[
                {
                  icon: '⚡',
                  title: 'Speed & Performance',
                  items: [
                    'Lazy loading for product images',
                    'Optimistic UI updates',
                    'Client-side caching',
                    'Minimal page reloads',
                  ]
                },
                {
                  icon: '👆',
                  title: 'Touch-First Design',
                  items: [
                    'Large tap targets (min 44px)',
                    'Swipe gestures for actions',
                    'Pull-to-refresh',
                    'Bottom navigation for thumb reach',
                  ]
                },
                {
                  icon: '🎯',
                  title: 'Reduced Data Entry',
                  items: [
                    'Pre-populated category fields',
                    'Smart defaults',
                    'Image-first workflow',
                    'Optional comments field',
                  ]
                },
                {
                  icon: '🔄',
                  title: 'Error Handling',
                  items: [
                    'Inline form validation',
                    'Clear error messages',
                    'Undo delete action',
                    'Auto-save drafts (future)',
                  ]
                },
              ].map((section, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* API Endpoints */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">API Endpoints</h2>
            <div className="overflow-x-auto mt-4 not-prose">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Method</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Endpoint</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { method: 'GET', endpoint: '/api/products', desc: 'List all products (with optional filters)' },
                    { method: 'POST', endpoint: '/api/products', desc: 'Create a new product' },
                    { method: 'GET', endpoint: '/api/products/:id', desc: 'Get single product details' },
                    { method: 'PUT', endpoint: '/api/products/:id', desc: 'Update product details' },
                    { method: 'DELETE', endpoint: '/api/products/:id', desc: 'Delete a product' },
                  ].map((api, i) => (
                    <tr key={i}>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          api.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                          api.method === 'POST' ? 'bg-green-100 text-green-700' :
                          api.method === 'PUT' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {api.method}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-sm text-gray-600">{api.endpoint}</td>
                      <td className="p-4 text-gray-700">{api.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sprint Planning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Sprint Planning Recommendations</h2>
            <div className="space-y-4 mt-4 not-prose">
              {[
                {
                  sprint: 'Sprint 1',
                  duration: '2 weeks',
                  focus: 'Core Infrastructure',
                  tasks: ['Database schema setup', 'API endpoints', 'Basic UI components', 'Product CRUD']
                },
                {
                  sprint: 'Sprint 2',
                  duration: '2 weeks',
                  focus: 'Product Entry Flow',
                  tasks: ['Category selector', 'Image upload/capture', 'Form validation', 'Dashboard stats']
                },
                {
                  sprint: 'Sprint 3',
                  duration: '2 weeks',
                  focus: 'Polish & UX',
                  tasks: ['Search & filtering', 'Sort functionality', 'Responsive design', 'Error handling']
                },
                {
                  sprint: 'Sprint 4',
                  duration: '2 weeks',
                  focus: 'Testing & Launch',
                  tasks: ['User testing', 'Bug fixes', 'Performance optimization', 'Documentation']
                },
              ].map((sprint, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="bg-emerald-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                      {sprint.sprint}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{sprint.duration}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{sprint.focus}</h4>
                    <div className="flex flex-wrap gap-2">
                      {sprint.tasks.map((task, j) => (
                        <span key={j} className="px-2 py-1 bg-white rounded text-xs text-gray-600 border">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center not-prose">
            <p className="text-gray-500 mb-4">Ready to start building? Launch the app to see the MVP in action.</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all"
            >
              🚀 Launch Amar eMart Goods
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
