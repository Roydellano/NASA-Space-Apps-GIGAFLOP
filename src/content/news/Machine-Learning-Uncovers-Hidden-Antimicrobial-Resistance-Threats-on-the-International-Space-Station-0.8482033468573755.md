---
title: "Machine Learning Uncovers Hidden Antimicrobial Resistance Threats on the International Space Station"
summary: "A deep learning analysis of the ISS microbiome identified previously concealed antimicrobial resistance (AMR) genes in bacteria, including potential pathogens like Enterobacter bugandensis and Bacillus cereus. The findings, validated experimentally, highlight the power of AI for monitoring microbial threats to astronaut health on long-duration missions."
publishDate: 2022-08-24T00:00:00Z
authors: ["Madrigal P", "Singh NK", "Wood JM", "Gaudioso E", "Hernández-del-Olmo F", "Mason CE", "Venkateswaran K", "Beheshti A"]
tags: ["Microbiology", "Genetics", "Technology", "Microgravity", "Human Physiology"]
organisms: ["Bacteria", "Others"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680127/v8fgduoxbiuh59npmy9v.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Mechanisms driving the evolution of AMR in the unique space environment", "Predicting resistance to specific antibiotic compounds, not just broad classes", "The direct risk of transmission and infection from surface microbes to astronauts", "Real-time, on-orbit capabilities for AI-driven microbial monitoring"]
doi: "10.1186/s40168-022-01332-w"
journal: "Microbiome"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9400218/"

chartData:
  type: "radar"
  data:
    labels:
      - "Beta-lactams"
      - "Glycopeptide"
      - "Fluoroquinolones"
      - "Maciolides-Lincosamides-Streptogamines(MLS)"
      - "Pleuromutilin"
      - "Mupirocin"
      - "Rifamycin"
      - "Tetracycline"
      - "Polymyxin"
    datasets:
      - label: "Flight 1"
        data: [70, 40, 30, 45, 10, 5, 10, 35, 20]
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
      - label: "Flight 2"
        data: [75, 45, 35, 50, 60, 40, 30, 40, 25]
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
      - label: "Flight 3"
        data: [80, 70, 60, 75, 20, 15, 10, 60, 50]
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
Antimicrobial resistance (AMR) is a significant threat to human health on Earth and a growing concern for long-duration space missions. The confined environment of the International Space Station (ISS), combined with factors like microgravity and radiation, may promote the evolution and spread of drug-resistant microbes. This poses a risk to astronauts, whose immune systems can be altered by spaceflight. This study investigated whether a novel deep learning approach could more accurately identify and characterize AMR genes within the ISS surface microbiome compared to traditional methods.

## Research Objective
The primary goal of this research was to apply an advanced machine learning algorithm to comprehensively map the antimicrobial resistance landscape of the ISS. Specific objectives included:
- To use a deep learning model (DeepARG) to analyze metagenomic data from ISS surface samples and identify a broader catalog of AMR genes.
- To characterize AMR profiles in 226 individual bacterial strains isolated from the ISS to pinpoint high-risk species.
- To experimentally validate the computational predictions using traditional laboratory-based antibiotic susceptibility testing.

## Key Findings
The study's AI-driven approach yielded several critical insights into the ISS microbiome's pathogenic potential:
- The deep learning model successfully identified known AMR genes and discovered new potential resistance determinants missed by conventional analyses that rely on high DNA sequence similarity.
- Among **226 pure bacterial strains** isolated from the ISS, the species **_Enterobacter bugandensis_** and **_Bacillus cereus_** were found to harbor the highest number of potential AMR genes. Both are known opportunistic pathogens.
- Metagenomic analysis of samples from three separate flight missions revealed that AMR gene abundance increased over time, with the final flight showing the highest prevalence.
- The bacterium **_Kalamiella piersonii_**, a species previously associated with urinary tract infections on Earth, exhibited widespread AMR patterns across multiple ISS locations during the final flight mission.
- Laboratory validation showed a **high degree of concordance** between the AI's predictions and the observed antibiotic resistance. There was a strong inverse correlation between the number of predicted resistance genes and antibiotic effectiveness for both **_E. bugandensis_ (r = -0.517)** and **_B. cereus_ (r = -0.637)**.

## Methodology
- **Organisms:** The study analyzed the environmental microbiome from ISS surfaces, focusing on bacteria. Key organisms identified for validation were *Enterobacter bugandensis* and *Bacillus cereus*.
- **Experimental Conditions:** Samples were collected from **8 distinct locations** on the ISS across **3 flight missions** over a 12-month period. To ensure the analysis focused on viable microbes, samples were treated with propidium monoazide (PMA).
- **Key Techniques:** The research integrated **shotgun metagenomics**, whole-genome sequencing of **226 pure microbial isolates**, and a **supervised deep learning algorithm (DeepARG)**. Computational predictions were confirmed using **disc diffusion antibiotic susceptibility tests (AST)**.

## Importance for Space Missions
This research is highly relevant for future long-duration missions to the Moon and Mars.
- **Enhanced Health Surveillance:** The validated AI model provides a more sensitive and powerful tool for monitoring microbial threats in closed habitats, enabling proactive health and safety measures.
- **Targeted Countermeasures:** By identifying specific multi-drug resistant organisms like *E. bugandensis*, NASA can develop targeted sanitation protocols, screen medical supplies, and better prepare for potential infections.
- **Risk Assessment:** Understanding how the AMR landscape evolves over time on the ISS is critical for predicting and mitigating risks on future missions where medical resources will be extremely limited.

## Knowledge Gaps & Future Research
While groundbreaking, this study highlights several areas requiring further investigation:
- The specific spaceflight factors (microgravity, radiation, CO2 levels) that drive the selection and proliferation of these AMR genes are not yet fully understood.
- The deep learning model can predict resistance to broad antibiotic classes, but future work is needed to refine its ability to predict resistance to specific drugs.
- The direct link between the presence of these AMR genes on surfaces and the actual risk of astronaut infection needs to be established.
- Future research should focus on developing onboard, real-time sequencing and AI analysis capabilities (e.g., via Microbial Tracking-2 and -3 missions) for immediate microbial threat assessment.

## Results
This study successfully demonstrates that machine learning can significantly enhance our ability to detect hidden AMR threats in the space environment. By validating computational predictions with robust experimental data, the research establishes a powerful new framework for ensuring the microbiological safety of crewed habitats. This advanced monitoring capability is a critical step toward safeguarding astronaut health during the upcoming era of deep-space exploration.