class BlogPage {
  get recentPosts() {
    return $("#recent-posts-3").$$("a");
  }
  async open() {
    await browser.url("/blog");
  }
}

export default new BlogPage();
