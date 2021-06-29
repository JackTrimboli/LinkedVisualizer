import { React} from 'react'

const HiddenCard = (props) => {
  
  if(props.showCard === true){
  return (
    <div className="z-50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 ">
      <div className="flex flex-col bg-white w-1/3 h-1/3 p-12 opacity-100 rounded-lg">
        <form>
            <label className="font-bold flex flex-col">{props.title}</label>
            <input className="border-black border-solid border-2 rounded-md text-center" type="number" min={0} max={1000}></input>
            <button className="bg-blue-400 rounded-lg text-white p-2 font-semibold" type="submit" value="submit">submit</button>
        </form>
      </div>
    </div>
  )}
  else
    return null
}

export default HiddenCard
