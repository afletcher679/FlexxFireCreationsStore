import type { Route } from "./+types/home";
import Header from "~/components/header";


export default function Home() {
  return(
  <>
    <Header />
    <h1 className="text-2xl font-bold text-center">Welcome to Flexx Fire Creations!</h1>
  </> 
  )
}
