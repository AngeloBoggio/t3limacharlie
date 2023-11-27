import Link from "next/link";
import Head from "next/head";
import NavBar from "../app/_components/landingpage/navbar";
import Jumbotron from "../app/_components/landingpage/jumbotron";
import ServicesGrid from "~/app/_components/landingpage/sectioncards";
import Message from "../app/_components/landingpage/message";
import Footer from "../app/_components/landingpage/footer";
import CustomerTestimonials from "~/app/_components/landingpage/customers";
import ContactForm from "~/app/_components/landingpage/customform";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lima Charlie</title>
        <meta name="description" content="Website for Init" />
      </Head>

      <main className="bg-gray-100">
        <NavBar />
        <Jumbotron />
        <Message />
        <ServicesGrid />
        <CustomerTestimonials />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
