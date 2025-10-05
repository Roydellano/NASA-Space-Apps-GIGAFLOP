---
title: "Microgravity Induces Pelvic Bone Loss through Osteoclastic Activity, Osteocytic Osteolysis, and Osteoblastic Cell Cycle Inhibition by CDKN1a/p21"
summary: "A 15-day spaceflight study in mice reveals that microgravity causes rapid bone loss through three distinct mechanisms: increased bone resorption by osteoclasts, active bone degradation by osteocytes (osteocytic osteolysis), and inhibition of new bone formation via p21-mediated cell cycle arrest in osteoblasts. These findings identify novel targets for countermeasures against bone loss on long-duration missions."
publishDate: 2013-04-18T00:00:00Z
authors: ["Blaber EA", "Dvorochkin N", "Lee C", "Alwood JS", "Yousuf R", "Pianetta P", "Globus RK", "Burns BP", "Almeida EAC"]
tags: ["Musculoskeletal", "Microgravity", "Genetics", "Proteomics", "Human Physiology"]
organisms: ["Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759678797/vwdxq93hegvj63b1slse.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Long-term persistence of osteocytic osteolysis and p21 inhibition in space", "Primary triggers for systemic p21 upregulation (e.g., oxidative stress)", "Translational relevance of these specific mechanisms to human astronauts", "Development of countermeasures targeting osteocytes and osteoblast cell cycle arrest"]
doi: "10.1371/journal.pone.0061372"
journal: "PLoS One"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3630201/"

chartData:
  type: "bar"
  data:
    labels:
      - "BV/TV (%)"
      - "Avg. Bone Thickness (mm)"
      - "Osteoclast # (Oc/mm)"
      - "Oc-covered surface (%)"
      - "Lacunae Area (%)"
      - "Lacunae Perimeter (%)"
      - "Canalicular Diameter (%)"
    datasets:
      - label: "Ground Control"
        data: [77.7, 0.15, 3.36, 9.99, 100, 100, 100]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
        borderWidth: 2
      - label: "Spaceflight"
        data: [72.8, 0.13, 9.99, 25.4, 117, 114, 106]
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
          text: "Value / % Change"
          color: "#cbd5e1"
---

# Introduction
Bone loss during spaceflight is a well-documented and critical health risk for astronauts, significantly increasing fracture risk during long-duration missions. While it is known that mechanical unloading in microgravity increases the activity of osteoclasts (cells that break down bone), the full picture of skeletal degradation is incomplete. This study sought to determine if other cellular mechanisms, specifically active bone degradation by osteocytes (the most abundant bone cell type) and a shutdown of bone formation by osteoblasts, contribute to the rapid bone loss observed in space.

## Research Objective
The primary goals of this investigation were to:
- Quantify the extent of bone loss in the load-bearing pelvic region of mice after a 15-day spaceflight mission.
- Determine the relative contributions of osteoclastic resorption and osteocytic osteolysis (the process of osteocytes dissolving their surrounding mineralized matrix) to bone degradation.
- Identify the molecular pathways responsible for the suspected inhibition of bone formation, with a focus on cell cycle regulation in osteoblasts.

## Key Findings
- **Significant Pelvic Bone Loss:** After just 15 days in microgravity, mice exhibited a **6.29% decrease** in pelvic bone volume fraction and an **11.91% decrease** in overall bone thickness compared to ground controls.
- **Confirmation of Increased Osteoclast Activity:** The surface of trabecular bone covered by bone-resorbing osteoclasts **increased by 154%**, confirming the role of this established pathway in spaceflight-induced bone loss.
- **Novel Evidence for Osteocytic Osteolysis:** The lacunae (microscopic cavities housing osteocytes) showed significant enlargement, with a **17% increase in area** and a **14% increase in perimeter**. This provides strong evidence that osteocytes actively degrade their surrounding bone matrix in microgravity.
- **Upregulation of Matrix-Degrading Enzymes:** Gene expression for matrix metalloproteinases (MMPs), which break down bone matrix proteins, was dramatically increased. Specifically, **MMP10 showed a 16.85-fold increase** and was localized directly to osteocytes, linking them functionally to matrix degradation.
- **Inhibition of Bone Formation via p21:** The cell cycle inhibitor gene **CDKN1a/p21 showed a 3.31-fold increase** in expression in bone tissue. The p21 protein was found concentrated in the nuclei of osteoblasts, indicating a direct halt to their proliferation and ability to form new bone.
- **A p53-Independent Pathway:** The increase in p21 occurred independently of the well-known tumor suppressor p53, which was unexpectedly down-regulated. This suggests a unique stress-response pathway is activated by mechanical unloading in space.

## Methodology
- **Organisms:** The study used 16-week-old female C57BL/6J mice.
- **Experimental Conditions:** A flight group of mice was flown for 15 days aboard the Space Shuttle Discovery (mission STS-131) and compared to a matched, synchronous ground control group housed in identical conditions.
- **Key Techniques:** Bone structure was analyzed using micro-computed tomography (µCT) and nano-computed tomography (nanoCT). Cellular activity was assessed with TRAP staining for osteoclasts, while gene and protein expression changes were measured using RT-qPCR and immunohistochemistry.

## Importance for Space Missions
This study fundamentally expands our understanding of bone loss in space by demonstrating it is a multi-pronged attack on the skeleton. Beyond just accelerated bone breakdown, microgravity also actively shuts down bone formation and triggers degradation by a previously underappreciated cell type, the osteocyte. Identifying the **CDKN1a/p21 pathway as a key inhibitor of osteoblasts** provides a crucial new molecular target for developing countermeasures to stimulate bone regeneration during missions to the Moon and Mars. Future therapies may need to address all three mechanisms—osteoclastic resorption, osteocytic osteolysis, and osteoblastic inhibition—to effectively protect astronaut skeletal health.

## Knowledge Gaps & Future Research
- It is unknown if the observed osteocytic osteolysis and p21-mediated inhibition are acute responses to microgravity or if they persist throughout long-duration missions.
- The systemic trigger for the widespread upregulation of p21 in bone and muscle tissue remains to be identified; oxidative stress is a likely candidate requiring further investigation.
- Further research is needed to confirm if these precise mechanisms are active in human astronauts and to what extent they contribute to bone loss.
- The development of specific countermeasures that can safely inhibit MMP activity in osteocytes or block the p21 pathway in osteoblasts without adverse side effects is a critical next step.

## Results
This research significantly advances our understanding of skeletal adaptation to microgravity by demonstrating that bone loss is not solely a function of overactive osteoclasts. The dual discoveries of **osteocytic osteolysis** and **p21-mediated osteoblast cell cycle arrest** identify fundamental biological responses to mechanical unloading. These findings underscore the complexity of maintaining bone health in space and open new avenues for developing targeted therapies essential for ensuring crew safety on future missions to the Moon, Mars, and beyond.