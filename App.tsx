import React from 'react';
import KeyFinder from './components/KeyFinder';
import { BitcoinIcon, GithubIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 flex flex-col items-center justify-center p-4 selection:bg-emerald-500 selection:text-slate-900">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
             <BitcoinIcon className="w-12 h-12 text-amber-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              شبیه ساز پیدا کردن کلید خصوصی بیت کوین
            </h1>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
             این ابزار نشان می‌دهد که چرا امنیت بیت‌کوین بسیار بالاست. یافتن یک کلید خصوصی از طریق جستجوی تصادفی عملاً غیرممکن است.
          </p>
        </header>

        <main>
          <KeyFinder />
        </main>

        <footer className="text-center mt-12 text-xs text-slate-500">
          <p>
            <span className="font-bold text-red-500">سلب مسئولیت:</span> این یک شبیه‌سازی است و هیچ کلید خصوصی واقعی را پیدا نمی‌کند. هرگز کلید خصوصی واقعی خود را با کسی به اشتراک نگذارید.
          </p>
          <p className="mt-2">ساخته شده با React، TypeScript و Tailwind CSS</p>
          <div className="mt-4 flex justify-center items-center">
            <a 
              href="https://github.com/soroushzi/bitcoin-for-fun-soroush" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="View project on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>مشاهده پروژه در گیت‌هاب</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;