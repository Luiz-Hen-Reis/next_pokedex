describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should go to home page and find the pokemon specified", () => {
    cy.contains("bulbasaur");
  });

  it("should scroll to the bottom of the page, click the Load More button and find the pokemon specified", () => {
    cy.scrollTo("bottom");

    cy.get("div").contains("Load More").click();
    cy.wait(3000);
    cy.get("a").contains("pikachu #25");
  });

  it("should scroll to the bottom of the page, click the Load More button and go again to the bottom of the page and find the specified pokemon", () => {
    cy.scrollTo("bottom");

    cy.get("div").contains("Load More").click();
    cy.wait(3000);
    cy.scrollTo("bottom");

    cy.get("a").contains("venonat #48");
  });

  it('should find the search input and type a pokemon name, submit the form and show the pokemon on screen', () => {
    const pokemon = 'charmander';

    cy.get('.Header_input__CtHVr').type(pokemon);
    cy.get('.Header_button__4rS9_').click();
    cy.wait(3000);
    cy.get("a").contains("charmander");
  })
});

export default {};
