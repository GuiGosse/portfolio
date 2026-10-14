
import { useEffect, useState } from "react";
import { HoloCard } from "./HoloCard";

export type ToolStatus =
  | "available"
  | "beta"
  | "development"
  | "coming-soon";

export type Tool = {
  n: string;
  title: string;
  stack: string[];
  desc: string;
  metric: string;
  status: ToolStatus;
  image?: string;
  gallery?: string[];
  link?: string;
  linkLabel?: string;
};

type ToolCardProps = {
  tool: Tool;
  statusInfo: {
    label: string;
    color: string;
    animate?: boolean;
  };
};

function ToolGalleryModal({
  images,
  title,
  initialIndex,
  onClose,
}: {
  images: string[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  const previous = () =>
    setIndex((current) => (current - 1 + images.length) % images.length);

  const next = () =>
    setIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, images.length]);

  return (
    <div
      className="tool-gallery-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="tool-gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria: ${title}`}
      >
        <header className="tool-gallery-header">
          <div>
            <span className="tool-gallery-eyebrow">GALERIA / PREVIEW</span>
            <h3>{title}</h3>
            <p>
              IMAGEM {index + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            className="tool-gallery-close"
            onClick={onClose}
            aria-label="Fechar galeria"
          >
            ×
          </button>
        </header>

        <div className="tool-gallery-image-wrap">
          <button
            type="button"
            className="tool-gallery-arrow"
            onClick={previous}
            aria-label="Imagem anterior"
            disabled={images.length < 2}
          >
            ‹
          </button>

          <img
            key={images[index]}
            src={images[index]}
            alt={`${title}, captura de tela ${index + 1}`}
            className="tool-gallery-image"
          />

          <button
            type="button"
            className="tool-gallery-arrow"
            onClick={next}
            aria-label="Próxima imagem"
            disabled={images.length < 2}
          >
            ›
          </button>
        </div>

        <div className="tool-gallery-dots" aria-label="Selecionar imagem">
          {images.map((image, i) => (
            <button
              key={`${image}-${i}`}
              type="button"
              className={`tool-gallery-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ver imagem ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ToolCard({ tool, statusInfo }: ToolCardProps) {
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const images = [
    ...(tool.image ? [tool.image] : []),
    ...(tool.gallery ?? []),
  ];

  const showBack = hovered || flipped;
  const hasImages = images.length > 0;

  return (
    <>
      <div
        className="tool-card-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <HoloCard className="tool-holo-card">
          <div
            className={`tool-flip-inner ${showBack ? "is-flipped" : ""}`}
          >
            {/* FRENTE */}
            <article
              className="tool-face tool-face-front"
              aria-hidden={showBack}
            >
              <div
                aria-hidden="true"
                className="tool-card-number"
              >
                {tool.n}
              </div>

              <div className="tool-card-top">
                <span className="tool-card-index">
                  FERRAMENTA / {tool.n}
                </span>

                <span
                  className="tool-status"
                  style={{
                    color: statusInfo.color,
                    borderColor: statusInfo.color,
                  }}
                >
                  <span
                    className={`tool-status-dot ${
                      statusInfo.animate ? "is-animated" : ""
                    }`}
                    style={{ backgroundColor: statusInfo.color }}
                  />
                  {statusInfo.label}
                </span>
              </div>

              <h3 className="tool-card-title">{tool.title}</h3>

              <div className="tool-card-stack">
                {tool.stack.map((technology) => (
                  <span key={technology} className="chip">
                    {technology}
                  </span>
                ))}
              </div>

              <p className="tool-card-description">{tool.desc}</p>

              <div className="tool-card-benefit">
                <span className="tool-card-eyebrow">
                  PRINCIPAL BENEFÍCIO
                </span>
                <p>{tool.metric}</p>

                <div className="tool-card-actions">

                  {hasImages && (
                    <button
                      type="button"
                      className="tool-card-preview-button"
                      onClick={() => setFlipped(true)}
                      tabIndex={showBack ? -1 : 0}
                    >
                      VER PREVIEW ↓
                    </button>
                  )}
                </div>
              </div>
            </article>

            {/* VERSO */}
            <article
              className="tool-face tool-face-back"
              aria-hidden={!showBack}
            >
              {hasImages ? (
                <>
                  <div className="tool-preview-header">
                    <span className="tool-card-index">
                      PREVIEW / {tool.n}
                    </span>
                    <span className="tool-preview-count">
                      {images.length.toString().padStart(2, "0")} IMAGENS
                    </span>
                  </div>

                  <button
                    type="button"
                    className="tool-preview-image-button"
                    onClick={() => setGalleryOpen(true)}
                    aria-label={`Abrir galeria de ${tool.title}`}
                    tabIndex={showBack ? 0 : -1}
                  >
                    <img
                      src={images[0]}
                      alt={`Prévia de ${tool.title}`}
                      className="tool-preview-image"
                      loading="lazy"
                    />
                    <span className="tool-preview-image-overlay">
                      AMPLIAR IMAGEM ↗
                    </span>
                  </button>

                  <div className="tool-preview-footer">
                    <div>
                      <a 
                      href={tool.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-card-link"
                      
                      >                 
                     <h3>{tool.title}</h3></a>
                      <p>INTERFACE DA APLICAÇÃO</p>
                    </div>

                    <div
                      className="tool-preview-indicators"
                      aria-label={`${images.length} imagens na galeria`}
                    >
                      {images.map((image, i) => (
                        <span
                          key={`${image}-${i}`}
                          className={`tool-preview-indicator ${
                            i === 0 ? "active" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="tool-preview-actions">
                    <button
                      type="button"
                      className="tool-card-gallery-button"
                      onClick={() => setGalleryOpen(true)}
                      tabIndex={showBack ? 0 : -1}
                    >
                      VER GALERIA ↗
                    </button>

                    {tool.link && (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tool-card-link"
                        tabIndex={showBack ? 0 : -1}
                      >
                        ACESSAR ↗
                      </a>
                    )}

                    <button
                      type="button"
                      className="tool-card-return-button"
                      onClick={() => setFlipped(false)}
                      tabIndex={showBack ? 0 : -1}
                    >
                      VOLTAR ↻
                    </button>
                  </div>
                </>
              ) : (
                <div className="tool-preview-empty">
                  <span className="tool-card-index">
                    PREVIEW / {tool.n}
                  </span>
                  <div aria-hidden="true" className="tool-preview-placeholder">
                    &lt;/&gt;
                  </div>
                  <h3>{tool.title}</h3>
                  <p>CAPTURAS DE TELA EM PREPARAÇÃO</p>
                  <button
                    type="button"
                    className="tool-card-return-button"
                    onClick={() => setFlipped(false)}
                    tabIndex={showBack ? 0 : -1}
                  >
                    VOLTAR ↻
                  </button>
                </div>
              )}
            </article>
          </div>
        </HoloCard>
      </div>

      {galleryOpen && hasImages && (
        <ToolGalleryModal
          images={images}
          title={tool.title}
          initialIndex={0}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
