---
title: "On-Orbit Gene Expression Analysis: Validation of the WetLab-2 System on the ISS"
summary: "NASA's WetLab-2 system successfully demonstrated on-orbit RNA isolation and real-time gene expression analysis (RT-qPCR) from bacterial and mammalian samples. Despite initial data noise from microgravity-induced bubbles, which was later resolved, the system provides a foundational capability for rapid molecular diagnostics and iterative science on long-duration space missions."
publishDate: 2017-09-06T00:00:00Z
authors: ["Parra M", "Jung J", "Boone TD", "Tran L", "Blaber EA", "Almeida EAC"]
tags: ["Technology", "Genetics", "Microbiology", "Microgravity", "Human Physiology"]
organisms: ["E. coli", "Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759678966/nazbikgbokkpijymipdm.jpg"
readTime: 4
priority: "high"
consensusLevel: "high"
knowledgeGaps: ["Long-term stability of room-temperature reagents", "Adaptation for on-orbit DNA/RNA sequencing", "Validation with diverse biological samples (e.g., human blood, plants)", "Automation of sample processing to reduce crew time"]
doi: "10.1371/journal.pone.0183480"
journal: "PLoS One"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5587110/"

chartData:
  type: "bar"
  data:
    labels:
      - "High DNA (100 ng)"
      - "Medium DNA (1 ng)"
      - "Low DNA (10 pg)"
    datasets:
      - label: "Control (Non-Lyophilized)"
        data: [15.71, 23.55, 29.14]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Lyophilized Assay"
        data: [16.43, 22.87, 29.87]
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
          text: "Ct Value"
          color: "#cbd5e1"
---
# Introduction
Historically, biological research in space has been constrained by the need to preserve samples and return them to Earth for analysis, a process that introduces significant delays and risks sample degradation. To overcome this limitation and enable more autonomous and timely research, NASA developed the WetLab-2 system, a suite of molecular biology tools designed for end-to-end gene expression analysis aboard the International Space Station (ISS). This publication details the successful validation of the WetLab-2 system, demonstrating for the first time that complex molecular procedures can be performed effectively in a microgravity environment.

## Research Objective
The primary goal of this study was to validate the complete WetLab-2 workflow in microgravity. The specific objectives were to:
-   Demonstrate successful RNA isolation and purification from complex biological samples (bacterial cells and mammalian tissue) on the ISS.
-   Confirm that quantitative real-time PCR (RT-qPCR) functions reliably and efficiently in microgravity.
-   Compare the performance, accuracy, and data quality of the on-orbit system against identical 1g ground controls.

## Key Findings
-   The WetLab-2 system successfully isolated high-quality RNA from both ***E. coli*** **and mouse liver tissue** aboard the ISS. On-orbit RNA quality (RIN 8.5) was comparable to ground controls (RIN 8.0).
-   On-orbit qPCR and RT-qPCR analysis was successful, with amplification efficiencies (**104-108%**) and cycle threshold (Ct) values closely matching ground controls (**102-105%**).
-   The entire workflow, from sample processing to data transmission to Earth, was completed in approximately **5 hours**, enabling near real-time results.
-   A key microgravity-specific issue was identified: **gas bubbles** formed and were trapped in the optical window of the reaction tubes during thermal cycling, causing signal noise in the fluorescence data.
-   A follow-up experiment demonstrated that using **standard, pressure-sealing commercial caps** effectively suppressed bubble formation and produced smooth, high-quality amplification curves.
-   **Lyophilized (freeze-dried) reagents** were stable and performed comparably to standard wet lab reagents, reducing the need for limited on-orbit cold stowage.

## Methodology
-   **Organisms/Subjects:** Frozen samples of *Escherichia coli* cells and 5 mg biopsies of mouse liver tissue were processed on the ISS.
-   **Experimental Conditions:** Experiments were performed by astronauts aboard the ISS in microgravity. Identical hardware and protocols were used to run parallel 1g control experiments on the ground within 24 hours.
-   **Key Techniques:** The study utilized the integrated WetLab-2 hardware suite, including a novel Sample Preparation Module (SPM) for RNA isolation, a bubble-removing pipette loader, and a Cepheid SmartCycler® for thermal cycling. Gene expression was analyzed using multiplex TaqMan-based Reverse Transcriptase-quantitative PCR (RT-qPCR).

## Importance for Space Missions
This validation establishes a **foundational capability for real-time molecular biology** in space, which is critical for future long-duration missions to the Moon and Mars. The WetLab-2 system enables:
-   **Rapid Health Diagnostics:** Astronauts can quickly analyze biomarkers for stress, immune function, or infection, allowing for timely medical interventions.
-   **Environmental Monitoring:** The system can be used to identify microbial contaminants in the station's air, water, or on surfaces, ensuring crew safety.
-   **Iterative Science:** Investigators can receive data from an experiment and use it to modify and conduct follow-up experiments while still on-orbit, dramatically accelerating the pace of scientific discovery.

## Knowledge Gaps & Future Research
While a major success, this validation highlights areas for future work:
-   Confirming the long-term stability of lyophilized reagents under ambient (room temperature) storage conditions to further reduce reliance on cold stowage.
-   Adapting and validating the system for a wider range of biological samples, particularly human clinical samples like blood, saliva, and urine.
-   Integrating the RNA purification capability with other on-orbit technologies, such as nanopore sequencers, to enable comprehensive genomic and transcriptomic analysis.
-   Exploring opportunities to automate aspects of the workflow to further reduce demands on astronaut crew time.

## Results
The successful validation of the WetLab-2 system marks a significant advancement for space-based biological research. By proving that complex molecular procedures like RNA extraction and RT-qPCR can be reliably performed in microgravity, this technology overcomes a major logistical barrier. It transitions space biology from a sample-return-dependent model to one that mirrors a dynamic, responsive Earth-based laboratory, paving the way for a deeper understanding of life in space and helping to ensure crew health on future deep-space exploration missions.