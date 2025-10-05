---
title: "A Meta-Analysis of Gene Expression in Mice and Humans Reveals Species-Specific Responses to Microgravity"
summary: "This comprehensive review and meta-analysis of NASA GeneLab microarray data reveals that while certain gene expression changes in musculoskeletal tissues are reproducible within mice or humans, there is limited overlap between the two species. The findings highlight the challenge of translating mouse model data to human astronaut health and underscore the critical need for more human spaceflight samples."
publishDate: 2024-04-26T00:00:00Z
authors: ["Adamopoulos KI", "Sanders LM", "Costes SV"]
tags: ["Genetics", "Musculoskeletal", "Microgravity", "Human Physiology", "Animals"]
organisms: ["Humans", "Mice"]
experimentType: ["Spaceflight", "Simulated Microgravity"]
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759652284/ynbfjs3t1kk30sxedt4j.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Poor translation of gene expression signatures from mice to humans", "Impact of experimental variables (sex, duration, analogs) on data reproducibility", "Lack of sufficient human spaceflight omics data", "Mechanisms behind species-specific responses to microgravity"]
doi: "10.1038/s41526-024-00392-6"
journal: "NPJ Microgravity"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11053165/"

chartData:
  type: "line"
  data:
    labels:
      - "OSD-195 (21 DB)"
      - "OSD-370 (9 DB)"
      - "OSD-51 (Female)"
    datasets:
      - label: "Correlation"
        data: [0.64, 0.47, 0.23] # Correlation values from Fig 7, re-ordered and estimated for clarity
        fill: false
        backgroundColor: "rgba(54, 162, 235, 0.25)"
        borderColor: "rgba(54, 162, 235, 1)"
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
        tension: 0.4
  options:
    responsive: true
    maintainAspectRatio: false
    plugins:
      legend:
        display: true
        position: "top"
        labels:
          color: "#e0e7ff"
          font:
            size: 14
            weight: "600"
            family: "'Inter', system-ui, sans-serif"
          padding: 20
          usePointStyle: true
          pointStyle: "circle"
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
    scales:
      x:
        grid:
          color: "rgba(148, 163, 184, 0.2)"
        ticks:
          color: "#cbd5e1"
          font:
            size: 12
      y:
        grid:
          color: "rgba(148, 163, 184, 0.2)"
        ticks:
          color: "#cbd5e1"
          font:
            size: 12
        beginAtZero: true
        max: 1.0 # Correlation coefficients are between -1 and 1
        title:
          display: true
          text: "Pearson Correlation Coefficient"
          color: "#cbd5e1"
---

# Introduction

Understanding the molecular effects of spaceflight is fundamental to safeguarding astronaut health on long-duration missions. NASA's GeneLab Open Science Data Repository provides an unprecedented collection of omics data from spaceflight and ground-based analog experiments. This study conducts a comprehensive review and a novel comparative meta-analysis of microarray datasets from both mice (*Mus musculus*) and humans (*Homo sapiens*) to determine how consistently their genes respond to altered gravity. The central research question is whether mice are a reliable model for predicting human physiological changes at the molecular level.

## Research Objective

The primary goals of this meta-analysis were to:
- Review and synthesize findings from microarray studies on mice and humans exposed to altered gravity, as archived in the NASA GeneLab repository.
- Perform a comparative meta-analysis focused on musculoskeletal tissues to identify reproducible gene expression changes within each species.
- Quantitatively assess the degree of overlap in gene expression responses between mice and humans to evaluate the translational relevance of mouse models for human spaceflight.

## Key Findings

- **High Variability in Gene Expression:** The analysis revealed significant variation in gene expression results, even between experiments conducted on the **same tissue type** (e.g., gastrocnemius muscle) within the same species.
- **Reproducibility Within Mouse Tissues:** Despite variability, a consistent set of genes was found to be differentially expressed across multiple mouse musculoskeletal experiments. Upregulated genes included **Fbxo32** and **Cdkn1a**, linked to protein ubiquitination and muscle atrophy, while downregulated genes included **Col1a1**, related to the extracellular matrix.
- **Limited Cross-Species Overlap:** The study's most critical finding was a **significantly limited overlap** in differentially expressed genes between mouse and human musculoskeletal tissues. This suggests that molecular responses to microgravity are largely species-specific.
- **Poor Correlation Between Analogs and Spaceflight:** A correlation analysis between a 30-day mouse spaceflight experiment and a 24-hour hindlimb suspension analog showed a **near-zero correlation coefficient (0.02)**, highlighting major molecular differences between true microgravity and ground-based simulations.
- **Experimental Factors Drive Results:** Correlation between different human bedrest studies was moderately positive (**r = 0.47 to 0.64**), particularly when comparing subjects of the same sex. This indicates that variables like sex, experiment duration, and study design strongly influence outcomes.

## Methodology

- **Organisms:** Data from *Mus musculus* (mice) and *Homo sapiens* (humans) were analyzed.
- **Experimental Conditions:** The study aggregated data from numerous experiments, including actual spaceflight missions (ISS, BION-M1, Space Shuttle) and various ground-based analogs (hindlimb unloading, bedrest).
- **Key Techniques:** A **comparative meta-analysis** was conducted on microarray gene expression datasets sourced from the **NASA GeneLab Open Science Data Repository**. The methodology involved differential gene expression analysis to identify significant changes and Pearson correlation coefficients to measure the similarity of responses between different experiments.

## Importance for Space Missions

This research has profound implications for crew health and countermeasures. The finding that mouse models show poor molecular correlation with human responses raises critical questions about the direct applicability of animal research for predicting astronaut health risks. It suggests that **countermeasures developed and validated solely in mice may not be effective for humans**. This work strongly advocates for prioritizing the collection and analysis of human biological samples from spaceflight missions to build more accurate, human-specific models for mitigating health risks during exploration-class missions to the Moon and Mars.

## Knowledge Gaps & Future Research

This meta-analysis highlights several critical gaps in our understanding of space biology:
- What are the underlying biological mechanisms that drive the species-specific genetic responses to microgravity?
- Which molecular pathways are conserved between mice and humans, and which are divergent?
- How can ground-based analog models be refined to better replicate the molecular signatures of actual spaceflight?
- There is a pressing need for larger, standardized human datasets to confirm these findings and identify reliable biomarkers for monitoring astronaut health in real-time.

## Results

By systematically mining the vast repository of data in NASA GeneLab, this study provides a crucial assessment of spaceflight transcriptomics. It demonstrates both the power of aggregating data to find reproducible signals and the significant limitations posed by the scarcity of human samples and the discrepancies between species. The results send a clear message: while animal models are invaluable, their findings cannot be assumed to translate directly to humans. This underscores the urgent need for a strategic focus on acquiring more human-centric data to ensure the development of effective health countermeasures for the next generation of space explorers.