import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerItem } from '@/components/animation/ScrollReveal';
import type { BlogPost } from '@/hooks/useBlogPosts';

interface NewsCardProps {
  post: BlogPost;
  showCategory?: boolean;
}

export function NewsCard({ post, showCategory = false }: NewsCardProps) {
  const formattedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      variants={staggerItem}
      className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
    >
      <div className="flex items-center justify-between mb-3">
        {showCategory && post.category && (
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {post.category}
          </span>
        )}
        <div className={`flex items-center gap-2 text-muted-foreground text-sm ${showCategory ? '' : 'w-full'}`}>
          <Calendar className="w-4 h-4" />
          {formattedDate}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.summary}</p>
      {post.external_link && (
        <a
          href={post.external_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-coffee font-medium text-sm hover:text-primary transition-colors"
        >
          Read More
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}
