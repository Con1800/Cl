import Logo from '/Images/Logo/Logo.webp'
import Blockchain from '/Images/About/blockchain.jpeg'

const About = () => {
  return (
    <>
      <section className="container mx-auto">
        <div>
          <h1 className="my-20 text-center text-4xl">About<span className="text-neutral-500"> LC Bank System Project</span></h1>
          <div className="flex flex-wrap">
            
            <div className="mx-2.5 lg:mx-0 lg:w-1/2">
              <div className="flex items-center justify-center">
                <img src={Logo} alt="Logo" className="rounded-2xl" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start ml-2.5">
                <p className="my-2 py-6 max-w-xl mx-2.5">LC Bank System is a simulated bank system designed as a project to explore decentralized finance technologies and demonstrate the power of blockchain in banking. Inspired by platforms like AAVE, this website showcases how cryptocurrency lending and borrowing can be simplified through innovative solutions.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-10 ">
        <div>
          <div className="flex flex-wrap">
            
            <div className=" w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <p className="my-2 py-6 max-w-xl mx-2.5">This project is created for educational purposes, serving as a part of my training in blockchain technology, decentralized finance, and web development. The goal is to apply my skills in a real-world-inspired scenario, demonstrating my ability to build complex financial applications.</p>
              </div>
            </div>
            <div className="mx-2.5 lg:mx-0 lg:w-1/2 lg:p-8">
              <div className="flex justify-center items-center">
                <img src={Blockchain} alt="Logo" className="rounded-2xl" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="shadow-2xl rounded-lg mx-2.5 lg:mx-0">
            <div className="flex justify-center mt-16">
              <h1 className="text-2xl font-bold mx-10 break-words">Decentralized Lending and Borrowing:</h1>
            </div>
            <p className="font-extralight mx-6 my-14">Simulated cryptocurrency lending and borrowing services, showing how users could access financial tools without intermediaries.</p>
          </div>
          <div className="shadow-2xl rounded-lg mx-2.5 lg:mx-0">
            <div className="flex justify-center mt-16">
               <h1 className="text-2xl font-bold">Secure and Transparent:</h1>
            </div>
            
            <p className="font-extralight mx-6 my-14">Emphasizes security features inspired by real DeFi platforms.</p>
          </div>
          <div className="shadow-2xl rounded-lg mx-2.5 lg:mx-0">
            <div className="flex justify-center mt-16">
              <h1 className="text-2xl font-bold">Modern Web Design:</h1>
            </div>
            <p className="font-extralight mx-6 my-14">Created with the latest web technologies to deliver an intuitive and professional user experience.</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl">Disclaimer</h1>
              <div className="flex justify-center lg:justify-start">
                <p className="max-w-xl mx-2.5 my-8 font-semibold">This is a demonstration project only. LC Bank System is not a real bank, and no financial services are provided. It is built to showcase my skills in software development and decentralized finance as part of my portfolio. Please do not use this website for real transactions or provide sensitive personal information."
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-bold text-2xl">My Vision</h1>
              <div className="flex justify-center lg:justify-start">
                <p className="max-w-xl mx-2.5 my-8 font-semibold">Through LC Bank System, I hope to show how decentralized finance has the potential to make financial systems more accessible and equitable. This project also allows me to learn and grow as a developer in the fintech space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About