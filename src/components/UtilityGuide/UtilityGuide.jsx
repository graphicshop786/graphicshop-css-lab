import React, { useState } from 'react';

const utilities = [
  { class: 'text-center', css: 'text-align: center;', html: '<div class="text-center">Centered text</div>', category: 'Typography' },
  { class: 'font-bold', css: 'font-weight: bold;', html: '<div class="font-bold">Bold text</div>', category: 'Typography' },
  { class: 'italic', css: 'font-style: italic;', html: '<div class="italic">Italic text</div>', category: 'Typography' },
  { class: 'underline', css: 'text-decoration: underline;', html: '<div class="underline">Underlined text</div>', category: 'Typography' },
  { class: 'bg-blue-500', css: 'background: #2563eb; color: #fff;', html: '<div class="bg-blue-500">Blue background</div>', category: 'Background' },
  { class: 'rounded-lg', css: 'border-radius: 0.75rem;', html: '<div class="rounded-lg">Large rounded corners</div>', category: 'Border' },
  { class: 'shadow', css: 'box-shadow: 0 2px 8px #0002;', html: '<div class="shadow">Box shadow</div>', category: 'Effects' },
  { class: 'p-4', css: 'padding: 1rem;', html: '<div class="p-4">Padding 1rem</div>', category: 'Spacing' },
  { class: 'm-4', css: 'margin: 1rem;', html: '<div class="m-4">Margin 1rem</div>', category: 'Spacing' },
  { class: 'flex', css: 'display: flex;', html: '<div class="flex"><div>Item 1</div><div>Item 2</div></div>', category: 'Layout' },
  { class: 'items-center', css: 'align-items: center;', html: '<div class="flex items-center"><div>Item 1</div><div>Item 2</div></div>', category: 'Layout' },
  { class: 'justify-between', css: 'justify-content: space-between;', html: '<div class="flex justify-between"><div>Left</div><div>Right</div></div>', category: 'Layout' },
  { class: 'grid', css: 'display: grid;', html: '<div class="grid"><div>1</div><div>2</div></div>', category: 'Layout' },
  { class: 'gap-4', css: 'gap: 1rem;', html: '<div class="flex gap-4"><div>A</div><div>B</div></div>', category: 'Spacing' },
  { class: 'w-full', css: 'width: 100%;', html: '<div class="w-full">Full width</div>', category: 'Sizing' },
  { class: 'h-16', css: 'height: 4rem;', html: '<div class="h-16">Height 4rem</div>', category: 'Sizing' },
  { class: 'overflow-auto', css: 'overflow: auto;', html: '<div class="overflow-auto" style="max-width:120px">Overflow auto content that is very long and will scroll</div>', category: 'Layout' },
  { class: 'truncate', css: 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;', html: '<div class="truncate" style="max-width:120px">This is a very long text that will be truncated</div>', category: 'Typography' },
];

const categories = ['All', 'Typography', 'Background', 'Border', 'Effects', 'Spacing', 'Layout', 'Sizing'];

const UtilityGuide = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const filtered = utilities.filter(u => 
    u.class.includes(search) && (category === 'All' || u.category === category)
  );
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Utility Class Guide</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Search and preview common utility classes for quick CSS styling</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>🔍 Search & Filter</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <input 
              type="text" 
              placeholder="Search utility classes..." 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              style={{ 
                width: '100%',
                padding: '12px 16px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 16,
                background: 'white'
              }} 
            />
          </div>
          <div>
            <select 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              style={{ 
                padding: '12px 16px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 16,
                background: 'white'
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 20, color: '#1e293b' }}>📚 Utility Classes</h3>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button 
              onClick={() => setShowCode(s => !s)} 
              style={{ 
                fontSize: 14, 
                background: showCode ? '#64748b' : '#2563eb', 
                color: 'white', 
                border: 'none', 
                borderRadius: 8, 
                padding: '8px 16px', 
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              {showCode ? '👁️ Hide CSS' : '💻 Show CSS'}
            </button>
            {copied && (
              <div style={{ 
                background: '#10b981',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                animation: 'fadeInOut 1.2s ease'
              }}>
                ✅ Copied!
              </div>
            )}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 16 }}>
          {filtered.length === 0 && (
            <div style={{ 
              gridColumn: '1/-1', 
              textAlign: 'center',
              padding: 48,
              color: '#64748b',
              background: '#f8fafc',
              borderRadius: 12,
              border: '2px dashed #e2e8f0'
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>No utilities found</div>
              <div>Try adjusting your search or filter</div>
            </div>
          )}
          
          {filtered.map((u, i) => (
            <div key={i} style={{ 
              background: '#f8fafc', 
              borderRadius: 12, 
              padding: 20, 
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#1e293b', marginBottom: 4 }}>{u.class}</div>
                  <div style={{ fontSize: 12, color: '#64748b', background: '#e2e8f0', padding: '2px 8px', borderRadius: 4, display: 'inline-block' }}>
                    {u.category}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    onClick={() => copy(u.class)} 
                    style={{ 
                      fontSize: 12, 
                      background: '#2563eb', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Copy Class
                  </button>
                  <button 
                    onClick={() => copy(u.css)} 
                    style={{ 
                      fontSize: 12, 
                      background: '#10b981', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Copy CSS
                  </button>
                </div>
              </div>
              
              <div style={{ 
                background: 'white', 
                borderRadius: 8, 
                padding: 12, 
                border: '1px solid #e2e8f0',
                marginBottom: 12
              }}>
                <div dangerouslySetInnerHTML={{ __html: `<style>.${u.class}{${u.css}}</style>${u.html}` }} />
              </div>
              
              {showCode && (
                <div style={{ 
                  background: '#1e293b', 
                  borderRadius: 8, 
                  padding: 12, 
                  fontFamily: 'monospace', 
                  fontSize: 12,
                  color: '#e2e8f0',
                  border: '1px solid #334155'
                }}>
                  <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 4 }}>CSS:</div>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{u.css}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default UtilityGuide;
