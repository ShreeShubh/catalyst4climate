import AboutUs from "@/components/AboutUs/AboutUs"
import NextSeo from "@/components/Seo/Seo"

export default function page() {
  const seoField = {
    title: "",
    description: "",
    path: "about-us",
    metaImage: "/home/banner.png",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <AboutUs />
    </>
  )
}
