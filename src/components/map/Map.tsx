export const Map = () => {
  return (
    <div className='flex w-full h-full rounded-lg overflow-hidden'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.104193527186!2d19.48705107536868!3d40.46430367143193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134533bd2acb760b%3A0xb46b16aabaf0df5e!2sTrio%20Travel!5e1!3m2!1sen!2s!4v1769608287149!5m2!1sen!2s'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
      />
    </div>
  );
};
