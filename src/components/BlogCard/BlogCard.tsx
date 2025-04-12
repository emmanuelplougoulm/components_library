import React, { memo } from 'react';
import './BlogCard.css';
import Badge from '../Badge/Badge';
import ArrowRight from '../../icons/arrow-right.svg?react';

type BlogCardProps = {
  badgeStatus: 'neutral' | 'success' | 'error' | 'warning' | 'brand';
  badgeLabel: string;
  image: string;
  title: string;
  excerpt: string;
  btnLabel: string;
  btnFn?: () => void;
};

const BlogCard: React.FC<BlogCardProps> = ({
  badgeStatus,
  badgeLabel,
  image,
  title,
  excerpt,
  btnLabel = 'button',
  btnFn
}) => {
  return (
    <div className="blog_card" role="article" aria-labelledby="blog-card-title">
      {image && (
        <img
          src={image}
          className="blog_card_image"
          alt={title ? `Image for ${title}` : 'Blog image'}
        />
      )}
      <div className="blog_card_content">
        <header className="blog_card_header">
          <Badge color={badgeStatus} label={badgeLabel} size="md" />
          <h2 id="blog_card_title" className="blog_card_title ">
            {title}
          </h2>
        </header>
        <div className="blog_card_text">
          <p id="blog_card_excerpt" className="blog_card_excerpt">
            {excerpt}
          </p>
          <button
            aria-label={`Perform action: ${btnLabel}`}
            className="blog_card_button"
            onClick={() => btnFn?.()}
          >
            {btnLabel}
            <ArrowRight className="blog_card_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(BlogCard);
