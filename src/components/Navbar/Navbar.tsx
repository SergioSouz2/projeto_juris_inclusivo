import { Link } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

export function Navbar() {


  async function onClose() {
    let { error } = await supabase.auth.signOut()


  }


  return (
    <nav className="w-full  px-8 sm:px-16 lg:px-28 py-4">
      <div className="flex justify-between items-center">
        <Link to={"/home"}>
          <h1 className="text-primary text-2xl font-bold">JurisInclusivo</h1>
        </Link>
        <ul className="hidden md:flex gap-8 text-white">
          <li>
            <Link to={"/topico"}>
              <p
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Direito em Foco
              </p>
            </Link>

          </li>

          <li>
            <Link to={"/vagas"}>
              <p
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Vagas para PCD
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/curso"}>
              <p
                className="text-primary hover:text-primaryPurple font-bold"
              >
                Cursos para PCD
              </p>
            </Link>
          </li>

          <li>
            <button
              onClick={onClose}
              className="text-primary hover:text-primaryPurple font-bold"
            >
              <Link to="/">Sair</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
