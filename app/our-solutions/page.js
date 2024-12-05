import OurSolutions from "@/components/OurSolutions/OurSolutions"
import Footer from "@/components/Footer/Footer"
import NextSeo from "@/components/Seo/Seo"

export default function page() {
  const seoField = {
    title: "",
    description: "",
    path: "our-solutions",
    metaImage: "/home/banner.png",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <OurSolutions />
      <Footer />
    </>
  )
}
