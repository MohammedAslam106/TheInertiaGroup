interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div className=" min-h-screen mt-[96.5px] flex flex-col justify-center items-center px-24 mobile:px-5">
      <div>
        <h1 className=" mobile:block hidden text-slate-700 font-bold text-3xl ">Contact me.</h1>
        <div className=" flex mobile:flex-col-reverse justify-center items-center gap-3">
            <div className=" w-[130%] mobile:w-full">
                <h1 className="my-5 mobile:hidden block text-slate-700 font-bold text-3xl ">Contact me.</h1>
                <p className=" text-justify">
                    I&apos;m{" "}
                    <i className=" text-orange-400 font-semibold">
                    Mohammed Aslam
                    </i>
                    , a 23-year-old full-stack web developer from India. Passionate
                    about building websites, I seek freelancing opportunities and
                    contribute to open source projects. My goal is to establish my own
                    tech industry, and I&apos;m excited to collaborate with <i className=" text-orange-400 font-semibold">
                    The Inertia Group
                    </i>
                    . <br /> <br />
                    You can reach me at <span className=" underline text-blue-300"><a target="_blank" href="mailto:mohammedaslam4106@gmail.com">Email</a></span> or connect with me on <span className=" text-blue-300 underline"><a target="_blank" href="https://www.linkedin.com/in/mohammed-aslam-web-developer/">LinkedIn</a></span> to discuss potential projects
                    and collaborations. Feel free to explore my <span className=" text-blue-300 underline"><a target="_blank" href="https://my-port-folio-liard.vercel.app/">Portfolio</a></span> to see examples of my work and skills in action.
                </p>
          </div>
          <div className=" w-full">
            <embed src="/about.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
