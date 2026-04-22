import type { ReactNode } from "react"

interface HoverRevealCardProps {
  children: ReactNode
}

interface LayerData {
  [key: string]: unknown
}

interface LayeredInfoCardProps {
  layers: ReactNode[]
  children?: ReactNode
}

interface ImageRevealCardProps {
  imageUrl?: string
  altText: string
}

interface DataCardProps {
  layers?: ReactNode[]
  quickInfo?: ReactNode
  detailedStats?: ReactNode
  actionButtons?: ReactNode
  relatedContent?: ReactNode
}

interface SlideRevealProps {
  direction: string
  children: ReactNode
}

interface InteractiveDataPointProps {
  point: DataCardProps
}

// Base Hover Components
const HoverRevealCard = ({ children }: HoverRevealCardProps) => {
  return <div className="hover-reveal-card">{children}</div>
}

const LayeredInfoCard = ({ layers, children }: LayeredInfoCardProps) => {
  return (
    <div className="layered-info-card">
      {layers.map((layer, index) => (
        <div key={index} className={`layer-${index}`}>
          {layer}
        </div>
      ))}
      {children}
    </div>
  )
}

const ImageRevealCard = ({ imageUrl, altText }: ImageRevealCardProps) => {
  return (
    <div className="image-reveal-card">
      <img src={imageUrl || "/placeholder.svg"} alt={altText} />
    </div>
  )
}

// Intelligence-Specific Components
const IntelligenceDataCard = ({ data }: { data: DataCardProps }) => {
  return (
    <div className="intelligence-data-card">
      <HoverRevealCard>
        <LayeredInfoCard layers={data.layers || []}>
          {data.quickInfo}
          {data.detailedStats}
          {data.actionButtons}
          {data.relatedContent}
        </LayeredInfoCard>
      </HoverRevealCard>
    </div>
  )
}

const AnalystProfileCard = ({ profile }: { profile: DataCardProps }) => {
  return (
    <div className="analyst-profile-card">
      <HoverRevealCard>
        <LayeredInfoCard layers={profile.layers || []}>
          {profile.quickInfo}
          {profile.detailedStats}
          {profile.actionButtons}
          {profile.relatedContent}
        </LayeredInfoCard>
      </HoverRevealCard>
    </div>
  )
}

const InteractiveDataPoint = ({ point }: InteractiveDataPointProps) => {
  return (
    <div className="interactive-data-point">
      <HoverRevealCard>
        <LayeredInfoCard layers={point.layers || []}>
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
const FadeReveal = ({ children }: { children: ReactNode }) => {
  return <div className="fade-reveal">{children}</div>
}

const SlideReveal = ({ direction, children }: SlideRevealProps) => {
  return <div className={`slide-reveal-${direction}`}>{children}</div>
}

const ZoomReveal = ({ children }: { children: ReactNode }) => {
  return <div className="zoom-reveal">{children}</div>
}

const OverlayReveal = ({ children }: { children: ReactNode }) => {
  return <div className="overlay-reveal">{children}</div>
}

// Content Layer Types
const QuickInfo = ({ info }: { info: ReactNode }) => {
  return <div className="quick-info">{info}</div>
}

const DetailedStats = ({ stats }: { stats: ReactNode }) => {
  return <div className="detailed-stats">{stats}</div>
}

const ActionButtons = ({ buttons }: { buttons: ReactNode }) => {
  return <div className="action-buttons">{buttons}</div>
}

const RelatedContent = ({ content }: { content: ReactNode }) => {
  return <div className="related-content">{content}</div>
}

// Accessibility Features
const KeyboardNavigation = ({ children }: { children: ReactNode }) => {
  return <div className="keyboard-navigation">{children}</div>
}

const ScreenReaderAnnouncement = ({ announcement }: { announcement: string }) => {
  return <div className="screen-reader-announcement">{announcement}</div>
}

const FocusManagement = ({ children }: { children: ReactNode }) => {
  return <div className="focus-management">{children}</div>
}

const ReducedMotionPreferences = ({ children }: { children: ReactNode }) => {
  return <div className="reduced-motion-preferences">{children}</div>
}

// Performance Optimizations
const CSSAnimations = ({ children }: { children: ReactNode }) => {
  return <div className="css-animations">{children}</div>
}

const LazyLoading = ({ content }: { content: ReactNode }) => {
  return <div className="lazy-loading">{content}</div>
}

const DebouncedHoverEvents = ({ children }: { children: ReactNode }) => {
  return <div className="debounced-hover-events">{children}</div>
}

const GPUAcceleratedTransforms = ({ children }: { children: ReactNode }) => {
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
