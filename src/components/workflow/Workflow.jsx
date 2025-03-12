import WorkflowSection1 from "./workflowItems/WorkflowSection1"
import WorkflowSection2 from "./workflowItems/WorkflowSection2"
import WorkflowSection3 from "./workflowItems/WorkflowSection3"



const Workflow = () => {
  return (
    <div className="w-full min-h-[100vh] bg-black text-white pb-[5vw] overflow-hidden ">
       <WorkflowSection1 />
       <WorkflowSection2 />
       <WorkflowSection3 />
    </div>
  )
}

export default Workflow