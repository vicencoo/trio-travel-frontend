import { Button } from '../../../components/button';
import { Card } from '../../../components/card';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import type { ContactTypes } from '../../../types';

type ContactFormProps = {
  contact: ContactTypes;
  handleChangeContact: (key: string, value: string) => void;
  handleSubmit: () => void;
};

export const ContactForm = ({
  contact,
  handleChangeContact,
  handleSubmit,
}: ContactFormProps) => {
  return (
    <Card padding='px-5 py-3'>
      <Text
        text={'Plotësoni të gjitha fushat dhe dërgoni mesazhin'}
        size='text-lg'
        font='font-medium'
      />
      <div className='flex flex-col gap-3'>
        <Input
          label='Emri dhe Mbiemri *'
          placeholder='Emri juaj i plotë'
          value={contact.name}
          onChange={(e) => handleChangeContact('name', e.target.value)}
        />
        <Input
          label='Email *'
          placeholder='email@example.com'
          type='email'
          value={contact.email}
          onChange={(e) => handleChangeContact('email', e.target.value)}
        />
        <Input
          label='Numri i Telefonit *'
          placeholder='+355 XX XXX XXXX'
          type='number'
          value={contact.phoneNumber || ''}
          onChange={(e) => handleChangeContact('phoneNumber', e.target.value)}
        />
        <Input
          label='Mesazhi *'
          placeholder='Shkruani mesazhin që doni ti dërgoni agjensisë'
          multiline
          value={contact.message}
          onChange={(e) => handleChangeContact('message', e.target.value)}
        />
      </div>
      <Button
        name='dërgo mesazhin'
        color='white'
        bgColor='#2563eb'
        bgHover='#1d4ed8'
        border='transparent'
        borderHover='transparent'
        onClick={handleSubmit}
      />
    </Card>
  );
};
