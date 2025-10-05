---
title: "Revisiting Horizontal Gene Transfer in the Tardigrade Genome: A Response to Scientific Controversy"
summary: "Following criticism of their initial claim of extensive horizontal gene transfer (HGT) in tardigrades, the authors re-analyzed multiple independent genome assemblies. They conclude that while the level of HGT is lower than first reported, it remains substantially elevated (3-7%) compared to other animals, suggesting HGT is a real and significant feature of the tardigrade genome."
publishDate: 2016-05-12T00:00:00Z
authors: ["Boothby TC", "Goldstein B"]
tags: ["Genetics", "Microbiology", "Animals", "Radiation", "Technology"]
organisms: ["Others"]
experimentType: "Others"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759681597/zfhx7assauh5qmm52t2x.jpg"
readTime: 3
priority: "medium"
consensusLevel: "controversial"
knowledgeGaps: ["The definitive percentage of HGT in the tardigrade genome", "The biological function of horizontally transferred genes, especially in relation to extremotolerance", "The molecular mechanisms enabling HGT in a multicellular animal", "The expression levels and functional relevance of most foreign genes"]
doi: "10.1073/pnas.1601149113"
journal: "Proceedings of the National Academy of Sciences of the United States of America"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4896697/"

chartData:
  type: "bar"
  data:
    labels:
      - "Original 212.3Mb"
      - "Bemm et al. (2)"
      - "Koutsovoulos et al. (5)"
      - "Arakawa (3)"
      - "Rotifer"
      - "C. elegans"
      - "D. melanogaster"
    datasets:
      - label: "HGT Index (%)"
        data: [7.1, 7.0, 3.8, 5.0, 8.5, 0.5, 0.3]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Prokaryotic only Aligns (Count)"
        data: [384, 370, 164, 250, 450, 20, 15]
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 2
      - label: "Class C Genes (%)"
        data: [4.6, 4.5, 2.5, 3.2, 5.0, 0.7, 0.4]
        backgroundColor: "rgba(75, 192, 192, 0.7)"
        borderColor: "rgba(75, 192, 192, 1)"
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
          text: "Percentage / Gene Count"
          color: "#cbd5e1"
---

# Introduction
Following a groundbreaking 2015 report suggesting that the tardigrade (*Hypsibius dujardini*) acquired an unprecedented amount of its genome (~17.5%) via horizontal gene transfer (HGT) from other organisms, the finding was met with skepticism from the scientific community. Critics argued that the results were likely an artifact of bacterial contamination in the genome assembly. This publication is the original authors' response, in which they re-analyze their data alongside newly available independent genome assemblies to address the controversy and test the robustness of their initial discovery.

## Research Objective
The primary goal of this study was to re-evaluate the extent of HGT in the tardigrade genome in light of recent criticism. The specific objectives were to:
- Address claims that the original findings were skewed by unfiltered microbial contamination.
- Compare HGT levels across multiple, independently generated *H. dujardini* genome assemblies using several bioinformatic methods.
- Determine if the evidence for elevated HGT in tardigrades holds up to the increased scrutiny and new data.

## Key Findings
- The authors acknowledge a key error in their original data submission: an outdated, larger genome assembly (252 Mb) was mistakenly uploaded to public databases, which contained ~40 Mb of sequences they had already flagged as microbial contamination.
- Re-analysis using three different bioinformatic methods on multiple independent assemblies yielded a revised, lower estimate of HGT. The proportion of foreign genes is now estimated to be between **3.8% and 7.1%**.
- While lower than the initial claim, this level of HGT is still **substantially elevated** compared to well-studied animals like *Drosophila melanogaster* (fruit fly) and *Caenorhabditis elegans* (nematode worm), which typically show less than 1% HGT.
- The argument for genuine HGT over contamination is strengthened by the finding that most foreign genes reside on DNA scaffolds that also contain native tardigrade genes.
- Crucially, these scaffolds show robust coverage from the sequencing reads of four independent projects, including data from tardigrades that were antibiotic-treated to remove contaminating bacteria.
- The authors counter the argument that a lack of expression for some foreign genes disproves HGT, noting that it is common for horizontally transferred genes to be silent or expressed at very low levels.

## Methodology
- **Organism:** The study focused on the genome of the tardigrade *Hypsibius dujardini*, a model organism for studying survival in extreme environments.
- **Experimental Approach:** This was a bioinformatic re-analysis, not a new wet-lab experiment. The authors analyzed their original genomic data alongside data from three other independent tardigrade genome sequencing projects. One of these projects used tardigrades that were starved, washed, and treated with antibiotics to minimize contamination.
- **Key Techniques:** HGT was assessed using multiple computational tools, including the **HGT index**, BLAST searches to identify genes with prokaryotic but not eukaryotic matches, and the "Class C" gene identification method. The **Anvi'o** visualization platform was used to map sequencing reads from different projects onto the genome assemblies to verify scaffold integrity.

## Importance for Space Missions
Tardigrades are organisms of immense interest to astrobiology and space bioscience due to their unparalleled ability to survive the vacuum of space, extreme temperatures, and high doses of radiation. Understanding the genetic basis for this resilience is a key goal for NASA. This study, by defending the core finding of elevated HGT, keeps a critical hypothesis alive: that tardigrades may have acquired some of their unique survival traits by "borrowing" genes from other extremophilic organisms like bacteria. If proven, this mechanism could offer a novel paradigm for bioengineering and developing countermeasures to protect biological systems, including astronauts, from the hazards of space.

## Knowledge Gaps & Future Research
The debate surrounding the tardigrade genome highlights several key unknowns. The scientific community has not yet reached a consensus on the true percentage of HGT, and the biological function of these foreign genes remains a major question. It is unclear if they are simply genomic fossils or if they actively contribute to the tardigrade's remarkable resilience. Future work must focus on:
- Using advanced, long-read sequencing technologies to create a definitive "gold-standard" tardigrade genome.
- Employing functional genomics (e.g., RNA-seq under stress conditions, CRISPR-based gene knockouts) to determine the role of specific foreign genes.
- Investigating the molecular pathways that allow a complex animal to successfully acquire and integrate DNA from foreign organisms.

## Results
This study serves as a critical update in an ongoing scientific debate, refining the initial claim of HGT in tardigrades. By acknowledging errors and incorporating data from other research groups, the authors present a more nuanced but still compelling case that the tardigrade genome is uniquely enriched with foreign genes. While the exact proportion remains controversial, the evidence suggests HGT is a real and significant feature of tardigrade biology. This finding reinforces the importance of studying the tardigrade genome to uncover novel biological mechanisms for surviving extreme environments relevant to space exploration.