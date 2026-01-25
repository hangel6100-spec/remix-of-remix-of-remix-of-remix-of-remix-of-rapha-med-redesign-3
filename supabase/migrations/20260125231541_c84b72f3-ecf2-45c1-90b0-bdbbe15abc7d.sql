-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Service role can manage blog posts" ON public.blog_posts;

-- Note: The service role bypasses RLS automatically, so we don't need an explicit policy for it.
-- The "Blog posts are publicly readable" SELECT policy is intentional for public access.