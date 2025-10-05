---
title: "Absence of γ-sarcoglycan alters the response of p70S6 kinase to mechanical perturbation in murine skeletal muscle"
summary: "A study in mice reveals that the muscle protein γ-sarcoglycan is crucial for deactivating the p70S6K growth signaling pathway after mechanical stress. Its absence, a model for muscular dystrophy, leads to prolonged, uncontrolled signaling, providing key insights into mechanotransduction pathways relevant to muscle atrophy in space."
publishDate: 2014-07-01T00:00:00Z
authors: ["Moorwood C", "Philippou A", "Spinazzola J", "Keyser B", "Macarak EJ", "Barton ER"]
tags: ["Musculoskeletal", "Genetics", "Microgravity", "Human Physiology"]
organisms: ["Mice"]
experimentType: "Ground Control"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759679310/zp4x46akbuwujnwszjtd.jpg"
readTime: 3
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["Mechanism by which γ-sarcoglycan promotes p70S6K deactivation", "Identity of the alternate pathway phosphorylating S6RP in γ-SG-null muscle", "Relevance of these findings from a dystrophy model to healthy muscle unloading", "Crosstalk between sarcoglycan and integrin-dependent signaling pathways"]
doi: "10.1186/2044-5040-4-13"
journal: "Skeletal Muscle"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4095884/"

chartData:
  type: "line"
  data:
    labels:
      - "Normal"
      - "Ca2+-Free"
      - "Tetracaine"
    datasets:
      - label: "P-p70S6K (T389)"
        data: [1.6, 1.7, 1.7]
        fill: false
        backgroundColor: "rgba(54, 162, 235, 0.25)"
        borderColor: "rgba(54, 162, 235, 1)"
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
        tension: 0.4
      - label: "P-ERK1"
        data: [3.0, 1.0, 0.5]
        fill: false
        backgroundColor: "rgba(255, 99, 132, 0.25)"
        borderColor: "rgba(255, 99, 132, 1)"
        pointBackgroundColor: "rgba(255, 99, 132, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
        tension: 0.4
      - label: "P-ERK2"
        data: [1.5, 1.0, 1.0]
        fill: false
        backgroundColor: "rgba(75, 192, 192, 0.25)"
        borderColor: "rgba(75, 192, 192, 1)"
        pointBackgroundColor: "rgba(75, 192, 192, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(75, 192, 192, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
        tension: 0.4
      - label: "P-S6RP"
        data: [8.0, 1.0, 4.0]
        fill: false
        backgroundColor: "rgba(153, 102, 255, 0.25)"
        borderColor: "rgba(153, 102, 255, 1)"
        pointBackgroundColor: "rgba(153, 102, 255, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(153, 102, 255, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
        tension: 0.4
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
          text: "Relative Activation"
          color: "#cbd5e1"
---

# Introduction
Skeletal muscle must sense and adapt to mechanical loads to maintain its size and strength, a process known as mechanotransduction. The dystrophin glycoprotein complex (DGC), a group of proteins at the muscle cell membrane, is a key player in this process, providing both structural support and a hub for cellular signaling. When components of the DGC, such as γ-sarcoglycan, are absent, it leads to severe muscular dystrophies. This study investigates the specific role of γ-sarcoglycan in translating mechanical force into biochemical signals, focusing on how its absence disrupts critical pathways that regulate muscle mass.

## Research Objective
The primary goal of this research was to define the role of γ-sarcoglycan in mechanosensitive signaling within skeletal muscle. The specific objectives were to:
- Investigate how the absence of γ-sarcoglycan alters signaling pathways in response to passive mechanical stretch.
- Determine the activation patterns of key signaling proteins, particularly **p70S6 kinase (p70S6K)**, in both normal and γ-sarcoglycan-deficient muscles.
- Assess the influence of calcium and the mTOR signaling pathway on the observed differences in mechanotransduction.

## Key Findings
- Basal activation of the growth-promoting protein **p70S6K was significantly elevated** in resting muscles from mice lacking γ-sarcoglycan (γ-SG-/-) compared to normal mice.
- This heightened p70S6K signaling was found to be **independent of both extracellular and intracellular calcium**, distinguishing it from other aberrant signaling pathways (like ERK1/2) that are calcium-dependent in dystrophic muscle.
- In normal muscle, passive stretch induced a **transient increase** in p70S6K activation, which returned to near-baseline levels after 90 minutes of stimulation.
- In contrast, γ-SG-/- muscle exhibited a **prolonged and sustained p70S6K activation** in response to stretch, suggesting γ-sarcoglycan is essential for the **inactivation or "turn-off" signal** for this pathway.
- When the upstream activator mTOR was blocked with rapamycin, stretch-induced phosphorylation of the downstream target S6RP was eliminated in normal muscle but **persisted in γ-SG-/- muscle**, indicating the activation of an alternate, compensatory signaling pathway.

## Methodology
- **Organisms:** The study utilized isolated extensor digitorum longus (EDL) muscles from wild-type C57BL/6 mice and γ-sarcoglycan-null (γ-SG-/-) mice, which serve as a model for limb-girdle muscular dystrophy.
- **Experimental Conditions:** Isolated muscles were subjected to *ex vivo* cyclic passive stretch (15% strain for up to 90 minutes) in an organ bath. This approach simulated mechanical loading without the confounding factors of active muscle contraction.
- **Key Techniques:** **Immunoblotting** was used to quantify the phosphorylation levels of key signaling proteins (p70S6K, S6RP, ERK1/2, Akt), which indicates their level of activation. Pharmacological inhibitors like rapamycin (mTOR inhibitor) were used to dissect the signaling cascade.

## Importance for Space Missions
Muscle atrophy due to mechanical unloading is a significant health risk for astronauts on long-duration missions. This research provides fundamental insights into **mechanotransduction**, the core process by which muscle cells sense and respond to physical forces. The p70S6K pathway is a central regulator of muscle protein synthesis and growth. This study's finding that a structural protein, γ-sarcoglycan, is critical for properly terminating this growth signal after stimulation is a major step forward. An inability to deactivate this pathway could lead to dysfunctional signaling and contribute to poor adaptation to changes in load, as experienced in microgravity. Understanding these molecular "off-switches" is vital for developing targeted countermeasures to preserve muscle mass and function during spaceflight.

## Knowledge Gaps & Future Research
- The precise molecular mechanism by which γ-sarcoglycan's presence leads to the deactivation of p70S6K is not yet understood. Identifying the specific phosphatases or inhibitory proteins involved is a critical next step.
- The identity of the alternative, mTOR-independent signaling pathway that phosphorylates S6RP in γ-SG-/- muscle needs to be determined.
- Further research is required to translate these findings from a muscular dystrophy model to healthy muscle experiencing the mechanical unloading of microgravity.
- The potential interplay and crosstalk between sarcoglycan-mediated signaling and other load-sensing systems in the muscle cell, such as integrins, remains an open area of investigation.

## Results
This study identifies a novel and critical function for the γ-sarcoglycan protein as a negative regulator of the p70S6K mechanosignaling pathway. By demonstrating that its absence leads to uncontrolled, prolonged signaling in response to mechanical stress, the research uncovers a key "braking" mechanism essential for normal muscle homeostasis. These findings not only deepen our understanding of the pathology of muscular dystrophies but also illuminate the intricate signaling networks that govern muscle adaptation to load, providing valuable insights for addressing muscle atrophy in space.