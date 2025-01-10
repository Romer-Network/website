# Rømer Chain Website

Welcome to the Rømer Chain website repository. This project uses Quarto to create a professional documentation and marketing website for the Rømer Chain blockchain platform, focusing on market maker integration and technical specifications.

## Project Overview

The Rømer Chain website serves several key purposes:
- Technical documentation for the blockchain platform
- Marketing materials and pitch deck
- Blog for development updates and technical insights
- Market maker partnership information
- Network architecture and design specifications

## Prerequisites

To work with this website, you'll need:

- [Quarto](https://quarto.org/docs/get-started/) (latest version)
- A modern web browser
- Basic knowledge of Markdown and HTML
- Node.js and npm (for development tools)
- Git for version control

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Romer-Network/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   quarto preview
   ```

The site will be available at `http://localhost:4200` by default.

## Project Structure

```
website/
├── _quarto.yml        # Main configuration file
├── index.qmd          # Homepage
├── styles.scss        # Global styles
├── blog/             # Blog posts and configuration
│   ├── index.qmd     # Blog landing page
│   ├── posts/        # Individual blog posts
│   └── drafts/       # Draft posts (not published)
├── technical/        # Technical documentation
│   ├── index.qmd     # Overview
│   ├── pop.qmd       # Proof of Physics documentation
│   ├── network.qmd   # Network design
│   └── fix.qmd       # FIX protocol integration
├── market-makers/    # Market maker documentation
│   ├── index.qmd     # Overview
│   └── partner-framework.qmd
├── economics/        # Economic documentation
│   ├── index.qmd     # Overview
│   ├── model.qmd     # Economic model
│   └── distribution.qmd
└── pitch/           # Pitch deck and materials
    └── index.qmd    # Main pitch deck

```

## Development Guidelines

### Content Creation

1. **Blog Posts**
   - Create new posts in `blog/posts/`
   - Use the YAML front matter for metadata
   - Store draft posts in `blog/drafts/`

2. **Technical Documentation**
   - Maintain clear separation of concerns
   - Include code examples where relevant
   - Keep documentation up-to-date with development

3. **Styling**
   - Use the provided SCSS variables in `styles.scss`
   - Follow the established component patterns
   - Maintain dark mode compatibility

### Feature Cards

When creating feature cards, use the established classes:

```html
<div class="feature-card">
  <h3>Feature Title</h3>
  <p>Feature description...</p>
  <a href="..." class="card-cta-button">Call to Action →</a>
</div>
```

### Dark Mode

The site supports dark mode through Quarto's theming system. Test all content in both light and dark modes before committing changes.

## Building and Deployment

### Local Build

Generate a static build:
```bash
quarto render
```

The built site will be available in the `../docs` directory.

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages on push to the main branch. The workflow:

1. Pushes to main trigger the build
2. GitHub Actions builds the site
3. Deploys to the `gh-pages` branch
4. Site is available at romer.network

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your changes:
- Follow the established style guide
- Include appropriate documentation
- Pass all build checks
- Maintain dark mode compatibility

## License

Copyright © 2025 Rømer Chain. All rights reserved.

## Contact

For questions or support:
- GitHub Issues for technical problems
- Visit [romer.network](http://romer.network) for general information
- Follow [@romerchain](https://x.com/romerchain) on X (Twitter)

## Administration

### Google Analytics

To update the Google Analytics tracking ID:
1. Edit `_quarto.yml`
2. Update the `google-analytics` field
3. Rebuild the site

### Comments

The site uses Giscus for comments. To configure:
1. Update the Giscus settings in `_quarto.yml`
2. Provide your repository details
3. Configure the mapping and category IDs