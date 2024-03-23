import { BsFillMoonStarsFill } from "react-icons/bs"
import { VscColorMode } from "react-icons/vsc";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return(
    <div>
      <head>
        <title>gay retard</title>
      </head>
      <main className="bg-black">
        <section className=" bg-center bg-[url('https://assets.newatlas.com/dims4/default/53dbcd1/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Flunar-rec-orbiter-4.png')]  h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <ul className="flex items-center">
              <li className="flex items-center">
              <a href="https://twitter.com/CharlieGuarasci" className="text-2xl"><AiFillTwitterCircle/></a>
                <a href="#" className="text-2xl"><AiFillGithub/></a>
                <a href="#" className=" text-2xl"><AiFillLinkedin/></a></li>
            </ul>
            <div className=" text-black space-x-2">
                  <a className=" font-serif text-white " href="#">
                  Resume
                  </a>
                  <a className=" font-serif text-white " href="#">
                  Projects
                  </a>
                  <a className=" font-serif text-white " href="#">
                  About
                  </a>
                  </div>


          </nav>
          <div>
            <h2 className=" font-serif text-center">Charlie Guarasci</h2>

          </div>
        </section>
        <div>
        </div>
      </main>
    </div>

    
  )
  }
