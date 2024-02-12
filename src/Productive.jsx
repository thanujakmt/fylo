
import illustration2 from "/images/illustration-2.svg"
import arrow from "/images/icon-arrow.svg"
import quotes from "/images/icon-quotes.svg"
import testimonial from "/images/avatar-testimonial.jpg"
import bg from "/images/bg-curve-desktop.svg"
import bgm from "/images/bg-curve-mobile.svg"

function  Productive() {
    return(
        <>
            <div className="md:grid grid-cols-2 2xl:mt-[100px] pt-10 md:bg-[url('/images/bg-curve-desktop.svg')] md:bg-no-repeat md:bg-center md:bg-cover bg-[url('/images/bg-curve-mobile.svg')] bg-no-repeat bg-center bg-cover">
                <div className="pt-12 image_box order-2 justify-center flex">
                    <img src={illustration2} className="md:h-[400px] md:w-[500px] 2xl:order-2 2xl:h-[500px] " alt="" />
                </div>
                <div className="md:text-[1.1em] font-medium text_content px-2 2xl:px-[100px] py-[50px]">
                    <h1 className="text-[1.2em] font-medium m-3 text-start text-Very_Dark_Blue 2xl:text-[2.3em] ">Stay productive, wherever you are</h1>
                    <p className="text-Desaturated_Blue md:text-base text-[1em] m-2 2xl:text-[1.2em] 2xl:my-4">Never let location be an issue when accessing your files. Fylo has you 
                        covered for all of your file storage needs.
                    </p>
                    <p className="text-Desaturated_Blue md:text-base text-[1em] m-2 2xl:text-[1.2em] 2xl:my-4" >Securely share files and folders with friends, family and colleagues for 
                        live collaboration. No email attachments required!
                    </p>
                    <a href="" className="cursor-pointer m-2 flex justify-left text-Moderate_Cyan underline underline-offset-8 text-[1em] 2xl:text-[1.2em] 2xl:my-5" >See how Fylo works <img src={arrow} className="m-1 h-6" alt="" /> </a>
                    <div className="p-3 m-2 rounded-[10px] shadow-box_shadow 2xl:w-[400px] 2xl:p-8 2xl:rounded-[10px]">
                        <p className="text-Desaturated_Blue 2xl:text-[1em] 2xl:text-Desaturated_Blue md:text-base"> <img src={quotes} className="my-2 " alt="" /> Fylo has improved our team productivity by an order of magnitude. Since 
                            making the switch our team has become a well-oiled collaboration machine.
                        </p>
                        <div className="flex 2xl:flex ">
                            <img className="rounded-full h-12 m-2 2xl:h-[50px] 2xl:rounded-full 2xl:m-5" src={testimonial} alt="" />
                            <div className="m-2 2xl:m-5">
                                <p className="font-medium text-[1.1em] text-Very_Dark_Blue 2xl:text-sm 2xl:m-1 2xl:font-semibold 2xl:text-Very_Dark_Blue">Kyle Burton</p>
                                <p className="text-sm 2xl:text-sm 2xl:m-1 text-Desaturated_Blue">Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productive