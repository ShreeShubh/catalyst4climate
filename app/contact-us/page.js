import ContactUs from "@/components/ContactUs/ContactUs"
import Footer from "@/components/Footer/Footer"
import NextSeo from "@/components/Seo/Seo"

export default function page() {
  const seoField = {
    title: "",
    description: "",
    path: "contact-us",
    metaImage: "/home/banner.png",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <ContactUs />
      <Footer />
    </>
  )
}
