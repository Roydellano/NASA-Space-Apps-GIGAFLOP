---
title: "Prolonged Exposure to Microgravity Reduces Cardiac Contractility and Initiates Remodeling in Drosophila"
summary: "Fruit flies born and raised on the ISS showed significant cardiac dysfunction, including reduced contractility and output. This study reveals that microgravity triggers extensive cardiac remodeling, downregulates structural genes, and dramatically upregulates genes for protein degradation, indicating a state of 'proteostatic stress' that may be a fundamental response of heart muscle to spaceflight."
publishDate: 2020-11-25T00:00:00Z
authors: ["Walls S", "Diop S", "Birse R", "Elmen L", "Gan Z", "Kalvakuri S", "Pineda S", "Reddy C", "Taylor E", "Trinh B", "Vogler G", "Zarndt R", "McCulloch A", "Lee P", "Bhattacharya S", "Bodmer R", "Ocorr K"]
tags: ["Cardiovascular", "Microgravity", "Genetics", "Proteomics", "Animals"]
organisms: ["Drosophila"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680659/oounkosfp2cn0guv2kap.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["Translation of Drosophila cardiac remodeling mechanisms to human astronauts", "Long-term reversibility of proteostatic stress upon return to Earth", "Efficacy of countermeasures to prevent microgravity-induced protein aggregation", "The primary molecular trigger for cardiac proteasome upregulation in space"]
doi: "10.1016/j.celrep.2020.108445"
journal: "Cell Reports"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7787258/"

```yaml
chartData:
  type: "bar"
  data:
    labels:
      - "End-Diastolic Diameter (mm)"
      - "Fractional Shortening (%)"
      - "Cardiac Output (mm^3/s)"
    datasets:
      - label: "WT Ground Control"
        data: [0.115, 27, 270] # Estimated from Female GC Canton-S (Fig 1B, 1D, 1E)
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "WT Microgravity"
        data: [0.095, 15, 120] # Estimated from Female SF Canton-S (Fig 1B, 1D, 1E)
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 2
      - label: "sei/hERG Mutant Ground Control"
        data: [0.08, 10, 80] # Estimated from Female sei/hERG GC (Fig 1B, 1D, 1E)
        backgroundColor: "rgba(75, 192, 192, 0.7)"
        borderColor: "rgba(75, 192, 192, 1)"
        borderWidth: 2
      - label: "sei/hERG Mutant Microgravity"
        data: [0.088, 8, 95] # Estimated from Female sei/hERG SF (Fig 1B, 1D, 1E), note small increase in EDD/CO found in text
        backgroundColor: "rgba(153, 102, 255, 0.7)"
        borderColor: "rgba(153, 102, 255, 1)"
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
```
---

# Introduction
Maintaining cardiovascular health is critical for long-duration space missions, yet the molecular mechanisms driving cardiac adaptation to microgravity remain poorly understood. Using the fruit fly, *Drosophila melanogaster*, as a powerful genetic model, this study investigates how lifelong exposure to the spaceflight environment aboard the International Space Station (ISS) affects heart structure, function, and gene expression. The research sought to uncover the fundamental cellular processes that are altered in cardiac muscle when it develops and functions without the constant load of gravity.

## Research Objective
The primary goals of this investigation were to:
-   Characterize the functional and structural changes in the *Drosophila* heart after prolonged development and aging in microgravity.
-   Identify the comprehensive transcriptomic changes (alterations in gene expression) in the heart that are induced by spaceflight.
-   Test the hypothesis that microgravity leads to proteostatic stress—an imbalance in protein synthesis, folding, and degradation—which could underlie cardiac dysfunction.

## Key Findings
-   **Reduced Cardiac Function**: Space-flown (SF) flies exhibited significantly **reduced cardiac contractility** and **diminished cardiac output** compared to ground control flies.
-   **Adverse Structural Remodeling**: The hearts of SF flies were smaller and showed significant structural disorganization. Myofibrils, the contractile fibers of muscle cells, were **loosely arranged and oriented longitudinally**, a stark contrast to the tightly packed, circumferential structure required for efficient pumping.
-   **Massive Upregulation of Protein Degradation Machinery**: RNA sequencing of heart tissue revealed a profound shift in gene expression. Most notably, there was a **~20-fold enrichment in the upregulation of genes related to the proteasome**, the cellular machinery responsible for breaking down proteins.
-   **Downregulation of Structural Genes**: Consistent with the observed structural decay, genes encoding crucial components of the sarcomere (the basic contractile unit of muscle) and the extracellular matrix (ECM) were **significantly downregulated**.
-   **Evidence of Protein Misfolding**: A follow-up experiment confirmed that microgravity induces proteostatic stress. Hearts of SF flies showed a **significant increase in aggregated proteins** (polyQ-GFP plaques) and a corresponding increase in proteasome particles, suggesting the cell is struggling to clear misfolded or damaged proteins.
-   **Weakened Extracellular Matrix**: The **collagen IV network** that provides structural support to the heart was significantly reduced in SF flies, further contributing to cardiac remodeling and weakness.

## Methodology
-   **Organisms**: The study used wild-type (*Canton-S*) fruit flies (*Drosophila melanogaster*) and a mutant strain (*sei/hERG*) with a predisposition to cardiac arrhythmias.
-   **Experimental Conditions**: Flies were launched to the ISS, where they produced offspring that were **born, developed, and aged for 1-3 weeks entirely in microgravity**. Identical setups were maintained on Earth as ground controls.
-   **Key Techniques**: Cardiac function was measured using **high-speed video microscopy**. Changes in gene expression were analyzed via **RNA sequencing (RNA-seq)** on isolated hearts. Structural changes in myofibrils and the ECM were visualized using **immunohistochemistry and confocal microscopy**.

## Importance for Space Missions
This study provides the first evidence that **proteostatic stress** is a key molecular driver of cardiac deconditioning in space. The findings suggest that the heart muscle, much like skeletal muscle, undergoes significant atrophy and remodeling in microgravity, driven by a fundamental imbalance between protein synthesis and degradation. This process could compromise cardiovascular function during and after long-duration missions to the Moon and Mars. By using the *Drosophila* model, researchers can rapidly screen for genetic factors and potential countermeasures (e.g., pharmaceuticals or nutritional supplements) to mitigate these adverse cardiac effects and protect astronaut health.

## Knowledge Gaps & Future Research
While this study provides critical insights, several questions remain:
-   To what extent do the mechanisms of cardiac remodeling and proteostatic stress in flies translate to the mammalian heart?
-   Are the observed changes in cardiac structure and function fully reversible upon return to a 1g environment?
-   Can targeted interventions that improve protein folding or modulate proteasome activity prevent microgravity-induced cardiac dysfunction?
-   What is the primary upstream signal in microgravity that initiates this dramatic upregulation of the proteasome system in heart cells?

## Results
This research demonstrates that prolonged exposure to microgravity induces a maladaptive response in the *Drosophila* heart, characterized by functional decline, structural disorganization, and a profound genetic shift towards protein degradation. The identification of proteostatic stress as a central feature of this response provides a crucial new target for developing countermeasures to safeguard astronaut cardiovascular health during the next era of deep-space exploration.