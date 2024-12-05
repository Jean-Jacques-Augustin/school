
import NextNavigation from "@/components/common/Next-Navigation";
import Navbar from "@/components/common/Navigation";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between container mx-auto h-24  gap-5 items-center  ">
        {/*Navigation-List*/}
        <nav className=" flex items-center    " >
          <ul className="flex items-center gap-5">
            <li>
              <svg className="mr-8" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="54" height="54" rx="8" fill="#FF9500" />
                <path d="M11.167 44.1667L22.0003 33.3333H32.8337V22.5L43.667 33.3333L32.8337 44.1667H11.167Z" fill="white" />
                <path d="M11.167 22.5L22.0003 33.3333V22.5H32.8337L43.667 11.6667H22.0003L11.167 22.5Z" fill="white" />
              </svg>
            </li>
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>About Us</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
        {/*Navigation-Connexion*/}
        <nav className="flex">
          <ul className="flex gap-5 items-center">
            <li><a>Sign Up</a></li>
            <li><button className="bg-orange-400 text-center h-10 w-24 rounded-md text-white" >Login</button></li>
          </ul>
        </nav>
      </header>
      <Navbar/>
      <NextNavigation/>
    </main> 

  );
}
  