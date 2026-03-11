function Dashboard() {
  return (
    <div className="relative flex justify-center transform perspective-1000 rotate-x-6 mt-20">
      <div className="absolute w-175 h-85.7 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <img
        src="../../src/assets/uidashboard.jpg"
        alt=""
        className="relative rounded-xl shadow-2xl w-full"
      />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent rounded-xl"></div>
    </div>
  );
}

export default Dashboard;
