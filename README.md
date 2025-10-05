# 🚀 BioNauta - NASA Bioscience Publications Explorer

> **NASA Space Apps Challenge 2024 Project**  
> An AI-powered web application for exploring and analyzing NASA's 608 bioscience publications

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

BioNauta is in active development for NASA Space Apps Challenge 2024. The AI-powered summaries are automatically generated and should be verified against original publications for critical mission planning decisions.

---

**Built for NASA Space Apps Challenge 2024** 🌍🚀🌙
