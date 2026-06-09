import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { videos, videoCategories } from '../data/videos'
import '../styles/VideosPage.css'

const VIDEOS_PER_PAGE = 6

export default function VideosPage() {
  const { category = 'ai-translation' } = useParams()
  const [page, setPage] = useState(1)

  const activeCategory = videoCategories.find(c => c.id === category) || videoCategories[0]
  const categoryVideos = videos[activeCategory.id] || []
  const totalPages = Math.ceil(categoryVideos.length / VIDEOS_PER_PAGE)
  const pageVideos = categoryVideos.slice((page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE)

  const handleCategoryChange = () => setPage(1)

  return (
    <div className="all-wrap">
      <Header />
      <main className="videos-main">
        <div className="videos-hero">
          <div className="container">
            <span className="section-label">Video Library</span>
            <h1>동영상 라이브러리</h1>
            <p>AI 번역과 미국 AI 리터러시 관련 영상 모음</p>
          </div>
        </div>

        <div className="container videos-content">
          {/* Category Tabs */}
          <div className="video-tabs">
            {videoCategories.map(cat => (
              <Link
                key={cat.id}
                to={`/videos/${cat.id}`}
                className={`video-tab${cat.id === activeCategory.id ? ' active' : ''}`}
                onClick={handleCategoryChange}
              >
                <span className="tab-label-en">{cat.labelEn}</span>
                <span className="tab-label-kr">{cat.label}</span>
              </Link>
            ))}
          </div>

          {/* Videos Grid 2×3 */}
          <div className="videos-grid">
            {pageVideos.map((video, i) => (
              <div key={i} className="video-card">
                <div className="video-thumb">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-desc">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  className={`page-btn${p === page ? ' active' : ''}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className="page-btn"
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                →
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
