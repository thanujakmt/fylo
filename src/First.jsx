
import illustration from '/images/illustration-1.svg'

function FirstComponent() {
    return (
        <>
            <div className="2xl:grid flex flex-col 2xl:grid-cols-2 items-center">
                <div className="image_box  2xl:order-2">
                    <img className='md:h-[500px] p-5 2xl:h-[580px] xl:h-[700]' src={illustration} alt="" />
                </div>
                <div className="text p-5 flex flex-col items-center justify-center 2xl:px-20 gap-4 lg:w-[700px] xl:w-[800px]">
                    <h1 className='md:text-4xl lg:text-3xl text-2xl 2xl:text-start font-medium text-center 2xl:text-[2.8em] 2xl:font-medium' >All your files in one secure location, accessible anywhere.</h1>
                    <p className='md:text-2xl lg:text-xl text-xl 2xl:text-start text-[1.8em] font-base pt-2 pb-2 text-center' >Fylo stores your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends,
                        family, and co-workers.
                    </p>
                    <div className="emailWrapper items-center gap-4 w-full flex-col flex 2xl:flex-row">
                        <input type="email" className='border-[1px] w-[320px] p-2 rounded-[6px] md:w-[60%] md:p-4' placeholder='Enter your email...' />
                        <button className=' bg-Bright_Blue text-2xl w-[320px] p-2 text-white font-medium rounded-[6px] md:w-[60%] md:p-4' type='button'>Get started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstComponent