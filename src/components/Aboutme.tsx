import "../styles/AboutMe.css";
import aboutme from "../shared/Me.json";
const Aboutme = () => {
    console.log(aboutme);
    
  return (
    <div>
      <div className="about-container flex justify-start w-full h-100">
<div className="lef w-1/2 p-5 ">
<h1 className="text-6xl my-2 text-blue-950 font-bold">{aboutme["title"]}</h1>
<p className="text-justify leading-7 " >{aboutme["description"]}</p>
<div className="socials flex justify-around my-5">
{aboutme["socials"].map(item=> <div className="flex gap-1 py-1 hover:bg-blue-200 bg-blue-100  shadow items-center
 justify-center w-35 rounded-lg " key={item.id}>
    <img src={item.sociallogo} className="w-10" alt="" />
    <a href={item.sociallink}>{item.socialname}</a>
</div>) }    
</div>
</div>
      </div>
    </div>
  )
}

export default Aboutme
