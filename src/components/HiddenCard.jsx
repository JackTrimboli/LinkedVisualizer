import { React} from 'react'

const HiddenCard = (props) => {

  if(props.showCard === true){
  return (
    <div className="fixed flex-col inset-0 z-40 m-auto h-1/5 w-1/6 border rounded-lg text-center bg-gray-50 shadow-lg text-black">
      <p className="z-50 mt-8 pl-1 pr-1">{props.title}</p>
      <input className="mt-2 pl-2 pr-2 pt-1 pb-1 border-black border" type="number" min={0} max={1000}></input>
      <button className="bg-blue-400 text-white focus:outline-none rounded-full p-2">submit</button>
    </div>
  )}
  else
    return null
}

export default HiddenCard
