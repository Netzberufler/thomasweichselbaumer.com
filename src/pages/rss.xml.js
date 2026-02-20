import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
	const posts = await getCollection('posts');
	return rss({
		title: "Thomas Weichselbaumer",
		description: "I'm a passionate web developer from Augsburg, Germany. My focus is front-end development and I mainly work with WordPress, React, and TypeScript.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.id}/`,
		})),
	});
}
