import Layout from "~/app/_components/landingpage/layout";
import InsuranceIntro from "~/app/_components/Insurance/insuranceintro";
import ServicesLayout from "~/app/_components/Insurance/offers";
import ContactForm from "~/app/_components/landingpage/customform";
export default function Insurance() {
  return (
    <Layout>
      <div>
        <InsuranceIntro />
        <ServicesLayout />
        <ContactForm />
      </div>
    </Layout>
  );
}
