# 🚀 BioNauta - NASA Bioscience Publications Explorer

> **NASA Space Apps Challenge 2025 Hackathon Project**  
> An AI-powered web application for exploring and analyzing NASA's 608 bioscience publications

**🌐 Live Site**: [https://bionautica.us/](https://bionautica.us/)

## 🎯 Project Objectives

BioNauta is a functional web application that leverages AI and content summarization to explore NASA's bioscience publications repository. Our tool enables users to:

- **Discover Research Impacts**: Browse AI-generated summaries of 608+ NASA bioscience experiments
- **Identify Knowledge Gaps**: Surface unanswered questions and research opportunities
- **Track Scientific Progress**: Visualize areas of consensus, disagreement, and emerging findings
- **Support Mission Planning**: Provide actionable insights for astronaut health and life support systems
- **Explore Interactively**: Search and filter publications by research area, organism, experiment type, and mission relevance

## 🧬 Key Features

- **Smart Summaries**: AI-powered publication summaries highlighting key findings, methodology, and implications
- **Research Categories**: Browse by Neurology, Cardiovascular, Respiratory, Digestive, Musculoskeletal, Genetics, Proteomics, Microbiology, Plants, Animals, and Technology
- **Knowledge Gap Analysis**: Each summary identifies critical unanswered questions
- **Mission Relevance**: Publications tagged by relevance to ISS, Artemis, Mars missions, and Gateway
- **Consensus Tracking**: Identify areas of scientific agreement and controversy
- **Responsive Design**: Modern, accessible interface optimized for researchers and mission planners

## 🚀 Project Structure

```text
/
├── public/               # Static assets
│   └── default/         # Category images
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ArticleCard.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/         # Publication summaries (Markdown)
│   │   └── news/        # 608 NASA bioscience publications
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Route pages
│   │   ├── index.astro
│   │   ├── all.astro
│   │   ├── category/
│   │   └── news/
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
└── article_generation/  # AI prompt templates
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔬 Research Categories

- **Neurology**: Brain function, neural responses, cognitive effects in space environments
- **Cardiovascular**: Heart function, blood circulation, cardiovascular health in microgravity
- **Respiratory**: Lung function, breathing patterns, respiratory system adaptations
- **Digestive**: Gastrointestinal health, metabolism, liver function in space
- **Musculoskeletal**: Bone density loss, muscle atrophy, skeletal changes
- **Genetics**: DNA changes, gene expression, genetic mutations from space radiation
- **Proteomics**: Protein expression, enzyme functions, proteomic changes
- **Microbiology**: Microbial behavior, pathogen responses in space environments
- **Plants**: Plant biology, crop production, sustainable food systems
- **Animals**: Animal model studies, rodent experiments in spaceflight conditions
- **Technology**: Space technology, research instruments, life support systems

## 🛠️ Built With

- **Astro**: Static site generation and routing
- **TypeScript**: Type-safe development
- **AI Summarization**: Automated publication analysis
- **Responsive Design**: Mobile-first, accessible UI

## 🤖 AI-Powered Content Generation Pipeline

BioNauta uses an automated n8n workflow to generate publication summaries from NASA's bioscience repository. The workflow is defined in `article_generation/n8n_Workflow.json`.

### Workflow Overview

The pipeline consists of the following stages:

1. **Data Ingestion**
   - Fetches NASA publication URLs from CSV database
   - Processes publications in batches with loop control
   - Retrieves HTML content from each publication URL

2. **AI Content Generation** (Using Google Gemini 2.5 Pro/Flash)
   - **Research Agent**: Analyzes publication and generates structured markdown summaries
     - Extracts key findings, methodology, and mission relevance
     - Identifies knowledge gaps and consensus levels
     - Creates YAML frontmatter with metadata (tags, organisms, experiment type, priority)
   - **Chart Generator**: Creates Chart.js visualizations from quantitative data
     - Generates radar, bar, line, or scatter charts as appropriate
     - Uses cosmic-themed color palette for consistency
   - **Image Prompt Generator**: Creates AI image generation prompts
     - Designs NASA-aesthetic, scientifically accurate imagery
     - Integrates text overlays and ISS/laboratory environments

3. **Asset Processing**
   - Generates featured images via Pollinations AI (Flux model)
   - Uploads images to Cloudinary CDN
   - Extracts and formats publication titles

4. **Publication & Deployment**
   - Commits generated markdown files to GitHub repository
   - Automatic deployment triggers via GitHub integration
   - Wait mechanism prevents rate limiting (60 second intervals)

### Key Configuration Files

- `article_generation/n8n_Workflow.json` - Complete workflow definition
- `article_generation/systempropmpt.txt` - Article generation prompt (122 lines)
- `article_generation/chartprompt.txt` - Chart data generation guidelines
- `article_generation/imagepropmpt.txt` - Image generation specifications

### AI Models Used

- **Google Gemini 2.5 Pro**: Primary research summarization (10K max tokens)
- **Google Gemini 2.5 Flash**: Title extraction, chart generation, image prompts
- **Flux (via Pollinations AI)**: Featured image generation (1280x720, NASA aesthetic)

### Workflow Features

- **Retry Logic**: Failed requests retry after 5 seconds
- **Rate Limiting**: 1-minute wait between publications
- **Scheduled Execution**: Daily trigger at 4:00 PM (cron: `0 16 * * *`)
- **Manual Trigger**: On-demand execution available
- **Error Handling**: Graceful failure recovery with retries

### Running the Workflow

The workflow can be imported into n8n:

1. Install [n8n](https://n8n.io/) (self-hosted or cloud)
2. Import `article_generation/n8n_Workflow.json`
3. Configure credentials:
   - OpenRouter API (for Gemini models)
   - GitHub OAuth2 (for repository access)
   - Cloudinary (for image hosting)
4. Execute manually or enable scheduled trigger

### Output Format

Each generated publication includes:
- Structured YAML frontmatter (title, authors, tags, DOI, consensus level, knowledge gaps)
- Markdown content (Research Objective, Key Findings, Methodology, Mission Importance)
- Chart.js data visualization (when applicable)
- AI-generated featured image URL
- Publication source URL

## 📊 Data Source

Publications sourced from NASA's official bioscience research repository:
- **608 Total Publications**
- Research spanning ISS experiments, ground controls, and mission simulations
- Topics include astronaut health, space biology, and life support systems

## 🌟 Future Enhancements

- Advanced filtering and search capabilities
- Interactive knowledge graph visualization
- Citation network analysis
- Real-time updates from NASA repository
- Collaborative annotation tools for researchers
- Export functionality for mission planners

## 📝 License

See LICENSE file for details.

## 🚧 Development Status

BioNauta is in active development for NASA Space Apps Challenge 2025 Hackathon. The AI-powered summaries are automatically generated and should be verified against original publications for critical mission planning decisions.

---

**Built for NASA Space Apps Challenge 2025 Hackathon** 🌍🚀🌙
