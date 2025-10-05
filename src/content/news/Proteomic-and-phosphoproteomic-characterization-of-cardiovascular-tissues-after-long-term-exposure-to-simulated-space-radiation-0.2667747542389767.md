---
title: "Proteomic and phosphoproteomic characterization of cardiovascular tissues after long term exposure to simulated space radiation"
summary: "A study on mice exposed to simulated galactic cosmic rays (GCR) reveals long-term changes in heart and plasma proteins 8 months post-exposure. A key finding is the activation of pathways leading to Neutrophil Extracellular Traps (NETs) in heart tissue, a process linked to inflammation, tissue damage, and thrombosis, highlighting a significant cardiovascular risk for long-duration space missions."
publishDate: 2024-04-18T00:00:00Z
authors: ["Kidane YH", "Lee FH", "Smith MF", "Wang C", "Mirza JB", "Sharma S", "Lobo AA", "Dewan KC", "Chen J", "Diaz TE", "Pla MM", "Foster MW", "Bowles DE"]
tags: ["Cardiovascular", "Radiation", "Animals", "Proteomics", "Human Physiology"]
organisms: ["Mice"]
experimentType: "Radiation Exposure"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759682212/ln82oibjwieidubf9tpq.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Mechanism triggering NET formation after GCR exposure", "The acute-phase response immediately following GCR exposure that leads to chronic inflammation", "Translational relevance of mouse NET formation to human VTE risk in space", "Effective countermeasures against GCR-induced NETosis and chronic cardiac inflammation"]
doi: "10.3389/fphys.2024.1248276"
journal: "Frontiers in Physiology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11063234/"

chartData:
  type: "bar"
  data:
    labels:
      - "Heart Proteome (DEPs)"
      - "Heart Phosphoproteome (DPPs)"
      - "Plasma Proteome (DEPs)"
    datasets:
      - label: "Upregulated"
        data: [11, 17, 1]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Downregulated"
        data: [76, 43, 0] # Only one upregulated protein for plasma, so 0 downregulated listed in the text
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
          text: "Number of Proteins/Peptides"
          color: "#cbd5e1"
          font:
            size: 13
            weight: "600"
---

# Introduction
The risk of cardiovascular disease from exposure to the deep space radiation environment is a primary health concern for long-duration missions to the Moon and Mars. While previous studies have documented late-onset heart dysfunction in animal models exposed to simulated space radiation, the underlying molecular mechanisms have remained unclear. This study utilizes advanced proteomic techniques to investigate the long-term changes in heart and plasma proteins following exposure to simulated Galactic Cosmic Rays (GCR), aiming to identify the biological pathways driving cardiovascular damage.

## Research Objective
The primary goals of this research were to:
- Characterize long-term changes in the heart and plasma proteome of mice **8 months** after a single exposure to simulated GCR.
- Identify specific proteins and biological pathways that are persistently altered by space radiation.
- Investigate the molecular basis for previously observed late-onset cardiovascular dysfunction, such as increased arterial stiffness and reduced heart function.

## Key Findings
- A single dose of simulated GCR (**150 cGy**) caused lasting molecular changes, with the majority of altered proteins being **downregulated** in both heart and plasma 8 months post-exposure.
- In the heart proteome, **87 proteins were differentially expressed** (76 downregulated, 11 upregulated). Key downregulated pathways included mitochondrial function and cell cycle/transcription, suggesting a global reduction in protein synthesis and energy production.
- The most significant discovery was the activation of the **Neutrophil Extracellular Trap (NET) formation** pathway. Histological analysis confirmed a substantial accumulation of NETs in the heart muscle of irradiated mice at 12 months, which were entirely absent in control animals.
- NETs are web-like structures released by neutrophils that are linked to chronic inflammation, tissue damage, and thrombosis. Their presence may explain previously observed **decreased systolic heart function and increased arterial stiffness** in these animals.
- Inflammatory pathways related to the **complement and coagulation cascades** were upregulated in the heart but downregulated in the plasma, indicating a localized, chronic inflammatory response within cardiac tissue.
- Researchers also noted an increased presence of **type I collagen** in irradiated hearts, a key factor contributing to tissue stiffening and fibrosis.

## Methodology
- **Organisms:** Male C57BL/6 mice, approximately 24 weeks old at the time of irradiation.
- **Experimental Conditions:** Mice received a single whole-body dose of **150 cGy of simulated Galactic Cosmic Rays (GCR5-ion)** at the NASA Space Radiation Laboratory (NSRL). Sham-irradiated mice served as controls. Tissues were analyzed at 8 and 12 months post-exposure.
- **Key Techniques:** Quantitative mass spectrometry was used for **proteomic and phosphoproteomic analysis** of heart tissue and proteomic analysis of plasma. Gene Set Enrichment Analysis (GSEA) identified perturbed biological pathways. **Immunofluorescence staining** was used to visualize NETs and other protein markers in heart tissue sections.

## Importance for Space Missions
This study identifies a specific mechanism—**NET formation**—that likely contributes to the chronic cardiovascular damage caused by space radiation. The link between GCR-induced NETs and thrombosis is critically important, given the documented case of **venous thromboembolism (VTE)** in an astronaut on the ISS. This research provides a potential biological explanation for increased clotting risk during and after spaceflight. These findings underscore the significant, long-term cardiovascular risks for astronauts on missions beyond Earth's protective magnetosphere, such as journeys to Mars. Targeting the NET formation pathway could represent a novel strategy for developing medical countermeasures to protect astronaut health.

## Knowledge Gaps & Future Research
- What specific molecular signals **trigger NET formation** after GCR exposure?
- What is the **acute-phase response** immediately following radiation that initiates this chronic inflammatory state? This requires studies with earlier sampling time points.
- How do these findings in mice **translate to human cardiovascular risk**, particularly the risk of deep vein thrombosis (DVT) in astronauts?
- Can interventions that **inhibit NETs** (NETosis inhibitors) effectively prevent or mitigate radiation-induced cardiac damage and thrombosis?

## Results
This study provides critical molecular insights into how space radiation causes persistent cardiovascular damage. By identifying the activation of NET formation as a key driver of chronic inflammation, thrombosis, and tissue remodeling in the heart, the research highlights a tangible risk for astronauts and points toward a new avenue for developing targeted countermeasures. Understanding and mitigating these radiation-induced effects is essential for ensuring crew health and mission success on future long-duration exploration missions.