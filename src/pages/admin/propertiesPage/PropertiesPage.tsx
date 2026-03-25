import { useNavigate } from 'react-router-dom';
import { usePropertiesPage } from './usePropertiesPage';
import { PropertyTableRow } from './PropertyTableRow';
import { DataTable } from '@/components/dataTable';
import { Pagination } from '@/components/pagination';
import { NoPropertyFound } from '@/components/noPropertyFound';
import { Text } from '@/components/text';
import { Spinner } from '@/components/spinner';
import { StatusFilter } from '@/components/statusFilter';
import { AdminPageHeader } from '@/components/adminPageHeader';
import { HouseOutlined, Search } from '@/icons';
import { Input } from '@/components/input';
import { PROPERTY_COLUMNS } from './columns';

export const PropertiesPage = () => {
  const navigate = useNavigate();
  const {
    properties,
    handleDelete,
    handlePageChange,
    pageNumber,
    renewProperty,
    toast,
    publishOrDraft,
    handleStatusChange,
    status,
    isLoading,
    handleChangeFilter,
  } = usePropertiesPage();

  return (
    <div className='relative flex flex-col gap-10 py-10 container min-h-screen'>
      <AdminPageHeader
        icon={<HouseOutlined className='text-white' fontSize='large' />}
        iconBgColor='bg-blue-500'
        label='Menaxho Pronat'
        text='Shiko, modifiko dhe menaxho te gjitha pronat'
        buttonName='shto prone te re'
        buttonBg='#3b82f6'
        buttonBgHover='#1d4ed8'
        buttonBorderHover='#1e3a8a'
        onClick={() => navigate('/admin/add-property')}
      />

      <div className='flex flex-col gap-4 w-full'>
        <StatusFilter status={status} handleStatusChange={handleStatusChange} />

        <div className='flex-1'>
          <Input
            icon={
              <Search className='text-gray-400 dark:text-slate-500' size={18} />
            }
            placeholder='Kërko pronë sipas titullit, qytetit...'
            className='border-gray-200 dark:border-slate-500'
            onChange={(e) => handleChangeFilter(e.target.value)}
          />
        </div>
      </div>
      {toast && (
        <div className='fixed bottom-5 right-4 px-3 py-7 border border-green-600 bg-green-50 rounded-lg z-[9999]'>
          <Text
            text={toast}
            font='font-semibold font-serif'
            className='text-green-500'
          />
        </div>
      )}

      {isLoading ? (
        <div className='flex w-full justify-center items-center'>
          <Spinner />
        </div>
      ) : properties?.properties && properties.properties.length > 0 ? (
        <div className='flex flex-col w-full items-center gap-10 min-h-[61vh] justify-between'>
          <DataTable
            columns={PROPERTY_COLUMNS}
            headerBg='bg-gray-300 dark:bg-slate-700'
            headerText='text-gray-700 dark:text-slate-300'
            layout='property'
          >
            {properties.properties.map((property) => (
              <PropertyTableRow
                property={property}
                handleDelete={handleDelete}
                renewProperty={renewProperty}
                publishOrDraft={publishOrDraft}
                key={property.id}
              />
            ))}
          </DataTable>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={properties.pagination.totalPages}
          />
        </div>
      ) : (
        <div className='flex w-full items-center justify-center py-10'>
          <NoPropertyFound label='nuk u gjenden prona' />
        </div>
      )}
    </div>
  );
};
