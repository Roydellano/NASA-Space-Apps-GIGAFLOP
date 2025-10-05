---
title: "Transcriptomic Analysis Reveals Metabolic Gene Changes in Mouse Bone During Simulated Microgravity"
summary: "Using a hindlimb unloading mouse model to simulate microgravity, researchers found significant changes in gene expression within cortical bone after just 7 days. The study highlights the upregulation of genes involved in cellular metabolism, such as Pfkfb3 and Mss51, identifying novel pathways that could be targeted to prevent bone loss during spaceflight."
publishDate: 2021-10-12T00:00:00Z
authors: ["Spatz JM", "Ko FC", "Ayturk UM", "Warman ML", "Bouxsein ML"]
tags: ["Musculoskeletal", "Microgravity", "Genetics", "Metabolomics", "Animals"]
organisms: ["Mice"]
experimentType: "Simulated Microgravity"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759682152/k1jgv1yhpswekhb2ubzd.jpg"
readTime: 3
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["The precise functional role of metabolic genes like Pfkfb3 and Mss51 in mechanotransduction and bone loss.", "The time-course of gene expression changes beyond the 7-day mark to understand long-term adaptation.", "Discrepancies with prior studies regarding key bone regulation pathways like Rankl/Opg and sclerostin.", "Whether these findings in female mice translate to male mice and ultimately to humans."]
doi: "10.1371/journal.pone.0250715"
journal: "PLoS One"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8509868/"

chartData:
  type: "bar"
  data:
    labels:
      - "Fzd4"
      - "Sfrp2"
      - "Sfrp4"
      - "Spp1"
      - "Bmp4"
      - "Npy"
      - "Mmp3"
      - "Mmp13"
      - "Timp1"
      - "Scd1"
      - "Pfkfb3"
    datasets:
      - label: "Fold Change (HLU vs. Control)"
        data: [1.6, 1.7, 1.7, 1.5, 1.4, 1.2, 1.8, 1.6, 1.5, 2.0, 1.8]
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
        max: 2.2
        title:
          display: true
          text: "Fold Change"
          color: "#cbd5e1"
---

# Introduction
Mechanical unloading, experienced during spaceflight or prolonged bed rest, leads to significant bone loss and increased fracture risk. While some signaling pathways involved in this process are known, a complete picture of the genetic response within bone cells is still emerging. This study employed an unbiased, comprehensive transcriptomic approach to identify novel genes and pathways in cortical bone that are altered by mechanical unloading, providing new insights into the fundamental mechanisms of disuse-induced osteoporosis.

## Research Objective
The primary goals of this research were to:
-   Perform whole-transcriptome profiling of cortical bone from mice subjected to simulated microgravity to identify all genes whose expression levels change.
-   Discover previously unidentified, mechanosensitive genes and signaling pathways that respond to mechanical unloading.
-   Validate the findings from RNA sequencing (RNAseq) using a highly sensitive RNA molecular barcoding technology (NanoString).

## Key Findings
-   After just **7 days** of hindlimb unloading (HLU), RNAseq analysis identified 13 genes with statistically significant changes in expression in the cortical bone of female mice.
-   A more sensitive NanoString analysis confirmed the RNAseq data and identified additional upregulated genes, including those involved in Wnt signaling (**`Fzd4`**, **`Sfrp2`**, **`Sfrp4`**) and extracellular matrix remodeling (**`Mmp3`**, **`Mmp13`**).
-   Crucially, the study revealed a significant upregulation of genes linked to cellular metabolism and energy balance. These included **`Pfkfb3`**, which increased **1.8-fold**, and **`Mss51`**.
-   The upregulation of `Pfkfb3`, a potent activator of glycolysis, suggests that shifts in cellular energy production are a key and early response of bone tissue to mechanical unloading.
-   In contrast to some previous studies, this experiment did **not** detect significant changes in the expression of well-known bone regulators `sclerostin` or `Rankl/Opg`, highlighting the complexity and potentially time-dependent nature of the bone's response to disuse.

## Methodology
-   **Organisms:** The study used 11-week-old female C57BL/6J mice, randomly assigned to a control group (n=8) or an experimental group (n=8).
-   **Experimental Conditions:** The experimental group was subjected to **7 days of hindlimb unloading (HLU)**, a well-established ground-based model that simulates the effects of microgravity on the musculoskeletal system.
-   **Key Techniques:** Researchers extracted total RNA from the marrow-flushed femoral cortical bone. They performed an initial unbiased screen using **RNA sequencing (RNAseq)** for whole-transcriptome profiling, followed by targeted validation and more sensitive quantification using the **NanoString nCounter platform**.

## Importance for Space Missions
This research provides critical insights for long-duration space exploration by identifying novel biological pathways that contribute to bone loss in microgravity. The discovery that metabolic genes like **`Pfkfb3`** are involved opens up new possibilities for countermeasures. Modulating cellular energy pathways could become a new strategy to protect astronaut bone health on missions to the Moon, Mars, and beyond. By pinpointing the earliest genetic responses to unloading, this work provides a foundation for developing interventions that can be applied before significant structural bone degradation occurs.

## Knowledge Gaps & Future Research
While this study provides a valuable transcriptomic dataset, it also highlights several areas for future investigation:
-   The specific functional roles of the newly identified metabolic genes, **`Pfkfb3`** and **`Mss51`**, in osteocytes must be confirmed through mechanistic studies to prove their direct impact on bone loss.
-   Further research is needed to map the time-course of gene expression changes at multiple points (both earlier and later than 7 days) to understand the full progression from initial response to long-term adaptation.
-   The discrepancies in findings for key regulators like `sclerostin` and `Rankl/Opg` compared to other studies need to be resolved to build a more cohesive model of disuse-induced bone loss.
-   Translational studies are required to determine if these genetic responses observed in female mice are conserved in males and, most importantly, in humans.

## Results
By using an unbiased, dual-platform genetic analysis, this study successfully uncovered a previously underappreciated link between cellular metabolism and the bone's response to mechanical unloading. These findings move beyond the traditionally studied signaling pathways and identify novel molecular targets. Elucidating the role of these metabolic pathways may lead to innovative therapeutic interventions to prevent the debilitating bone loss associated with spaceflight, spinal cord injury, and extended immobilization on Earth.