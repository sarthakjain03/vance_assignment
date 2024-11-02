import { ArrowDownwardRounded } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center border-b border-b-white/50 bg-black'>
        <div className='flex justify-between items-center mx-10 my-3 w-3/4'>
            <img src='/logo.svg' height={20} width={120} alt='vance logo' />
            <button className='bg-primary px-3 py-2 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B]'>
                <p className='font-semibold'>Download app</p>
                <div className='rounded-full bg-black flex justify-center items-center p-1'>
                    <ArrowDownwardRounded fontSize='10' sx={{ color: '#81EBAB', fontWeight: 600 }} />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar