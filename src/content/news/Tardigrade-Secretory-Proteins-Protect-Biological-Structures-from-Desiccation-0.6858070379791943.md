---
title: "Tardigrade Secretory Proteins Protect Biological Structures from Desiccation"
summary: "Study reveals that tardigrade Secretory-Abundant Heat Soluble (SAHS) proteins act as potent extracellular stabilizers, protecting cellular membranes from dehydration damage. These findings present a new class of biopreservatives with significant potential for stabilizing microbial systems for agriculture and space-based life support."
publishDate: 2024-05-25T00:00:00Z
authors: ["Lim S", "Reilly CB", "Barghouti Z", "Marelli B", "Way JC", "Silver PA"]
tags: ["Proteomics", "Microbiology", "Technology", "Genetics", "Microgravity"]
organisms: ["Others", "E. coli"]
experimentType: "Ground Control"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759681649/a2bbo4rp6ccztemgzgku.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Functional reason for the high diversity within the SAHS protein family", "Role of post-translational modifications like glycosylation in protective function", "Validation of the proposed 'cavity collapse' mechanism in crowded biological environments", "Applicability for preserving more complex cell types, like mammalian cells"]
doi: "10.1038/s42003-024-06336-w"
journal: "Communications Biology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11127935/"

chartData:
  type: "bar"
  data:
    labels:
      - "No Excipient"
      - "RvSAHS1"
      - "RvSAHS4"
      - "HeSAHS4"
      - "RvSAHS6"
      - "BSA"
      - "Trehalose"
    datasets:
      - label: "E.coli Survival (%)"
        data: [1, 10, 8, 7, 9, 2, 6]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "R. tropici Survival (Fold)"
        data: [1, 40, 35, 30, 38, 4.2, 16]
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
          text: "Survival Rate"
          color: "#cbd5e1"
---
# Introduction

The ability to preserve living cells and biological materials without refrigeration is a major challenge for biotechnology, medicine, and long-duration space missions. Nature offers solutions in organisms like tardigrades, which can survive extreme dehydration (anhydrobiosis) by producing unique protective molecules. While some tardigrade proteins are known to protect intracellular components, the role of secreted proteins remains less understood. This study investigates a specific family of tardigrade-specific intrinsically disordered proteins (TDPs) known as Secretory-Abundant Heat Soluble (SAHS) proteins to determine their mechanism and potential as extracellular biopreservatives.

## Research Objective

The primary goals of this research were to:
- Evaluate the ability of recombinantly expressed SAHS proteins to protect biological structures, such as lipid membranes and bacterial cells, from desiccation-induced damage.
- Determine the specificity of SAHS protein protection compared to other common proteins (e.g., BSA) and known protectants (e.g., trehalose).
- Investigate the structural changes SAHS proteins undergo in response to dehydration-mimicking conditions.
- Propose a mechanistic model explaining how SAHS proteins exert their protective effects.

## Key Findings

- **SAHS proteins specifically protect membranes and cells:** When added extracellularly, SAHS proteins prevented the fusion of lipid vesicles (liposomes) during drying, maintaining particle diameters below **200 nm**, whereas unprotected liposomes formed large aggregates over **3,000 nm**.
- **Superior protection for bacteria:** SAHS proteins dramatically improved the desiccation survival of bacteria. They provided a **~40-fold survival enhancement** for *Rhizobium tropici* (a biofertilizer model) and a **>10-fold enhancement** for *E. coli*. This effect was significantly greater than that of BSA (**4.2-fold**) and trehalose (**16-fold**) under the same conditions.
- **Protection is not universal:** In contrast to their powerful effect on membranes, SAHS proteins were **no more effective than BSA** in preserving the activity of the enzyme lactate dehydrogenase (LDH) from inactivation by drying. This suggests their primary role is stabilizing membranes, not preventing protein denaturation.
- **Structural transition upon dehydration:** Using circular dichroism, researchers observed that SAHS proteins transition from a primarily **β-sheet structure** in aqueous solution to a more **α-helical conformation** in a desiccation-mimicking solvent (TFE). The helical content increased from approximately **10% to 40%**.
- **"Cavity Collapse" model proposed:** Structural and molecular dynamics analyses suggest SAHS proteins possess a large internal cavity. Upon dehydration, water is lost from this cavity, causing the protein to collapse under external pressure. This allows it to act like a deformable "packing material" that physically shields membranes from mechanical stress and fusion.

## Methodology

- **Organisms/Subjects**: The study focused on four SAHS proteins from the tardigrades *Ramazzottius varieornatus* and *Hypsibius exemplaris*, which were recombinantly produced in *E. coli*.
- **Experimental Conditions**: The protective effects of the proteins were tested by drying POPC liposomes, *E. coli* cells, and *Rhizobium tropici* cells for 48 hours in the presence of desiccants.
- **Key Techniques**: **Dynamic Light Scattering (DLS)** was used to measure liposome size. Bacterial survival was quantified via **Colony-Forming Unit (CFU) assays**. Protein structural changes were analyzed using **Circular Dichroism (CD) spectroscopy** and **Molecular Dynamics (MD) simulations**.

## Importance for Space Missions

The discovery of SAHS proteins as potent, extracellular biopreservatives has direct implications for space exploration.
- **Advanced Life Support**: The ability to stabilize microbes like *R. tropici* without refrigeration is critical for developing sustainable agricultural systems (e.g., biofertilizers) for food production on the Moon or Mars.
- **Reduced Payload Mass and Energy**: By enabling room-temperature storage of sensitive biologicals, SAHS proteins could eliminate the need for power-hungry freezers, reducing payload mass and complexity for long-duration missions.
- **Astrobiology and Countermeasures**: Understanding the molecular strategies for desiccation tolerance provides fundamental insights into how life might survive in extreme extraterrestrial environments and informs the development of countermeasures to protect biological systems from the hazards of space.

## Knowledge Gaps & Future Research

While this study provides a significant leap in understanding SAHS proteins, several questions remain:
- Why do tardigrades express such a wide variety of SAHS proteins? Do they have different stabilities or target different structures?
- What is the functional role of N-linked glycosylation, which is predicted to occur near the cavity opening in many SAHS proteins but was absent in the bacterially-expressed versions?
- Can the proposed "cavity collapse" mechanism be experimentally validated in a complex, crowded biological environment?
- Could SAHS proteins be adapted or engineered to protect other high-value biologicals, such as vaccines, enzymes, or mammalian cells, for both space and terrestrial applications?

## Results

This research identifies tardigrade SAHS proteins as a novel class of highly effective membrane-stabilizing agents that function extracellularly. Their mechanism, distinct from intracellular protectants, appears to involve a structural collapse that allows them to physically cushion membranes against the stresses of dehydration. These findings not only advance our fundamental knowledge of anhydrobiosis but also introduce a powerful new tool for biotechnology, with clear applications for creating robust, shelf-stable living materials essential for future space missions and terrestrial industries.