import Link from "next/link";
function Introduction() {
  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("project-section");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="xl:mt-[54px] lg:mt-[20px] ">
      <p className="text-[20px] text-[#FDC435] md:py-0 py-2">
        JACK OF ALL TRADES
      </p>
      <div className="flex md:flex-row flex-col-reverse justify-between lg:gap-20 md:gap-12 gap-2">
        <div className="flex flex-col md:gap-[36px] gap-[14px]">
          <h2 className="xl:text-[64px] lg:text-[50px] md:text-[33px] text-[28px] md:mr-20 mt-[12px] font-bold">
            Hello, my name is Jacob Rotich
          </h2>
          <p className="xl:pr-48 text-[#828282] text-lg font-normal md:leading-9 break-words">
            Welcome to my website! I'm a versatile professional with a passion
            for taking on diverse roles and making a meaningful impact. Here's a
            glimpse into my professional journey so far
          </p>
          <div className="flex flex-row gap-2 md:mx-0 mx-auto">
            <button
              onClick={scrollToProjectSection}
              className=" py-4 px-8 rounded border-[#25282B] border-2 font-semibold"
            >
              Projects
            </button>
            <button className="bg-[#FDC435] relative py-4 px-10 rounded font-semibold animate-zoom-in-out">
              <Link
              target="_blank"
                className="w-full h-full"
                href="https://docs.google.com/document/d/1thXHdZK2sWhDL7cQh3060pPhI9T7KkKB/edit?pli=1"
              >
                My CV
              </Link>
            </button>
          </div>
        </div>
        <img
          className="2xl:w-[720px] lg:w-[420px] md:w-[420px] lg:mt-[70px]"
          src="../assets/profile.png"
        />
      </div>
    </div>
  );
}

export default Introduction;
