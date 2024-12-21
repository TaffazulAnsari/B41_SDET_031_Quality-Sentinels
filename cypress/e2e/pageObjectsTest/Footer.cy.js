import Footer from "../../support/PageObjectTestCase/Footer.cy";

describe("Footer Navigation Validation", () => {
  const footer = new Footer();

  beforeEach(() => {
    cy.visit("https://luni-interface-029.vercel.app/");
  });

  it("Validate footer", () => {
    const footerLinks = [
      { text: "Who we are", href: "/who-we-are" },
      { text: "Join our team", href: "/join-our-team" },
      { text: "Terms & Conditions", href: "/terms-and-conditions" },
      { text: "We respect our Policy", href: "/privacy-policy" },
      { text: "Fee & Payments", href: "/fee-and-payments" },
      { text: "Returns & Refunds", href: "/returns-and-refunds" },
      { text: "Promotion Tem & conditions", href: "/promotion-terms" },
      { text: "Track your order", href: "/" },
      { text: "Frequntly asked", href: "/privacy-policy" },
      { text: "Facebook", href: "Facebook" },
      { text: "Download your apps", href: "/" },
    ];

    footerLinks.forEach(({ text, href }) => {
      footer.validateLink(text, href);
    });
  });
});
