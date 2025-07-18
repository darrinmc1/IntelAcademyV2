// Base Hover Components
const HoverRevealCard = ({ children }) => {
  return <div className="hover-reveal-card">{children}</div>
}

const LayeredInfoCard = ({ layers }) => {
  return (
    <div className="layered-info-card">
      {layers.map((layer, index) => (
        <div key={index} className={`layer-${index}`}>
          {layer}
        </div>
      ))}
    </div>
  )
}

const ImageRevealCard = ({ imageUrl, altText }) => {
  return (
    <div className="image-reveal-card">
      <img src={imageUrl || "/placeholder.svg"} alt={altText} />
    </div>
  )
}

// Intelligence-Specific Components
const IntelligenceDataCard = ({ data }) => {
  return (
    <div className="intelligence-data-card">
      <HoverRevealCard>
        <LayeredInfoCard layers={data.layers}>
          {data.quickInfo}
          {data.detailedStats}
          {data.actionButtons}
          {data.relatedContent}
        </LayeredInfoCard>
      </HoverRevealCard>
    </div>
  )
}

const AnalystProfileCard = ({ profile }) => {
  return (
    <div className="analyst-profile-card">
      <HoverRevealCard>
        <LayeredInfoCard layers={profile.layers}>
          {profile.quickInfo}
          {profile.detailedStats}
          {profile.actionButtons}
          {profile.relatedContent}
        </LayeredInfoCard>
      </HoverRevealCard>
    </div>
  )
}

const InteractiveDataPoint = ({ point }) => {
  return (
    <div className="interactive-data-point">
      <HoverRevealCard>
        <LayeredInfoCard layers={point.layers}>
          {point.quickInfo}
          {point.detailedStats}
          {point.actionButtons}
          {point.relatedContent}
        </LayeredInfoCard>
      </HoverRevealCard>
    </div>
  )
}

// Hover Effect Types
const FadeReveal = ({ children }) => {
  return <div className="fade-reveal">{children}</div>
}

const SlideReveal = ({ direction, children }) => {
  return <div className={`slide-reveal-${direction}`}>{children}</div>
}

const ZoomReveal = ({ children }) => {
  return <div className="zoom-reveal">{children}</div>
}

const OverlayReveal = ({ children }) => {
  return <div className="overlay-reveal">{children}</div>
}

// Content Layer Types
const QuickInfo = ({ info }) => {
  return <div className="quick-info">{info}</div>
}

const DetailedStats = ({ stats }) => {
  return <div className="detailed-stats">{stats}</div>
}

const ActionButtons = ({ buttons }) => {
  return <div className="action-buttons">{buttons}</div>
}

const RelatedContent = ({ content }) => {
  return <div className="related-content">{content}</div>
}

// Accessibility Features
const KeyboardNavigation = ({ children }) => {
  return <div className="keyboard-navigation">{children}</div>
}

const ScreenReaderAnnouncement = ({ announcement }) => {
  return <div className="screen-reader-announcement">{announcement}</div>
}

const FocusManagement = ({ children }) => {
  return <div className="focus-management">{children}</div>
}

const ReducedMotionPreferences = ({ children }) => {
  return <div className="reduced-motion-preferences">{children}</div>
}

// Performance Optimizations
const CSSAnimations = ({ children }) => {
  return <div className="css-animations">{children}</div>
}

const LazyLoading = ({ content }) => {
  return <div className="lazy-loading">{content}</div>
}

const DebouncedHoverEvents = ({ children }) => {
  return <div className="debounced-hover-events">{children}</div>
}

const GPUAcceleratedTransforms = ({ children }) => {
  return <div className="gpu-accelerated-transforms">{children}</div>
}

export {
  HoverRevealCard,
  LayeredInfoCard,
  ImageRevealCard,
  IntelligenceDataCard,
  AnalystProfileCard,
  InteractiveDataPoint,
  FadeReveal,
  SlideReveal,
  ZoomReveal,
  OverlayReveal,
  QuickInfo,
  DetailedStats,
  ActionButtons,
  RelatedContent,
  KeyboardNavigation,
  ScreenReaderAnnouncement,
  FocusManagement,
  ReducedMotionPreferences,
  CSSAnimations,
  LazyLoading,
  DebouncedHoverEvents,
  GPUAcceleratedTransforms,
}
