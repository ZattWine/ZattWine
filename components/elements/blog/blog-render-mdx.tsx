"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Blog } from "@/contentlayer/generated";
import Image from "next/image";

type Props = {
  blog: Blog;
};

const mdxComponents = {
  Image,
};

const BlogRenderMdx = ({ blog }: Props) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div className="font-primary prose lg:prose-xl prose-p:text-lg text-white max-w-max prose-blockquote:bg-green-200 prose-blockquote:text-primary prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-green-700 prose-blockquote:not-italic prose-blockquote:rounded-r-lg  prose-li:marker:text-accent prose-code:text-green-500 prose-a:text-accent prose-headings:text-white prose-strong:text-white">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default BlogRenderMdx;