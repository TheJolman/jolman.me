export default function Navbar() {
  return (
    <nav
      className="bg-slate-800 p-2 rounded-lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a
        href="/"
        className="text-white bg-slate-600 border-b-4 border-b-slate-700 hover:bg-slate-500 font-bold rounded py-1 px-2 ml-2"
      >
        Home
      </a>
      <span className="text-white font-bold absolute left-1/2 transform -translate-x-1/2">
        Josh Holman
      </span>
    </nav>
  );
}
