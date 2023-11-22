import Layout from "~/app/_components/landingpage/layout";
import ProfessionalHousing from "~/app/_components/ProfessionalHousing/profeshIntro";
import ServicesGrid from "~/app/_components/ProfessionalHousing/housingservices";
import AmenitiesGrid from "~/app/_components/ProfessionalHousing/housingAmenities";
export default function TravelProfessionals() {
  return (
    <Layout>
      <div className="">
        <ProfessionalHousing />
        <ServicesGrid />
        <AmenitiesGrid />
      </div>
    </Layout>
  );
}
