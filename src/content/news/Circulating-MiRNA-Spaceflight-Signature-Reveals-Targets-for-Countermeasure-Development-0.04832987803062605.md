---
title: "Circulating miRNA Spaceflight Signature Reveals Targets for Countermeasure Development"
summary: "A multi-species study validates a specific microRNA signature as a biomarker for spaceflight stress, distinguishing between microgravity and radiation effects. Inhibition of key miRNAs rescued radiation-induced vascular damage in a human tissue model, offering a new therapeutic strategy for long-duration missions."
publishDate: 2020-11-25T00:00:00Z
authors: ["Malkani S", "Chin CR", "Cekanaviciute E", "Mortreux M", "Mason CE", "Beheshti A"]
tags: ["Genetics", "Cardiovascular", "Radiation", "Microgravity", "Human Physiology"]
organisms: ["Humans", "Mice", "Rats"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680065/smpol5ihxicmdu06l3ij.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Specific tissue/organ origins of the circulating miRNAs", "Potential sex-specific differences in the miRNA response", "In vivo efficacy and safety of antagomir therapies in animal models", "Long-term dynamics of the miRNA signature during extended missions and post-flight recovery"]
doi: "10.1016/j.celrep.2020.108448"
journal: "Cell Reports"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8441986/"

chartData:
  type: "radar"
  data:
    labels:
      - "miR-125b"
      - "miR-16"
      - "let-7a"
      - "miR-146a"
      - "miR-223"
      - "miR-92a"
      - "miR-34a"
    datasets:
      - label: "Simulated GCR Radiation"
        data: [85, 90, 80, 75, 70, 65, 78]
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
      - label: "Simulated Microgravity (HU)"
        data: [70, 75, 88, 80, 85, 70, 72]
        fill: true
        backgroundColor: "rgba(255, 99, 132, 0.25)"
        borderColor: "rgba(255, 99, 132, 1)"
        pointBackgroundColor: "rgba(255, 99, 132, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
      - label: "ISS Spaceflight (Older Mice)"
        data: [60, 65, 70, 68, 62, 78, 55]
        fill: true
        backgroundColor: "rgba(75, 192, 192, 0.25)"
        borderColor: "rgba(75, 192, 192, 1)"
        pointBackgroundColor: "rgba(75, 192, 192, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(75, 192, 192, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
      - label: "NASA Twins Study (TW)"
        data: [50, 60, 65, 55, 68, 82, 60]
        fill: true
        backgroundColor: "rgba(153, 102, 255, 0.25)"
        borderColor: "rgba(153, 102, 255, 1)"
        pointBackgroundColor: "rgba(153, 102, 255, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(153, 102, 255, 1)"
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
---

# Introduction
The space environment, characterized by microgravity and ionizing radiation, poses significant health risks to astronauts, including cardiovascular damage, immune dysfunction, and bone loss. Understanding the molecular mechanisms driving these changes is critical for developing effective countermeasures. MicroRNAs (miRNAs) are small non-coding RNA molecules that regulate gene expression and have been implicated in various diseases. This study sought to experimentally validate a previously predicted panel of spaceflight-associated miRNAs to determine if they could serve as a reliable biomarker for spaceflight-induced stress and a target for therapeutic intervention.

## Research Objective
The primary goals of this comprehensive study were to:
- Experimentally validate a computationally predicted panel of 15 spaceflight-associated miRNAs across multiple experimental models.
- Determine if the miRNA signature is conserved between rodents and humans and can distinguish between different spaceflight stressors (microgravity vs. radiation).
- Investigate the physiological impact of this miRNA signature and test whether inhibiting key miRNAs can mitigate spaceflight-related biological damage.

## Key Findings
- A specific miRNA signature was validated and found to be consistently regulated in response to spaceflight stressors. The study identified two overlapping signatures: one associated with **microgravity/low-Earth orbit (LEO)** conditions and another with **simulated deep space radiation**.
- The miRNA response was dose-dependent. In rodent models, miRNA levels increased with higher doses and linear energy transfer (LET) of radiation (e.g., **56Fe ions**). Similarly, miRNA levels increased with greater reductions in simulated gravity.
- The miRNA signature was partially conserved in humans. Analysis of samples from the **NASA Twins Study** and irradiated human immune cells (*ex vivo*) confirmed changes in several key miRNAs.
- Single-cell analysis of the NASA Twin's blood samples revealed that changes in immune cell populations, particularly a post-flight increase in **CD14+ monocytes**, were a major driver of the observed miRNA signature, rather than epigenetic changes to the miRNA genes themselves.
- A proof-of-concept countermeasure was successfully demonstrated. Using antagomirs to inhibit three key miRNAs (**miR-125b, miR-16, and let-7a**) **rescued vascular damage** caused by simulated deep space radiation in a 3D human microvascular tissue model.

## Methodology
This study integrated data from multiple models to provide robust validation of the miRNA signature.
- **Organisms:** The research involved **mice** (C57BL/6J and BALB/cAnNTac strains), **Wistar rats**, and **humans** (blood samples from the NASA Twins Study and healthy donors).
- **Experimental Conditions:** A combination of true **spaceflight** (mice on the ISS, NASA Twin astronaut), **simulated microgravity** (hindlimb unloading in mice, partial weight bearing in rats), and **simulated space radiation** (gamma rays, protons, and simplified Galactic Cosmic Rays - SimGCRSim) was used.
- **Key Techniques:** The analysis relied on **droplet digital PCR (ddPCR)** for precise miRNA quantification, supplemented by **miRNA-sequencing**, **single-cell RNA-sequencing (scRNA-seq)**, and **single-cell ATAC-sequencing (scATAC-seq)** to understand cellular and epigenetic contributions. A **3D human microvascular tissue model** was used for functional validation of the countermeasure.

## Importance for Space Missions
This research has direct and significant implications for future space exploration, particularly for long-duration missions to the Moon and Mars.
- **Biomarker Development:** The validated miRNA signature provides a powerful, minimally invasive blood-based biomarker to monitor astronaut health in real-time, assess cumulative biological damage from radiation and microgravity, and personalize risk assessment.
- **Countermeasure Innovation:** The identification of specific miRNAs as drivers of vascular damage opens a new avenue for therapeutic development. Antagomir-based drugs could potentially be used preemptively to protect astronauts from the adverse cardiovascular effects of deep space radiation.
- **Tailored Health Monitoring:** The ability to distinguish between radiation and microgravity signatures allows for more nuanced health monitoring tailored to specific mission profiles (e.g., LEO vs. deep space).

## Knowledge Gaps & Future Research
While this study provides a critical foundation, several questions remain to be addressed:
- The specific organs and tissues that are the primary sources of these circulating miRNAs are still unknown.
- Further investigation is needed to determine if there are significant sex-based differences in the miRNA response to spaceflight.
- The promising results from the *in vitro* antagomir therapy must be validated in *in vivo* animal models to assess efficacy, safety, and potential off-target effects.
- The long-term behavior of these miRNA signatures during missions exceeding one year and throughout the post-flight recovery period needs to be characterized.

## Results
This study successfully validates a circulating miRNA signature as a robust indicator of spaceflight-induced stress across multiple species and experimental conditions. By distinguishing between the effects of microgravity and deep space radiation, this research provides a nuanced tool for monitoring astronaut health. Most importantly, the successful rescue of vascular tissue using miRNA inhibitors (antagomirs) opens a promising new frontier for developing targeted countermeasures to protect astronauts on future long-duration missions beyond low-Earth orbit.