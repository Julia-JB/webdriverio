import ContactPage from "../pages/contact-page.js";
import { faker } from "@faker-js/faker";

describe("Contact form", () => {
  it("Fill in the form with valid data, submit the form, and assert success message", async () => {
    await ContactPage.open();

    await ContactPage.submitForm(
      faker.name.fullName(),
      faker.internet.email(),
      faker.phone.imei(),
      faker.lorem.sentence()
    );

    const successMessage = ContactPage.successMessage;

    await expect(await successMessage.getText()).toEqual(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
