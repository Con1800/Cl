
import Logo from '/Images/Logo/Logo.webp'

const Home = () => {
  return (
    <>
      <section className="container mx-auto my-36">
        <div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className="mb-8 lg:pb-16 text-6xl font-bold tracking-tight mt-4 lg:mt-16 lg:text-8xl">LC Bank</h1>
                <p className="text-4xl tracking-tight text-red-500">Disclaimer</p>
                <p className="my-2 py-6 font-light tracking-tighter mx-2.5 lg:mx-0">"This website is a school project/portfolio piece intended solely for educational purposes and showcasing skills. LC Bank System is not a real financial institution, and no actual banking services or transactions are provided. Please do not enter any sensitive information or use this website for real financial activities."tESTIMG</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center mx-2.5 lg:mx-0">
                <img src={Logo} alt="logo" className="rounded-3xl" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
