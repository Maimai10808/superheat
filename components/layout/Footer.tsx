import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-white h-auto">
      <div className="container mx-auto flex flex-wrap p-5 flex-row">
        {/* Left-logo */}
        {LeftLogo()}

        {/* Right-logo */}
        {RightLogo()}
      </div>
    </footer>
  );
}

function RightLogo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-auto max-w-[70%]">
      {/* Products */}
      <div>
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">Products</h2>
        <nav className="list-none mb-10">
          <Link className="text-white hover:text-gray-400" href="">
            <li> Superheat H1</li>
          </Link>
        </nav>
      </div>

      {/* Resources */}
      <div>
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3 ">Resources</h2>

        <div className="flex flex-row">
          <Link className="text-white hover:text-gray-400" href="">
            <li>Whitepaper</li>
          </Link>

          <Link className="text-white hover:text-gray-400" href="">
            <li>Brand Assets</li>
          </Link>

          <Link className="text-white hover:text-gray-400" href="">
            <li> Media Kit</li>
          </Link>
        </div>
      </div>

      {/* Social */}
      <div>
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">Social</h2>
        <nav className="list-none mb-10">
          <Link className="text-white hover:text-gray-400" href="">
            <li>X</li>
          </Link>

          <Link className="text-white hover:text-gray-400" href="">
            <li>Medium</li>
          </Link>
        </nav>
      </div>
    </div>
  );
}

function LeftLogo() {
  return (
    <div>
      <Link className="flex title-font text-4xl  items-center mb-4 md:mb-0 text-white" href="">
        Superheat
      </Link>

      <div className="flex mt-10 text-gray-400">© 2025 Superheat. All rights reserved.</div>
    </div>
  );
}
