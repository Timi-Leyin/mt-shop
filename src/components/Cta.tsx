import { ShoppingBag } from "iconsax-react"
import Emblem from "./Emblem"

const Cta = () => {
  return (
    <div className="h-screen overflow-hidden cursor-pointer relative flex justify-center items-center">
        
        <div className="absolute flex flex-col gap-10 top-0 p-10 pointer-events-none font-bold font-3 whitespace-nowrap z-[-1px]">
            <h2 className="text-9xl opacity-10">
           ORDER NOW ORDER NOW ORDER NOW ORDER NOW 
            </h2>
            <h2 className="text-9xl translate-x-[100px] opacity-10">
           ORDER NOW ORDER NOW ORDER NOW ORDER NOW 
            </h2>
            <h2 className="text-9xl opacity-10">
           ORDER NOW ORDER NOW ORDER NOW ORDER NOW 
            </h2>
        </div>
      <div className="w-[300px] relative  big-cta h-[300px] font-bold font-2 flex justify-center items-center rounded-full flex-col bg-orange-400">
    <Emblem style={{
        height:"150px"
    }} text="°Order°Yours°Now">
        <ShoppingBag size={50} />
    </Emblem>
      </div>
      
    </div>
  )
}

export default Cta