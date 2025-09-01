import React, { useState, useEffect, useRef } from 'react';
import { KeyIcon, SearchIcon, AlertTriangleIcon, CheckCircleIcon, CpuIcon } from './Icons';

// A simple (and fake) Bitcoin address validator for demonstration
const isValidBitcoinAddress = (address: string): boolean => {
  return /^(1|3|bc1)[a-zA-HJ-NP-Z0-9]{25,39}$/.test(address);
};

// Generates a random hexadecimal string to simulate a private key
const generateFakePrivateKey = (): string => {
    const chars = '0123456789ABCDEF';
    let key = '';
    for (let i = 0; i < 64; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
};

const SIMULATION_LOG_MESSAGES = [
    "مقداردهی اولیه الگوریتم جستجوی کوانتومی...",
    "اسکن بلاکچین برای امضای آدرس...",
    "استقرار گره‌های خوشه اکتشافی...",
    "تلاش برای استخراج معکوس امضای ECDSA...",
    "برخورد در ربع فضای هش یافت شد... در حال تأیید...",
    "نتیجه مثبت کاذب. ادامه جستجو...",
    "تحلیل توزیع کلیدهای عمومی...",
    "اجرای حمله کانگوروی پولارد...",
    "بررسی کلیدهای ضعیف شناخته شده...",
    "رمزگشایی با استفاده از کلیدهای کاندید...",
];

const KeyFinder: React.FC = () => {
    const [targetAddress, setTargetAddress] = useState<string>('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq');
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchLog, setSearchLog] = useState<string[]>([]);
    const [foundKey, setFoundKey] = useState<string | null>(null);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const logIntervalRef = useRef<number | null>(null);
    const timerIntervalRef = useRef<number | null>(null);
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [searchLog]);
    
    useEffect(() => {
        return () => {
            if (logIntervalRef.current) clearInterval(logIntervalRef.current);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        }
    }, []);

    const handleSearch = () => {
        if (!isValidBitcoinAddress(targetAddress)) {
            setError("لطفاً یک آدرس بیت‌کوین معتبر وارد کنید (فرمت P2PKH, P2SH یا Bech32).");
            return;
        }
        
        setError(null);
        setFoundKey(null);
        setSearchLog([]);
        setIsSearching(true);
        setElapsedTime(0);

        const startTime = Date.now();
        
        timerIntervalRef.current = window.setInterval(() => {
             setElapsedTime((Date.now() - startTime) / 1000);
        }, 100);

        setSearchLog(prev => [...prev, `شروع جستجو برای آدرس: ${targetAddress}`]);

        logIntervalRef.current = window.setInterval(() => {
            const randomMessage = SIMULATION_LOG_MESSAGES[Math.floor(Math.random() * SIMULATION_LOG_MESSAGES.length)];
            const randomKeyAttempt = generateFakePrivateKey().substring(0, 16);
            setSearchLog(prev => [...prev, `[تلاش] ${randomMessage} (کلید: ${randomKeyAttempt}...)`]);
        }, 300);

        setTimeout(() => {
            if (logIntervalRef.current) clearInterval(logIntervalRef.current);
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            const finalKey = generateFakePrivateKey();
            setFoundKey(finalKey);
            setIsSearching(false);
            setSearchLog(prev => [...prev, `موفقیت! کلید خصوصی پیدا شد.`]);
        }, 8000 + Math.random() * 4000); // Simulate for 8-12 seconds
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <div className="relative w-full">
                    <KeyIcon className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                        type="text"
                        value={targetAddress}
                        onChange={(e) => setTargetAddress(e.target.value)}
                        placeholder="آدرس بیت‌کوین مورد نظر را وارد کنید"
                        className="w-full bg-slate-900/70 border border-slate-600 rounded-lg py-3 px-4 pe-10 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                        disabled={isSearching}
                    />
                </div>
                <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                    {isSearching ? (
                        <>
                            <CpuIcon className="animate-spin w-5 h-5" />
                            <span>در حال جستجو...</span>
                        </>
                    ) : (
                        <>
                            <SearchIcon className="w-5 h-5" />
                            <span>پیدا کردن کلید</span>
                        </>
                    )}
                </button>
            </div>
            
            {error && (
                <div className="flex items-center gap-2 bg-red-900/50 text-red-300 border border-red-800 p-3 rounded-lg mb-4">
                    <AlertTriangleIcon className="w-5 h-5"/>
                    <p>{error}</p>
                </div>
            )}

            <div className="w-full h-64 bg-black/50 rounded-lg p-4 font-mono text-sm border border-slate-700 overflow-y-auto" ref={logContainerRef}>
                {searchLog.length === 0 && <p className="text-slate-500">گزارش جستجو در اینجا نمایش داده می‌شود...</p>}
                {searchLog.map((log, index) => (
                    <p key={index} className={`whitespace-nowrap ${log.startsWith('موفقیت') ? 'text-emerald-400' : 'text-slate-400'}`}>
                        <span className="text-slate-600 me-2">{`[${index.toString().padStart(3, '0')}]>`}</span>
                        {log}
                    </p>
                ))}
            </div>

            {foundKey && (
                <div className="mt-6 bg-emerald-900/50 border border-emerald-700 p-6 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircleIcon className="w-8 h-8 text-emerald-400"/>
                        <h3 className="text-2xl font-bold text-white">کلید خصوصی پیدا شد!</h3>
                    </div>
                    <p className="font-mono break-all bg-black/50 p-4 rounded-md text-emerald-300 text-center text-lg">
                        {foundKey}
                    </p>
                    <p className="text-center mt-4 text-slate-300">
                        زمان سپری شده: <span className="font-bold text-amber-400">{elapsedTime.toFixed(2)}</span> ثانیه
                    </p>
                </div>
            )}
            
            {/* Fix: The `jsx` prop is not a standard attribute for the `<style>` tag in React. It's specific to Next.js's `styled-jsx`. Removing it resolves the TypeScript error. */}
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
              }
            `}</style>
        </div>
    );
};

export default KeyFinder;