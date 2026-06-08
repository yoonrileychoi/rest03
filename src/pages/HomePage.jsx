import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPopup from '../components/MainPopup'
import MainIntro from '../sections/MainIntro'
import Founding from '../sections/Founding'
import BusinessSection from '../sections/BusinessSection'
import Sustainable from '../sections/Sustainable'
import Discover from '../sections/Discover'
import Relation from '../sections/Relation'

export default function HomePage() {
  return (
    <div className="all-wrap">
      <Header isDark={true} />
      <main>
        <MainIntro />
        <Founding />
        <BusinessSection />
        <Sustainable />
        <Discover />
        <Relation />
      </main>
      <Footer />
      <MainPopup />
    </div>
  )
}
