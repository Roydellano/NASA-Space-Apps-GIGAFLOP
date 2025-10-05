---
title: "Selective Proliferation of Highly Functional Adipose-Derived Stem Cells in Microgravity Culture with Stirred Microspheres"
summary: "This study demonstrates that simulating microgravity using stirred microspheres selectively expands highly functional human adipose-derived stem cells. The technique increased the population of potent SSEA-3(+) cells by over 4-fold, enhancing their regenerative capabilities and suggesting a new method for biomanufacturing high-quality stem cells for therapeutic use on Earth and during space missions."
publishDate: 2021-03-04T00:00:00Z
authors: ["Mashiko T", "Kanayama K", "Saito N", "Shirado T", "Asahi R", "Mori M", "Yoshimura K"]
tags: ["Tissue Engineering", "Microgravity", "Technology", "Genetics", "Human Physiology"]
organisms: ["Humans"]
experimentType: "Simulated Microgravity"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759678908/ciq4csoytel6ehyze8nj.jpg"
readTime: 4
priority: "medium"
consensusLevel: "medium"
knowledgeGaps: ["Underlying molecular mechanisms of selective proliferation", "In vivo therapeutic efficacy of microgravity-cultured cells", "Long-term stability and function of expanded cell populations", "Direct comparison between simulated and actual spaceflight microgravity effects"]
doi: "10.3390/cells10030560"
journal: "Cells"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998608/"

chartData:
  type: "bar"
  data:
    labels:
      - "Poly Dish"
      - "Collagen Dish"
      - "Poly Beads (Static)"
      - "Collagen Beads (Static)"
      - "Poly Beads (Dynamic)"
      - "Collagen Beads (Dynamic)"
    datasets:
      - label: "SSEA-3 Proportional Increase (vs Poly Dish)"
        data: [1.0, 0.9, 2.3, 2.2, 4.4, 4.3]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "SSEA-3 Cell Number Increase (vs Poly Dish)"
        data: [1.0, 1.0, 1.2, 1.3, 2.7, 2.9]
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
          text: "Fold Increase (vs Poly Dish)"
          color: "#cbd5e1"

---
# Introduction
The therapeutic use of adult stem cells, such as human adipose-derived stem cells (hASCs), holds immense promise for regenerative medicine. However, their clinical effectiveness is often limited because standard laboratory cultures can reduce their "stemness" or regenerative potential. Within any population of hASCs, there exists a small, highly functional sub-population with superior therapeutic properties. This research investigates whether a novel culturing technique that simulates microgravity can selectively promote the growth of these elite stem cells, potentially unlocking their full therapeutic power.

## Research Objective
The primary goal of this study was to develop and validate a new method for expanding highly potent hASCs. The specific objectives were to:
-   Evaluate if a dynamic culture system using stirred microspheres to simulate microgravity could selectively increase the number of highly functional SSEA-3 positive (SSEA-3(+)) hASCs.
-   Characterize the biological properties of hASCs grown in this system, including their expression of key stemness genes.
-   Assess the functional capabilities of the cultured cells, such as their ability to proliferate, form networks, and differentiate into various cell types.

## Key Findings
The study found that the simulated microgravity environment significantly enhanced the quality and quantity of the most potent stem cells.
-   After one week, the dynamic microgravity culture increased the proportion of highly functional **SSEA-3(+) hASCs by 4.4-fold** (using polystyrene microspheres) and **4.3-fold** (using collagen microspheres) compared to standard static cultures.
-   Crucially, this was not just a concentration effect; the absolute number of SSEA-3(+) cells increased by **2.7-fold and 2.9-fold**, respectively, demonstrating active proliferation.
-   Gene expression analysis showed that cells from the microgravity culture had significantly upregulated levels of key pluripotent markers, including **OCT4, SOX2, NANOG, MYC, and KLF4**.
-   Functionally, these cells demonstrated superior abilities in **colony formation**, **in vitro network formation** (a proxy for blood vessel creation), and enhanced differentiation into **adipogenic (fat), osteogenic (bone), and chondrogenic (cartilage) lineages**.
-   The combination of microspheres and dynamic, multidirectional stirring was essential for achieving the most significant improvements in stem cell quality.

## Methodology
-   **Organisms**: Human adipose-derived stem cells (hASCs) were isolated from lipoaspirates of healthy female donors.
-   **Experimental Conditions**: A ground-based microgravity simulation was created using a **wave-stirring shaker**. hASCs were attached to either polystyrene or collagen microspheres (100-300 μm in diameter) and continuously stirred in three dimensions, minimizing the cumulative gravity vector. This was compared to cells grown on the same microspheres under static conditions and in standard monolayer dish cultures.
-   **Key Techniques**: **Flow cytometry** was used to identify and quantify the SSEA-3(+) cell sub-population. **Quantitative Real-Time PCR (RT-PCR)** measured the expression of stemness-related genes. Functional capabilities were assessed through **colony-forming assays, network formation assays, and multilineage differentiation assays**.

## Importance for Space Missions
This research has significant implications for long-duration space exploration and the field of space-based biomanufacturing.
-   **On-Demand Therapeutics**: The ability to rapidly expand high-quality stem cells in microgravity could enable on-demand regenerative therapies for astronauts. This could be used to treat conditions exacerbated by spaceflight, such as radiation damage, muscle atrophy, bone density loss, and impaired wound healing.
-   **Microgravity as a Tool**: This study demonstrates that microgravity is not just a challenge to overcome but a unique tool that can be harnessed to produce superior biological products. This supports the concept of using the International Space Station or future platforms for advanced biomanufacturing.
-   **Improved Cell-Based Research**: This technique provides a reliable ground-based model to study how microgravity affects stem cell behavior, helping to refine protocols for future spaceflight experiments and therapeutic applications.

## Knowledge Gaps & Future Research
While promising, this study opens several avenues for further investigation:
-   The precise molecular pathways through which simulated microgravity selectively promotes the proliferation of SSEA-3(+) cells remain to be fully elucidated.
-   The therapeutic effectiveness of these microgravity-expanded hASCs needs to be confirmed in animal models (*in vivo*) to validate their enhanced regenerative potential.
-   Further research is needed to optimize the culture protocol (e.g., stirring speed, microsphere material, duration) to maximize the yield of highly functional cells.
-   A direct comparison with cells cultured in actual spaceflight is necessary to determine if the ground-based simulation fully recapitulates the effects of true microgravity.

## Results
This study successfully demonstrates that a dynamic culture system using stirred microspheres effectively simulates microgravity to selectively proliferate a sub-population of human adipose-derived stem cells with superior functionality. By increasing both the proportion and absolute number of potent SSEA-3(+) cells, this novel technique offers a powerful new strategy for producing high-quality stem cells for regenerative medicine, with profound potential for both terrestrial therapies and astronaut healthcare during long-duration space missions.