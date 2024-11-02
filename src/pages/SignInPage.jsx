
const SignInPage = () => {
  return (
    <div className='bg-black'>
        <div className='flex justify-center items-center relative py-20'>
            <div className='h-[444px] w-[444px] rounded-full blur-2xl opacity-75 absolute -top-5' style={{ background: 'radial-gradient(50% 50% at 50% 50%, #4602D9 0%, #111111 100%)' }}></div>
            <div className='flex justify-center items-center flex-col gap-12 relative z-10'>
                <img alt='megaphone' src='/megaphone.svg' />
                <div className='flex justify-center items-center gap-9 flex-col w-[353px]'>
                  <p className='text-4xl font-bold text-center text-white'>
                      Access
                      <br />
                      rate alert dashboard
                  </p>
                  <p className='font-medium text-center text-white opacity-75'>
                    Stay updated with real-time currency rates and manage your alerts.
                  </p>
                </div>
                <button className='bg-[#333333] rounded-full w-full flex justify-center items-center py-4 text-white gap-3'>
                  <img src='/Google.svg' width={20} height={20} alt='google_logo' />
                  <p className='font-semibold leading-5'>
                    Sign in with Google
                  </p>
                </button>
                <div className='w-3/5 flex justify-center text-white text-sm'>
                  <p className='text-center'>
                    <span className='font-normal text-center opacity-35'>
                      By creating an account or signing you agree to our{" "}
                    </span>
                    <span className='underline cursor-pointer font-semibold opacity-50'>
                      Terms and Conditions
                    </span>
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInPage