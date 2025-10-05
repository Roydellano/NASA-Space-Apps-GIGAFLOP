---
title: "Dose- and Ion-Dependent Effects of Space-Like Radiation on the Skeletal System"
summary: "A ground-based study in mice reveals that high-dose (200 cGy) heavy-ion (⁵⁶Fe) radiation causes significant, long-term bone loss and severely impairs the bone-forming potential of marrow cells for up to a year. This highlights a critical dose threshold and suggests simple antioxidant countermeasures may be insufficient against galactic cosmic rays."
publishDate: 2017-10-10T00:00:00Z
authors: ["Alwood JS", "Tran LH", "Schreurs AS", "Shirazi-Fard Y", "Kumar A", "Hilton D", "Tahimic CGT", "Globus RK"]
tags: ["Musculoskeletal", "Radiation", "Animals", "Genetics"]
organisms: ["Mice"]
experimentType: "Radiation Exposure"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759679072/hyywm7ejaieewfg66og0.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Combined effects of radiation and microgravity on skeletal health", "Effectiveness of countermeasures against high-LET radiation in vivo", "Impact of chronic, low-dose-rate radiation vs. acute exposure", "Translating mechanistic findings from mice to human astronaut risk"]
doi: "10.3390/ijms18102117"
journal: "International Journal of Molecular Sciences"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5666799/"

chartData:
  type: "bar"
  data:
    labels:
      - "Sham"
      - "10 cGy 56Fe"
      - "50 cGy 56Fe"
      - "200 cGy 56Fe"
    datasets:
      - label: "Percent Bone Volume (%)"
        data: [9.7, 8.7, 8.2, 7.2]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Trabecular Number (1/mm)"
        data: [1.62, 1.49, 1.42, 1.26]
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
          text: "Bone Metrics"
          color: "#cbd5e1"
---

# Introduction

Astronauts on long-duration missions beyond low-Earth orbit will be exposed to a complex field of space radiation, including low-energy protons from solar particle events and high-energy heavy ions from galactic cosmic rays (GCR). This radiation poses a significant risk to skeletal health, potentially accelerating bone loss and impairing the body's ability to repair skeletal tissue. This study sought to understand how different types and doses of space-like radiation affect bone structure and the function of bone-forming progenitor cells in the marrow, and whether these effects are transient or persistent.

## Research Objective

The primary goals of this research were to:
-   Determine if radiation-induced bone loss and impaired bone formation (osteoblastogenesis) are dependent on the radiation type (low-LET protons vs. high-LET ⁵⁶Fe ions) and dose.
-   Investigate the role of oxidative stress pathways in the skeletal response to radiation.
-   Assess whether insults to skeletal structure and the regenerative capacity of bone marrow cells persist long-term (up to one year) after a single exposure.

## Key Findings

-   **Dose Threshold Identified:** Low doses of radiation (**below 50 cGy**) of either protons or heavy ⁵⁶Fe ions did not cause detectable adverse effects on bone microarchitecture or the bone-forming capacity of marrow cells.
-   **High-Dose Causes Bone Loss:** A high dose (**200 cGy**) of both protons and ⁵⁶Fe ions caused significant loss of cancellous bone at 5 weeks post-irradiation, reducing bone volume by **22%** and **31%**, respectively, compared to controls.
-   **High-LET Radiation Causes Persistent Cellular Damage:** High-dose (**200 cGy**) ⁵⁶Fe radiation severely impaired the ability of bone marrow progenitor cells to form new bone, reducing mineralized nodule formation by over **90%**. This profound inhibition of bone regeneration persisted for at least one year after exposure.
-   **Oxidative Stress and Cell Cycle Arrest:** Exposure to high-dose ⁵⁶Fe radiation led to a sustained increase in the expression of genes associated with oxidative stress (**Catalase**) and DNA damage/cell cycle arrest (**Gadd45**) in bone progenitor cells.
-   **Antioxidants Ineffective Against High-LET Radiation:** In cell culture experiments, the antioxidant superoxide dismutase (SOD) successfully protected bone progenitor cells from low-LET radiation damage but **failed to protect them** from an equivalent dose of high-LET ⁵⁶Fe radiation.

## Methodology

-   **Organisms:** 16-week-old male C57BL/6J mice were used for the in vivo experiments.
-   **Experimental Conditions:** Animals received a single total-body exposure to either low-LET protons (150 MeV/n) or high-LET ⁵⁶Fe ions (600 MeV/n) at NASA’s Space Radiation Laboratory. Doses ranged from 5 cGy to 200 cGy. Skeletal tissue and bone marrow were analyzed at 5 weeks and 1 year post-irradiation.
-   **Key Techniques:** Bone microarchitecture was assessed using **microcomputed tomography (µCT)**. The functional capacity of bone marrow cells was evaluated through **ex vivo osteoblastogenic cultures**, quantifying colony formation and mineralized nodules. **RT-PCR** was used to measure changes in gene expression related to oxidative stress and cell differentiation.

## Importance for Space Missions

This research provides critical insights for planning long-duration missions to the Moon and Mars. The identification of a dose threshold for skeletal damage—between 10 and 50 cGy—is highly relevant, as the estimated dose for a Mars mission falls within this range. The finding that high-LET heavy ions, a key component of GCR, cause severe and persistent damage to the regenerative capacity of bone highlights a major health risk that may not be fully reversible. Furthermore, the study demonstrates that simple antioxidant countermeasures may be insufficient to protect against the unique biological damage caused by heavy ions, underscoring the need for more targeted radioprotective strategies.

## Knowledge Gaps & Future Research

While this study clarifies dose- and ion-dependent risks, several questions remain:
-   How do the combined stressors of radiation and microgravity interact to affect skeletal health?
-   What are the long-term effects of chronic, low-dose-rate radiation, which more accurately reflects the space environment, compared to the acute exposures used in this model?
-   Can novel countermeasures be developed to specifically target the DNA damage and oxidative stress pathways activated by high-LET radiation?
-   Further investigation is needed to confirm if specific signaling pathways, such as Foxo transcription factors, are key drivers of the persistent impairment in bone regeneration.

## Results

This study demonstrates that high-dose, high-LET radiation, characteristic of the deep space environment, poses a significant and lasting threat to skeletal integrity. The damage extends beyond simple bone loss, critically impairing the fundamental cellular processes required for bone repair and maintenance. These findings emphasize that radiation quality (ion type) is a crucial factor in determining biological risk and that developing effective countermeasures to protect astronaut skeletal health will require strategies that address the complex and persistent damage inflicted by heavy ions.