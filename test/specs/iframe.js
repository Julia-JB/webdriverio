describe("IFrame", () => {
  it.only("Working with iframe", async () => {
    await browser.url("https://practice.automationbro.com/iframe-sample/");

    //access iframe
    const iframe = await $("#advanced_iframe");
    await browser.switchToFrame(iframe);

    //verify logo exists
    await expect($("#site-logo")).toExist();

    //switch to parent frame
    await browser.switchToParentFrame();

    //verify page title

    await expect($(".tg-page-header__title")).toHaveTextContaining(
      "IFrame Sample"
    );
  });
});
