import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-footer-gradient text-white h-auto'>

  {/* Left-logo */}
      <div className='container mx-auto flex flex-wrap p-5 flex-row'>
        <div>
        <a className="flex title-font text-4xl  items-center mb-4 md:mb-0 text-white"  href=''>
         Superheat
        </a>

        <a className='flex mt-10 text-gray-400'>
          © 2025 Superheat. All rights reserved.
        </a>

        </div >

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-auto max-w-[70%]">
  {/* Products */}
  <div>
    <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">Products</h2>
    <nav className="list-none mb-10">
      <li><a className="text-white hover:text-gray-400" href=''>Superheat H1</a></li>
    </nav>
  </div>

  {/* Resources */}
  <div>
    <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">Resources</h2>
    <nav className="list-none mb-10">
      <li><a className="text-white hover:text-gray-400" href=''>Whitepaper</a></li>
      <li><a className="text-white hover:text-gray-400" href=''>Brand Assets</a></li>
      <li><a className="text-white hover:text-gray-400" href=''>Media Kit</a></li>
    </nav>
  </div>

  {/* Social */}
  <div>
    <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">Social</h2>
    <nav className="list-none mb-10">
      <li><a className="text-white hover:text-gray-400" href=''>X</a></li>
      <li><a className="text-white hover:text-gray-400" href=''>Medium</a></li>
    </nav>
  </div>
</div>


      </div>
    </footer>
  );
}
