import HomePage from "../pages/home-page.js";

describe("Home", () => {
  beforeEach(async () => {
    await HomePage.open();
  });
  it("Open url and assert title", async () => {
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open url and assert url", async () => {
    await browser.url("https://practice.automationbro.com/about/");
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click get started btn and assert url containing get-started text", async () => {
    await $("#get-started").click();

    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click logo in the header and assert url DOES NOT contain get-started text", async () => {
    await $('//img[@alt="Practice E-Commerce Site"]').click();
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("find heading element and assert text", async () => {
    const headingEl = await $("h1.elementor-heading-title");
    //const headingText = await headingEl.getText();

    await expect(headingEl).toHaveText("Think different. Make different.");
  });
});
