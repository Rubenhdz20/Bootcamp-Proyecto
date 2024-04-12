import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <nav className='w-80 h-[33rem] flex flex-col items-start gap-4 p-4'>
      <ul className='w-[18.3rem] h-[19rem] flex flex-col items-start gap-11'>
        <li className='w-[18.3rem] h-12 flex items-center p-4 hover:bg-teal-100 hover:cursor-pointer hover:rounded-3xl hover:p-4'>
          <Link to="/hero-section" className='text-xl font-bold text-black hover:text-black'>Home</Link>
        </li>
        <li className='w-[18.3rem] h-12 flex items-center p-4 hover:bg-teal-100 hover:cursor-pointer hover:rounded-3xl hover:p-4'>
          <Link to="/search-recipe" className='text-xl font-bold text-black hover:text-black'>Recipes</Link>
        </li>
        <li className='w-[18.3rem] h-12 flex items-center p-4 hover:bg-teal-100 hover:cursor-pointer hover:rounded-3xl hover:p-4'>
          <Link to="/meal-loggin" className='text-xl font-bold text-black hover:text-black'>Meal Loggin</Link>
        </li>
        <li className='w-[18.3rem] h-12 flex items-center p-4 hover:bg-teal-100 hover:cursor-pointer hover:rounded-3xl hover:p-4'>
          <Link to="/dashboard" className='text-xl font-bold text-black hover:text-black'>Dashboard</Link>
        </li>
        <li className='w-[18.3rem] h-12 flex items-center p-4 hover:bg-teal-100 hover:cursor-pointer hover:rounded-3xl hover:p-4'>
          <Link to="/collections" className='text-xl font-bold text-black hover:text-black'>Collections</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;