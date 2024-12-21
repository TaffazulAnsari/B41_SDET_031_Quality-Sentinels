import Responsiveness from "../../support/PageObjectTestCase/responsiveness.cy";

describe('Interactive Components Tests for Luni Interface Website', () => {
  const componentsPage = new Responsiveness();

  beforeEach(() => {
    componentsPage.visit();
  });

  it('Verify responsiveness on different screen sizes', () => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 },
    ];

    viewports.forEach(({ width, height }) => {
      componentsPage.validateResponsiveness(width, height);
    });
  });

  it('Verify header responsiveness on different screen sizes', () => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 },
    ];

    viewports.forEach(({ width, height }) => {
      componentsPage.validateHeaderResponsiveness(width, height);
    });
  });

  it('Verify footer responsiveness on different screen sizes', () => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1366, height: 768 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 },
    ];

    viewports.forEach(({ width, height }) => {
      componentsPage.validateFooterResponsiveness(width, height);
    });
  });
});
