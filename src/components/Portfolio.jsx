const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="text flex flex-col items-center">
        <h3>Mon Portfolio</h3>
        <h1>Projets Recents</h1>
      </div>
      <ul className="flex items-center w-[70%] mx-auto ">
        <li className="mx-auto my-10">
          <a href="">Tous les Projets</a>
        </li>
        <li className="">
          <a href="">Web Design</a>
        </li>
        <li className="mx-auto">
          <a href="">App Mobile</a>
        </li>
        <li className="mx-auto">
          <a href="">Grahique Design</a>
        </li>
      </ul>
      <div className="projects flex flex-wrap items-center justify-center">
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" className="w-full" />
          <div className="">
            <div className="btns ">
              <button className="flex">X</button>
              <button className="flex">X</button>
            </div>
            <h2 className="translate-y-[210px]">Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px] ">
          <img src="../../public/fr.jpg" alt="" />
          <div className="content absolute top-[-220px] left-[-11px] h-full w-full bg-black/60 flex flex-col  items-center transition-opacity duration-600 hover:opacity-100 md:top-[-220px] opacity-0">
            <div className="btns flex transform translate-y-[35px] transition-transform duration-600 group-hover:translate-y-0">
              <button>X</button>
              <button>X</button>
            </div>
            <h2 className="translate-y-[210px]">App Mobile</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content absolute top-[-220px] left-[-11px] h-full w-full bg-black/60 flex flex-col justify-center items-center md:top-[-220px]">
            <div className="btns flex transform translate-y-[35px] transition-transform duration-600 group-hover:translate-y-0">
              <button>X</button>
              <button>X</button>
            </div>
            <h2 className="translate-y-[210px]">Graphic Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content absolute top-[-220px] left-[-11px] h-full w-full bg-black/60 flex flex-col justify-center items-center opacity-0 transition duration-600 md:top-[-220px]">
            <div className="btns flex transform translate-y-[35px] transition-transform duration-600 group-hover:translate-y-0">
              <button className="">X</button>
              <button className="">X</button>
            </div>
            <h2 className="translate-y-[210px]">Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content absolute top-[-220px] left-[-11px] h-full w-full bg-black/60 flex flex-col justify-center items-center opacity-0 transition duration-600 md:top-[-220px]">
            <div className="btns flex transform translate-y-[35px] transition-transform duration-600 group-hover:translate-y-0">
              <button>X</button>
              <button>X</button>
            </div>
            <h2 className="translate-y-[210px]">Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" />
          <div className="content absolute top-[-220px] left-[-11px] h-full w-full bg-black/60 flex flex-col justify-center items-center opacity-0 transition duration-600 md:top-[-220px]">
            <div className="btns transform translate-y-[35px] transition-transform duration-600 group-hover:translate-y-0">
              <button className="">X</button>
              <button className="">X</button>
            </div>
            <h2 className="translate-y-[210px]">Web Design</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
