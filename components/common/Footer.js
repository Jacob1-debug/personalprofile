import Link from "next/link";
function Footer() {
  return (
    <div className="flex flex-col mx-auto gap-5 justify-center md:mt-[200px] my-[30px] md:mb-[100px]">
      <div className="flex flex-row gap-2 mx-auto">
        <img className="w-[48px] h-[48px]" src="../assets/instagram.svg" />
        <Link href="https://www.linkedin.com/in/jacob-rotich/">
          <img className="w-[48px] h-[48px]" src="../assets/linkedin.svg" />
        </Link>
        <Link href="mailto:your-email@example.com">
          <img
            className="w-[48px] h-[48px]"
            src="../assets/gmail.png"
            alt="Email"
          />
        </Link>
      </div>
      <p className="text-center text-[#828282]">Madelyn Torff 2021 </p>
    </div>
  );
}

export default Footer;
