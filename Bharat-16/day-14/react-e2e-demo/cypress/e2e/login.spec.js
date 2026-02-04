/// <reference types="cypress" />

describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // Vite default port
  });

  it("should login successfully with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.validUser.email, users.validUser.password);
    });

    cy.contains("Welcome, test@example.com").should("exist");
  });

  it("should show error with invalid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password);
    });

    cy.contains("Invalid credentials").should("exist");
  });
});
