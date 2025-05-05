# Cursor AI Assistant Instructions

## Primary Directive
Use `PROJECT_BLUEPRINT.md` as the definitive guide for this project. Always refer to it for structure, components, styling, and features. If you are unsure about any requirement, check the blueprint first.

## Implementation Priority Order
1. Set up the project and install dependencies
2. Configure Tailwind, fonts, and global styles
3. Create the root layout and home page
4. Build the Header, MainNav, and Footer components
5. Implement the main sections: HeroBanner, CategoryHighlights, Recommendations, etc.
6. Add UI components (buttons, cards, forms) as needed by the sections
7. Add animations and advanced features after the basic structure is working

## Project Overview
This document provides instructions for the Cursor AI assistant to follow when building and maintaining the e-commerce landing page project. The primary reference is `PROJECT_BLUEPRINT.md`.

## Core Principles
1. Always refer to `PROJECT_BLUEPRINT.md` as the source of truth
2. Follow the specified tech stack and project structure
3. Implement features in the recommended order
4. Handle errors autonomously when possible
5. Maintain consistent code quality and best practices
6. Always prioritize matching the blueprint's structure and features
7. Move to the next section as described in the blueprint when current section is complete
8. Check "Key Files to Create First" and "Components Structure" sections when unsure what to do next

## Implementation Order

### Phase 1: Project Setup
1. Create project structure:
   ```
   src/
   ├── app/
   ├── components/
   │   ├── layout/
   │   └── sections/
   ├── styles/
   ├── types/
   ├── utils/
   ├── context/
   └── hooks/
   ```

2. Install dependencies:
   - Next.js 14.1.0
   - React 18.3.1
   - TypeScript
   - Tailwind CSS 3.4.17
   - Framer Motion
   - Swiper
   - Headless UI
   - Heroicons
   - AOS
   - GSAP
   - Formik & Yup
   - Lottie React

3. Configure:
   - Tailwind CSS
   - Custom fonts
   - TypeScript
   - Next.js

### Phase 2: Core Components
1. Create root layout (`src/app/layout.tsx`)
2. Create home page (`src/app/page.tsx`)
3. Build layout components:
   - Header
   - MainNav
   - Footer

### Phase 3: Main Sections
1. HeroBanner (Swiper carousel)
2. CategoryHighlights (grid layout)
3. Recommendations (product cards)
4. PopularProducts (tabs with different views)
5. Testimonials (customer reviews)

### Phase 4: UI Components
1. Buttons (primary, secondary, ghost)
2. Cards (product, category)
3. Forms (search, contact)
4. Modals (cart, login)
5. Loading states

### Phase 5: Advanced Features
1. Animations and transitions
2. Responsive design
3. Performance optimization
4. Accessibility features
5. SEO implementation

## Error Handling Protocol

### When encountering errors:
1. Check `PROJECT_BLUEPRINT.md` for correct structure/naming
2. Verify file paths and imports
3. Use placeholder content if real assets are missing
4. Create missing files/components if referenced in blueprint
5. Adjust configurations as needed
6. Only ask for user input if unable to resolve after trying all above steps

### Common error resolutions:
- Missing images: Use placeholder images from `/public/images/placeholders/`
- Import issues: Use relative paths instead of aliases
- Type errors: Check and update TypeScript definitions
- Component errors: Verify component structure matches blueprint
- Styling issues: Check Tailwind configuration and class names

### Autonomous Error Resolution Steps:
1. Check the blueprint for the correct structure or naming
2. Use placeholder images or data if real assets are missing
3. Adjust imports to use relative paths if aliases fail
4. Create missing files or components if referenced in the blueprint
5. Only ask for user input if unable to resolve after trying these steps

## Best Practices to Maintain

1. **Code Quality**
   - Follow TypeScript best practices
   - Use proper component structure
   - Implement proper error handling
   - Write clean, documented code

2. **Performance**
   - Optimize images
   - Implement lazy loading
   - Use proper code splitting
   - Minimize bundle size

3. **Accessibility**
   - Add ARIA labels
   - Ensure keyboard navigation
   - Maintain proper color contrast
   - Support screen readers

4. **Responsive Design**
   - Test all breakpoints
   - Ensure mobile-first approach
   - Verify touch interactions
   - Check cross-browser compatibility

## Communication Protocol

### When to ask for user input:
1. When encountering critical errors that cannot be resolved
2. When making significant architectural decisions
3. When needing clarification on specific requirements
4. When user preferences are needed for design choices

### How to report progress:
1. Summarize completed tasks
2. List current work in progress
3. Note any pending items
4. Highlight any issues that need attention

## Testing Requirements

1. **Component Testing**
   - Verify all components render correctly
   - Test all interactive elements
   - Check responsive behavior
   - Validate accessibility

2. **Integration Testing**
   - Test component interactions
   - Verify data flow
   - Check state management
   - Validate routing

3. **Performance Testing**
   - Check load times
   - Verify animation performance
   - Test memory usage
   - Validate resource loading

## Maintenance Guidelines

1. **Code Organization**
   - Keep files in appropriate directories
   - Maintain consistent naming conventions
   - Update documentation as needed
   - Clean up unused code

2. **Dependencies**
   - Keep packages updated
   - Monitor for security issues
   - Remove unused dependencies
   - Document version requirements

3. **Assets**
   - Organize images and media
   - Optimize file sizes
   - Maintain proper naming
   - Update placeholders with real assets

## Notes for Future Development

1. **Scalability**
   - Design for future feature additions
   - Maintain modular structure
   - Document extension points
   - Plan for performance at scale

2. **Updates**
   - Monitor framework updates
   - Plan for breaking changes
   - Maintain backward compatibility
   - Document upgrade paths

3. **Documentation**
   - Keep README updated
   - Document new features
   - Maintain changelog
   - Update API documentation 