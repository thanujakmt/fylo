
import logo from '/images/logo.svg'

function Navbar() {

  return (
    <>
      <div className='md:px-10 flex justify-between items-center m-3 2xl:m-5 2xl:px-14 lg:px-16 xl:px-20'>
        <img src={logo} className='h-8 md:h-12' alt="" />
        <div class='flex'>
          <p className='m-2 md:m-5 md:text-xl text-Very_Dark_Blue'>Features</p>
          <p className='m-2 md:m-5 md:text-xl text-Very_Dark_Blue' >Team</p>
          <p className='m-2 md:m-5 md:text-xl text-Very_Dark_Blue' >Sign In</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
