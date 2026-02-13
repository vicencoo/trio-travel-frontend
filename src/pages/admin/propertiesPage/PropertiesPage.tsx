import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { useNavigate } from 'react-router-dom';
import { usePropertiesPage } from './usePropertiesPage';
import { NoPropertyFound } from '../../../components/noPropertyFound';
import { DataTable } from '../../../components/dataTable';
import { PropertyTableRow } from './PropertyTableRow';
import { AdminPageHeader } from '../../../components/adminPageHeader/AdminPageHeader';
import { PROPERTY_COLUMNS } from '../../../columns';
import { Pagination } from '../../../components/pagination';

export const PropertiesPage = () => {
  const navigate = useNavigate();
  const { properties, handleDelete, handlePageChange, pageNumber } =
    usePropertiesPage();

  console.log(properties);

  return (
    <div className='flex flex-col gap-10 py-10 container min-h-screen'>
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

      {properties?.properties && properties.properties.length > 0 ? (
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
