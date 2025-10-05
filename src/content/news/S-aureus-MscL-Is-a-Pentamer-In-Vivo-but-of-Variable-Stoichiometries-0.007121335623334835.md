---
title: "S. aureus MscL Is a Pentamer In Vivo but of Variable Stoichiometries In Vitro: Implications for Detergent-Solubilized Membrane Proteins"
summary: "This study resolves a structural controversy by demonstrating that the bacterial mechanosensitive channel SaMscL is a five-subunit (pentameric) complex in its native cell membrane. It reveals that the four-subunit (tetrameric) structure previously reported was an artifact induced by the specific detergent used for in vitro analysis, highlighting a critical methodological pitfall for membrane protein research."
publishDate: 2010-12-07T00:00:00Z
authors: ["Dorwart MR", "Wray R", "Brautigam CA", "Jiang Y", "Blount P"]
tags: ["Microbiology", "Proteomics", "Technology", "Microgravity"]
organisms: ["E. coli", "Others"]
experimentType: "Ground Control"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759681121/oltu9habrjr0i2eborzj.jpg"
readTime: 3
priority: "medium"
consensusLevel: "high"
knowledgeGaps: ["Specific chemical properties of detergents that induce stoichiometric changes", "Role of native membrane lipids in stabilizing protein complexes", "Applicability of these findings to other multi-subunit membrane proteins", "Functional status of artificially-induced oligomeric states"]
doi: "10.1371/journal.pbio.1000555"
journal: "PLoS Biology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2998437/"

chartData:
  type: "bar"
  data:
    labels:
      - "In Vivo (Disulfide Trapping)"
      - "Triton X-100 (Crosslinking)"
      - "C8E5 (SEC-MALS)"
      - "LDAO (Crosslinking)"
      - "LDAO (SEC-MALS)"
    datasets:
      - label: "Protein Mass (kDa)"
        data: [72.2, 72.2, 72.8, 60.0, 60.0] # In vivo estimated from pentamer, others from figures
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
        max: 80
        title:
          display: true
          text: "Protein Mass (kDa)"
          color: "#cbd5e1"
          font:
            size: 13
            weight: "600"
---
# Introduction
Mechanosensitive channels are critical molecular pores that act as "emergency release valves," allowing cells to survive sudden changes in osmotic pressure. The bacterial mechanosensitive channel of large conductance (MscL) is a primary model for understanding how proteins sense and respond to physical forces. However, the field has been faced with a fundamental contradiction: X-ray crystallography showed the *M. tuberculosis* MscL as a pentamer (five subunits), while the *S. aureus* MscL (SaMscL) was resolved as a tetramer (four subunits). This discrepancy raised questions about whether MscL structure varies by species or if experimental artifacts were influencing the results.

## Research Objective
This study aimed to resolve the controversy surrounding the structure of the SaMscL channel by:
- Determining its true oligomeric state within the native environment of a living cell membrane.
- Investigating the cause of the discrepancy between the tetrameric crystal structure and other evidence pointing to a pentameric form.
- Testing whether detergents, chemicals essential for extracting membrane proteins for study, could alter the protein's fundamental subunit structure.

## Key Findings
- **SaMscL is a pentamer *in vivo***: Using an *in vivo* disulfide trapping technique that locks subunits together inside live bacteria, the study demonstrated that the vast majority of SaMscL channels exist as **pentameric complexes**. This strongly suggests the pentamer is the physiologically functional form.
- **Biophysical methods confirm pentameric state in specific detergents**: When SaMscL was purified using Triton X-100 or C8E5 detergents, three independent analytical methods confirmed its pentameric structure. Size exclusion chromatography multi-angle light scattering (SEC-MALS) measured a mass of **72.8 ± 0.8 kDa**, closely matching the theoretical mass of a pentamer (72.2 kDa).
- **LDAO detergent induces an artificial tetrameric state**: When the same experiments were performed using the detergent LDAO—the same one used in the original crystallographic study—the measured mass dropped to **60.0 ± 2.8 kDa**. This mass is consistent with a **tetrameric structure** (theoretical mass 57.8 kDa), confirming that the detergent itself caused the structural shift.
- **The detergent-induced structural change is reversible**: The researchers demonstrated that the oligomeric state was entirely dependent on the detergent. When SaMscL was moved from LDAO back into C8E5, it reverted from a tetramer to a pentamer, proving the reversible and artificial nature of the tetrameric state.

## Methodology
- **Organisms**: The study used *S. aureus* MscL (SaMscL) protein expressed in *E. coli* cells.
- **Experimental Conditions**: The research compared the protein's structure *in vivo* (within the bacterial membrane) to its structure *in vitro* after solubilization in three different detergents: Triton X-100, pentaethylene glycol monooctyl ether (C8E5), and Lauryldimethylamine-oxide (LDAO).
- **Key Techniques**: The study employed a multi-faceted approach combining *in vivo* crosslinking to assess the native state with precise *in vitro* biophysical techniques, including **Analytical Ultracentrifugation (AUC)** and **SEC-MALS**, to measure the exact molecular mass of the protein-detergent complex in solution.

## Importance for Space Missions
This work has significant implications for space bioscience research, which relies heavily on accurate structural models to understand how organisms respond to environmental stressors like microgravity and radiation.
- **Ensuring Data Integrity**: It serves as a critical reminder that experimental procedures can introduce artifacts. For studies analyzing proteins from astronauts or organisms flown in space, it is crucial to ensure that observed molecular changes are genuinely caused by the space environment, not by post-flight analytical methods.
- **Accurate Modeling of Cellular Stress**: Mechanosensitive channels are fundamental to how cells perceive physical forces. An incorrect structural model could lead to flawed hypotheses about cellular adaptation to microgravity. This study reinforces the need for *in vivo* validation to build reliable models of biological systems in space.
- **Methodological Guidance**: This research provides a methodological blueprint for validating the physiological relevance of membrane protein structures, a practice essential for ensuring the accuracy of foundational research that informs human health countermeasures.

## Knowledge Gaps & Future Research
While this study definitively establishes the pentameric nature of SaMscL, it also opens new avenues for investigation:
- What are the specific chemical properties of a detergent that determine its effect on a protein's oligomeric state?
- How do lipids within the native cell membrane contribute to stabilizing the correct, functional protein assembly?
- Could the detergent-induced tetramer represent a strained, non-functional state that provides clues about channel gating or assembly?
- To what extent do other multi-subunit membrane proteins, including those vital for human health, exhibit similar structural instability in detergents?

## Results
This study successfully resolves a major debate in molecular biophysics by demonstrating that the SaMscL channel is a pentamer in its native state. The key finding is that the choice of detergent for *in vitro* analysis can artificially and reversibly alter a membrane protein's fundamental structure. This work underscores the absolute necessity of validating structural data with *in vivo* experiments to ensure biological accuracy—a foundational principle for all life science research, including the quest to understand and protect life beyond Earth.