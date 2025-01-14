# Test Manual & Automation for StyleMate-ONLINE STORE Website Using Cypress and Page Object Model.
![](https://github.com/HeyTaffazul/B41_SDET_031_Quality-Sentinels/blob/main/Screenshot%202024-12-21%20185346.png) 

### Objective
StyleMate ONLINE STORE - A E-commerce shopping website. To validate the functionality, usability, and responsiveness of the StyleMate-ONLINE STORE Website hosted at Luni Interface. The testing will focus on critical features like Homepage Navigation, Login/Signup, Interactive components, Add-to-cart & checkout processes, Responsiveness and Layout, Content validation, and Footer Links.

---

## Test Plan Document

### Project Name
StyleMate ONLINE STORE - A E-commerce shopping website.

### Objective
To validate the functionality, usability, and responsiveness of the Luni Interface website hosted at Luni Interface. The testing will focus on critical features like Homepage Navigation, Login/Signup, Interactive components, Add-to-cart & checkout processes, Responsiveness and Layout, Content validation, and Footer Links.

### In-Scope
- Homepage navigation
- Interactive components (e.g., sliders, toggles)
- Add-to-cart and checkout processes
- Form validation (error and success messages)
- Responsiveness across desktop, tablet, and mobile views
- Footer links

### Out-of-Scope
- Performance testing
- Security testing
- Backend integration tests

### Approach
- **Testing Tool:** Cypress
- **Design Pattern:** Page Object Model (POM)
- **Levels of Testing:**
  - Manual testing
  - Automation testing 
  - Functional testing
  - UI testing
  - Responsive design testing

### Test Types
- **Functional Testing:** Focused on features and workflows to ensure they work as intended.
- **Usability Testing:** Evaluates user experience, accessibility, and design responsiveness.

### Test Strategy
#### Functional Testing
- Test individual workflows and UI components.
- Use Cypress for automated validations.

#### Usability Testing
- Evaluate user experience through manual testing across devices.
- Focus on design clarity, accessibility, and intuitive navigation.

### Testing Flow
- Execute tests for navigation links and header/footer elements.
- Validate login/signup processes using valid and invalid inputs.
- Test interactive components and responsiveness on multiple devices.
- Execute cart addition and checkout workflows.
- Evaluate the accuracy of static and dynamic content.

### Key Features to Test
#### Homepage Navigation
- Validate all header and footer links for proper redirection.
- Verify login/signup workflows.
- Test redirection from call-to-action buttons to target pages or sections.

#### Interactive Components
- Verify sliders, toggles, and other dynamic elements function as expected.
- Test interactive elements for responsiveness on different screen sizes.

#### Add-to-Cart & Checkout Process
- Add items to the cart and ensure seamless checkout workflows.
- Validate error messages for incomplete fields and success messages after correct submissions.

#### Responsiveness and Layout
- Test layout consistency across devices (desktop, tablet, mobile).
- Validate the behavior of elements during screen resizing.

#### Content Validation
- Verify static content like headers, labels, and descriptions for accuracy.
- Ensure dynamic content updates appropriately with user interactions.

#### Footer Links
- Test footer links for accurate redirection (e.g., About Us, Terms & Conditions).

### Tools Used
- **Cypress:** Test automation for end-to-end validation.
- **Browser Developer Tools:** Inspect and debug issues.
- **Google Docs/Sheets:** Documentation and reporting.
- **Trello/Jira:** Track and manage defects.

### Testing Environment
- **Browsers:** Latest versions of Chrome, Firefox, and Safari
- **Devices:** Desktop (1280x720), Tablet (768x1024), Mobile (375x667)
- **URL:** Luni Interface
- **Access:** Ensure testers have access to the live website and necessary credentials for testing.

### Test Execution Timeline
18/12/2024 to 21/12/2024

---

## Test Execution Summary 

### StyleMate ONLINE STORE Website Testing Results

**Test Case Statistics:**
- **Total Test Cases:** 50
- **Pass:** 33
- **Fail:** 17
- **Defects Identified:** 12

**Key Findings:**
1. **Homepage:**
   - Successfully loads navigation, content, and footer. ✅
   - Broken footer links and non-functional language dropdown. ❌
2. **Interactive Features:**
   - "Add to Cart" functionality works correctly. ✅
   - Missing sorting and filtering features. ❌
   - Login/signup issues persist. ❌
3. **Add-to-Cart & Checkout:**
   - Item addition/removal functions as expected. ✅
   - Checkout button is non-functional. ❌
4. **Responsiveness & Layout:**
   - Mobile/tablet layouts optimized. ✅
   - Navigation is seamless across devices. ✅
5. **Content Accuracy:**
   - Static content as expected. ✅
   - Accessibility features are missing in some areas. ❌
6. **Footer Links:**
   - Broken or non-working footer links. ❌

---

## Recommendations

1. **Critical Bugs to Address:**
   - Fix broken footer links and language dropdown.
   - Implement sorting and filtering functionality.
   - Resolve login/signup and checkout issues.
2. **Enhance Features:**
   - Improve accessibility compliance.
   - Add error messages for invalid form entries.
3. **Retesting:**
   - Re-execute failed scenarios after bug fixes.

---

## Documentation Deliverables
- **Test Plan:** Overview of the testing approach and strategy.
- **Test Scenarios and Cases:** Documented test cases for each functionality.
- **Bug Reports:** Detailed descriptions of issues identified.
- **Summary Report:** Overview of test execution outcomes.
- **Mind Map:** Visual representation of workflows and navigation paths.

---

## Conclusion
The testing process has identified critical and minor bugs impacting user experience and functionality. Addressing these issues will ensure a seamless and robust website experience for all users. Following the recommendations will enhance usability, responsiveness, and performance.

---

### Feedback
For any feedback or queries, please contact me at: taffazulansari7979@gmail.com
