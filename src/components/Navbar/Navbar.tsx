export function Navbar() {
  return (
    <nav className="w-full  px-8 sm:px-16 lg:px-28 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-primary text-2xl font-bold">JurisInclusivo</h1>
        <ul className="hidden md:flex gap-8 text-white">
          <li>
            <a
              href="#topicos-juridicos"
              className="text-primary hover:text-primaryPurple font-bold"
            >
              Tópicos Jurídicos
            </a>
          </li>
          <li>
            <a
              href="#foruns-juridicos"
              className="text-primary hover:text-primaryPurple font-bold"
            >
              Fóruns Jurídicos
            </a>
          </li>
          <li>
            <a
              href="#vagas-pcd"
              className="text-primary hover:text-primaryPurple font-bold"
            >
              Vagas para PCD
            </a>
          </li>
          <li>
            <a
              href="#cursos-pcd"
              className="text-primary hover:text-primaryPurple font-bold"
            >
              Cursos para PCD
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
