import { AdminPageHeader } from '@/shared/components/adminPageHeader';
import { Shop } from '@mui/icons-material';
import { DataTable } from '@/shared/components/dataTable';
import { BOOKINGS_COLUMNS } from '@/utils/columns';
import { NoDataFound } from '@/shared/components/noDataFound';
import { useWorkManagement } from './useBookingManagement';
import { BookingFormModal } from './BookingFormModal';
import { BookingRow } from './BookingRow';
import { Spinner } from '@/shared/components/spinner';
import { Input } from '@/shared/components/input';
import { Button } from '@/shared/components/button';
import { Search } from 'lucide-react';

const BookingManagement = () => {
  const {
    closeModal,
    isModalOpen,
    openModal,
    formData,
    handleChange,
    handleSave,
    bookings,
    handleEdit,
    handleDelete,
    errors,
    isLoading,
  } = useWorkManagement();

  if (isLoading)
    return (
      <div className='flex w-full h-full items-center justify-center'>
        <Spinner />
      </div>
    );

  return (
    <div className='flex flex-col gap-10 py-10 container'>
      <AdminPageHeader
        icon={<Shop className='text-white' />}
        iconBgColor=' bg-gradient-to-br from-indigo-600 to-violet-600'
        buttonName='shto rezervim'
        label='Menaxhimi i Punës'
        text='Panel Administrativ i Shitjeve'
        onClick={openModal}
      />

      <div className='flex md:flex-row flex-col  items-center w-full gap-5 p-3 bg-white dark:bg-slate-700 shadow-md rounded-lg'>
        <Input
          placeholder='Kërko me kodin e biletës ose me emrin e klientit'
          className='flex-1 w-full'
        />
        <div className='flex md:w-max w-full'>
          <Button name='kërko' endIcon={<Search size={14} />} fullWidth />
        </div>
      </div>

      <BookingFormModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
        errors={errors}
      />

      {bookings && bookings.length > 0 ? (
        <DataTable
          columns={BOOKINGS_COLUMNS}
          layout='bookings'
          headerBg='bg-slate-300 dark:bg-slate-700'
          headerText='text-slate-700 dark:text-slate-300'
        >
          {bookings &&
            bookings.map((booking) => (
              <BookingRow
                booking={booking}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={booking.id}
              />
            ))}
        </DataTable>
      ) : (
        <NoDataFound text='No Bookings Found!' />
      )}
      {/* {isModalOpen && } */}
    </div>
  );
};

export default BookingManagement;

// import { useState } from 'react';

// const StatusPill = ({ status }) => {
//   const map = {
//     confirmed: {
//       bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
//       dot: 'bg-emerald-500',
//       label: 'Konfirmuar',
//     },
//     pending: {
//       bg: 'bg-amber-50 text-amber-700 border-amber-200',
//       dot: 'bg-amber-400',
//       label: 'Në pritje',
//     },
//     cancelled: {
//       bg: 'bg-rose-50 text-rose-700 border-rose-200',
//       dot: 'bg-rose-500',
//       label: 'Anuluar',
//     },
//   };
//   const s = map[status];
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${s.bg}`}
//     >
//       <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
//       {s.label}
//     </span>
//   );
// };

// const MOCK_BOOKINGS = [
//   {
//     id: '1',
//     ticketCode: 'TK-001',
//     client: 'Arben Gashi',
//     date: '2025-03-12',
//     status: 'confirmed',
//     amount: 4500,
//   },
//   {
//     id: '2',
//     ticketCode: 'TK-002',
//     client: 'Mirlinda Hoxha',
//     date: '2025-03-13',
//     status: 'pending',
//     amount: 2200,
//   },
//   {
//     id: '3',
//     ticketCode: 'TK-003',
//     client: 'Driton Krasniqi',
//     date: '2025-03-14',
//     status: 'cancelled',
//     amount: 1800,
//   },
//   {
//     id: '4',
//     ticketCode: 'TK-004',
//     client: 'Vjosa Berisha',
//     date: '2025-03-15',
//     status: 'confirmed',
//     amount: 6700,
//   },
//   {
//     id: '5',
//     ticketCode: 'TK-005',
//     client: 'Liridon Mustafa',
//     date: '2025-03-16',
//     status: 'confirmed',
//     amount: 3300,
//   },
// ];

// export default function BookingManagement() {
//   const [query, setQuery] = useState('');
//   const [filter, setFilter] = useState('all');

//   const filtered = MOCK_BOOKINGS.filter((b) => {
//     const matchesQuery =
//       b.ticketCode.toLowerCase().includes(query.toLowerCase()) ||
//       b.client.toLowerCase().includes(query.toLowerCase());
//     const matchesFilter = filter === 'all' || b.status === filter;
//     return matchesQuery && matchesFilter;
//   });

//   const stats = {
//     total: MOCK_BOOKINGS.length,
//     confirmed: MOCK_BOOKINGS.filter((b) => b.status === 'confirmed').length,
//     pending: MOCK_BOOKINGS.filter((b) => b.status === 'pending').length,
//     revenue: MOCK_BOOKINGS.filter((b) => b.status === 'confirmed').reduce(
//       (a, b) => a + b.amount,
//       0,
//     ),
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'DM Sans', sans-serif",
//         background: '#f5f4f0',
//         minHeight: '100vh',
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');
//         .serif { font-family: 'DM Serif Display', serif; }
//         .row-hover:hover { background: #f8f9fa; }
//         .icon-btn { padding: 6px; border-radius: 8px; border: none; background: transparent; cursor: pointer; color: #94a3b8; transition: all 0.15s; }
//         .icon-btn:hover { color: #6366f1; background: #eef2ff; }
//         .icon-btn.del:hover { color: #e11d48; background: #fff1f2; }
//         .filter-btn { border: none; cursor: pointer; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 500; transition: all 0.15s; background: transparent; color: #64748b; }
//         .filter-btn:hover { background: #f1f5f9; }
//         .filter-btn.active { background: #0f172a; color: white; }
//       `}</style>

//       {/* Header */}
//       <div
//         style={{
//           background: 'white',
//           borderBottom: '1px solid #e2e8f0',
//           padding: '24px 32px',
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 1100,
//             margin: '0 auto',
//             display: 'flex',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}
//         >
//           <div>
//             <p
//               style={{
//                 fontSize: 11,
//                 fontWeight: 600,
//                 color: '#94a3b8',
//                 letterSpacing: '0.12em',
//                 textTransform: 'uppercase',
//                 marginBottom: 6,
//               }}
//             >
//               Panel Administrativ · Shitjet
//             </p>
//             <h1
//               className='serif'
//               style={{
//                 fontSize: 30,
//                 color: '#0f172a',
//                 margin: 0,
//                 lineHeight: 1.2,
//               }}
//             >
//               Menaxhimi i Rezervimeve
//             </h1>
//           </div>
//           <button
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 8,
//               background: '#0f172a',
//               color: 'white',
//               border: 'none',
//               borderRadius: 12,
//               padding: '10px 20px',
//               fontSize: 13,
//               fontWeight: 500,
//               cursor: 'pointer',
//               fontFamily: 'inherit',
//             }}
//           >
//             <svg
//               width='16'
//               height='16'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M12 4v16m8-8H4'
//               />
//             </svg>
//             Shto rezervim
//           </button>
//         </div>
//       </div>

//       <div
//         style={{
//           maxWidth: 1100,
//           margin: '0 auto',
//           padding: '32px 32px',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 20,
//         }}
//       >
//         {/* Stats */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(4,1fr)',
//             gap: 16,
//           }}
//         >
//           {[
//             {
//               label: 'Gjithsej',
//               value: stats.total,
//               sub: 'rezervime',
//               color: '#0f172a',
//             },
//             {
//               label: 'Konfirmuara',
//               value: stats.confirmed,
//               sub: 'të aprovuara',
//               color: '#059669',
//             },
//             {
//               label: 'Në pritje',
//               value: stats.pending,
//               sub: 'pa përgjigje',
//               color: '#d97706',
//             },
//             {
//               label: 'Të ardhura',
//               value: `${stats.revenue.toLocaleString()} L`,
//               sub: 'nga konfirmuarat',
//               color: '#4f46e5',
//             },
//           ].map((s) => (
//             <div
//               key={s.label}
//               style={{
//                 background: 'white',
//                 borderRadius: 16,
//                 border: '1px solid #f1f5f9',
//                 padding: '18px 20px',
//                 boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: 11,
//                   fontWeight: 600,
//                   color: '#94a3b8',
//                   letterSpacing: '0.1em',
//                   textTransform: 'uppercase',
//                   margin: '0 0 8px',
//                 }}
//               >
//                 {s.label}
//               </p>
//               <p
//                 style={{
//                   fontSize: 24,
//                   fontWeight: 600,
//                   color: s.color,
//                   margin: '0 0 2px',
//                 }}
//               >
//                 {s.value}
//               </p>
//               <p style={{ fontSize: 11, color: '#94a3b8', margin: 0 }}>
//                 {s.sub}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Search + Filter */}
//         <div
//           style={{
//             background: 'white',
//             borderRadius: 16,
//             border: '1px solid #f1f5f9',
//             padding: '14px 16px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: 12,
//             boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 10,
//               background: '#f8fafc',
//               borderRadius: 10,
//               padding: '8px 14px',
//             }}
//           >
//             <svg
//               width='15'
//               height='15'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='#94a3b8'
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z'
//               />
//             </svg>
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder='Kërko me kodin e biletës ose emrin e klientit…'
//               style={{
//                 background: 'transparent',
//                 border: 'none',
//                 outline: 'none',
//                 fontSize: 13,
//                 color: '#334155',
//                 width: '100%',
//                 fontFamily: 'inherit',
//               }}
//             />
//           </div>
//           <div style={{ display: 'flex', gap: 4 }}>
//             {[
//               { key: 'all', label: 'Të gjitha' },
//               { key: 'confirmed', label: 'Konfirmuar' },
//               { key: 'pending', label: 'Në pritje' },
//               { key: 'cancelled', label: 'Anuluar' },
//             ].map((f) => (
//               <button
//                 key={f.key}
//                 className={`filter-btn ${filter === f.key ? 'active' : ''}`}
//                 onClick={() => setFilter(f.key)}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Table */}
//         <div
//           style={{
//             background: 'white',
//             borderRadius: 16,
//             border: '1px solid #f1f5f9',
//             overflow: 'hidden',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
//           }}
//         >
//           {/* Head */}
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '100px 1fr 130px 110px 130px 80px',
//               gap: 16,
//               padding: '12px 24px',
//               background: '#f8fafc',
//               borderBottom: '1px solid #f1f5f9',
//             }}
//           >
//             {['Kodi', 'Klienti', 'Data', 'Shuma', 'Statusi', ''].map((col) => (
//               <p
//                 key={col}
//                 style={{
//                   margin: 0,
//                   fontSize: 11,
//                   fontWeight: 600,
//                   color: '#94a3b8',
//                   letterSpacing: '0.09em',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 {col}
//               </p>
//             ))}
//           </div>

//           {filtered.length === 0 ? (
//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: '64px 0',
//                 color: '#94a3b8',
//               }}
//             >
//               <svg
//                 width='40'
//                 height='40'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 stroke='currentColor'
//                 strokeWidth={1.5}
//                 style={{ opacity: 0.4, marginBottom: 12 }}
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                 />
//               </svg>
//               <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>
//                 Nuk u gjet asnjë rezervim
//               </p>
//             </div>
//           ) : (
//             filtered.map((b, i) => (
//               <div
//                 key={b.id}
//                 className='row-hover'
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: '100px 1fr 130px 110px 130px 80px',
//                   gap: 16,
//                   alignItems: 'center',
//                   padding: '16px 24px',
//                   borderBottom:
//                     i !== filtered.length - 1 ? '1px solid #f1f5f9' : 'none',
//                   transition: 'background 0.15s',
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: 13,
//                     fontFamily: 'monospace',
//                     fontWeight: 600,
//                     color: '#475569',
//                   }}
//                 >
//                   {b.ticketCode}
//                 </span>
//                 <span
//                   style={{ fontSize: 14, fontWeight: 500, color: '#1e293b' }}
//                 >
//                   {b.client}
//                 </span>
//                 <span style={{ fontSize: 13, color: '#64748b' }}>
//                   {new Date(b.date).toLocaleDateString('sq-AL', {
//                     day: '2-digit',
//                     month: 'short',
//                     year: 'numeric',
//                   })}
//                 </span>
//                 <span
//                   style={{ fontSize: 14, fontWeight: 600, color: '#1e293b' }}
//                 >
//                   {b.amount.toLocaleString()} L
//                 </span>
//                 <StatusPill status={b.status} />
//                 <div
//                   style={{
//                     display: 'flex',
//                     gap: 4,
//                     justifyContent: 'flex-end',
//                   }}
//                 >
//                   <button className='icon-btn'>
//                     <svg
//                       width='15'
//                       height='15'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16H8v-2a2 2 0 01.586-1.414z'
//                       />
//                     </svg>
//                   </button>
//                   <button className='icon-btn del'>
//                     <svg
//                       width='15'
//                       height='15'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3M4 7h16'
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <p
//           style={{
//             fontSize: 12,
//             color: '#94a3b8',
//             textAlign: 'right',
//             margin: 0,
//           }}
//         >
//           Duke shfaqur {filtered.length} nga {MOCK_BOOKINGS.length} rezervime
//         </p>
//       </div>
//     </div>
//   );
// }
