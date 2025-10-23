import { useState, useEffect } from "react";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transision-none ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Projek
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
