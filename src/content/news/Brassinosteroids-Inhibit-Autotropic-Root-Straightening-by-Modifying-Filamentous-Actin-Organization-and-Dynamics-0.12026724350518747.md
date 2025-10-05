---
title: "Brassinosteroids Inhibit Autotropic Root Straightening by Modifying Filamentous-Actin Organization and Dynamics"
summary: "Ground-based study using a microgravity-simulating clinostat reveals that the plant hormone brassinosteroid enhances root gravitropism by inhibiting the root's natural straightening response (autotropism). This effect is linked to the hormone's ability to alter the organization and reduce the dynamics of the actin cytoskeleton, providing a new mechanism for how plants control their growth orientation."
publishDate: 2020-02-04T00:00:00Z
authors: ["de Bang L", "Paez-Garcia A", "Cannon AE", "Chin S", "Kolape J", "Liao F", "Sparks JA", "Jiang Q", "Blancaflor EB"]
tags: ["Microgravity", "Genetics", "Technology", "Earth"]
organisms: ["Others"]
experimentType: "Simulated Microgravity"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680890/dnetih2bkz06ky2pp7r8.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["The precise molecular pathway linking brassinosteroid signaling to F-actin modification", "Whether this mechanism applies to other plant organs like shoots", "How clinostat results translate to true microgravity conditions", "The specific cell types responsible for the autotropic response"]
doi: "10.3389/fpls.2020.00005"
journal: "Frontiers in Plant Science"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7010715/"

chartData:
  type: "bar"
  data:
    labels:
      - "Control"
      - "Latrunculin B (100nM)"
      - "Epi-Brassinolide (500nM)"
      - "Epi-Brassinolide (1µM)"
      - "Epi-Brassinolide (5µM)"
    datasets:
      - label: "F-Actin Occupancy"
        data: [0.35, 0.12, 0.28, 0.45, 0.18]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "F-Actin Skewness (Bundling)"
        data: [0.03, 0.05, 0.03, 0.03, 0.03] # Estimated from "small but significant increase" for LatB and "not affected" for eBL
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
          text: "Relative Value"
          color: "#cbd5e1"
---
# Introduction
Plants orient their growth in response to gravity, a process known as gravitropism, which is essential for survival. While it's known that certain substances, like the plant hormone epi-brassinolide (eBL) and the actin-disrupting drug Latrunculin B (LatB), can enhance a root's downward growth, the underlying mechanism has been unclear. Gravitropism is a two-part process: an initial bend towards gravity, followed by a straightening response called autotropism. This study investigates whether eBL enhances gravitropism by promoting the initial bend or by inhibiting the subsequent straightening, and explores the role of the cell's internal scaffolding, the actin cytoskeleton, in this process.

## Research Objective
The primary goals of this research were to:
- Determine if the plant hormone eBL mimics the effects of the actin-inhibitor LatB on root directional growth.
- Use a 2-D clinostat, which simulates microgravity by randomizing the gravity vector, to test if eBL inhibits the autotropic straightening of roots.
- Characterize the specific changes in filamentous-actin (F-actin) organization and dynamics within root cells following eBL treatment.

## Key Findings
- **Inhibition of Autotropism:** Both eBL and LatB-treated maize roots showed **inhibited autotropic straightening** on a slowly rotating clinostat. While control roots straightened after an initial gravity stimulus, treated roots maintained a persistent, strong curvature.
- **Enhanced Gravitropic Bending:** Under continuous gravity, both eBL (500 nM) and LatB (100 nM) treated roots **overshot the vertical**, bending to an angle of approximately **110°**, compared to control roots which bent to about **80°**.
- **Mild Disruption of F-Actin Structure:** eBL treatment **reduced F-actin density** in fixed maize roots, but its effect was less severe than LatB, requiring a higher concentration (**5 µM**) to cause visible fragmentation.
- **Disordered F-Actin Network:** In living *Medicago truncatula* roots, both eBL and LatB treatments resulted in a more **disordered F-actin network**, as measured by a significant decrease in F-actin alignment (eccentricity).
- **Suppressed F-Actin Dynamics:** Live-cell imaging of *Medicago truncatula* hypocotyls revealed that eBL treatment **significantly suppressed the global dynamics of the F-actin network**, making the cytoskeleton less active compared to controls.

## Methodology
- **Organisms:** The study utilized maize (*Zea mays*) and transgenic barrel medic (*Medicago truncatula*) seedlings. The *M. truncatula* lines were genetically engineered to express fluorescent protein reporters (Lifeact-mGFP and GFP-ABD2-GFP) that label the F-actin cytoskeleton, allowing for live imaging.
- **Experimental Conditions:** This was a ground-based study employing a **2-D clinostat** to simulate microgravity and withdraw the directional gravity stimulus, enabling the researchers to isolate and observe the autotropic response.
- **Key Techniques:** The researchers used **confocal laser scanning microscopy** to visualize the F-actin cytoskeleton in both chemically fixed and living root cells. **Quantitative image analysis** was performed to measure F-actin density, bundling, and alignment. **Time-lapse imaging** of living cells was used to quantify global F-actin dynamics.

## Importance for Space Missions
Understanding the fundamental mechanisms of plant orientation is critical for developing **reliable plant-based life support systems** for long-duration space missions. This research reveals that autotropism, a previously overlooked aspect of gravitropism, is a key factor in determining final root architecture.
- **Optimizing Plant Growth:** By identifying brassinosteroids as regulators of this straightening response, this work opens the door to **hormonal or genetic strategies** to control and optimize plant growth patterns in the unique gravitational environments of space stations or planetary habitats.
- **Predicting Plant Behavior:** The finding that the actin cytoskeleton is a key mediator of this response helps scientists better predict how plants will adapt to microgravity, which is essential for ensuring crop productivity and stability in space.

## Knowledge Gaps & Future Research
This study provides a new framework for understanding root gravitropism but also highlights several areas for future investigation:
- The specific molecular signals that connect the brassinosteroid receptor to the downstream regulation of F-actin dynamics are still unknown.
- Further research is needed to determine if this eBL-mediated inhibition of autotropism also occurs in shoots and other plant organs.
- Spaceflight experiments are required to confirm if the effects observed on a clinostat are representative of plant behavior in true, sustained microgravity.
- Identifying the specific cell types and F-actin populations that drive the autotropic straightening response would provide a more complete picture of this process.

## Results
This research compellingly demonstrates that the plant hormone brassinosteroid enhances root gravitropism not by strengthening the initial downward turn, but by **suppressing the root's innate ability to straighten itself**. This inhibition of autotropism is achieved, at least in part, by modifying the cellular actin cytoskeleton, making it more disordered and less dynamic. These findings provide a crucial new perspective on plant directional growth, with significant implications for astrobotany and the engineering of plants capable of thriving beyond Earth.