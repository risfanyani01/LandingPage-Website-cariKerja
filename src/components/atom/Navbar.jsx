import Button from "./Button";

const Navbar = () => {
  return (
    <div className="lg:py-6 px-16 bg-slate-900">
      <div className="container lg:flex items-center justify-between text-center">
        <a href="#">
          <h2 className="pt-8 lg:pt-0 text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent">
            cariKerja.
          </h2>
        </a>
        <ul className="block hidden lg:flex items-center gap-x-8 text-white">
          <li className="text-sm hover:hover-nav active group">
            <a href="#">Lowongan Kerja</a>
            <span className="border-nav"></span>
          </li>
          <li className="text-sm hover:hover-nav group">
            <a href="#">Perusahaan</a>
            <span className="border-nav invisible"></span>
          </li>
          <li className="text-sm hover:hover-nav group">
            <a href="#">Blog</a>
            <span className="border-nav invisible"></span>
          </li>
          <li className="text-sm hover:hover-nav group">
            <a href="#">Community</a>
            <span className="border-nav invisible"></span>
          </li>
          <li className="text-sm hover:hover-nav group">
            <a href="#">Contact Us</a>
            <span className="border-nav invisible"></span>
          </li>
        </ul>
        <Button className="text-sm bg-gradient hover:bg-blue-400 invisible lg:visible">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
