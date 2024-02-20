function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' w-full font-semibold bg-slate-800 text-gray-200 dark:bg-black dark:text-gray-400 p-3'>
      <p className='text-base md:text-lg text-center'>
        Copyright © {currentYear} Don Nguyen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
