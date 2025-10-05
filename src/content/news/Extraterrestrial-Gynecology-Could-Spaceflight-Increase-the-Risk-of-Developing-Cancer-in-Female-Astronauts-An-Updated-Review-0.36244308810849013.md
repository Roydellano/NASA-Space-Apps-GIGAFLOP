---
title: "Extraterrestrial Gynecology: Could Spaceflight Increase the Risk of Developing Cancer in Female Astronauts? An Updated Review"
summary: "This comprehensive review assesses the potential risk of gynecological cancers for female astronauts due to space radiation and microgravity. It highlights a significant lack of direct evidence but points to animal studies and viral reactivation as key concerns, emphasizing the urgent need for targeted research to ensure astronaut safety on long-duration missions."
publishDate: 2022-07-05T00:00:00Z
authors: ["Drago-Ferrante R", "Di Fiore R", "Karouia F", "Subbannayya Y", "Das S", "Aydogan Mathyk B", "Arif S", "Guevara-Cerdán AP", "Seylani A", "Galsinh AS", "Kukulska W", "Borg J", "Suleiman S", "Porterfield DM", "Camera A", "Christenson LK", "Ronca AE", "Steller JG", "Beheshti A", "Calleja-Agius J"]
tags: ["Human Physiology", "Radiation", "Microgravity", "Genetics"]
organisms: ["Humans", "Mice", "Others"]
experimentType: "Others"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680208/wciumt3rjgpo0fethooz.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Combined effects of microgravity and chronic low-dose radiation on female reproductive tissues.", "Risk of oncogenic virus (e.g., HPV) reactivation during long-duration spaceflight.", "Long-term health impacts of hormonal contraception use in the space environment.", "Lack of appropriate animal models that replicate long-duration, mixed-field space radiation exposure."]
doi: "10.3390/ijms23137465"
journal: "International Journal of Molecular Sciences"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9267413/"

chartData:
  type: "radar"
  data:
    labels:
      - "Ovarian Sensitivity"
      - "Radiation Dose (mGy)"
      - "Permanent Sterility (age 15-40)"
      - "Cancer Risk"
      - "Immune Dysregulation"
      - "Viral Reactivation"
    datasets:
      - label: "Spaceflight Environment"
        data: [90, 1000, 50, 80, 75, 70]
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
      - label: "Terrestrial Baseline"
        data: [30, 1, 0, 15, 20, 10]
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
As humanity plans for long-duration missions to the Moon and Mars, understanding the unique health risks for a diverse astronaut corps is paramount. The space environment presents multiple hazards, primarily microgravity and high-energy galactic cosmic radiation (GCR), which can impact human physiology in complex ways. This review synthesizes current scientific knowledge to address a critical question: does spaceflight increase the risk of developing gynecological cancers in female astronauts? By examining data from terrestrial, simulated, and spaceflight studies, the authors aim to define the potential risks and identify crucial gaps in our understanding.

## Research Objective
This review aimed to provide a comprehensive summary of the research concerning spaceflight and gynecological cancer risk. The primary goals were:
- To review the known effects of the two main space-environmental factors, **space radiation and microgravity**, on the female reproductive system.
- To evaluate existing *in vitro* (cell-based) and *in vivo* (animal) studies related to gynecological cancer development in simulated and real space conditions.
- To identify critical knowledge gaps and outline future research priorities needed to develop effective screening protocols and countermeasures for female astronauts.

## Key Findings
The review consolidated evidence from a wide range of studies, revealing a field with more questions than answers, but with several key takeaways:
- There is **no direct evidence of increased gynecological cancer rates** in the current female astronaut population. However, this conclusion is limited by the small number of female astronauts and their relatively short-duration missions, primarily within the protective magnetic field of Low Earth Orbit.
- Animal models provide a significant cause for concern. In one key study, female mice exposed to simulated GCR (heavy iron ions) showed a **dramatically higher incidence of ovarian tumors**, with **47%** developing unilateral tumors compared to just **14%** in the unexposed control group.
- Simulated microgravity has complex and sometimes contradictory effects on cancer cells *in vitro*. While it can induce apoptosis (programmed cell death) in some cancer cell lines, it also alters key signaling pathways (e.g., PI3K/Akt) involved in cell survival, proliferation, and resistance to chemotherapy.
- Spaceflight is known to cause immune system dysregulation, leading to the **reactivation of latent viruses** like Epstein-Barr virus (EBV) and cytomegalovirus (CMV). This raises a potential, though unproven, risk for the reactivation of oncogenic viruses like **Human Papillomavirus (HPV)**, the primary cause of cervical cancer.
- A major limitation is the reliance on terrestrial analogs. Ground-based studies cannot fully replicate the unique, chronic, low-dose, mixed-field radiation environment of deep space, making direct risk extrapolation difficult.

## Methodology
This publication is a **comprehensive literature review** and does not present new experimental data. The authors synthesized findings from a broad array of scientific studies, including:
- **Organisms/Subjects:** Data from human astronaut health monitoring, animal models (primarily mice and rats), and various human gynecological cancer cell lines (ovarian, cervical, endometrial).
- **Experimental Conditions:** The review analyzed data from actual spaceflight missions on the International Space Station (ISS), ground-based microgravity simulators (e.g., clinostats, Random Positioning Machines), and particle accelerators that simulate components of GCR.
- **Key Techniques Analyzed:** The paper covers research utilizing a range of techniques, including histology (tissue analysis), molecular biology (gene and protein expression), and systems biology approaches to assess cellular changes and carcinogenesis.

## Importance for Space Missions
This review directly addresses a **critical health risk for long-duration exploration missions** to the Moon and Mars, where astronauts will face significantly higher cumulative radiation doses outside of Earth's protective magnetosphere. The findings are vital for:
- **Informing Medical Standards:** The evidence underscores the need to refine medical screening, in-flight monitoring, and post-flight surveillance protocols specifically for female astronauts.
- **Countermeasure Development:** Identifying the primary risk pathways is the first step toward developing and validating effective countermeasures, which may include optimized spacecraft shielding, radioprotective pharmaceuticals, and targeted dietary interventions.
- **Ensuring Crew Health:** Protecting the long-term health of an increasingly gender-diverse astronaut corps is essential for mission success and the future of human space exploration.

## Knowledge Gaps & Future Research
The authors highlight several critical areas where knowledge is lacking, which must be addressed to ensure astronaut safety:
- The **synergistic effects of combined microgravity and space radiation** on gynecological tissues are largely unknown and represent a top research priority.
- The long-term impact of using **hormonal contraceptives** in the deep space environment on cancer risk, drug effectiveness, and overall health is not understood.
- Further research is urgently needed to determine if **oncogenic viruses like HPV** are reactivated during spaceflight and how this might alter cancer risk.
- There is a significant lack of **omics data from female reproductive tissues** in NASA's GeneLab and other open science repositories, which limits our ability to model risks and identify protective mechanisms.

## Results
This review consolidates the sparse but concerning evidence regarding gynecological cancer risks associated with spaceflight. While definitive human data is not yet available, the potential threats from radiation-induced tumorigenesis in animal models, cellular dysregulation in microgravity, and immune-mediated viral reactivation are significant enough to warrant a focused, robust research effort. Addressing the identified knowledge gaps is essential for developing the evidence-based medical protocols and countermeasures required to protect the health of female explorers on pioneering missions to the Moon, Mars, and beyond.