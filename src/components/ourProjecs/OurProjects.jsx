import OurProjectSection1 from "./OurProjectSection1"
import OurProjectSection2 from "./OurProjectSection2"


const OurProjects = () => {
  return (
    <div className="w-full lg:h-[75vh] relative overflow-hidden bg-[#f4f4f4] flex flex-col ">
        <OurProjectSection1 />
        <OurProjectSection2 />
    </div>
  )
}

export default OurProjects