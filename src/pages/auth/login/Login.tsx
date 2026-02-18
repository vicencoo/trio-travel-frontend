export const Login = () => {
  return <div></div>;
};

// import { useEffect, useRef, useState } from 'react';

// // ─── Aurora orb config ───────────────────────────────────────────────────────
// const ORBS = [
//   {
//     x: 0.18,
//     y: 0.28,
//     r: 0.46,
//     color: [30, 170, 150] as [number, number, number],
//   },
//   {
//     x: 0.72,
//     y: 0.62,
//     r: 0.42,
//     color: [80, 90, 210] as [number, number, number],
//   },
//   {
//     x: 0.48,
//     y: 0.08,
//     r: 0.36,
//     color: [15, 110, 175] as [number, number, number],
//   },
//   {
//     x: 0.08,
//     y: 0.82,
//     r: 0.32,
//     color: [70, 175, 190] as [number, number, number],
//   },
// ];

// const PARTICLE_COLORS = [
//   'rgba(100,210,190,0.55)',
//   'rgba(124,158,240,0.45)',
//   'rgba(80,220,210,0.4)',
//   'rgba(255,255,255,0.15)',
// ];

// const DESTINATIONS = [
//   {
//     flag: '🇯🇵',
//     city: 'Kyoto',
//     country: 'Japan',
//     desc: 'Cherry blossom season',
//     badge: 'HOT',
//   },
//   {
//     flag: '🇮🇸',
//     city: 'Reykjavik',
//     country: 'Iceland',
//     desc: 'Northern lights packages',
//     badge: 'NEW',
//   },
//   {
//     flag: '🇲🇦',
//     city: 'Marrakech',
//     country: 'Morocco',
//     desc: 'Desert & medina escapes',
//     badge: 'PICK',
//   },
// ];

// const STATS = [
//   { value: '450+', label: 'Destinations' },
//   { value: '12K+', label: 'Happy Travelers' },
//   { value: '4.9★', label: 'Avg. Rating' },
// ];

// // ─── Inline SVG icons ────────────────────────────────────────────────────────
// const IconMail = () => (
//   <svg
//     width='16'
//     height='16'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='1.8'
//   >
//     <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z' />
//     <polyline points='22,6 12,13 2,6' />
//   </svg>
// );
// const IconLock = () => (
//   <svg
//     width='16'
//     height='16'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='1.8'
//   >
//     <rect x='3' y='11' width='18' height='11' rx='2' />
//     <path d='M7 11V7a5 5 0 0110 0v4' />
//   </svg>
// );
// const IconEye = () => (
//   <svg
//     width='16'
//     height='16'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='1.8'
//   >
//     <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
//     <circle cx='12' cy='12' r='3' />
//   </svg>
// );
// const IconEyeOff = () => (
//   <svg
//     width='16'
//     height='16'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='1.8'
//   >
//     <path d='M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24' />
//     <line x1='1' y1='1' x2='23' y2='23' />
//   </svg>
// );
// const IconCheck = () => (
//   <svg
//     width='10'
//     height='10'
//     viewBox='0 0 10 10'
//     fill='none'
//     stroke='#060b14'
//     strokeWidth='2.2'
//   >
//     <polyline points='1.5,5 4,7.5 8.5,2.5' />
//   </svg>
// );
// const IconShield = () => (
//   <svg
//     width='13'
//     height='13'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//   >
//     <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
//   </svg>
// );
// const IconCompass = () => (
//   <svg width='21' height='21' viewBox='0 0 24 24' fill='none'>
//     <circle
//       cx='12'
//       cy='12'
//       r='10'
//       stroke='white'
//       strokeWidth='1.4'
//       opacity='0.5'
//     />
//     <circle
//       cx='12'
//       cy='12'
//       r='5'
//       stroke='white'
//       strokeWidth='1'
//       opacity='0.4'
//     />
//     <path d='M12 2L13.8 10L12 12L10.2 10Z' fill='white' />
//     <path d='M22 12L14 13.8L12 12L14 10.2Z' fill='rgba(255,255,255,0.55)' />
//     <path d='M12 22L10.2 14L12 12L13.8 14Z' fill='rgba(255,255,255,0.75)' />
//     <path d='M2 12L10 10.2L12 12L10 13.8Z' fill='rgba(255,255,255,0.4)' />
//   </svg>
// );
// const IconGoogle = () => (
//   <svg width='18' height='18' viewBox='0 0 24 24'>
//     <path
//       d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
//       fill='#4285F4'
//     />
//     <path
//       d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
//       fill='#34A853'
//     />
//     <path
//       d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'
//       fill='#FBBC05'
//     />
//     <path
//       d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
//       fill='#EA4335'
//     />
//   </svg>
// );
// const IconGitHub = () => (
//   <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
//     <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z' />
//   </svg>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// export const Login = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const particleRef = useRef<HTMLDivElement>(null);
//   const timeRef = useRef(0);
//   const rafRef = useRef<number>(0);

//   const [showPw, setShowPw] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // ── Aurora canvas ──────────────────────────────────────────────────────────
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d')!;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const draw = () => {
//       const { width: W, height: H } = canvas;
//       ctx.clearRect(0, 0, W, H);
//       ctx.fillStyle = '#060b14';
//       ctx.fillRect(0, 0, W, H);
//       ORBS.forEach((orb, i) => {
//         const px =
//           (orb.x + Math.sin(timeRef.current * 0.0004 + i * 1.3) * 0.12) * W;
//         const py =
//           (orb.y + Math.cos(timeRef.current * 0.0003 + i * 0.9) * 0.1) * H;
//         const radius = orb.r * Math.max(W, H);
//         const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
//         const [r, g, b] = orb.color;
//         grad.addColorStop(0, `rgba(${r},${g},${b},0.20)`);
//         grad.addColorStop(0.5, `rgba(${r},${g},${b},0.07)`);
//         grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
//         ctx.fillStyle = grad;
//         ctx.fillRect(0, 0, W, H);
//       });
//       timeRef.current++;
//       rafRef.current = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // ── Floating particles ─────────────────────────────────────────────────────
//   // Note: only truly runtime-dynamic values (size px, position %, timing) use
//   // element.style — everything else uses Tailwind classes on the element.
//   useEffect(() => {
//     const container = particleRef.current;
//     if (!container) return;
//     const nodes: HTMLDivElement[] = [];

//     for (let i = 0; i < 24; i++) {
//       const p = document.createElement('div');
//       const size = Math.random() * 3 + 1;
//       p.className =
//         'absolute rounded-full animate-float-up pointer-events-none';
//       p.style.width = `${size}px`;
//       p.style.height = `${size}px`;
//       p.style.left = `${Math.random() * 100}%`;
//       p.style.bottom = `${Math.random() * -20}%`;
//       p.style.background =
//         PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
//       p.style.animationDuration = `${10 + Math.random() * 18}s`;
//       p.style.animationDelay = `${Math.random() * 14}s`;
//       container.appendChild(p);
//       nodes.push(p);
//     }
//     return () => {
//       nodes.forEach((p) => p.remove());
//     };
//   }, []);

//   // ── Button ripple ──────────────────────────────────────────────────────────
//   const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const btn = e.currentTarget;
//     const rect = btn.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const span = document.createElement('span');
//     span.className =
//       'absolute rounded-full animate-ripple bg-white/25 pointer-events-none';
//     span.style.width = `${size}px`;
//     span.style.height = `${size}px`;
//     span.style.left = `${e.clientX - rect.left - size / 2}px`;
//     span.style.top = `${e.clientY - rect.top - size / 2}px`;
//     btn.appendChild(span);
//     setTimeout(() => span.remove(), 700);
//   };

//   // ─── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <div className='font-body relative w-full h-screen overflow-hidden bg-[#060b14] text-[#e6eef8]'>
//       {/* Aurora canvas */}
//       <canvas
//         ref={canvasRef}
//         className='fixed inset-0 z-0 pointer-events-none w-full h-full'
//       />

//       {/* Particles */}
//       <div
//         ref={particleRef}
//         className='fixed inset-0 z-10 pointer-events-none overflow-hidden'
//       />

//       {/* Two-column layout */}
//       <div className='relative z-20 grid grid-cols-2 h-full'>
//         {/* ══════════════════════════════════════
//             LEFT PANEL
//         ══════════════════════════════════════ */}
//         <div className='flex flex-col justify-center px-16 py-12 gap-7'>
//           {/* Brand */}
//           <div className='flex flex-col gap-1 animate-fade-up-1'>
//             <div className='flex items-center gap-3'>
//               <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#64d2be] to-[#7c9ef0] shadow-[0_0_20px_rgba(100,210,190,0.4)]'>
//                 <IconCompass />
//               </div>
//               <span className='font-display text-[1.75rem] font-semibold tracking-wide bg-gradient-to-r from-[#e6eef8] to-[#64d2be] bg-clip-text text-transparent'>
//                 Aéra
//               </span>
//             </div>
//             <p className='text-[11px] tracking-[0.18em] uppercase pl-[52px] text-[#e6eef8]/35'>
//               Journeys beyond the ordinary
//             </p>
//           </div>

//           {/* Headline */}
//           <h1 className='font-display font-light leading-tight text-[clamp(2.4rem,3.5vw,3.5rem)] animate-fade-up-2'>
//             The world is{' '}
//             <em className='font-display italic font-normal bg-gradient-to-r from-[#64d2be] to-[#7c9ef0] bg-clip-text text-transparent'>
//               waiting
//             </em>
//             <br />
//             for you.
//           </h1>

//           {/* Subtext */}
//           <p className='text-sm leading-relaxed max-w-sm text-[#e6eef8]/45 animate-fade-up-3'>
//             Tailored escapes, expert curation, and seamless travel — from your
//             first search to your last sunset.
//           </p>

//           {/* Destination cards */}
//           <div className='flex flex-col gap-3 animate-fade-up-4'>
//             {DESTINATIONS.map((d) => (
//               <div
//                 key={d.city}
//                 className='
//                   flex items-center gap-4 rounded-2xl px-5 py-4 cursor-default
//                   bg-white/[0.03] border border-white/[0.07] backdrop-blur-md
//                   transition-all duration-300
//                   hover:translate-x-1.5 hover:border-[#64d2be]/30
//                 '
//               >
//                 <span className='text-2xl leading-none'>{d.flag}</span>
//                 <div className='flex flex-col flex-1 min-w-0'>
//                   <span className='text-sm font-medium text-[#e6eef8]'>
//                     {d.city}, {d.country}
//                   </span>
//                   <span className='text-xs mt-0.5 text-[#e6eef8]/40'>
//                     {d.desc}
//                   </span>
//                 </div>
//                 <span className='text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#64d2be] to-[#7c9ef0] text-[#060b14] tracking-[0.06em] shrink-0'>
//                   {d.badge}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Stats */}
//           <div className='flex items-center gap-8 animate-fade-up-5'>
//             {STATS.map((s) => (
//               <div key={s.label} className='flex flex-col'>
//                 <span className='font-display text-2xl font-semibold text-[#64d2be]'>
//                   {s.value}
//                 </span>
//                 <span className='text-xs mt-0.5 text-[#e6eef8]/40'>
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vertical divider */}
//         <div className='absolute left-1/2 top-[10%] h-4/5 w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent pointer-events-none' />

//         {/* ══════════════════════════════════════
//             RIGHT PANEL
//         ══════════════════════════════════════ */}
//         <div className='flex items-center justify-center p-10'>
//           <div
//             className='
//             animate-card-in w-full max-w-md rounded-3xl px-10 py-11
//             bg-white/[0.04] border border-white/[0.08] backdrop-blur-[28px]
//             shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_80px_-20px_rgba(0,0,0,0.65),0_0_60px_rgba(100,210,190,0.04)]
//           '
//           >
//             {/* Card header */}
//             <div className='mb-8'>
//               <h2 className='font-display text-[2rem] font-semibold mb-1.5'>
//                 Welcome back
//               </h2>
//               <p className='text-sm text-[#e6eef8]/45'>
//                 No account?{' '}
//                 <a
//                   href='#'
//                   className='text-[#64d2be] font-medium no-underline hover:opacity-70 transition-opacity'
//                 >
//                   Sign up free
//                 </a>
//               </p>
//             </div>

//             {/* Social buttons */}
//             <div className='grid grid-cols-2 gap-3 mb-6'>
//               {[
//                 { label: 'Google', Icon: IconGoogle },
//                 { label: 'GitHub', Icon: IconGitHub },
//               ].map(({ label, Icon }) => (
//                 <button
//                   key={label}
//                   className='
//                     flex items-center justify-center gap-2 rounded-xl py-3
//                     text-sm font-medium text-[#e6eef8]
//                     bg-white/[0.04] border border-white/[0.08]
//                     cursor-pointer transition-all duration-200
//                     hover:bg-white/[0.08] hover:border-white/[0.16] hover:-translate-y-px
//                   '
//                 >
//                   <Icon />
//                   {label}
//                 </button>
//               ))}
//             </div>

//             {/* OR divider */}
//             <div className='flex items-center gap-3 mb-6'>
//               <div className='flex-1 h-px bg-white/[0.07]' />
//               <span className='text-[11px] tracking-[0.12em] uppercase text-[#e6eef8]/30'>
//                 or continue with email
//               </span>
//               <div className='flex-1 h-px bg-white/[0.07]' />
//             </div>

//             {/* Email */}
//             <div className='mb-4'>
//               <label className='block text-[11px] font-medium tracking-widest uppercase mb-2 text-[#e6eef8]/40'>
//                 Email address
//               </label>
//               <div className='relative group'>
//                 <span className='absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#e6eef8]/30 group-focus-within:text-[#64d2be] transition-colors duration-300'>
//                   <IconMail />
//                 </span>
//                 <input
//                   type='email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder='you@example.com'
//                   autoComplete='email'
//                   className='
//                     w-full rounded-xl pl-10 pr-4 py-3.5 text-sm
//                     bg-white/[0.04] border border-white/[0.08] text-[#e6eef8]
//                     placeholder:text-[#e6eef8]/20
//                     focus:outline-none focus:bg-white/[0.06]
//                     focus:border-[#64d2be]/55
//                     focus:ring-[3px] focus:ring-[#64d2be]/10
//                     transition-all duration-300
//                   '
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className='mb-4'>
//               <label className='block text-[11px] font-medium tracking-widest uppercase mb-2 text-[#e6eef8]/40'>
//                 Password
//               </label>
//               <div className='relative group'>
//                 <span className='absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#e6eef8]/30 group-focus-within:text-[#64d2be] transition-colors duration-300'>
//                   <IconLock />
//                 </span>
//                 <input
//                   type={showPw ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder='••••••••'
//                   autoComplete='current-password'
//                   className='
//                     w-full rounded-xl pl-10 pr-11 py-3.5 text-sm
//                     bg-white/[0.04] border border-white/[0.08] text-[#e6eef8]
//                     placeholder:text-[#e6eef8]/20
//                     focus:outline-none focus:bg-white/[0.06]
//                     focus:border-[#64d2be]/55
//                     focus:ring-[3px] focus:ring-[#64d2be]/10
//                     transition-all duration-300
//                   '
//                 />
//                 <button
//                   type='button'
//                   onClick={() => setShowPw((v) => !v)}
//                   className='absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#e6eef8]/35 hover:text-[#e6eef8] transition-colors bg-transparent border-none cursor-pointer'
//                 >
//                   {showPw ? <IconEyeOff /> : <IconEye />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Forgot */}
//             <div className='flex items-center justify-between mb-7 mt-1'>
//               <button
//                 type='button'
//                 onClick={() => setRemember((v) => !v)}
//                 className='flex items-center gap-2 text-sm text-[#e6eef8]/45 bg-transparent border-none cursor-pointer'
//               >
//                 <div
//                   className={`
//                   flex items-center justify-center w-[18px] h-[18px] rounded-[5px] shrink-0
//                   border transition-all duration-200
//                   ${remember ? 'bg-[#64d2be] border-[#64d2be]' : 'bg-white/[0.04] border-white/[0.12]'}
//                 `}
//                 >
//                   {remember && <IconCheck />}
//                 </div>
//                 Remember me
//               </button>
//               <a
//                 href='#'
//                 className='text-sm font-medium text-[#64d2be] no-underline hover:opacity-70 transition-opacity'
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* CTA */}
//             <button
//               onClick={handleRipple}
//               className='
//                 relative overflow-hidden w-full rounded-xl py-3.5
//                 text-sm font-semibold tracking-wide text-[#060b14]
//                 bg-gradient-to-r from-[#64d2be] via-[#4ab8a6] to-[#7c9ef0]
//                 border-none cursor-pointer
//                 shadow-[0_4px_24px_rgba(100,210,190,0.25)]
//                 hover:shadow-[0_8px_32px_rgba(100,210,190,0.4)]
//                 hover:-translate-y-0.5 active:translate-y-0
//                 transition-all duration-300
//               '
//             >
//               Sign in to Aéra
//             </button>

//             {/* Footer */}
//             <p className='mt-5 text-center text-xs text-[#e6eef8]/20'>
//               By signing in you agree to our{' '}
//               <a
//                 href='#'
//                 className='text-[#e6eef8]/40 underline underline-offset-[3px]'
//               >
//                 Terms
//               </a>
//               {' & '}
//               <a
//                 href='#'
//                 className='text-[#e6eef8]/40 underline underline-offset-[3px]'
//               >
//                 Privacy
//               </a>
//             </p>

//             {/* Trust badge */}
//             <div className='flex items-center justify-center gap-1.5 mt-3 text-[11px] text-[#64d2be]/50'>
//               <IconShield />
//               SSL encrypted · Your data stays private
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
