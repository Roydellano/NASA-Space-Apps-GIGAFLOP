---
title: "FAIRness and Usability Assessment of NASA's GeneLab and Other Open-access Omics Data Systems"
summary: "An evaluation of NASA's GeneLab and four other omics data systems against 14 FAIR principles (Findability, Accessibility, Interoperability, Reusability) revealed strong performance in data accessibility but significant shortcomings in interoperability. The study highlights the need for improved semantic standards to enhance data integration and reuse, a critical goal for accelerating space bioscience research."
publishDate: 2018-12-05T00:00:00Z
authors: ["Berrios DC", "Beheshti A", "Costes SV"]
tags: ["Technology", "Genetics", "Proteomics", "Metabolomics", "Earth"]
organisms: ["Others"]
experimentType: "Others"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759679941/jhsy0wzhgmvq7d6xwwrz.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Lack of community-wide semantic standards for omics data and analysis workflows", "Methods to automate semantic mapping and linking between disparate data repositories", "Best practices for ensuring submission of high-quality, rich metadata from researchers", "Strategies to improve indexing and discovery of omics datasets by general and specialized search engines"]
doi: "PMCID:PMC6371294"
journal: "AMIA Annual Symposium Proceedings"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6371294/"

chartData:
  type: "bar"
  data:
    labels:
      - "GeneLab Data Systems (GLDS)"
      - "Gene Expression Omnibus (GEO)"
      - "European Nucleotide Archive (ENA)"
      - "Metagenomics Analysis Server (MG-RAST)"
      - "Metabolights"
    datasets:
      - label: "Pass Ratings (%)"
        data: [79, 71, 64, 29, 71]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Partial Pass (%)"
        data: [21, 14, 0, 7, 7]
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 2
      - label: "Fail Ratings (%)"
        data: [7, 7, 36, 64, 21]
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
        max: 100
        title:
          display: true
          text: "Percentage of Metrics"
          color: "#cbd5e1"
---
# Introduction
The exponential growth of "omics" data (genomics, transcriptomics, proteomics, metabolomics) has created vast repositories of biological information. To maximize the value of these datasets, particularly those from rare spaceflight experiments, data must be easily shared, combined, and reused. The **FAIR Guiding Principles**—Findability, Accessibility, Interoperability, and Reusability—provide a framework for effective data stewardship. This study evaluates how well NASA's GeneLab Data Systems (GLDS) and similar platforms adhere to these principles, identifying critical areas for improvement to support the future of open science in space biology.

## Research Objective
The primary goal of this research was to conduct a systematic assessment of the FAIRness and usability of major omics data repositories. The specific objectives were to:
- Assess the compliance of NASA's GeneLab and four other open-access omics systems with **14 distinct FAIRness metrics**.
- Identify common strengths and weaknesses across these platforms in the core areas of findability, accessibility, interoperability, and reusability.
- Propose new design principles to enhance the usability of large-scale "Big Data" systems for the global research community.

## Key Findings
The comparative analysis revealed significant variability in FAIR compliance across the evaluated data systems, with interoperability emerging as a major challenge.

- The five systems had an **average FAIRness score of 10.1 out of a possible 14**, with individual scores ranging from 6 to 12.
- **Strengths:** Systems performed best in **Findability** and **Accessibility**. Most platforms successfully use globally unique and persistent identifiers (GUIDs) and employ open, standardized communication protocols for data access.
- **Major Weakness:** **Interoperability** was the lowest-scoring category. None of the systems fully utilized formal, machine-readable languages (e.g., RDF, OWL) with rich semantics for their metadata, making it difficult for computer systems to automatically integrate data from different sources.
- **Metadata Gaps:** The **reusability of metadata** was often poorly supported. Systems generally lacked the use of standardized community vocabularies and qualified semantic links to related data in other repositories.
- **GeneLab Performance:** NASA's GeneLab received a **Partial Pass** for key interoperability metrics due to its use of the ISATab metadata specification, which can be converted into a semantic format (RDF), placing it ahead of systems without such capabilities.
- **Proposed Principles:** The study introduced two new principles for Big Data systems: 1) use an **Integrated Credentialing and Authentication Architecture (ICAA)** to broaden user access securely, and 2) **co-locate data with analysis tools** to eliminate data transfer delays and improve usability.

## Methodology
The study employed a semi-quantitative, comparative analysis approach to evaluate the data systems.
- **Organisms/Subjects Studied:** The study did not focus on a specific organism but evaluated the data systems that house multi-organism omics data. The five systems analyzed were **NASA GeneLab (GLDS)**, Gene Expression Omnibus (GEO), European Nucleotide Archive (ENA), Metagenomics Analysis Server (MG-RAST), and Metabolights.
- **Experimental Conditions:** This was a ground-based computational analysis of existing public data repositories.
- **Key Techniques:** Each system was systematically evaluated against **14 draft metrics** from the GO FAIR Metrics group. The authors reached a consensus rating ("Pass," "Partial Pass," or "Fail") for each system on every metric.

## Importance for Space Missions
This assessment is crucial for **maximizing the scientific return from NASA's GeneLab**, the agency's primary repository for valuable and often irreplaceable spaceflight omics data.
- Improving the FAIRness of GeneLab, especially its **interoperability**, is essential for enabling researchers worldwide to integrate diverse datasets from spaceflight, ground analogs, and clinical studies.
- Enhanced data integration facilitates powerful **meta-analyses** that can uncover subtle biological signals, validate findings across experiments, and accelerate our understanding of astronaut health risks.
- A more usable and interoperable GeneLab directly supports the development of effective countermeasures for long-duration missions to the Moon, Mars, and beyond by making complex space biology data more accessible and useful.

## Knowledge Gaps & Future Research
The study identified several key areas where community-wide effort is needed to advance data stewardship in the life sciences.
- There is a critical lack of **community-accepted semantic standards** and ontologies for describing not only raw omics data but also processed results and the computational workflows that generate them.
- Research is needed to develop **automated tools for mapping and linking metadata** across different databases, which would significantly reduce the current reliance on time-consuming manual curation.
- New strategies and incentives are required to encourage researchers to **submit rich, high-quality metadata** alongside their datasets, as this is fundamental to long-term data reusability.
- Future work for GeneLab includes fully implementing **Digital Object Identifiers (DOIs)** for all datasets and deploying an analysis platform that co-locates data and tools to create a seamless user experience.

## Results
This study provides a vital benchmark for NASA's GeneLab and the broader omics community, demonstrating that while data systems have made strides in making data findable and accessible, true interoperability remains a significant hurdle. By highlighting specific shortcomings and proposing actionable solutions, the research offers a clear roadmap for improving data infrastructure. Implementing these recommendations will ensure that valuable biological data, especially from the unique environment of space, can be effectively integrated, reused, and translated into the knowledge needed to support humanity's future in space.