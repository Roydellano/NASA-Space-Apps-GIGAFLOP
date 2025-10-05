---
title: "Multi-omics analysis of multiple missions to space reveal a theme of lipid dysregulation in mouse liver"
summary: "Multi-mission analysis of mice flown on the ISS reveals that spaceflight alone, independent of re-entry stress, causes significant lipid accumulation in the liver. This dysregulation, confirmed through transcriptomics and proteomics, points to early signs of non-alcoholic fatty liver disease (NAFLD), highlighting a potential health risk for astronauts on long-duration missions."
publishDate: 2019-12-16T00:00:00Z
authors: ["Beheshti A", "Chakravarty K", "Fogle H", "Fazelinia H", "da Silveira WA", "Boyko V", "Lai Polo SH", "Saravia-Butler AM", "Hardiman G", "Taylor D", "Galazka JM", "Costes SV"]
tags: ["Metabolomics", "Proteomics", "Microgravity", "Animals", "Genetics"]
organisms: ["Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759682047/qjy5b6vizotust5tou2k.jpg"
readTime: 4
priority: "high"
consensusLevel: "high"
knowledgeGaps: ["Translating mouse liver findings to human astronaut health", "Mechanisms driving progression to advanced liver disease (NASH) in space", "Role of genetic background and strain susceptibility in liver response", "Synergistic effects of microgravity and circadian rhythm disruption on liver health"]
doi: "10.1038/s41598-019-55869-2"
journal: "Scientific Reports"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6915713/"

chartData:
  type: "bar"
  data:
    labels:
      - "Control"
      - "RR-1 CASIS (21 Days)"
      - "RR-1 NASA (37 Days)"
      - "RR-3 (42 Days)"
    datasets:
      - label: "Oil Red O Staining (%)"
        data: [10, 45, 60, 25] # Estimated values based on Fig 1B and 1C
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
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
        max: 80
        title:
          display: true
          text: "ORO Staining (% Tissue Area)"
          color: "#cbd5e1"
---

# Introduction

While the effects of spaceflight on muscle and bone are well-documented, its impact on metabolic organs like the liver is less understood. Previous studies on Space Shuttle missions suggested that spaceflight causes liver damage, but these findings were complicated by the fact that animals endured the stress of re-entry before samples could be collected. This study sought to determine if spaceflight stressors alone—specifically microgravity and radiation—are sufficient to cause liver damage by analyzing liver tissue from mice that were flown and dissected on the International Space Station (ISS), thereby eliminating re-entry stress as a confounding factor.

## Research Objective

The primary goals of this multi-mission, multi-omics investigation were to:
*   Determine if spaceflight induces lipid accumulation and signs of liver damage in mice, independent of re-entry stress.
*   Analyze molecular changes using transcriptomics and proteomics to identify the biological pathways affected in the liver during spaceflight.
*   Compare these effects across different mouse strains (C57BL/6 and BALB/c) and mission durations (from 13 to 42 days) to find common biological responses.

## Key Findings

*   Histological analysis using **Oil Red O (ORO) staining** revealed a significant increase in abnormal lipid accumulation in the livers of all space-flown mice compared to ground controls, regardless of strain or mission duration.
*   Statistical analysis confirmed that the spaceflight environment was the most significant factor driving this lipid increase (**p-value = 0.0008**).
*   Transcriptomic analysis consistently showed the upregulation of gene pathways related to **lipid metabolism, fatty acid processing, and lipid localization**, indicating a systemic shift towards fat storage in the liver.
*   Pathway analysis predicted that the key upstream regulators **Glucagon (GCG)** and **Insulin (INS)** were dysregulated. This hormonal imbalance is a hallmark of metabolic syndrome and can drive fat accumulation in the liver.
*   Proteomic data supported the transcriptomic findings, showing changes in lipid-related proteins and implicating the **PPAR signaling pathway**, a critical regulator of fat metabolism that is strongly linked to non-alcoholic fatty liver disease (NAFLD).
*   The study confirmed that these molecular signatures of liver stress, previously seen in shuttle missions, are a direct result of the space environment itself.

## Methodology

*   **Organisms Studied:** Archived liver tissues from two different strains of female mice (C57BL/6 and BALB/c) were analyzed.
*   **Experimental Conditions:** The study integrated data from multiple spaceflight missions, including STS-135 (13 days), Rodent Research-1 (21 and 37 days), and Rodent Research-3 (42 days). A key strength of the study was the use of tissues from the ISS missions (RR-1 and RR-3), where mice were euthanized on-orbit, providing a clear picture of the effects of spaceflight without the confounding stress of re-entry and landing.
*   **Key Techniques:** A comprehensive **multi-omics approach** was employed, combining histology (ORO staining for lipids), transcriptomics (RNA-sequencing to measure gene expression), and quantitative proteomics (to measure protein levels).

## Importance for Space Missions

This research provides strong evidence that spaceflight is a direct risk factor for developing symptoms consistent with **non-alcoholic fatty liver disease (NAFLD)**. The observed activation of lipotoxic pathways suggests that astronauts on long-duration missions, such as a journey to Mars, could be at risk for progressive liver damage, potentially leading to more severe conditions like inflammation (NASH) or fibrosis. These findings highlight the urgent need to:
*   Incorporate liver health monitoring into astronaut medical protocols.
*   Develop countermeasures to protect metabolic health, possibly by targeting insulin signaling or lipid metabolism pathways.
*   Further investigate how diet and exercise in space can mitigate these risks.

## Knowledge Gaps & Future Research

While this study robustly identifies a key health risk, several questions remain:
*   Do these same NAFLD-like changes occur in human astronauts, and at what rate?
*   What are the precise molecular mechanisms that trigger the dysregulation of insulin, glucagon, and PPAR signaling in the liver during spaceflight?
*   How does the duration of spaceflight affect the progression of liver damage? Will short-term, reversible changes become permanent on longer missions?
*   What is the role of other spaceflight factors, such as circadian rhythm disruption, in exacerbating this liver stress?

## Results

By integrating data from multiple spaceflight missions and employing a powerful multi-omics strategy, this study definitively demonstrates that the space environment alone is sufficient to cause significant lipid accumulation and metabolic dysregulation in the mouse liver. The findings strongly suggest an increased risk for NAFLD, establishing liver health as a critical concern for long-duration human space exploration. This research provides a vital foundation for developing future health monitoring strategies and countermeasures to ensure the safety of astronauts on their journey to Mars and beyond.