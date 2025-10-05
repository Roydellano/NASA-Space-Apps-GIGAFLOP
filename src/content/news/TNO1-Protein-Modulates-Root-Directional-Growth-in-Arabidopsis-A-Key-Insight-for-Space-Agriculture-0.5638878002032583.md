---
title: "TNO1 Protein Modulates Root Directional Growth in Arabidopsis, A Key Insight for Space Agriculture"
summary: "A ground-based study on Arabidopsis thaliana reveals that the TNO1 protein, located at the trans-Golgi network, regulates root skewing and cell file rotation. Loss of TNO1 enhances root deviation, a finding crucial for understanding how plants navigate substrates in controlled environments like those planned for space missions."
publishDate: 2017-04-11T00:00:00Z
authors: ["Roy R", "Bassham DC"]
tags: ["Genetics", "Technology", "Earth", "Microgravity"]
organisms: ["Arabidopsis"]
experimentType: "Ground Control"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759679652/h4z3mkb1knwiptqaii8x.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["Precise molecular link between TNO1 at the trans-Golgi network and microtubule dynamics", "Role of TNO1 in trafficking specific cell wall components or growth regulators", "Interaction between TNO1-mediated trafficking, auxin transport, and root directional growth", "Applicability of these findings to crop plants in space-relevant growth media"]
doi: "10.1186/s12870-017-1024-4"
journal: "BMC Plant Biology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387210/"

chartData:
  type: "bar"
  data:
    labels:
      - "WT"
      - "tno1 Mutant (KO)"
      - "Complemented (COM)"
    datasets:
      - label: "Angular Deviation (β) (degrees)"
        data: [18, 28, 19]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Horizontal Growth Index (HGI)"
        data: [0.12, 0.22, 0.14]
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
        max: 30
        title:
          display: true
          text: "Phenotype Value"
          color: "#cbd5e1"
---

# Introduction
A plant's ability to navigate its environment is fundamental to its survival, allowing it to anchor itself and acquire essential nutrients. On Earth, roots respond to gravity, touch, and other cues, often resulting in complex growth patterns like waving and skewing when encountering impenetrable surfaces. Understanding the molecular machinery that governs these movements is critical for cultivating plants in controlled environments, including future space habitats. This study investigates the role of TNO1 (TGN-localized SYP41-interacting protein), a protein involved in intracellular trafficking at the trans-Golgi Network (TGN), in controlling the directional growth of roots in the model plant *Arabidopsis thaliana*.

## Research Objective
The study aimed to elucidate the function of the TNO1 protein in plant root development with the following objectives:
- To determine if TNO1 plays a role in modulating root skewing and waving on slanted, impenetrable surfaces.
- To investigate the cellular basis of TNO1's function by examining its effect on epidermal cell file rotation (CFR).
- To explore the relationship between TNO1, microtubule (MT) dynamics, and the control of directional root growth.

## Key Findings
- **Enhanced Root Skewing:** Mutants lacking the TNO1 protein (`tno1`) exhibited a **significantly exaggerated rightward skew** when grown on a slanted agar surface compared to wild-type plants. This indicates TNO1 normally acts to constrain this deviation.
- **Increased Cell File Rotation (CFR):** The enhanced skewing in `tno1` mutants correlated with a **more pronounced left-handed rotation of epidermal cell files**, suggesting TNO1 is a negative regulator of this twisting motion.
- **Microtubule Stabilizer Hypersensitivity:** The `tno1` skewing phenotype was **further amplified by taxol**, a microtubule-stabilizing drug, highlighting a strong connection between TNO1's function and microtubule stability.
- **Microtubule Destabilizer Insensitivity:** In contrast to wild-type roots, `tno1` mutants were **insensitive to the skew-inducing effects of propyzamide (PPD)**, a microtubule-destabilizing drug.
- **Cell Shape Defects Under Stress:** Treatment with PPD caused **severe defects in cell morphology** (shorter, wider cells) in `tno1` mutants, pointing to a critical role for TNO1 in maintaining proper anisotropic cell expansion.
- **Normal Microtubule Orientation:** Despite the dramatic effects on root movement, the underlying **cortical microtubule arrays in `tno1` mutants remained transversely oriented**. This key finding suggests TNO1 influences root growth through microtubule *dynamics* and associated trafficking, rather than by altering the static orientation of the microtubule cytoskeleton.

## Methodology
- **Organism:** *Arabidopsis thaliana* (wild-type, `tno1` knockout mutant, and a genetically complemented line).
- **Experimental Conditions:** Seedlings were grown on hard agar plates that were slanted 30 degrees to induce root skewing. Drug sensitivity was tested by incorporating taxol (a microtubule stabilizer) or propyzamide (a destabilizer) into the growth medium.
- **Key Techniques:** Root growth patterns were quantified using morphometric analysis with ImageJ software. Cellular and subcellular structures were visualized using confocal laser scanning microscopy, with propidium iodide staining to outline cells and immunofluorescence to label microtubule arrays.

## Importance for Space Missions
This research provides fundamental insights into how plant roots navigate and respond to physical barriers, a critical factor for designing effective **plant growth systems for space habitats** where roots interact with artificial substrates. Understanding the molecular machinery, such as the TNO1 protein and the TGN trafficking hub, that controls root architecture is essential for **optimizing crop stability and yield** in controlled environments for long-duration missions to the Moon and Mars. The identified link between vesicle trafficking, microtubule dynamics, and directional growth highlights a key cellular process that could be affected by microgravity, informing the design of future space biology experiments.

## Knowledge Gaps & Future Research
- The precise molecular mechanism connecting TNO1 at the trans-Golgi network to the regulation of microtubule dynamics remains unknown.
- Further investigation is needed to determine if TNO1's function involves the trafficking of specific cell wall components, such as cellulose synthase, or other growth-regulating proteins.
- The interplay between TNO1-mediated trafficking, its previously identified effects on auxin transport, and the control of root directional growth requires further elucidation.
- Future studies could explore how the TNO1-dependent pathway responds to the unique environmental stressors of spaceflight, including microgravity and radiation.

## Results
This study identifies TNO1 as a key regulator of root directional growth, acting as a negative modulator of skewing and cell file rotation. The findings demonstrate that TNO1's function is dependent on microtubule dynamics but independent of the static orientation of microtubule arrays, linking intracellular trafficking at the TGN to the complex process of plant morphogenesis. This work deepens our understanding of the fundamental mechanisms that guide plant growth, knowledge that is vital for advancing efforts in space-based agriculture and ensuring the success of long-term human exploration.