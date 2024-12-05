import Footer from "@/components/Footer/Footer"
import HomePage from "@/components/HomePage/HomePage"
import NextSeo from "@/components/Seo/Seo"

export default function Home() {
  const seoField = {
    title: "Catalyst for Climate: Collaborations for Climate Resilience",
    description:
      "Catalyst for Climate is a global collective equipped with community-centred solutions to climate change for building environmental resilience.",
    path: "",
    metaImage: "/home/banner.png",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <HomePage />
      <Footer />
    </>
  )
}
