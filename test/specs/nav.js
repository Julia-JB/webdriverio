import allureReporter from "@wdio/allure-reporter";
import HomePage from "../pages/home-page.js";

describe("Navigation menu", () => {
  it("Get text of navigation links and assert it", async () => {
    allureReporter.addFeature("Navigation feature");
    allureReporter.addSeverity("Critical");
    await HomePage.open();

    const navLinks = await HomePage.NavComponent.navLinks;

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    console.log("Actual links are " + actualLinks);
    console.log("Navlinks are " + navLinks);

    await expect(expectedLinks).toEqual(actualLinks);
  });
});
