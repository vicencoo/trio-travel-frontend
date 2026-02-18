import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { useNavigate } from 'react-router-dom';
import { usePropertiesPage } from './usePropertiesPage';
import { PropertyTableRow } from './PropertyTableRow';
import { AdminPageHeader } from '@/components/adminPageHeader/AdminPageHeader';
import { DataTable } from '@/components/dataTable';
import { PROPERTY_COLUMNS } from '@/utils/columns';
import { Pagination } from '@/components/pagination';
import { NoPropertyFound } from '@/components/noPropertyFound';
import { Text } from '@/components/text';
import { Spinner } from '@/components/spinner';
import { StatusFilter } from '@/components/statusFilter';

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
  } = usePropertiesPage();

  return (
    <div className='relative flex flex-col gap-10 py-10 container min-h-screen'>
      <AdminPageHeader
        icon={<HouseOutlinedIcon className='text-white' fontSize='large' />}
        iconBgColor='bg-blue-500'
        label='Menaxho Pronat'
        text='Shiko, modifiko dhe menaxho te gjitha pronat'
        buttonName='shto prone te re'
        buttonBg='#3b82f6'
        buttonBgHover='#1d4ed8'
        buttonBorderHover='#1e3a8a'
        onClick={() => navigate('/admin/add-property')}
      />
      <StatusFilter status={status} handleStatusChange={handleStatusChange} />
      {toast && (
        <div className='absolute top-3 right-4 px-3 py-7 border border-green-600 bg-green-50 rounded-lg'>
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
            headerBg='bg-gray-300'
            headerText='text-gray-700'
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
