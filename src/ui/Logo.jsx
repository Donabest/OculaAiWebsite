function logo() {
  return (
    <div className="flex justify-center items-center text-center space-x-3">
      <img
        src="../../src/assets/logo.jpeg"
        alt=""
        className="w-6 h-6 md:w-9 md:h-9 rounded-lg shadow-lg"
      />
      <h1 className="text-2xl md:text-3xl font-poppin tracking-wider font-stretch-75% font-normal ">
        Ocula
      </h1>
    </div>
  );
}

export default logo;
