import React from 'react';
import './BlogCard.css';
import Badge from '../Badge/Badge';
import ArrowRight from '../../assets/icons/arrow-right.svg';

type BlogCardProps = {
  badgeStatus?: 'neutral' | 'success' | 'error' | 'warning' | 'brand';
  image?: string;
  title?: string;
  excerpt?: string;
  btnLabel?: string;
  btnFn?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  badgeStatus = 'neutral',
  image,
  title = 'title',
  excerpt = 'excerpt',
  btnLabel = 'button'
}) => {
  return (
    <div className="blog_card">
      <img src={image} className="blog_card_image" />
      <div className="blog_card_content">
        <Badge color={badgeStatus} label="Interior" size="md" />
        <h2 className="blog_card_title ">{title}</h2>
        <p className="blog_card_excerpt">{excerpt}</p>
        <button className="blog_card_button">
          {btnLabel}
          <img src={ArrowRight.src} alt="Arrow Right Icon" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
