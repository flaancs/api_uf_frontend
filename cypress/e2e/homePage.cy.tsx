describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page correctly", () => {
    cy.get("h1").contains("API UF").should("be.visible");
    cy.get("h2")
      .contains("Consulta los valores de UF en base a una fecha en especifico")
      .should("be.visible");
  });

  it("should allow the user to enter a date", () => {
    const testDate = "2023-01-01";
    cy.get('input[type="date"]').type(testDate).should("have.value", testDate);
  });

  it("should display UF value card after entering a valid date", () => {
    const testDate = "2023-01-01";
    cy.get('input[type="date"]').type(testDate);

    cy.contains("Valor de la UF").should("be.visible");
    cy.contains("$").should("be.visible");
  });

  it("should not display UF value card for an invalid or future date", () => {
    const futureDate = "2024-12-01";
    cy.get('input[type="date"]').type(futureDate);
    cy.contains(
      "No se ha encontrado el valor de UF para la fecha especificada."
    ).should("be.visible");
  });

  it("should correctly display formatted date in UF value card", () => {
    const testDate = "2023-01-01";
    cy.get('input[type="date"]').type(testDate);
    cy.contains("1 de enero de 2023").should("be.visible");
  });
});
