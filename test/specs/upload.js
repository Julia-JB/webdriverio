import path from "node:path";

describe("Upload tests", () => {
  xit("Upload a file", async () => {
    //open url
    await browser.url("https://the-internet.herokuapp.com/upload");

    //store test file path
    const filePath =
      "/home/yuliia/Documents/wdio-course/test/data/logo_upd.png";

    //upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    //set file path value in the input field
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();

    //assertion
    await expect($("h3")).toHaveText("File Uploaded!");
  });

  xit("Upload on a hidden input field", async () => {
    //open url
    await browser.url("/cart/");

    //store test file path
    const filePath =
      "/home/yuliia/Documents/wdio-course/test/data/logo_upd.png";

    //upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    //remove class - executing code withing the browser
    await browser.execute("document.querySelector('#upfile_1').className = ''");

    //set file path value in the input field
    await $("#upfile_1").setValue(remoteFilePath);
    await $("#upload_1").click();

    //assertion
    await expect($("#wfu_messageblock_header_1_label_1")).toHaveTextContaining(
      "uploaded successfully"
    );
  });
});
