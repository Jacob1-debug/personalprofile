
function MySkill() {
  return (
    <div className="flex md:flex-row flex-col lg:items-center gap-6 lg:py-4 py-8">
      <div className="md:w-1/3">
      <h2 className="text-center lg:text-[48px] text-[40px] font-bold md:mt-2 mt-4">
        My skills in a nutshell
      </h2>
      <div className="w-40 h-1 mx-auto bg-yellow-400 rounded-2"></div>
      </div>
      <div className="md:w-2/3 text-lg text-[#828282]">
       <p> <b className="text-black">Web development</b> - html, css, js, tailwind css, next js, node , express</p>
      <p> <b className="text-black"> Data Science and analysis</b> - text analysis, dashboard visualization</p>
      <p><b className="text-black"> Policy Evaluation and Causal inference analysis Research and academic
        writing Teaching and Instruction</b> - Math, data structures, complex
        analysis
      </p>
    </div>
    </div>
  );
}

export default MySkill;
