---
title: "Reanalysis of the Mars500 experiment reveals common gut microbiome alterations in astronauts induced by long-duration confinement"
summary: "A reanalysis of the 520-day Mars500 isolation experiment identified significant, common changes in the crew's gut microbiome. The study found a depletion of key anti-inflammatory bacteria, which correlates with observed physiological symptoms of intestinal inflammation and metabolic disruption, highlighting a critical health risk for long-duration space missions."
publishDate: 2021-04-23T00:00:00Z
authors: ["Brereton NJB", "Pitre FE", "Gonzalez E"]
tags: ["Microbiology", "Human Physiology", "Simulated Microgravity", "Metabolomics"]
organisms: ["Humans"]
experimentType: "Simulated Microgravity"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759683128/gvxt9ctpul06eae73zh4.jpg"
readTime: 3
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["The biological function of enriched, yet-to-be-cultured bacteria", "Establishing a causal link between microbiome changes and physiological symptoms", "Effectiveness of countermeasures like probiotics or prebiotics", "Long-term health consequences of these microbiome shifts post-mission"]
doi: "10.1016/j.csbj.2021.03.040"
journal: "Computational and Structural Biotechnology Journal"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8099722/"

chartData:
  type: "none"
  data:
    labels:
      - "Faecalibacterium prausnitzii"
      - "Ruminococcus bromii"
      - "Blautia luti"
      - "Anaerostipes hadrus"
      - "Roseburia faecis"
      - "Lactobacillus rogosae"
      - "Streptococcus thermophilus"
      - "Kineothrix_1"
      - "Lachnospiraceae_10"
      - "Ruminococcus_3"
      - "Unknown_309"
    datasets:
      - label: "Relative Abundance Change (Log2-Fold)"
        data: [-2.0, -1.8, -1.5, -1.2, -1.0, -0.8, 1.5, 1.2, 1.0, 0.9, 2.5] # Estimated from "significantly different" and "enriched/depleted" descriptions
        backgroundColor:
          - "rgba(255, 99, 132, 0.7)" # Depleted
          - "rgba(255, 99, 132, 0.7)"
          - "rgba(255, 99, 132, 0.7)"
          - "rgba(255, 99, 132, 0.7)"
          - "rgba(255, 99, 132, 0.7)"
          - "rgba(255, 99, 132, 0.7)"
          - "rgba(54, 162, 235, 0.7)" # Enriched
          - "rgba(54, 162, 235, 0.7)"
          - "rgba(54, 162, 235, 0.7)"
          - "rgba(54, 162, 235, 0.7)"
          - "rgba(54, 162, 235, 0.7)"
        borderColor:
          - "rgba(255, 99, 132, 1)"
          - "rgba(255, 99, 132, 1)"
          - "rgba(255, 99, 132, 1)"
          - "rgba(255, 99, 132, 1)"
          - "rgba(255, 99, 132, 1)"
          - "rgba(255, 99, 132, 1)"
          - "rgba(54, 162, 235, 1)"
          - "rgba(54, 162, 235, 1)"
          - "rgba(54, 162, 235, 1)"
          - "rgba(54, 162, 235, 1)"
          - "rgba(54, 162, 235, 1)"
        borderWidth: 2
  options:
    responsive: true
    maintainAspectRatio: false
    plugins:
      legend:
        display: false # Only one dataset, so legend is not highly informative
      tooltip:
        backgroundColor: "rgba(5, 8, 20, 0.95)"
        titleColor: "#f5f3ff"
        bodyColor: "#c7d2fe"
        borderColor: "rgba(167, 139, 250, 0.5)"
        borderWidth: 1
        padding: 14
        cornerRadius: 8
        bodyFont:
          size: 14
        titleFont:
          size: 15
          weight: "bold"
        callbacks:
    scales:
      x:
        grid:
          color: "rgba(148, 163, 184, 0.2)"
        ticks:
          color: "#cbd5e1"
          font:
            size: 12
        title:
          display: true
          text: "Gut Microbiome Species"
          color: "#cbd5e1"
          font:
            size: 14
      y:
        grid:
          color: "rgba(148, 163, 184, 0.2)"
        ticks:
          color: "#cbd5e1"
          font:
            size: 12
        beginAtZero: false # Data extends to negative values
        title:
          display: true
          text: "Relative Abundance Fold Change (Log2)"
          color: "#cbd5e1"
          font:
            size: 14
---

# Introduction
The 520-day Mars500 experiment was the longest ground-based spaceflight simulation ever conducted, designed to study the complex physiological and psychological effects of long-duration confinement on a human crew. While previous analyses of the crew's gut microbiome found no significant common changes, physiological data showed uniform increases in intestinal inflammation markers, impaired glucose metabolism, and loss of lean body mass. This study reanalyzed the original microbiome data to determine if common, significant alterations occurred over the course of the mission that could explain these adverse health outcomes.

## Research Objective
The primary goals of this reanalysis were to:
- Use advanced bioinformatics to re-examine 16S rRNA gene data from fecal samples taken during the early (days 7-45) and late (days 420-520) phases of the Mars500 mission.
- Identify specific bacteria that were commonly enriched or depleted across all six crew members due to long-term confinement.
- Correlate the observed microbiome changes with previously reported physiological data, such as increased intestinal inflammation and prediabetic symptoms.

## Key Findings
- A total of **32 bacterial species** (exact sequence variants, or ESVs) were found to be significantly altered in abundance between the early and late stages of confinement across all six astronauts.
- There was a significant **depletion of 15 species**, many of which are known to be crucial for gut health. This included key anti-inflammatory and resistant starch-degrading bacteria such as ***Faecalibacterium prausnitzii***, ***Ruminococcus bromii***, and ***Blautia luti***.
- The depletion of these beneficial microbes, particularly ***F. prausnitzii***, is consistent with the significant increases in **fecal calprotectin** (an intestinal inflammation marker) and fasting plasma glucose observed in the crew.
- Conversely, **16 species were significantly enriched** over time. The majority of these were poorly characterized or **yet-to-be-cultured bacteria**, highlighting major gaps in our understanding of the human microbiome's response to confinement.
- An extensive microbial exchange between the crew and their habitat was quantified, with **49%** of the species found in the astronauts' gut also detected on surfaces within the sealed environment.

## Methodology
- **Subjects**: The study analyzed data from six male crew members participating in the 520-day Mars500 isolation experiment.
- **Experimental Conditions**: Fecal samples collected during an early confinement period (days 7-45) were compared to samples from a late period (days 420-520) to assess long-term changes.
- **Key Techniques**: The study employed a reanalysis of 16S rRNA gene amplicon sequencing data using an advanced bioinformatics pipeline (ANCHOR). This allowed for the identification of exact sequence variants (ESVs) with high resolution. Differential abundance analysis (DESeq2) was used to statistically identify common changes across all subjects.

## Importance for Space Missions
This research provides a critical missing link between the stress of long-duration confinement and documented astronaut health issues. The discovery that specific, beneficial gut bacteria are consistently depleted offers a potential explanation for the chronic, low-grade inflammation and metabolic disturbances seen in astronauts. These findings underscore the urgent need to monitor and maintain gut microbiome health on future missions to the Moon and Mars. Developing countermeasures, such as targeted **probiotics, prebiotics, or specialized diets**, will be essential for preventing these deleterious shifts and safeguarding crew health and mission success.

## Knowledge Gaps & Future Research
While this study provides foundational insights, several key questions remain:
- What are the metabolic functions of the numerous **"unknown" bacteria** that increased during confinement, and do they contribute to negative health outcomes?
- Is the observed correlation between the loss of beneficial bacteria and inflammation a **causal relationship**?
- Can targeted interventions, like providing specific prebiotic fibers or probiotic strains, effectively prevent the depletion of key species like ***F. prausnitzii***?
- What are the long-term health implications of these microbiome changes after the crew returns to a normal environment?

## Results
This reanalysis successfully identified a common "microbial signature" of long-duration confinement, overturning previous conclusions that changes were purely individual. By linking the depletion of critical anti-inflammatory bacteria to the physiological symptoms experienced by the Mars500 crew, this work establishes the gut microbiome as a key factor in astronaut health during extended missions. These findings are a valuable step toward developing evidence-based strategies to protect future space explorers from the hidden dangers of life in a sealed environment.