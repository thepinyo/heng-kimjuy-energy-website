# Requirements Document

## Introduction

This document defines the requirements for the Heng Kimjuy Energy website — a public-facing, fully static website for a car garage and energy brand based in Thailand. The website will serve as the brand's online presence, showcasing services, gallery, branch locations, and contact information. It is a purely client-side application with no backend or API dependencies. All content data (services, gallery images, branch details, contact info) is hardcoded directly in the source code. The design follows a mobile-first approach to ensure an optimal experience on smartphones, which are the primary browsing device for the target audience.

## Glossary

- **Website**: The Heng Kimjuy Energy public-facing static web application with no server-side dependencies
- **Visitor**: A person browsing the Website
- **Hero_Section**: The prominent top section of the landing page displaying the brand identity
- **Navigation_Bar**: The persistent menu component allowing Visitors to navigate between sections
- **Gallery**: The section displaying photos of the garage's work, vehicles, and facilities
- **Branch_Map**: An embedded map component showing the physical location of a branch
- **Contact_Section**: The section displaying phone number, LINE ID, and social media links
- **Footer**: The bottom section of the Website containing supplementary links and copyright info
- **Static_Data**: Content data (services list, gallery image paths, branch details, contact information) defined directly in the source code without any API calls or external data fetching
- **Brand_Colors**: The official color palette for the Heng Kimjuy Energy brand, consisting of primary blue (#5FB3F9) and secondary white (#FFFFFF)
- **Language_Switcher**: A UI component that allows Visitors to toggle the Website display language between Thai, English, and Chinese

## Requirements

### Requirement 1: Static Site Architecture

**User Story:** As the business owner, I want the website to be a fully static site with no backend or API dependencies, so that it is simple to host, fast to load, and requires no server maintenance.

#### Acceptance Criteria

1. THE Website SHALL operate as a purely client-side application with no server-side API calls
2. THE Website SHALL define all content data (services, gallery images, branch locations, contact details) as Static_Data embedded directly in the source code
3. THE Website SHALL not depend on any external data-fetching mechanisms (no REST APIs, no GraphQL, no database connections) for rendering content
4. THE Website SHALL be deployable as static files (HTML, CSS, JavaScript, and assets) to any static hosting provider

### Requirement 2: Brand Theme and Colors

**User Story:** As the business owner, I want the website to use the official Heng Kimjuy Energy blue and white color scheme, so that the site reflects the brand identity consistently across all pages.

#### Acceptance Criteria

1. THE Website SHALL use #5FB3F9 (blue) as the primary brand color and #FFFFFF (white) as the secondary background color, as defined in Brand_Colors
2. THE Navigation_Bar SHALL use the primary blue color (#5FB3F9) for its background
3. THE Hero_Section SHALL use the Brand_Colors scheme with the primary blue as the dominant accent color
4. WHEN a Visitor hovers over or activates an interactive element (button, link), THE Website SHALL apply the primary blue color (#5FB3F9) or a derived shade for hover and active states
5. THE Website SHALL define the Brand_Colors as CSS custom properties (`--color-primary: #5FB3F9` and `--color-secondary: #FFFFFF`) for consistent usage across all components
6. WHILE text is displayed on a blue (#5FB3F9) background, THE Website SHALL render that text in white (#FFFFFF) to maintain readability and contrast compliance

### Requirement 3: Mobile-First Responsive Design

**User Story:** As a Visitor, I want the website to be designed mobile-first and look great on any device, so that I can browse comfortably from my phone, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL be designed using a mobile-first approach where the base styles target mobile viewports and larger layouts are applied via progressive `min-width` media queries
2. THE Website SHALL render correctly on viewports ranging from 320px to 2560px wide
3. WHILE a Visitor is browsing on a device with a viewport width below 768px, THE Website SHALL use a single-column mobile-optimized layout as the default experience
4. WHILE a Visitor is browsing on a device with a viewport width between 768px and 1024px, THE Website SHALL adapt to a tablet-optimized layout
5. WHILE a Visitor is browsing on a device with a viewport width above 1024px, THE Website SHALL adapt to a desktop-optimized multi-column layout
6. THE Website SHALL use relative units (rem, em, %, vw) for sizing to ensure scalable layouts
7. THE Website SHALL include a viewport meta tag (`width=device-width, initial-scale=1`) for proper mobile rendering
8. THE Website SHALL ensure all touch targets (buttons, links) are a minimum of 44x44 pixels for comfortable mobile interaction

### Requirement 4: Brand Landing Page

**User Story:** As a Visitor, I want to see a professional landing page when I open the website, so that I can immediately understand what Heng Kimjuy Energy offers.

#### Acceptance Criteria

1. WHEN a Visitor loads the Website, THE Hero_Section SHALL display the Heng Kimjuy Energy logo, brand name, and a brief tagline describing the garage services
2. WHEN a Visitor loads the Website, THE Hero_Section SHALL render within 3 seconds on a standard 4G connection
3. THE Website SHALL display the brand name "Heng Kimjuy Energy" consistently across all pages

### Requirement 5: Navigation

**User Story:** As a Visitor, I want to navigate between different sections of the website easily, so that I can find the information I need.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL provide links to the following sections: Home, Services, Gallery, Branches, and Contact
2. WHEN a Visitor clicks a navigation link, THE Website SHALL scroll to or navigate to the corresponding section
3. WHILE a Visitor is browsing on a device with a viewport width below 768px, THE Navigation_Bar SHALL display as a hamburger menu by default
4. WHEN a Visitor taps the hamburger menu icon, THE Navigation_Bar SHALL expand to show all navigation links as a full-width vertical list optimized for touch interaction
5. WHEN a Visitor selects a navigation link from the expanded hamburger menu, THE Navigation_Bar SHALL collapse the menu after navigation

### Requirement 6: Services Overview

**User Story:** As a Visitor, I want to see what services the garage provides, so that I can determine if they can help with my vehicle needs.

#### Acceptance Criteria

1. THE Website SHALL display a Services section listing the garage's offered services from Static_Data, with a title, icon or image, and short description for each service
2. WHEN a Visitor views the Services section, THE Website SHALL present each service as a distinct card or block element
3. WHILE a Visitor is browsing on a mobile device, THE Website SHALL display service cards in a single-column stacked layout

### Requirement 7: Photo Gallery

**User Story:** As a Visitor, I want to browse photos of the garage's work and facilities, so that I can assess the quality and professionalism of the business.

#### Acceptance Criteria

1. THE Gallery SHALL display a grid of photos from Static_Data showcasing the garage's work, vehicles, and facilities
2. WHEN a Visitor taps on a photo in the Gallery, THE Website SHALL open a lightbox overlay displaying the full-size image with swipe gesture support on touch devices
3. WHILE a Visitor views the Gallery on a device with a viewport width below 768px, THE Gallery SHALL display in a single-column or two-column layout
4. THE Gallery SHALL load images using lazy loading to optimize page performance
5. THE Gallery SHALL reference image files bundled as static assets within the project

### Requirement 8: Branch Locations

**User Story:** As a Visitor, I want to see where the garage branches are located, so that I can visit the nearest one.

#### Acceptance Criteria

1. THE Website SHALL display a Branches section listing two branch locations from Static_Data
2. WHEN a Visitor views a branch entry, THE Website SHALL display the branch name, address, and an embedded Branch_Map
3. WHEN a Visitor taps a "Get Directions" link for a branch, THE Website SHALL open the corresponding Google Maps link in a new browser tab
   - Branch 1 link: https://share.google/uA5EzS20EZJndoAkN
   - Branch 2 link: https://share.google/aCAlHKOSAX6s9cGd7

### Requirement 9: Contact Information

**User Story:** As a Visitor, I want to quickly find contact details for the garage, so that I can reach out for inquiries or appointments.

#### Acceptance Criteria

1. THE Contact_Section SHALL display the phone number 086 701 6532 from Static_Data
2. WHEN a Visitor taps the phone number, THE Website SHALL initiate a phone call using the `tel:` protocol
3. THE Contact_Section SHALL display the LINE ID @hengkimjuy with a link that opens the LINE app or LINE website
4. THE Contact_Section SHALL display a link to the Facebook page (https://www.facebook.com/hengkimjuy) that opens in a new browser tab
5. WHILE a Visitor is browsing on a mobile device, THE Website SHALL display contact options as large, tappable buttons with a minimum height of 48px

### Requirement 10: Footer

**User Story:** As a Visitor, I want to see supplementary information at the bottom of the page, so that I can access social links and legal info.

#### Acceptance Criteria

1. THE Footer SHALL display the copyright notice with the brand name "Heng Kimjuy Energy" and the current year
2. THE Footer SHALL display links to the Facebook page and LINE contact
3. THE Footer SHALL display the phone number 086 701 6532

### Requirement 11: SEO and Metadata

**User Story:** As the business owner, I want the website to be discoverable on search engines, so that potential customers can find the garage online.

#### Acceptance Criteria

1. THE Website SHALL include appropriate meta title and meta description tags on every page
2. THE Website SHALL include Open Graph meta tags for proper social media link previews
3. THE Website SHALL use semantic HTML elements (header, nav, main, section, footer) for content structure
4. THE Website SHALL include a favicon using the Heng Kimjuy Energy logo

### Requirement 12: Performance and Accessibility

**User Story:** As a Visitor, I want the website to load fast and be accessible, so that I have a smooth browsing experience regardless of my abilities.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse performance score of 80 or above
2. THE Website SHALL provide alt text for all images in the Gallery and throughout the site
3. THE Website SHALL support keyboard navigation for all interactive elements
4. THE Website SHALL use sufficient color contrast ratios (minimum 4.5:1 for normal text) as defined by WCAG 2.1 Level AA
5. IF an image fails to load, THEN THE Website SHALL display a descriptive fallback alt text placeholder

### Requirement 13: Language Support

**User Story:** As a Visitor, I want to view the website in Thai, English, or Chinese, so that I can read and understand the information in my preferred language.

#### Acceptance Criteria

1. THE Website SHALL support three languages: Thai (ไทย), English, and Chinese (中文)
2. THE Website SHALL display Thai as the default language when a Visitor loads the Website for the first time
3. THE Website SHALL display a Language_Switcher component that allows Visitors to toggle between Thai, English, and Chinese
4. WHEN a Visitor selects a language from the Language_Switcher, THE Website SHALL update all static content to display in the selected language without a page reload
5. WHEN a Visitor selects a language from the Language_Switcher, THE Website SHALL update the HTML `lang` attribute to the corresponding language code (`th` for Thai, `en` for English, `zh` for Chinese)
6. THE Website SHALL store all static content translations for Thai, English, and Chinese as Static_Data embedded directly in the source code
7. THE Website SHALL persist the Visitor's language preference in localStorage so that returning Visitors see the Website in their previously selected language
8. WHEN a returning Visitor loads the Website, THE Website SHALL read the stored language preference from localStorage and display content in that language
9. THE Website SHALL use fonts that correctly render Thai, English, and Chinese characters across major browsers
10. THE Language_Switcher SHALL be accessible from the Navigation_Bar on all viewport sizes
