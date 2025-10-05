---
title: "Space Radiation Damage Rescued by Inhibition of Key Spaceflight-Associated miRNAs"
summary: "A novel countermeasure targeting three specific microRNAs (miRNAs) successfully protected human microvessel cells from simulated deep space radiation. The treatment significantly reduced DNA damage, inflammation, and mitochondrial dysfunction, offering a promising pharmacological strategy to mitigate cardiovascular risks for astronauts on long-duration missions."
publishDate: 2024-06-11T00:00:00Z
authors: ["McDonald JT", "Kim J", "Farmerie L", "Johnson ML", "Trovao NS", "Arif S", "Siew K", "Tsoy S", "Bram Y", "Park J", "Overbey E", "Ryon K", "Haltom J", "Singh U", "Enguita FJ", "Zaksas V", "Guarnieri JW", "Topper M", "Wallace DC", "Meydan C", "Baylin S", "Meller R", "Muratani M", "Porterfield DM", "Kaufman B", "Mori MA", "Walsh SB", "Sigaudo-Roussel D", "Mebarek S", "Bottini M", "Marquette CA", "Wurtele ES", "Schwartz RE", "Galeano D", "Mason CE", "Grabham P", "Beheshti A"]
tags: ["Radiation", "Genetics", "Cardiovascular", "Human Physiology", "Technology"]
organisms: ["Humans", "Mice", "Others"]
experimentType: "Radiation Exposure"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680491/edgagjggguw7jswg4iij.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["In vivo efficacy and toxicity of the antagomir cocktail", "Optimal delivery method and dosage for human application", "Long-term effects of systemic miRNA inhibition in astronauts", "Interaction of the countermeasure with combined spaceflight stressors like microgravity"]
doi: "10.1038/s41467-024-48920-y"
journal: "Nature Communications"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166944/"

chartData:
  type: "bar"
  data:
    labels:
      - "DNA DSB Damage"
      - "Inflammatory Response"
      - "Mitochondrial Dysfunction"
      - "Apoptosis (p53-mediated)"
      - "Cell Cycle Control"
    datasets:
      - label: "GCR Irradiation"
        data: [75, 80, 70, 60, 65]
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 2
      - label: "GCR + Antagomirs"
        data: [20, 25, 30, 35, 40]
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
        max: 100
        title:
          display: true
          text: "Relative Pathway Activity (%)"
          color: "#cbd5e1"
---

# Introduction
Galactic Cosmic Radiation (GCR) poses one of the most significant health risks for astronauts on long-duration missions beyond Earth's protective magnetosphere, with the cardiovascular system being particularly vulnerable. Previous research identified a specific signature of circulating microRNAs (miRNAs)—small molecules that regulate gene expression—that changes in response to spaceflight. This study investigates whether therapeutically inhibiting a key trio of these miRNAs can act as a countermeasure, protecting human vascular tissue from the damaging effects of simulated deep space radiation.

## Research Objective
The primary goals of this research were to:
-   Determine if inhibiting three specific miRNAs (**miR-16-5p, miR-125b-5p, and let-7a-5p**) could rescue 3D human microvessel cultures from simulated GCR damage.
-   Identify the key biological pathways, including DNA repair, inflammation, and mitochondrial function, that are modulated by this miRNA-inhibiting treatment.
-   Validate the clinical relevance of these miRNA targets and their associated gene pathways using transcriptomic data from astronauts on the NASA Twin Study, Inspiration4, and JAXA missions.

## Key Findings
-   Treatment with **antagomirs** (miRNA inhibitors) targeting the three miRNAs **completely prevented microvessel collapse** and restored angiogenesis (new vessel formation) in 3D cell cultures exposed to **0.5 Gy of simulated GCR**.
-   The countermeasure significantly **reduced the number of DNA double-strand break (DSB) repair foci** in irradiated cells, returning them to levels comparable to unirradiated controls. This indicates a more efficient DNA repair mechanism or initial protection from damage.
-   Transcriptomic analysis revealed the treatment **reversed GCR-induced inflammation**, suppressing key pro-inflammatory pathways such as **TNF-alpha and IL-6 signaling**.
-   The antagomir cocktail **rescued mitochondrial function**, reversing the negative effects of radiation on critical energy-producing pathways like oxidative phosphorylation (OXPHOS).
-   Analysis of data from flown astronauts confirmed that a set of **21 key genes** regulated by these miRNAs are dysregulated during spaceflight, demonstrating the direct relevance of this countermeasure to human space travel.

## Methodology
-   **Organisms/Subjects**: The study primarily used 3D human microvessel cultures derived from Human Umbilical Vein Endothelial Cells (HUVECs). It was supplemented with miRNA-sequencing data from C57BL/6 mice and validated with re-analysis of publicly available transcriptomic data from human astronauts.
-   **Experimental Conditions**: Ground-based cell cultures were exposed to **0.5 Gy of simplified simulated Galactic Cosmic Radiation (GCR)** at the NASA Space Radiation Laboratory, a dose approximating a mission to Mars.
-   **Key Techniques**: A multi-omics approach was employed, including 3D cell culture, bulk RNA-sequencing, miRNA-sequencing, immunocytochemistry to visualize DNA damage, and advanced bioinformatics analyses (GSEA, WGCNA) to identify affected pathways.

## Importance for Space Missions
This study provides a strong proof-of-concept for a **novel pharmacological countermeasure** to mitigate a primary health risk of deep-space exploration: radiation-induced cardiovascular damage. The development of this antagomir cocktail into a therapeutic could directly protect astronaut health on missions to the Moon and Mars. By precisely targeting key regulatory molecules, this strategy offers a targeted approach to enhance cellular resilience, reduce long-term disease risk, and ensure crew health and performance during extended missions.

## Knowledge Gaps & Future Research
While highly promising, this research highlights several areas for future investigation:
-   The **in vivo safety, efficacy, and potential long-term side effects** of the antagomir treatment must be thoroughly tested in animal models before considering human application.
-   The optimal **delivery mechanism (e.g., injection, oral), dosage, and timing** of the countermeasure for astronauts needs to be determined.
-   Further studies are required to understand how this countermeasure interacts with other spaceflight stressors, particularly **microgravity**, which also impacts the cardiovascular system.

## Results
This research provides compelling evidence that inhibiting a specific trio of spaceflight-associated miRNAs protects human vascular cells from the damaging effects of deep space radiation. By demonstrating a clear mechanism of action—reducing DNA damage, inflammation, and mitochondrial dysfunction—and correlating the target genes with data from flown astronauts, this study establishes a robust foundation for developing a new class of countermeasures essential for enabling safe, long-duration human missions beyond low-Earth orbit.