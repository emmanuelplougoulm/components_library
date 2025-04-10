import React, { memo } from 'react';
import './BlogCard.css';
import Badge from '../Badge/Badge';
import ArrowRight from '../../assets/icons/arrow-right.svg';

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
        <Badge color={badgeStatus} label={badgeLabel} size="md" />
        <h2 id="blog_card_title" className="blog_card_title ">
          {title}
        </h2>
        <p id="blog_card_excerpt" className="blog_card_excerpt">
          {excerpt}
        </p>
        <button
          aria-label={`Perform action: ${btnLabel}`}
          className="blog_card_button"
          onClick={() => btnFn?.()}
        >
          {btnLabel}
          <img src={ArrowRight.src} alt="Arrow Right Icon" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default memo(BlogCard);
