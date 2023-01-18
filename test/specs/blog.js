import BlogPage from "../pages/blog-page.js";

describe("Blog page", () => {
  it("Get recent post titles and assert the length of titles and the number of posts", async () => {
    await BlogPage.open();

    const recentPosts = await BlogPage.recentPosts;

    await expect(recentPosts).toBeElementsArrayOfSize(5);

    for (let title of recentPosts) {
      const text = await title.getText();
      await expect(text.length).toBeGreaterThan(10);
    }
  });
});
