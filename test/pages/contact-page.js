class ContactPage {
  get nameField() {
    return $("#evf-277-field_ys0GeZISRs-1");
  }

  get emailField() {
    return $("#evf-277-field_LbH5NxasXM-2");
  }

  get phoneField() {
    return $("#evf-277-field_66FR384cge-3");
  }

  get messageField() {
    return $("#evf-277-field_yhGx3FOwr2-4");
  }

  get submitBtn() {
    return $("#evf-submit-277");
  }

  get successMessage() {
    return $(".everest-forms-notice--success");
  }

  async open() {
    await browser.url("/contact");
  }

  async submitForm(fullName, email, phone, comment) {
    await this.nameField.addValue(fullName);
    await this.emailField.addValue(email);
    await this.phoneField.addValue(phone);
    await this.messageField.addValue(comment);
    await this.submitBtn.click();
  }
}

export default new ContactPage();
