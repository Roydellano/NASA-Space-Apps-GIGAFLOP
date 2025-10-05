---
title: "Impact of Microgravity and Lunar Gravity on Murine Skeletal and Immune Systems During Space Travel"
summary: "A study on the ISS reveals that lunar gravity (1/6 g) partially mitigates the severe bone loss and immune system atrophy caused by microgravity. However, it is not sufficient to fully protect against these adverse health effects, providing critical data for astronaut health during future Artemis missions."
publishDate: 2024-11-20T00:00:00Z
authors: ["Okamura Y", "Gochi K", "Ishikawa T", "Hayashi T", "Fuseya S", "Suzuki R", "Kanai M", "Inoue Y", "Murakami Y", "Sadaki S", "Jeon H", "Hayama M", "Ishii H", "Tsunakawa Y", "Ochi H", "Sato S", "Hamada M", "Abe C", "Morita H", "Okada R", "Shiba D", "Muratani M", "Shinohara M", "Akiyama T", "Kudo T", "Takahashi S"]
tags: ["Musculoskeletal", "Immunology", "Microgravity", "Genetics", "Animals"]
organisms: ["Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759681068/cjmqpkjwspie4wx3iwoy.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["The precise gravitational threshold needed to prevent physiological changes in different organs", "Long-term health effects of partial gravity exposure beyond ~30 days", "Molecular mechanisms driving organ-specific sensitivity to gravity", "Direct applicability of murine findings to human physiology during lunar missions"]
doi: "10.1038/s41598-024-79315-0"
journal: "Scientific Reports"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11579474/"

chartData:
  type: "radar"
  data:
    labels:
      - "Thymus Atrophy"
      - "Bone Loss (Trabecular BV/TV)"
      - "Cortical Bone Thickness"
      - "Osteoclast Marker (TRAP)"
      - "Osteoblast Marker (Osteocalcin)"
      - "Spleen Weight"
    datasets:
      - label: "Microgravity (MG)"
        data: [100, 100, 100, 100, 100, 100]
        fill: true
        backgroundColor: "rgba(255, 99, 132, 0.25)"
        borderColor: "rgba(255, 99, 132, 1)"
        pointBackgroundColor: "rgba(255, 99, 132, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
      - label: "Lunar Gravity (1/6g PG)"
        data: [78, 40, 88, 85, 50, 95] # Estimated relative to MG (100) and 1G (0)
        fill: true
        backgroundColor: "rgba(75, 192, 192, 0.25)"
        borderColor: "rgba(75, 192, 192, 1)"
        pointBackgroundColor: "rgba(75, 192, 192, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(75, 192, 192, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
      - label: "Artificial 1g (AG)"
        data: [65, 5, 98, 5, 100, 99] # Estimated relative to MG (100) and 1G (0)
        fill: true
        backgroundColor: "rgba(54, 162, 235, 0.25)"
        borderColor: "rgba(54, 162, 235, 1)"
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
        pointBorderColor: "#fff"
        pointHoverBackgroundColor: "#fff"
        pointHoverBorderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 3
        pointRadius: 5
        pointHoverRadius: 7
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
      r:
        beginAtZero: true
        max: 100
        ticks:
          stepSize: 20
          color: "#94a3b8"
          backdropColor: "transparent"
          font:
            size: 12
        grid:
          color: "rgba(148, 163, 184, 0.2)"
          lineWidth: 1
        angleLines:
          color: "rgba(148, 163, 184, 0.2)"
          lineWidth: 1
        pointLabels:
          color: "#cbd5e1"
          font:
            size: 13
            weight: "600"
            family: "'Inter', system-ui, sans-serif"
---

# Introduction
Long-duration space missions expose astronauts to microgravity, which is known to cause significant health problems, including bone density loss and immune system dysfunction. With NASA's Artemis program aiming for a sustained human presence on the Moon, a critical question arises: is the Moon's partial gravity (approximately 1/6 of Earth's) sufficient to counteract these negative effects? This study provides a direct comparison by investigating how the skeletal and immune systems of mice respond to microgravity, artificial lunar gravity, and artificial Earth gravity during a 25-35 day stay on the International Space Station (ISS).

## Research Objective
The primary goal of this research was to quantify and compare the physiological and genetic responses of mice to different gravitational loads in space. The specific objectives were to:
-   Assess the impact of microgravity (MG), artificial lunar gravity (1/6 g), and artificial Earth gravity (1 g) on bone structure and density.
-   Evaluate changes in the weight, histology, and gene expression of primary (thymus) and secondary (spleen) immune organs.
-   Determine if exposure to 1/6 g could serve as a countermeasure to the adverse effects observed in a weightless environment.

## Key Findings
-   **Partial Bone Protection:** Mice in microgravity experienced a severe **70% decrease** in trabecular bone volume (BV/TV). In contrast, the lunar gravity group showed a more moderate but still significant loss of **28-30%**, while the 1 g group was almost completely protected.
-   **Bone Gene Expression:** Microgravity significantly altered the expression of genes related to bone formation and resorption, such as downregulating ***Bglap*** and upregulating ***Sost*** and ***Acp5***. These genetic changes were partially suppressed in the 1/6 g group and mostly normalized in the 1 g group.
-   **Thymus Atrophy Mitigation:** Microgravity induced a **43.4% reduction** in thymus weight compared to ground controls. Both lunar gravity and artificial 1 g partially mitigated this, limiting the reduction to approximately **20-24%**.
-   **Normal Thymus Structure:** While microgravity is known to cause structural abnormalities in the thymus, histological analysis revealed that the thymus structure in the 1/6 g group remained **histologically normal**.
-   **Spleen Gene Expression:** The spleen showed no major structural changes in any gravity condition. However, RNA-sequencing revealed that microgravity-induced downregulation of erythrocyte-related genes was partially rescued by both 1/6 g and 1 g loading.
-   **Organ-Specific Gravity Thresholds:** The results demonstrate that different organs respond differently to gravity. Bone appears highly sensitive and requires a significant gravitational load for maintenance, whereas the immune system shows partial recovery even at 1/6 g.

## Methodology
-   **Organisms:** C57BL/6J male mice were used for the spaceflight and ground control experiments.
-   **Experimental Conditions:** Mice were housed aboard the ISS for 25-35 days in the **Multiple Artificial-gravity Research System (MARS)**. This specialized habitat contains centrifuges that exposed different groups to microgravity (MG), artificial 1/6 g (lunar gravity), or artificial 1 g (Earth gravity).
-   **Key Techniques:** Bone structure was analyzed using **micro-computed tomography (µCT)**. Immune organs (thymus and spleen) were assessed through **histological staining** and **immunohistochemistry**. **RNA-sequencing (RNA-seq)** was employed to profile gene expression changes in all three tissues.

## Importance for Space Missions
This study provides the first direct, in-flight comparison of how key biological systems respond to lunar gravity versus microgravity. The findings are critically important for the **Artemis program** and future long-duration missions:
-   They indicate that the Moon's 1/6 g environment offers some protection but is **not sufficient** to completely prevent bone loss and immune system degradation.
-   This reinforces the need for robust countermeasures, such as specialized exercise regimens and nutritional support, for astronauts living and working on the lunar surface.
-   The data helps establish a framework for understanding the "gravity threshold" required for health, which is essential for planning missions to Mars (1/3 g) and designing artificial gravity systems.

## Knowledge Gaps & Future Research
While groundbreaking, this study highlights several areas requiring further investigation:
-   The exact gravitational force needed to maintain normal function in different organs is still unknown.
-   The long-term (months to years) health consequences of living in partial gravity have not been studied.
-   The molecular signaling pathways that cause organs to respond differently to gravity need to be identified.
-   Future research should focus on validating these findings in humans and developing targeted countermeasures for partial gravity environments.

## Results
This research successfully demonstrates that physiological responses to spaceflight are gravity-dependent. The finding that lunar gravity only partially mitigates bone and immune system decline is a crucial insight for future human exploration. By revealing organ-specific sensitivity to gravity, this work provides an essential foundation for developing effective health strategies to ensure astronaut well-being during extended missions on the Moon and, eventually, Mars.