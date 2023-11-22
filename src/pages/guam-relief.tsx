import Layout from "~/app/_components/landingpage/layout";
import Intro from "~/app/_components/Guam-page/intro";
import GuamOps from "~/app/_components/Guam-page/guamops";
import GuamContactForm from "~/app/_components/Guam-page/guamform";

export default function GuamRelief() {
  return (
    <Layout>
      <div>
        <Intro />
        <GuamOps />
        <GuamContactForm />
      </div>
    </Layout>
  );
}
