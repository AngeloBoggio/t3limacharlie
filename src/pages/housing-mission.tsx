import Layout from "~/app/_components/landingpage/layout";
import Government from "~/app/_components/Housing-page/govmessage";
import Body from "~/app/_components/Housing-page/body";
import DisasterAssistance from "~/app/_components/Housing-page/disaster-assistance";
import Agencies from "~/app/_components/Housing-page/ouragencies";
import HousingForm from "~/app/_components/Housing-page/housingform";

export default function HousingMission() {
  return (
    <Layout>
      <div>
        <Government />
        <Body />
        <DisasterAssistance />
        <Agencies />
        <HousingForm />
      </div>
    </Layout>
  );
}
