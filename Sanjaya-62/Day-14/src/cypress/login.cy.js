describe("Simple E2E Test", () => {
  it("types name and clicks submit", () => {
    cy.visit("http://localhost:5173"); // Vite default

    cy.get('input[placeholder="Enter name"]')
      .type("Sanjaya");

    cy.contains("Submit").click();
  });
});
