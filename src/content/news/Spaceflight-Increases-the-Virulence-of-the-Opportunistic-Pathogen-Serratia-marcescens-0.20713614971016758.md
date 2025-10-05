---
title: "Spaceflight Increases the Virulence of the Opportunistic Pathogen Serratia marcescens"
summary: "Bacteria grown on the International Space Station were significantly more lethal to fruit flies than Earth-based controls. This study reveals that spaceflight induces temporary, reversible changes in the pathogen *Serratia marcescens*, increasing its growth rate and virulence, posing a heightened health risk for astronauts on long-duration missions."
publishDate: 2020-02-04T00:00:00Z
authors: ["Gilbert R", "Torres M", "Clemens R", "Hateley S", "Hosamani R", "Wade W", "Bhattacharya S"]
tags: ["Microbiology", "Microgravity", "Human Physiology", "Immunology"]
organisms: ["Drosophila melanogaster", "Serratia marcescens"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759680601/uadzmmyubcsq3oo8d3xk.jpg"
readTime: 3
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["The specific molecular mechanisms behind the temporary increase in bacterial virulence.", "How microgravity alters bacterial metabolism and growth kinetics on solid media.", "The role of the few host genes that were differentially expressed post-infection.", "Whether these findings apply to other opportunistic pathogens found on spacecraft."]
doi: "10.1038/s41526-019-0091-2"
journal: "NPJ Microgravity"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7000411/"

chartData:
  type: "line"
  data:
    labels:
      - "0h"
      - "6h"
      - "9h"
      - "12h"
      - "15h"
    datasets:
      - label: "Spaceflight Sample 1"
        data: [1000, 1000, 1200, 2500, 3000] # Estimated from Fig 1b
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
      - label: "Spaceflight Sample 2"
        data: [1000, 1000, 1000, 1500, 2000] # Estimated from Fig 1b
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
      - label: "Ground Control"
        data: [1000, 1000, 1000, 1000, 1050] # Estimated from Fig 1b
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
          text: "CFU/fly"
          color: "#cbd5e1"
---
# Introduction
Astronauts experience immune system dysregulation during space missions, making them more susceptible to infections. Compounding this risk, evidence suggests that the spaceflight environment can alter the characteristics of microorganisms. This study investigates the dual-risk scenario by examining whether spaceflight changes the virulence of *Serratia marcescens*, an opportunistic bacterium found on the International Space Station (ISS), using the fruit fly, *Drosophila melanogaster*, as a model host organism.

## Research Objective
The primary goal was to determine how spaceflight and simulated microgravity conditions affect the pathogenicity of *S. marcescens*. Specific objectives included:
- To compare the lethality of *S. marcescens* grown on the ISS versus identical ground-based controls.
- To determine if the increased virulence phenotype was a permanent genetic change or a temporary physiological adaptation.
- To assess whether ground-based microgravity simulation using a Rotating Wall Vessel (RWV) could replicate the effects observed in spaceflight.
- To investigate whether the increased mortality was due to changes in the pathogen itself or an altered immune response in the host.

## Key Findings
- **Increased Virulence After Spaceflight**: *Drosophila* infected with *S. marcescens* grown aboard the ISS showed **significantly lower survival** compared to flies infected with ground-control bacteria (**P < 0.0001**).
- **Effect is Reversible**: The heightened virulence was **not a permanent genetic change**. After being subcultured once on Earth, the space-flown bacteria's lethality returned to levels indistinguishable from the ground controls.
- **Simulated Microgravity Replicates Effects**: Bacteria grown in a ground-based Rotating Wall Vessel (RWV) to simulate microgravity also exhibited **significantly increased virulence** (hazard ratio = 3.37, P = 0.0002), suggesting microgravity is a key driver of the changes.
- **Pathogen-Driven Changes**: The increased lethality was observed in both wild-type flies and flies with compromised immune pathways (Imd and Toll). This indicates the changes occurred within the bacterium, making it more potent, rather than its ability to uniquely suppress the host immune system.
- **Accelerated In-Host Growth**: Space-flown bacteria displayed a **significantly higher growth rate** inside the host fly at later time points (**12 and 15 hours post-infection**), correlating with the increased mortality.
- **Minimal Host Immune Gene Changes**: RNA sequencing of infected flies revealed **only 11 differentially expressed genes**, with minimal changes to major immune pathways, further supporting that the primary changes are within the pathogen.

## Methodology
- **Organisms**: The opportunistic pathogen ***Serratia marcescens*** (strain Db11) and the model host ***Drosophila melanogaster*** (wild-type and immune-mutant strains).
- **Experimental Conditions**: Bacterial cultures were grown on solid media for 5-7 days aboard the **International Space Station**. Parallel ground controls were maintained in an incubator programmed to match the ISS environmental conditions. Ground-based **simulated microgravity** was achieved using a Rotating Wall Vessel (RWV).
- **Key Techniques**: Ground-reared fruit flies were injected with controlled doses of bacteria. **Survival analysis** (Cox Proportional Hazards model) was used to measure virulence. **In vivo bacterial load** was quantified by plating homogenized flies to count colony-forming units (CFUs). **RNA sequencing** was performed on infected flies to analyze host gene expression.

## Importance for Space Missions
This research has direct implications for crew health and safety. It demonstrates that a common environmental bacterium, known to be present on spacecraft, can become **more dangerous in space**. The finding that virulence increases due to temporary physiological adaptations suggests that the microbial threat is dynamic and can escalate during a mission. This underscores the critical need for:
- **Advanced microbial monitoring** systems on spacecraft to detect changes in resident microorganisms.
- **Strict hygiene protocols** to minimize astronaut exposure to potentially more virulent pathogens.
- Further research into countermeasures that can mitigate pathogen adaptation to the space environment.

## Knowledge Gaps & Future Research
While this study provides critical insights, several questions remain for future investigation:
- What are the precise molecular and metabolic mechanisms that cause the temporary, reversible increase in *S. marcescens* virulence?
- Why do microgravity-exposed bacteria exhibit faster growth kinetics at later stages of infection, and is this related to more efficient nutrient utilization under stress?
- This study is one of the first to show these effects for bacteria grown on solid media in space; how do these findings compare to bacteria grown in liquid culture?
- What is the functional role of the 11 host genes that were differentially expressed, and could they represent novel host-pathogen interaction pathways?

## Results
This study provides compelling evidence that the spaceflight environment induces significant, though reversible, physiological changes in the opportunistic pathogen *Serratia marcescens*, making it more virulent. The increased lethality appears to be driven by alterations in the bacterium's growth kinetics rather than its ability to overcome specific host immune pathways. The successful replication of these findings using a ground-based microgravity analog provides a valuable platform for further research into the underlying mechanisms and for developing countermeasures to protect astronaut health on future long-duration missions beyond low-Earth orbit.