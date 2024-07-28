import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  const {gif,loading,fetchdata}=useGif();

  return(
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">A Ramdom Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450" alt='gif'/>)
      }
      <button onClick={()=>fetchdata()} className="w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}
