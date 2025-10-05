---
title: "Muscle Atrophy During Spaceflight is Linked to Liver-Muscle Metabolic Crosstalk in Mice"
summary: "Transcriptomic analysis of mice after 37 days in space reveals a strong correlation between impaired lipid metabolism in the liver and gene expression patterns of muscle atrophy. This suggests a systemic, starvation-like metabolic shift, highlighting the liver's role in driving muscle loss and pointing to dietary interventions as a potential countermeasure."
publishDate: 2022-10-21T00:00:00Z
authors: ["Vitry G", "Finch R", "Mcstay G", "Behesti A", "Déjean S", "Larose T", "Wotring V", "da Silveira WA"]
tags: ["Musculoskeletal", "Metabolomics", "Genetics", "Microgravity", "Animals"]
organisms: ["Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680260/eyk3zktbfhucwkbop3nj.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Mechanism of hepatokine signaling (e.g., Fetuin-A) in space-induced muscle atrophy", "Effectiveness of dietary countermeasures, like butyrate supplementation, in preventing liver-muscle metabolic dysregulation", "Translation of mouse model findings to human astronauts", "Interaction of metabolic changes with other spaceflight stressors like radiation"]
doi: "10.1016/j.isci.2022.105213"
journal: "iScience"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9576569/"

```yaml
chartData:
  type: "radar"
  data:
    labels:
      - "Lipid Metabolism (Liver)"
      - "Glucose Transport (Muscle)"
      - "DNA Repair (Muscle)"
      - "Autophagy (Muscle)"
      - "Translation (Muscle)"
      - "Muscle Atrophy Phenotype"
    datasets:
      - label: "Correlation Strength"
        data: [95, 90, 85, 87, 88, 92] # Estimated correlation strengths based on article text and heatmaps (Figures 3, 4, 5)
        fill: true
        backgroundColor: "rgba(54, 162, 235, 0.25)"
        borderColor: "rgba(54, 162, 235, 1)"
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
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
      r:
        beginAtZero: true
        max: 100
        ticks:
          stepSize: 20
          color: "#94a3b8"
          backdropColor: "transparent"
          font:
            size: 12
        grid:
          color: "rgba(148, 163, 184, 0.2)"
          lineWidth: 1
        angleLines:
          color: "rgba(148, 163, 184, 0.2)"
          lineWidth: 1
        pointLabels:
          color: "#cbd5e1"
          font:
            size: 13
            weight: "600"
            family: "'Inter', system-ui, sans-serif"
```
---

# Introduction
Muscle atrophy is a well-documented and significant health risk for astronauts, impairing mobility and mission capabilities. While mechanical unloading in microgravity is a primary cause, the underlying molecular mechanisms are not fully understood. This study investigates the systemic nature of this condition by exploring the metabolic relationship, or "crosstalk," between the liver and skeletal muscle. Using data from mice flown on the International Space Station, researchers sought to determine if changes in the liver's metabolic state could be linked to the gene expression patterns that characterize muscle atrophy.

## Research Objective
The study aimed to understand the interconnected metabolic response of the liver and muscle to spaceflight by:
- Comparing the transcriptomic (gene expression) profiles of the liver and quadriceps muscle from mice after 37 days in space.
- Identifying the common and distinct metabolic pathways affected in both organs by the space environment.
- Investigating whether gene expression changes in the liver are statistically correlated with the genetic signature of muscle atrophy.

## Key Findings
- **Lipid Metabolism is a Central Hub**: The most significantly altered biological process shared between the liver and quadriceps muscle was **lipid metabolism**. This indicates a systemic shift in how the body processes fats during spaceflight.
- **Muscle Enters an "Energy-Saving" Mode**: In the muscle, genes related to **hypoglycemic signaling pathways** (e.g., Insulin, AMPK, FoxO) and **glucose transport** were significantly downregulated. This suggests a state of reduced glucose uptake, similar to insulin resistance.
- **Reduced Energy Demand**: The decreased glucose uptake in muscle correlated with the downregulation of high-energy-demand processes like **DNA repair, autophagy, and protein translation**, indicating a protective, energy-conserving state.
- **Liver-Muscle Atrophy Link**: A specific cluster of **lipid metabolism genes in the liver** showed a **strong positive correlation** with the gene expression patterns characteristic of **muscle atrophy**. This is the first evidence of a direct transcriptomic link between the metabolic state of the liver and muscle degradation in space.
- **Starvation-Like Phenotype**: The combined data suggests a systemic, **starvation-like metabolic shift**, where the liver's response to spaceflight stress influences muscle to spare glucose, ultimately contributing to protein loss and atrophy.
- **Gut Microbiome Implicated**: Altered metabolism of **short-chain fatty acids (butanoate and propanoate)** was observed in both organs, pointing to a potential role for the gut microbiome in this systemic response.

## Methodology
- **Organisms**: Female C57BL/6J mice from the NASA Rodent Research 1 (RR1) mission.
- **Experimental Conditions**: Transcriptome data was analyzed from six mice that flew aboard the International Space Station (ISS) for **37 days** and compared to six ground control mice.
- **Key Techniques**: The study utilized RNA-sequencing (RNA-seq) to profile gene expression in liver and quadriceps tissue. Advanced bioinformatics, including Gene Set Enrichment Analysis (GSEA) and **sparse Partial Least Square-Differential Analysis (sPLS-DA)**, were employed to identify robust correlations between the two organ datasets.

## Importance for Space Missions
This research reframes muscle atrophy from a purely local response to disuse to a condition influenced by **systemic metabolic dysregulation** driven by the liver. This implies that countermeasures focused solely on muscle exercise may be insufficient. The findings strongly suggest that **nutritional interventions**, such as dietary changes to modulate the gut microbiome and short-chain fatty acid production (e.g., butyrate supplementation), could represent a simple yet powerful countermeasure to protect against muscle loss. Understanding this liver-muscle axis is critical for developing integrated health monitoring strategies for long-duration missions to the Moon and Mars.

## Knowledge Gaps & Future Research
While this study establishes a strong correlation, further research is needed to confirm causality and explore therapeutic options. Key areas for future study include:
- Identifying the precise signaling molecules (e.g., hepatokines like **Fetuin-A**) that facilitate communication between the liver and muscle in space.
- Investigating the role of the **gut microbiome** in producing short-chain fatty acids and influencing this metabolic shift during spaceflight.
- Testing the efficacy of proposed **dietary countermeasures**, such as butyrate or resistant starch supplementation, in ground-based analogs and future spaceflight experiments.
- Validating these findings in human astronauts to confirm if this liver-muscle axis is a key driver of muscle atrophy during space missions.

## Results
This research provides compelling evidence that muscle atrophy in spaceflight is tightly linked to systemic metabolic changes, particularly impaired lipid metabolism in the liver. By identifying a strong correlation between liver gene expression and muscle atrophy signatures, the study uncovers a critical liver-muscle communication axis. This insight shifts the paradigm from a purely mechanical view of muscle loss to a holistic, metabolic one, opening new avenues for developing effective dietary countermeasures to ensure crew health and success on long-duration space voyages.