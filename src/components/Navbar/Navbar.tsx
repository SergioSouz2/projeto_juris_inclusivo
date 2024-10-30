import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full  px-8 sm:px-16 lg:px-28 py-4">
      <div className="flex justify-between items-center">
        <Link to={"/home"}>
          <h1 className="text-primary text-2xl font-bold">JurisInclusivo</h1>
        </Link>
        <ul className="hidden md:flex gap-8 text-white">
          <li>
            <Link to={"/topico"}>
              <a
                href="#topicos-juridicos"
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Tópicos Jurídicos
              </a>
            </Link>
            ;
          </li>
          <li>
            <Link to={"/forum"}>
              <a
                href="#foruns-juridicos"
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Fóruns Jurídicos
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/vaga"}>
              <a
                href="#vagas-pcd"
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Vagas para PCD
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/curso"}>
              <a
                href="#cursos-pcd"
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Cursos para PCD
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
