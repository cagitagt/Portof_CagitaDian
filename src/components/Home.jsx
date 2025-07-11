import { ButtonPrimary, ButtonOutLine} from "./Button"

const Home = () => {
  return (
    <section 
    id='home' 
    className='pt-28 lg:pt-36'
    >

      <div className='container items-center lg:my-20 lg:grid lg:grid-cols-2 lg:gap-10'>

        <div className=''>
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400'></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[30ch] sm:max-w-[25ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-7">
            Learner | Web Developer 
          </h2>
          <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
          <h2 className="headline-1 max-w-[30ch] sm:max-w-[25ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-7">
            Cagita Dian A'yunin
          </h2>

          <div className='flex items-center gap-3'>
            <ButtonPrimary label="Download CV" icon="download" target="_blank" href="/files/CagitaDianCV.pdf"/>
            {/* <ButtonPrimary label="Download Portofolio" icon="download"/> */}

            < ButtonOutLine href="#about" label="Scroll" icon="arrow_downward"/>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className='w-full ml-auto overflow-hidden bg-white border-4 shadow-2xl rounded-3xl max-w-96 '>
            <img src="/images/cagitadian.jpeg" alt="Cagita Dian" className='w-full'width={200}/>
          </figure>
        </div>
        
      </div>
    </section>
  )
}

export default Home