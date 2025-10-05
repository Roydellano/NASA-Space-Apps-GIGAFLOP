---
title: "A Novel Murine Model Simulates Mars Gravity to Study Musculoskeletal Adaptation"
summary: "Researchers developed a Partial Weight Suspension (PWS) system for mice to simulate reduced gravity. A 21-day study simulating Mars gravity (38% body weight) resulted in significant muscle and bone loss, including a 23% decrease in gastrocnemius mass and a 27% reduction in femoral strength, primarily due to suppressed bone formation. This model is crucial for understanding health risks on long-duration missions and for testing countermeasures."
publishDate: 2010-06-03T00:00:00Z
authors: ["Wagner EB", "Granzella NP", "Saito H", "Newman DJ", "Young LR", "Bouxsein ML"]
tags: ["Musculoskeletal", "Microgravity", "Technology", "Animals", "Human Physiology"]
organisms: ["Mice"]
experimentType: "Simulated Microgravity"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759681871/zc1e7jnsizfudqtnuhfy.jpg"
readTime: 3
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["The dose-response curve between gravitational loading levels (e.g., 10-80%) and the extent of musculoskeletal degradation.", "The long-term effects of partial gravity beyond 21 days and the potential for continued decline.", "Effectiveness of countermeasures (e.g., exercise, pharmaceuticals) within a partial gravity environment.", "The influence of confounding factors like single housing and harness effects versus the pure effects of reduced loading."]
doi: "10.1152/japplphysiol.00014.2009"
journal: "Journal of Applied Physiology"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3774184/"


chartData:
  type: "bar"
  data:
    labels:
      - "Age Controls"
      - "Jacket Controls"
      - "Mars Analog (38% WB)"
    datasets:
      - label: "Gastrocnemius Wet Mass (mg)"
        data: [118.73, 113.50, 90.88]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Trabecular BV/TV (%)"
        data: [18.97, 18.06, 14.34]
        backgroundColor: "rgba(255, 99, 132, 0.7)"
        borderColor: "rgba(255, 99, 132, 1)"
        borderWidth: 2
      - label: "Cortical Thickness (μm)"
        data: [238.30, 230.75, 212.44]
        backgroundColor: "rgba(75, 192, 192, 0.7)"
        borderColor: "rgba(75, 192, 192, 1)"
        borderWidth: 2
      - label: "Ultimate Moment (N·mm)"
        data: [29.10, 22.94, 21.20]
        backgroundColor: "rgba(153, 102, 255, 0.7)"
        borderColor: "rgba(153, 102, 255, 1)"
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
---

# Introduction
While the detrimental effects of weightlessness (0g) on the musculoskeletal system are well-documented, the physiological response to long-term exposure to partial gravity, such as that on the Moon (16% of Earth's gravity) or Mars (38% of Earth's gravity), remains a critical unknown. To address this gap, researchers developed and validated a novel ground-based model to simulate reduced gravitational loading in mice. This study aimed to quantify the musculoskeletal adaptation to a Mars-analog environment, providing crucial insights into the health risks faced by astronauts on future long-duration missions.

## Research Objective
The primary goals of this investigation were to:
- Develop and validate a new rodent model, termed Partial Weight Suspension (PWS), capable of supporting mice in chronic, tunable conditions of reduced weight-bearing (10-80% of normal body weight).
- Conduct the first study of musculoskeletal adaptation to a simulated Mars-gravity environment (38% weight-bearing) over a 21-day period.
- Determine the specific changes in muscle mass, bone architecture, bone strength, and cellular bone activity resulting from this partial unloading.

## Key Findings
- **Significant Muscle Atrophy:** Mice exposed to simulated Mars gravity experienced a **23% reduction in gastrocnemius muscle wet mass** compared to fully weight-bearing, age-matched controls.
- **Deterioration of Trabecular Bone:** In the distal femur, a region rich in spongy trabecular bone, the Mars-analog group showed a **24% decrease in bone volume fraction (BV/TV)**. This loss was driven by a significant thinning of the trabeculae.
- **Cortical Bone Loss:** The dense, outer cortical bone was also affected. At the femoral midshaft, cortical thickness was reduced by **11%** in the Mars group compared to controls.
- **Compromised Bone Strength:** The architectural degradation translated directly to a loss of function. Mechanical testing revealed a **27% reduction in the ultimate failure moment** of the femur, indicating a significant increase in fracture risk.
- **Mechanism of Bone Loss Identified:** Histological analysis showed that bone loss was primarily caused by a **significant suppression of bone formation rates**. Parameters of bone resorption were largely unchanged, suggesting the imbalance was due to a lack of new bone being built rather than an increase in bone being broken down.
- **Model Validation:** The PWS system successfully maintained mice at the target 38% weight-bearing level and proved to be well-tolerated after an initial adaptation period, confirming its viability for future studies.

## Methodology
- **Organisms:** The study used 10-week-old female BALB/cByJ mice, an age where their skeletons are mature and analogous to the adult human skeleton.
- **Experimental Conditions:** A novel Partial Weight Suspension (PWS) system, utilizing a custom-fit harness and a calibrated spring, was designed to support mice and reduce their weight-bearing load to 38% of normal. The experiment ran for 21 days.
- **Key Techniques:** Researchers employed a multi-faceted approach, including:
    - **Micro-computed tomography (μCT)** to generate high-resolution 3D images and quantify changes in trabecular and cortical bone architecture.
    - **Three-point bending tests** to measure the mechanical properties and structural strength of the femur.
    - **Histomorphometry** on bone tissue sections to analyze cellular activity, including rates of bone formation and resorption.

## Importance for Space Missions
This study provides the first experimental evidence quantifying the musculoskeletal risks of living in a Mars-gravity environment. The results demonstrate that **38% gravity is not sufficient to prevent significant bone and muscle loss**, confirming that countermeasures will be essential for astronaut health on long-duration missions to the Martian surface. The PWS model is a pivotal technological development, offering a reliable ground-based platform to test the efficacy of various countermeasures—such as exercise regimens, nutritional supplements, and pharmaceuticals—in a simulated partial-gravity setting before they are deployed in space.

## Knowledge Gaps & Future Research
While foundational, this work highlights several key areas for future investigation:
- What is the precise dose-response relationship between different levels of partial gravity (e.g., lunar vs. Martian) and the degree of musculoskeletal decline?
- How do bone and muscle respond to partial gravity over longer durations that are more representative of a Mars mission?
- Can countermeasures developed for 0g effectively prevent degradation in a partial gravity environment, or are new strategies needed?
- Further studies are required to fully separate the effects of the experimental hardware (harness) and single housing from the pure effects of reduced loading.

## Results
In conclusion, this research successfully developed and validated a novel murine model for simulating partial gravity. The findings clearly demonstrate that a Mars-like gravitational environment induces rapid and significant deterioration of both muscle and bone, primarily by inhibiting new bone formation. This work underscores the critical challenge of musculoskeletal health for future human exploration of Mars and provides an essential tool for developing and testing the countermeasures needed to ensure astronaut safety and mission success.