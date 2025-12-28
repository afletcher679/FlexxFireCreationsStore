import { NavLink } from "react-router";

export default function Header(){
  return(
    <div className="flex">
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="ml-2">
        <NavLink to="/Catalog">Catalog</NavLink>
      </button>
    </div>
  )
}