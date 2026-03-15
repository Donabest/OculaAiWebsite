function SectionHeadLine({ children, title, desc }) {
  return (
    <div className="flex justify-center flex-col items-center pt-7 space-y-6 bg-[#0B0F19] md:pt-20">
      <h1 className="flex justify-center items-center gap-2 text-center px-4 py-2 rounded-full text-white font-montserrat bg-linear-to-r from-black to-blue-900 border border-indigo-400 ">
        {children}
      </h1>
      <div className="text-center">
        <h1 className="font-montserrat font-medium  text-3xl mb-3  md:text-5xl ">
          {title}
        </h1>
        <p className="font-raleway mx-auto text-center text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default SectionHeadLine;
