import OurTeamMember from "./ourTeamMember/OurTeamMember"
import SectionFore from "./sectionFore/SectionFore"
import SectionOne from "./sectionOne/SectionOne"
import SectionThree from "./sectionThree/SectionThree"
import SectionTwo from "./sectionTwo/SectionTwo"


const AboutUs = () => {
  return (
    <div className="w-full min-h-screen">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFore />
        <OurTeamMember />
    </div>
  )
}

export default AboutUs