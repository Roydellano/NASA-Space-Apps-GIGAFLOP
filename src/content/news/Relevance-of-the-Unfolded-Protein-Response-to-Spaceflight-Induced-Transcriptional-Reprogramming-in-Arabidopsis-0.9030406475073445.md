---
title: "Relevance of the Unfolded Protein Response to Spaceflight-Induced Transcriptional Reprogramming in Arabidopsis"
summary: "A study on Arabidopsis seedlings grown aboard the ISS reveals that spaceflight triggers unique gene expression changes, surprisingly making the critical Earth-based stress pathway, the Unfolded Protein Response (UPR), less essential. This suggests spaceflight activates robust compensatory pathways, offering new targets for engineering resilient crops for space."
publishDate: 2021-03-01T00:00:00Z
authors: ["Angelos E", "Ko DK", "Zemelis-Durfee S", "Brandizzi F"]
tags: ["Genetics", "Microgravity", "Technology", "Earth"]
organisms: ["Arabidopsis"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759683074/rh9j8wwjirsn9hbgksdc.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["Identification of the specific signaling pathways that compensate for UPR's reduced role in spaceflight.", "The molecular mechanism activating light-response genes in dark-grown seedlings in space.", "The nature of the antagonistic relationship between UPR regulators bZIP28 and bZIP60.", "Applicability of findings from dark-grown seedlings to photosynthetically active plants."]
doi: "10.1089/ast.2020.2313"
journal: "Astrobiology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7987364/"

chartData:
  type: "bar"
  data:
    labels:
      - "WT"
      - "atire1"
      - "bzip28"
      - "bzip60"
      - "bzip28 bzip60"
    datasets:
      - label: "Upregulated DEGs in Flight"
        data: [1675, 1500, 1450, 1370, 1293]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Downregulated DEGs in Flight"
        data: [831, 758, 635, 760, 562]
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
          text: "Number of DEGs"
          color: "#cbd5e1"
---

# Introduction
For humanity to establish a long-term presence in space, the ability to grow plants for food, oxygen, and psychological well-being is essential. However, the spaceflight environment—with its microgravity, radiation, and confinement—imposes significant stress on plants. On Earth, the Unfolded Protein Response (UPR) is a crucial signaling pathway that helps cells cope with environmental stress. This study investigated whether the UPR plays a similarly vital role in how plants adapt to the unique challenges of growing in orbit.

## Research Objective
The primary goals of this research were to:
- Perform a large-scale comparative transcriptome analysis of *Arabidopsis thaliana* seedlings grown on the International Space Station (ISS) versus on the ground.
- Determine the significance of the UPR pathway in spaceflight adaptation by studying wild-type plants alongside several UPR-defective mutants.
- Identify the biological processes and gene networks that are reprogrammed in response to spaceflight.

## Key Findings
- **Massive Transcriptional Reprogramming:** Spaceflight substantially altered gene expression in wild-type *Arabidopsis*. Compared to ground controls, **1,675 genes were significantly upregulated** and **831 genes were downregulated**.
- **UPR's Role is Diminished in Space:** While UPR-defective mutants showed distinct gene expression patterns on the ground, these differences were largely erased in space. The transcriptomes of wild-type and mutant plants became **nearly uniform in the spaceflight condition**.
- **Compensatory Pathways Activated:** The findings strongly suggest that spaceflight activates alternative signaling pathways that **compensate for the loss of UPR regulators**. These compensatory mechanisms appear to override the need for the UPR in controlling downstream stress-related genes.
- **Higher RNA Content in Flight:** Seedlings grown in space had **significantly higher total RNA content**, particularly ribosomal RNA (rRNA), compared to ground samples. This may indicate a different metabolic state or better nutrient availability due to altered growth patterns in microgravity.
- **Anomalous Light Signaling:** Despite being grown in complete darkness, flight samples showed upregulation of genes related to **light and phytochrome signaling**, a response not seen in ground controls. This may be linked to physical contact with the growth media or exposure to space radiation.
- **New UPR Regulator Interaction:** Analysis of ground control data revealed a previously unknown **antagonistic regulatory relationship** between the UPR transcription factors bZIP28 and bZIP60 in controlling abiotic stress responses.

## Methodology
- **Organisms:** The study used *Arabidopsis thaliana* wild-type (Col-0) and several loss-of-function mutants for key UPR components (*ire1a ire1b*, *bzip60*, *bzip28*, and the *bzip28 bzip60* double mutant).
- **Experimental Conditions:** Seedlings were germinated and grown for **14 days in complete darkness** aboard the ISS during the SpaceX-CRS12 mission, using Biological Research in Canister-Petri Dish Fixation Units (BRIC-PDFU). An identical ground control experiment was conducted in an ISS Environmental Simulator.
- **Key Techniques:** At the end of the growth period, seedlings were preserved in RNAlater. **RNA-sequencing (RNA-seq)** was performed on the extracted RNA to profile global gene expression. Data were analyzed using bioinformatics tools to identify differentially expressed genes and enriched biological pathways.

## Importance for Space Missions
This research provides foundational knowledge for developing plants adapted to extraterrestrial environments. The key takeaway is that engineering plant resilience for space may require focusing on pathways beyond the well-known UPR. Understanding that spaceflight itself triggers robust compensatory mechanisms opens new avenues for selecting or creating crop varieties that are naturally better suited for space cultivation. Furthermore, insights into how microgravity affects growth and nutrient access can inform the design of advanced life support systems and plant habitats for future Mars missions.

## Knowledge Gaps & Future Research
This study highlights several critical areas for future investigation:
- What are the specific compensatory signaling pathways that make the UPR redundant in spaceflight?
- How does microgravity-induced media contact or radiation exposure trigger light-related signaling in the dark?
- What is the precise molecular mechanism behind the antagonistic interaction between bZIP60 and bZIP28, and how can it be leveraged to improve stress tolerance on Earth?
- Do these findings in dark-grown, etiolated seedlings hold true for mature, photosynthetically active plants grown under light in space?

## Results
In conclusion, this study provides a new perspective on plant adaptation to space. It demonstrates that while spaceflight induces widespread transcriptional changes, the UPR pathway—a cornerstone of stress response on Earth—plays a surprisingly minor role. Instead, plants appear to activate a different set of rules for gene regulation, relying on alternative pathways to cope with the novel environment. These findings are crucial for redirecting efforts in biotechnology and synthetic biology toward developing resilient crops essential for sustainable, long-duration human space exploration.