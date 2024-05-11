import fs from "fs";
import matter from "gray-matter";

const folder = "md/blog/";

export interface PostMetadata {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorAvatar: string;
}

const getPostMetadata = (): PostMetadata[] => {
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      author: matterResult.data.author_info.name,
      authorAvatar: matterResult.data.author_info.image,
    };
  });

  return posts;
};

export default getPostMetadata;