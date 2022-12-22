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
    cy.scrollTo("bottom");
    cy.get("a").contains("venonat #48");
  });

  it("should find the search input and type a pokemon name, submit the form and show the pokemon on screen", () => {
    const pokemon = "ivysaur";

    cy.get(".Header_input__CtHVr").type(pokemon);
    cy.get(".Header_button__4rS9_").click();

    cy.url().should("contain", "search?p=ivysaur");
    cy.wait(3000);
    cy.get("a").contains("ivysaur").should('be.visible');
  });

  it("should find the search input and type a pokemon name, submit the form and show the pokemon on screen, click on the card and go to pokemon info page", () => {
    const pokemon = "mew two";

    cy.get(".Header_input__CtHVr").type(pokemon);
    cy.get(".Header_button__4rS9_").click();

    cy.url().should("contain", "search?p=mew+two");
    cy.wait(3000);
    cy.get("a").contains("mewtwo").click();

    cy.url().should("contain", "/pokemon/mewtwo");
    cy.get(".PokemonInfo_pokemonInfo__tgRu8").contains("Mewtwo");
  });

  it("should find the specified pokemon, click on the card and go to the pokemon info page", () => {
    cy.get("a").contains("butterfree #12").click();

    cy.url().should("contain", "/pokemon/butterfree");
    cy.get(".PokemonInfo_pokemonInfo__tgRu8").contains("Butterfree");
  });

  it('should find the specified type button, click on it, verify if showed the pokemons that has that type, click on one and go to pokemon info page', () => {
    cy.get('a').contains('dark').click();

    cy.url().should('contain', '/type/dark');
    cy.get('a').contains('houndour #228').click();

    cy.url().should("contain", "/pokemon/houndour");
    cy.get(".PokemonInfo_pokemonInfo__tgRu8").contains("Houndour");
  })
});

export default {};
