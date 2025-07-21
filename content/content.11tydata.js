export default {
	eleventyComputed: {
		infoItems: {
			test: "a",
			test2: "b",
			test3: (data) => data.title,
		},
	},
};
