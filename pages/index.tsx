import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Medium - Where good ideas find you.</title>
        <link
          rel="icon"
          href="https://miro.medium.com/fit/c/152/152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
        />
      </Head>
      <Header />
      <Hero />
      {/* <Posts /> */}
      <div className="flex justify-between p-5 max-w-7xl mx-auto">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div>
              <div className="flex space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
                <p>{post.author.name}</p>
              </div>
              <h2>{post.title}</h2>
              <p>{post.tagline}</p>
              <img
                className="h-24"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      title,
      author -> {
      name,
      image
      },
      tagline,
      mainImage,
      slug
    }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
