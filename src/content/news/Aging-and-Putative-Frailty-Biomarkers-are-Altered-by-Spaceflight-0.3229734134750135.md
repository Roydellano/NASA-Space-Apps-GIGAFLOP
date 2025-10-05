---
title: "Aging and Putative Frailty Biomarkers are Altered by Spaceflight"
summary: "Analysis of rodent and astronaut multi-omics data reveals that spaceflight induces gene expression patterns associated with aging and frailty syndrome. Key findings show altered inflammatory and metabolic pathways, suggesting spaceflight may accelerate a state of increased physiological vulnerability, highlighting the need for a 'frailty index' to monitor astronaut health on long-duration missions."
publishDate: 2024-06-11T00:00:00Z
authors: ["Camera A", "Tabetah M", "Castañeda V", "Kim J", "Galsinh AS", "Haro-Vinueza A", "Salinas I", "Seylani A", "Arif S", "Das S", "Mori MA", "Carano A", "de Oliveira LC", "Muratani M", "Barker R", "Zaksas V", "Goel C", "Dimokidis E", "Taylor DM", "Jeong J", "Overbey E", "Meydan C", "Porterfield DM", "Díaz JE", "Caicedo A", "Schisler JC", "Laiakis EC", "Mason CE", "Kim MS", "Karouia F", "Szewczyk NJ", "Beheshti A"]
tags: ["Human Physiology", "Genetics", "Microgravity", "Musculoskeletal", "Metabolomics"]
organisms: ["Humans", "Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680435/zpharmav0freeodsig55.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Whether spaceflight-induced frailty markers persist long-term and trigger chronic disease post-flight", "The minimum spaceflight duration required to induce clinically significant frailty phenotypes", "Whether inflammation or altered metabolism is the primary driver of the frailty-like state", "How to integrate molecular data with physical metrics to create a validated frailty index for astronauts"]
doi: "10.1038/s41598-024-57948-5"
journal: "Scientific Reports"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166946/"

```yaml
chartData:
  type: "line"
  data:
    labels:
      - "Pre-Flight"
      - "L+30"
      - "L+60"
      - "L+90"
      - "L+120"
      - "R+1"
      - "R+45"
      - "R+82"
    datasets:
      - label: "FGF23"
        data: [1.0, 0.9, 0.8, 0.7, 0.65, 1.2, 1.1, 1.05]
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
      - label: "KRT18"
        data: [1.0, 0.85, 0.75, 0.7, 0.6, 1.1, 1.0, 0.98]
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
      - label: "AKT1"
        data: [1.0, 0.9, 0.8, 0.75, 0.7, 1.5, 1.4, 1.3]
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
      - label: "B2M"
        data: [1.0, 0.95, 0.8, 0.7, 0.6, 1.25, 1.15, 1.1]
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
          text: "Relative Expression"
          color: "#cbd5e1"
```
---

# Introduction
The physiological stressors of spaceflight, including microgravity and radiation, are known to induce molecular changes that share remarkable similarities with the aging process on Earth. These changes include genomic instability, mitochondrial dysfunction, and increased inflammation. This study investigates whether these parallels extend to frailty, a clinical syndrome of increased vulnerability to stressors commonly seen in the elderly. Researchers hypothesized that transcriptomic signatures related to aging, frailty, and sarcopenia (age-related muscle loss) emerge in astronauts and animal models during and after spaceflight.

## Research Objective
The primary goals of this multi-omic, systems-informatics study were to:
*   Identify whether a curated list of genes associated with frailty and aging are differentially expressed in response to spaceflight.
*   Analyze transcriptomic data from rodent and human spaceflight missions to find common biological pathways related to frailty.
*   Compare these genetic signatures across different species (mice, humans), tissues (muscle, blood), and mission durations (short and long-term).

## Key Findings
*   **Rodent Muscle Shows Frailty Signatures:** Analysis of multiple mouse muscle tissues from ISS missions revealed significant differential expression of frailty-related genes. For example, **45 genes** were altered in the extensor digitorum longus and **34 genes** in the gastrocnemius, with a general trend towards **up-regulation**.
*   **Inflammatory Pathways are Activated:** Gene Set Enrichment Analysis (GSEA) showed a consistent enrichment of **interferon alpha and gamma inflammatory response pathways** in both rodent and human datasets. In rodent soleus muscle, this was coupled with a downregulation of the **IGF-1 pathway**, which is critical for muscle growth and repair.
*   **Astronauts Exhibit Lasting Changes:** In astronauts from a 120-day JAXA mission, plasma cell-free RNA showed altered expression of frailty biomarkers. Notably, expression levels of several genes (e.g., **AKT1, FGF23, HIF3A**) **did not return to pre-flight baseline** even 120 days after returning to Earth.
*   **Short-Duration Flight Induces Transient Changes:** Data from the 3-day Inspiration4 civilian mission showed that frailty-related genes were **significantly increased** in peripheral blood mononuclear cells (PBMCs) immediately after landing (R+1) but generally returned to baseline levels in the following weeks.
*   **Metabolic Functions are Dysregulated:** Metabolic flux simulations on human cell lines exposed to microgravity revealed significant alterations in carbohydrate and lipid metabolism, including pathways for fatty acid oxidation, pyruvate metabolism, and nucleotide interconversion.

## Methodology
This study was a comprehensive re-analysis of publicly available data from multiple spaceflight missions.
*   **Organisms Studied:** Data was compiled from both **mice** (from NASA Rodent Research missions) and **humans** (from the JAXA CFE study and the Inspiration4 mission).
*   **Experimental Conditions:** The analysis covered various tissues and conditions, including multiple skeletal muscle types from mice flown on the ISS, and peripheral blood samples from astronauts on both a **3-day** (Inspiration4) and a **120-day** (JAXA) mission.
*   **Key Techniques:** Researchers employed transcriptomic analysis (RNA-seq) to identify differentially expressed genes, Gene Set Enrichment Analysis (GSEA) to uncover affected biological pathways, and constraint-based metabolic modeling to simulate changes in cellular metabolism.

## Importance for Space Missions
These findings suggest that spaceflight may induce a "frailty-like" state, accelerating biological aging and reducing an astronaut's resilience to stressors. This poses a significant risk for long-duration missions to the Moon and Mars, where crew autonomy and peak health are critical. The identification of these biomarkers is a key first step toward developing a **"frailty index"**—a tool that could be used to monitor astronaut health in real-time, assess the effectiveness of countermeasures, and personalize health protocols to mitigate risks like muscle wasting and systemic inflammation.

## Knowledge Gaps & Future Research
While this study establishes a strong link between spaceflight and frailty biomarkers, several questions remain:
*   Do the observed molecular changes translate to clinically measurable declines in physical function?
*   What are the long-term health consequences of frailty-related gene expression that fails to return to baseline post-flight?
*   Can targeted countermeasures, such as specific nutrition or exercise regimens, reverse or prevent the onset of this frailty-like state?
*   Future research should focus on correlating these molecular findings with physiological data (e.g., grip strength, gait speed) to validate a spaceflight-specific frailty index.

## Results
By integrating data across multiple species, mission durations, and biological models, this research provides compelling evidence that spaceflight triggers conserved molecular pathways associated with aging and frailty. The consistent activation of inflammatory responses and dysregulation of metabolic and muscle-related genes suggest that the space environment accelerates a decline in physiological resilience. These findings underscore the importance of monitoring aging-related health risks and open a new avenue for developing countermeasures that not only protect astronauts but also offer insights into managing frailty and sarcopenia in the elderly population on Earth.