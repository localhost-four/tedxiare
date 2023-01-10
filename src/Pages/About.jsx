import React, { useEffect, useState } from 'react'

import desktopBG from "../Assets/about-desktop.png";
import mobileBG from "../Assets/about-mobile.png";
// import tedThemeX from "../Assets/TedThemeX.svg";
// import TedTheme from "../Assets/TedTheme2.svg";
// import NvN from "../Assets/ThemeNvN.svg";
// import trophy from "../Assets/trophy.svg";
import linkedin from "../Assets/linkedin.svg";
// import prev from "../Assets/prev.svg";
// import next from "../Assets/next.svg";
import sponser1 from "../Assets/sponser-1.svg";
import abhishek from "../Assets/abhishek.png";
import adarsh from "../Assets/adarsh.png";
import akash from "../Assets/akash.png";
import amuktha from "../Assets/amuktha.png";
import gaurang from "../Assets/gaurang.png";
import krishna from "../Assets/krishna.png";
import mamtha from "../Assets/mamtha.png";
import manoj from "../Assets/manoj.png";
import naidu from "../Assets/naidu.png";
import priya from "../Assets/priya.png";
import rahul from "../Assets/rahul.png";
import ruth from "../Assets/Ruth.png";
import rajat from "../Assets/rajat.png";
import sachin from "../Assets/sachin.png";
import sneha from "../Assets/sneha.png";
import vakati from "../Assets/vakati.png";
import vamsi from "../Assets/vamsi.png";
import niharika from "../Assets/Niharika.png";
import sponser2 from "../Assets/sponser-2.png";
import sponser3 from "../Assets/sponser-3.png";
import sponser4 from "../Assets/sponser-4.png";
import sponser5 from "../Assets/sponser-5.png";
import sponser6 from "../Assets/sponsor-6.png";
import sponsor7 from "../Assets/sponsor-7.png";





// CSS
import "./about.css"

// Random Key ID
import { v4 as uuidv4 } from 'uuid';

const About = () => {

  const domains = ["Core", "Content", "Design", "CR/PR", "Digital Marketing", "Logistics", "Marketing", "Photography", "Web"]
  const [active, setActive] = useState(0);

  // const increament = () => setActive(active + 1)
  // const decreament = () => setActive(active - 1)

  const checkActive = (e) => {
    setActive(e);
  }

  // const prevButton = () => {
  //   if (active > 0) {
  //     decreament()
  //   }
  // }

  // const nextButton = () => {
  //   if (active < domains.length - 1) {
  //     increament()
  //   }
  // }

  const Member = (props) => {
    return (
      <>
        <div>
          <div>
            <img className=' w-[100px] sm:w-[120px] h-[125px] sm:h-[150px] md:w-[160px] md:h-[190px]' src={props.photo} alt="team member" />
          </div>
          <div className='mt-2'>
            <div className="flex gap-x-1 md:gap-x-2 w-[100%] items-center justify-start flex-wrap">
              <h4 className='member-name text-md text-[#000000] font-semibold tracking-wider md:text-xl'>{props.name}</h4>
              <a href={props.linkedin} target="_blank" rel="noreferrer">
                <img className='w-5 md:w-8 sm:w-6' src={linkedin} alt="linkedin" />
              </a>
            </div>
            <h5 className='member-role text-xs text-[#EB0028] tracking-wider font-semibold md:text-xs'>{props.role}</h5>
          </div>

        </div>
      </>
    )
  }

  useEffect(() => {
    document.title = 'Tedx IARE | About';
  }, [])

  return (
    <div id='About-TOP' className='w-[100%] h-[100%]'>

      {/* ABOUT US BANNER */}
      <section className="w-[100%] h-[100%] flex justify-center items-center">
        <img className='w-[100%] object-cover hidden sm:block' src={desktopBG} alt="About Us" />
        <img className='w-[100%] object-cover sm:hidden block' src={mobileBG} alt="About Us" />
      </section>

      {/* ABOUT TEDx */}
      <section className=" w-[94%] sm:w-[90%] mx-auto h-[100%] bg-[#ffffff] my-4 py-4 flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 font-[Poppins]">
        <div className="flex flex-col items-center justify-center gap-y-1 text-center">
          <h1 className='text-[36px] text-center tracking-wider sm:text-[48px] font-[600] leading-[72px] text-[#0B0B0B]'>ABOUT <span className='text-[#EB0028]'>TEDx</span><span className='text-[#0B0B0B] '>IARE</span></h1>
          <span className='bg-[#EB0028] text-[20px] sm:text-[22px] font-[600] leading-[32px] text-[#ffffff] px-[24px] py-[2px]'>Ideas worth spreading</span>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-5">
          <p className='font-[Poppins] font-[500] text-[20px] sm:text-[22px] text-[#0B0B0B] leading-[28px] sm:leading-[32px] fontSizing'>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
          <p className='font-[Poppins] font-[500] text-[20px] sm:text-[22px] text-[#0B0B0B] leading-[28px] sm:leading-[32px] fontSizing'><span className='text-[#EB0028] font-[600] text-[24px]'>TEDx<span className='text-[#0B0B0B] font-[600] text-[24px]'>IARE</span></span> is a TED event organised for a more niche audience by our team on the theme 'Nature vs Nurture', where we try to understand the various influences upon a person's life, as well as the influence one has upon the world.</p>
        </div>
      </section>

      {/* Our Estemed Sponsors */}
      <section className="w-[100%] h-[100%] bg-[#0B0B0B] py-6">
        <div className="w-[100%]">
          <h1 className='text-2xl  sm:text-5xl text-center mt-4 mb-4 font-[600] tracking-wider text-[#ffff] '>OUR ESTEEMED <span className='text-[#EB0028] tracking-wider'>SPONSORS</span></h1>
          {/* <h2 className=''>MEET OUR <span className='text-[#EB0028]'>TEAM</span></h2> */}

        </div>
        <div>
          <div className='flex flex-col items-center space-y-6 mt-8 gap-x-5 pb-5'>
            <a target="_blanck" href="https://www.almondhouse.com/">

              <img src={sponser1} alt="Dummy" className='w-[190px] md:w-[230px]' />
            </a>
            <span className='bg-[#EB0028] text-[20px] sm:text-[22px] font-[600] leading-[32px] text-[#ffffff] px-[24px] py-[2px] tracking-wide'>TITLE SPONSOR</span>

          </div>
          <div className='flex flex-col items-center mt-4 md:mt-7 pb-6'>
            <span className='text-[#EB0028] text-[18px] md:text-[22px] font-[600] leading-[32px] px-[24px] py-[2px] tracking-wider'>CO-<span className='text-[#ffffff]'>SPONSORS</span></span>
            <div className='flex gap-x-10 mt-8'>
              <a href='https://luvieessentials.com' rel="noopener noreferrer" target="_blank">
                <img className='w-[163px] md:w-[280px]' src={sponser6} alt="" />

              </a>
              <a href='https://www.drrajus.com/' rel="noopener noreferrer" target="_blank">
                <img className='w-[153px] md:w-[270px]' src={sponser2} alt="" />

              </a>



            </div>
            <div className='mt-5 grid grid-cols-3 items-center sm:space-x-7 md:space-x-5 pt-3'>
              <a target="_blank" rel="noopener noreferrer" href="http://www.suagifts.com">
                <img className='w-[119px] md:w-[222px]' src={sponser3} alt="" />

              </a>
              <a href='https://www.grabon.in' rel="noopener noreferrer" target="_blank">
                <img className='w-[108px] md:w-[209px]' src={sponser4} alt="" />

              </a>


              <a href='https://luvieessentials.com' rel="noopener noreferrer" target="_blank">
                <img className='text-center w-[137px] md:w-[310px]' src={sponser5} alt="" />

              </a>
            </div>
            <div className='flex gap-x-10 mt-2'>
              <a href='https://luvieessentials.com' rel="noopener noreferrer" target="_blank">
                <img className='w-[163px] md:w-[290px]' src={sponsor7} alt="" />

              </a>




            </div>
          </div>
        </div>
        {/* <div className='w-[90%] h-[100%] overflow-x-hidden mx-auto'>
          <div className='w-[1460px]  flex flex-row gap-x-8 py-4 my-4 items-center justify-center px-12'>
            <div className='flex flex-col items-center space-y-6'>
              <img src={sponser1} alt="Dummy" className='w-[200px]' />
              <span className='bg-[#EB0028] text-[20px] sm:text-[22px] font-[600] leading-[32px] text-[#ffffff] px-[24px] py-[2px] tracking-wide'>TITLE SPONSOR</span>

            </div>

          </div>
        </div> */}
      </section>

      {/* THEME */}
      {/* <section className="w-[100%] h-[100%] themeBG py-6 relative">
          <div className="bgX absolute w-[100%] h-[100%] flex items-center justify-center inset-0">
            <img src={tedThemeX} alt="X" className='w-[80%] h-[80%]'/>
          </div>
          <div className="w-[100%] flex justify-center items-center text-center mb-6">
              <h1 className='text-[36px] sm:text-[48px] text-center font-[600] leading-[72px] text-[#EB0028]'>T<span className='text-[#ffffff] tracking-wider'>HEME</span></h1>
          </div>
          <div className="w-[100%] flex flex-col md:flex-row items-center md:items-start justify-center md:gap-y-0 gap-y-4">
            <span className='font-[Poppins] md:text-[48px] lg:text-[64px] leading-[94px] tracking-[0.01em] text-[#ffffff] font-[500] hidden md:block'>NATURE</span>
            <img src={NvN} alt="Nature vs Nurture"  className='block md:hidden w-[80%] mx-auto'/>
            <img src={TedTheme} alt="Theme" className=' w-[70%]  md:w-[40%] lg:w-[30%]'/>
            <span className='font-[Poppins] md:text-[48px] lg:text-[64px] leading-[94px] tracking-[0.01em] text-[#ffffff] font-[500] hidden md:block'>NURTURE</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 w-[90%] mx-auto my-4">
            <p className='font-[Poppins] text-[18px] text-[#ffffff] text-center sm:text-[20px] md:text-[22px] font-[500] leading-[30px] tracking-wider'>How do you affect the world around you and how does the world around affect you? Our actions, behaviour, and decisions can have an impact on the people and environment around us. Whether it's choices we make in our personal lives or as a part of a larger community, we all have the power to shape the world in our small ways.</p>
            <p className='font-[Poppins] text-[18px] text-[#ffffff] text-center sm:text-[20px] md:text-[22px] font-[500] leading-[30px] tracking-wider'>At the same time, the world around us also has a significant impact on us as individuals. The culture, politics, art, and society we live around impacts us in more ways than we realise. One could say that an individual is a battleground on which nature and nurture fight for dominance.</p>
            <p className='font-[Poppins] text-[18px] text-[#ffffff] text-center sm:text-[20px] md:text-[22px] font-[500] leading-[30px] tracking-wider'>Join us at Tedx IARE to listen to perspectives from different walks of life</p>
          </div>
        </section> */}

      {/* TEAM */}
      <section className='px-3 w-[100%] md:w-[95%] mx-auto space-y-8'>
        {/* <h2 className='text-2xl sm:text-5xl text-center mt-7 font-[600] tracking-wider'>MEET OUR <span className='text-[#EB0028]'>TEAM</span></h2> */}
        <h1 className='text-2xl  sm:text-5xl text-center mt-4 mb-4 font-[600] tracking-wider text-[rgba(11, 11, 11, 1)] '>MEET OUR <span className='text-[#EB0028] tracking-wider'>TEAM</span></h1>


        {/* <div className='mb-10'>
          <div className='flex vScroll gap-y-3 justify-center mt-9  mb-5 overflow-x-scroll pl-[160px] sm:pl-96 md:pl-40 lg:pl-10'>
            {
              domains.map((e, index) => {
                return (
                <>
                  <h6 key={uuidv4()} onClick={() => checkActive(index)} className={active === index ? "active tracking-wider text-xs md:text-xl px-2 sm:px-6 md:px-4" : "category tracking-wider text-xs md:text-xl px-2 sm:px-6 md:px-4"}>{e}</h6>
                </>
                )})
            }
          </div>
          <div className='flex justify-between mt-3 md:hidden'>
            <button><img src={prev} onClick={prevButton} alt="prev" /></button>
            <button><img src={next} onClick={nextButton} alt="next" /></button>

          </div>
        </div> */}

        <div className="my-8 mx-auto">
          <div className="w-[100%] flex flex-row items-end justify-start lg:justify-center flex-wrap lg:flex-nowrap">
            {
              domains.map((domain, index) => {
                return (
                  <>
                    <h6 key={uuidv4()} onClick={() => { checkActive(index) }} className={` text-[12px] md:text-[16px] lg:text-[18px] py-2 text-center cursor-default sm:cursor-pointer ${active === index ? 'active' : 'category'} px-2 sm:px-4 md:px-6`} >{domain}</h6>
                  </>
                )
              })
            }
          </div>
        </div>

        <div style={{ display: active === 0 ? "" : "none" }} className=''>

          <div className='flex gap-x-8 mx-1  md:mx-5' >
            <Member name="Sachin Pisipati" role="ORGANIZER" photo={sachin} linkedin="https://www.linkedin.com/in/sachin-pisipati-a93494210/" />
            <Member name="Akash Meka" role="CO-ORGANIZER" photo={akash} linkedin="https://www.linkedin.com/in/akash-meka-1a0861194" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />
            <Member name="John Doe" role="" photo={member} linkedin="" />
          </div> */}

        </div>
        <div style={{ display: active === 1 ? "" : "none" }} >

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Hutapriya L" role="HEAD" photo={priya} linkedin="https://www.linkedin.com/in/l-hutapriya-a64558239/" />
            <Member name="Gaurang R" role="CO-HEAD" photo={gaurang} linkedin="https://www.linkedin.com/in/gaurang-ratnaparkhi-599964232" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>
        <div style={{ display: active === 2 ? "" : "none" }} >

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Sneha V" role="HEAD" photo={sneha} linkedin="https://www.linkedin.com/in/sneha-vellelath-2b6759207" />
            <Member name="Mamtha P" role="CO-HEAD" photo={mamtha} linkedin="https://www.linkedin.com/in/mamtha-patalay/" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>
        <div style={{ display: active === 3 ? "" : "none" }}>

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="S Rajat Singh" role="HEAD" photo={rajat} linkedin="https://www.linkedin.com/in/rajat-singh-733362196/" />
            <Member name="Amuktha K" role="CO-HEAD" photo={amuktha} linkedin="https://www.linkedin.com/in/amuktha-kotamsetty-5814b9104/" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>
        <div style={{ display: active === 4 ? "" : "none" }}>

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Ruth Roshni" role="HEAD" photo={ruth} linkedin="https://www.linkedin.com/in/ruth-roshni-maramulla-a44314222" />
            <Member name="Niharika B" role="CO-HEAD" photo={niharika} linkedin="https://www.linkedin.com/in/niharika-buddaraju-95a165260/" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>

        <div style={{ display: active === 5 ? "" : "none" }}>

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Krishna Gopal" role="HEAD" photo={krishna} linkedin="" />
            <Member name="Abhishek K" role="CO-HEAD" photo={abhishek} linkedin="https://www.linkedin.com/in/abhishek-kokkonda-1361041b0" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>

        <div style={{ display: active === 6 ? "" : "none" }} >
          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Adarsh Pandey" role="HEAD" photo={adarsh} linkedin="https://www.linkedin.com/in/adarsh-pandey-379a1b21a/" />
            <Member name="Manoj Sharma" role="CO-HEAD" photo={manoj} linkedin="https://www.linkedin.com/in/mvns-manoj-8148a21a5" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>

        <div style={{ display: active === 8 ? "" : "none" }}>

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Hemanth V" role="HEAD" photo={vakati} linkedin="https://www.linkedin.com/in/hemanth-kumar-reddy-vakati-915115198/" />
            <Member name="Hemanth N" role="CO-HEAD" photo={naidu} linkedin="https://www.linkedin.com/in/hemanth-naidu-7b1b301a4/" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>

        <div style={{ display: active === 7 ? "" : "none" }}>

          <div className='flex gap-x-8 md:ml-5' >
            <Member name="Rahul M" role="HEAD" photo={rahul} linkedin="https://www.linkedin.com/in/rahul-munamarthi" />
            <Member name="Vamsi Krishna" role="CO-HEAD" photo={vamsi} linkedin="https://www.linkedin.com/in/vamshi-krishna-978bb6207" />
          </div>

          {/* <div className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-4 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline pt-2'>
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
            <Member name="John Doe" role="ORGANIZER" photo={member} linkedin="" />
          </div> */}

        </div>
      </section>

      {/* MEET US HERE */}
      <section className='w-[100%] h-[100%] bg-[#ffffff] flex flex-col items-center justify-center my-4 py-4'>
        <div className="flex flex-col items-center justify-center gap-y-1 text-center mb-5">
          <h1 className='text-[36px] text-center tracking-wider sm:text-[48px] font-[600] leading-[72px] text-[#0B0B0B]'>MEET US <span className='text-[#EB0028]'>HERE</span></h1>
        </div>
        <div className="w-[100%] mx-auto">
          <iframe title='iaresitemap' className=' w-[96%] sm:w-[90%] md:w-[84%] mx-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126454807!2d78.41553661408612!3d17.599926987951605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1669179277990!5m2!1sen!2sin" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </div>
  )
}

export default About