import Link from "next/link";
function Footer() {
  return (
    <div className="flex flex-col mx-auto gap-5 justify-center md:mt-[200px] my-[30px] md:mb-[30px]">
      <div className="flex flex-row items-center gap-2 mx-auto">
        
        <Link href="https://www.linkedin.com/in/jacob-rotich/">
          <img className="w-[48px] h-[48px]" src="../assets/linkedin.svg" />
        </Link>
        <Link href="mailto:jacobrotich2018@gmail.com">
          <img
            className="w-[48px] h-[48px]"
            src="../assets/gmail.png"
            alt="Email"
          />
        </Link>
        <Link href="https://medium.com/@rotich-95982">
          <img
            className="w-[48px] h-[40px]"
            src="../assets/medium.png"
            alt="medium"
          />
        </Link>
        <Link href="https://github.com/Jacob1-debug ">
          <img
            className="w-[48px] h-[48px]"
            src="../assets/github.png"
            alt="github"
          />
        </Link>
      </div>
      <p className="text-center text-[#828282]"> jacob rotich 2021 </p>
    </div>
  );
}

export default Footer;
