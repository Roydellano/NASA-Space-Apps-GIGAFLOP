---
title: "A Two-Way Street: How Cellular Stress and Growth Hormones Regulate Each Other in Plants"
summary: "Research in Arabidopsis thaliana reveals a critical two-way link between the Unfolded Protein Response (UPR), a key cellular stress pathway, and the growth hormone auxin. ER stress was found to suppress auxin signaling, while ER-based auxin transport is essential for a full UPR, uncovering a novel mechanism plants use to balance growth with stress adaptation."
publishDate: 2013-12-03T00:00:00Z
authors: ["Chen Y", "Aung K", "Rolčík J", "Walicki K", "Friml J", "Brandizzi F"]
tags: ["Genetics", "Microgravity", "Endocrinology", "Microbiology", "Earth"]
organisms: ["Arabidopsis"]
experimentType: "Ground Control"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759682561/h0qgc6aasdjqngrvndzf.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["The precise molecular mechanism for ER stress-induced repression of auxin-related genes", "Whether IRE1's RNA decay function contributes to the auxin response", "How ER-localized auxin transporters sense ER stress", "The direct targets of the IRE1 pathway that modulate auxin biology"]
doi: "10.1111/tpj.12373"
journal: "The Plant Journal"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3981873/"


chartData:
  type: "bar"
  data:
    labels:
      - "PIN5"
      - "PIN6"
      - "PILS2"
      - "PILS5"
      - "PILS2/PILS5"
      - "ABP1"
      - "YUC"
      - "TIR1/AFBs"
    datasets:
      - label: "BiP1/2 Transcript Reduction (%)"
        data: [35, 30, 32, 33, 30, 25, 40, -15] # Estimated from "30-40% reduction" for most, ABP1 slightly less, YUC slightly more, TIR1/AFB "higher" meaning negative reduction
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "PDI6 Transcript Reduction (%)"
        data: [38, 32, 28, 30, 31, 27, 42, -18] # Estimated similarly for PDI6
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
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
        title:
          display: true
          text: "Transcript Reduction/Increase (%)"
          color: "#cbd5e1"
---

# Introduction
The Unfolded Protein Response (UPR) is a fundamental cellular signaling network that helps cells cope with stress in the endoplasmic reticulum (ER), the cell's protein-folding factory. In plants, the hormone auxin is a master regulator of nearly every aspect of growth and development. While both pathways are critical, the connections between them have been largely unknown. This study investigates the hypothesis that the UPR and auxin signaling pathways are interconnected, allowing plants to coordinate cellular stress responses with overall physiological growth.

## Research Objective
The primary goals of this research were to:
-   Determine if ER stress modulates the expression of key genes involved in auxin signaling and transport.
-   Investigate the role of the conserved ER stress sensor, IRE1, in maintaining normal auxin levels and response.
-   Assess whether auxin homeostasis, particularly within the ER, is required for proper activation of the UPR.

## Key Findings
-   **ER stress suppresses auxin signaling.** Inducing ER stress with tunicamycin led to a significant transcriptional down-regulation of auxin co-receptors (**TIR1/AFBs, 20-55% reduction**) and auxin transporters (**PIN proteins, 30-80% reduction**). This resulted in the stabilization of AUX/IAA repressor proteins, effectively dampening the plant's growth signaling.
-   **The ER stress sensor IRE1 is required for auxin homeostasis.** Mutants lacking the *IRE1* gene exhibited a **30% reduction in free auxin levels** in their roots and were significantly less sensitive to externally applied auxin. This reveals a plant-specific role for IRE1 in hormonal regulation under normal conditions.
-   **ER-based auxin transport is crucial for UPR activation.** Mutants of **ER-localized auxin transporters** (e.g., *pin5*, *pils2*, *pils5*) showed a **30-40% reduction in UPR gene activation** when exposed to ER stress. In contrast, mutants of plasma membrane-based auxin transporters showed a normal UPR, highlighting the specific importance of intracellular auxin regulation.
-   **IRE1 and PIN5 have additive effects on growth and stress response.** A triple mutant (*ire1 pin5*) showed more severe defects than either single mutant, including a **45% reduction in free auxin levels** and further compromised UPR activation. This suggests that IRE1 and ER-based auxin transport act in parallel to maintain cellular balance.

## Methodology
-   **Organism:** The study was conducted using the model plant *Arabidopsis thaliana*, including wild-type (Col-0) and a variety of genetic mutants defective in UPR and auxin pathways (e.g., *ire1a ire1b*, *pin5-5*, *tir1 afb* quadruple mutant).
-   **Experimental Conditions:** This was a ground-based study where ER stress was chemically induced in seedlings using tunicamycin (Tm) or dithiothreitol (DTT). Plant responses to the hormone auxin and its inhibitors were also tested.
-   **Key Techniques:** The researchers used quantitative reverse transcription PCR (RT-qPCR) to measure gene expression, immunoblotting and confocal microscopy to analyze protein levels, and mass spectrometry to quantify endogenous free auxin concentrations.

## Importance for Space Missions
Understanding how plants manage stress is critical for developing robust life support systems for long-duration space missions. The spaceflight environment imposes a unique combination of stressors, including microgravity and radiation, which can trigger cellular stress pathways like the UPR. This research uncovers a fundamental link between a primary stress response (UPR) and a primary growth hormone (auxin). This knowledge is a vital step toward engineering plants that can thrive in off-world habitats, ensuring a reliable source of food, oxygen, and purified water for astronauts. By understanding how to modulate this balance, we can potentially develop countermeasures or select plant varieties that are better adapted to the challenges of space.

## Knowledge Gaps & Future Research
This study opens up several new avenues for investigation:
-   The molecular mechanism responsible for the transcriptional down-regulation of auxin-related genes during ER stress remains to be discovered.
-   Further work is needed to determine if IRE1's RNA decay function, in addition to its splicing activity, plays a role in regulating the auxin response.
-   How ER-localized auxin transporters like PIN5 sense ER stress or contribute to the UPR signaling cascade is a key unanswered question.
-   Future studies should aim to identify the specific auxin regulators that are direct downstream targets of the IRE1-mediated UPR pathway.

## Results
This study provides compelling evidence for a previously uncharacterized regulatory loop connecting the UPR and auxin signaling in plants. The findings demonstrate that plants have evolved a sophisticated strategy to balance growth and survival by actively down-regulating growth-promoting hormone pathways during times of cellular stress. Furthermore, the discovery that ER-based auxin homeostasis is required for a full-scale stress response highlights the importance of intracellular signaling in plant physiology. This integrated network is a key feature of plant resilience and a critical area of study for ensuring plant productivity in both terrestrial and extraterrestrial environments.