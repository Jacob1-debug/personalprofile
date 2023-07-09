
function index() {
  return (
    <div className="flex md:flex-row flex-col-reverse  mx-auto justify-center items-center ">
      <div className="flex flex-col gap-[24px]">
        <h2 className="text-[48px] font-bold md:text-left text-center">About Me</h2>
        <div className="flex flex-col md:w-[70%] gap-[20px] text-[#828282]">
          {" "}
          <p className="text-[18px] md:text-left text-center ">Jack of All Trades: </p><p className="mt-4 leading-9">I thrive on
          versatility and enjoy exploring different domains. Throughout my
          career, I've taken on various roles that have allowed me to develop a
          wide range of skills and expertise. From data analysis to web
          development, and from teaching mathematics to tackling poverty
          reduction, I've had the opportunity to wear many hats and expand my
          horizons.</p>
        </div>
      </div>
      <img className="lg:w-auto md:w-[300px]" src="../assets/picture.svg" />
    </div>
  );
}

export default index;
