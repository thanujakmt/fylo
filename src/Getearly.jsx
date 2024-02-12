
function Getearly () {
    return (
        <>
            <div className="bg-Desaturated_Blue text-white text-center p-9 md:p-15 2xl:flex">
                <div className="text">
                    <h1 className="md:text-5xl text-[1.8em] font-medium my-5 lg:text-[2.5em]">Get early access today</h1>
                    <p className="md:text-2xl p-4 text-[1em] mb-5 lg:px-40 lg:py-2 xl:px-60]">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className="flex flex-col md:m-10 lg:flex items-center">
                    <input type="email" className="lg:w-[600px] lg:p-3 md:text-[1.6em] md:w-[70%] w-full md:p-5 p-3 lg:text-2xl rounded-[5px] text-xl font-[200] 2xl:text-xl 2xl:w-[500px]" placeholder="email@example.com"/>
                    <a href="" className=" bg-Bright_Blue md:text-[1.8em] lg:w-[600px] p-3 w-full md:my-4 md:w-[70%] md:p-4 my-3 rounded-[5px] text-xl font-medium 2xl:w-[300px] 2xl:text-xl hover:bg-sky_blue">Get Started For Free</a>
                </div>
            </div>
        </>
    )
}

export default Getearly