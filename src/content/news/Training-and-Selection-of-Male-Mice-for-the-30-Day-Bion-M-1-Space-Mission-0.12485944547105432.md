---
title: "Training and Selection of Male Mice for the 30-Day Bion-M 1 Space Mission"
summary: "This study details the successful training and selection program for group-housed male mice for the 30-day Bion-M 1 biosatellite mission. While the training effectively mitigated aggression, significant animal loss due to a hardware malfunction and microgravity-related behaviors highlighted critical needs for future habitat design."
publishDate: 2014-08-18T00:00:00Z
authors: ["Andreev-Andrievskiy A", "Popova A", "Boyle R", "Alberts J", "Shenkman B", "Vinogradova O", "Dolgov O", "Anokhin K", "Tsvirkun D", "Soldatov P", "Nemirovskaya T", "Ilyin E", "Sychev V"]
tags: ["Animals", "Microgravity", "Human Physiology", "Technology", "Neurology"]
organisms: ["Mice"]
experimentType: "Spaceflight"
featuredImage: "https://res.cloudinary.com/dukrtt0na/image/upload/v1759678734/dhph3s8yfti0vziin84x.jpg"
readTime: 4
priority: "high"
consensusLevel: "medium"
knowledgeGaps: ["Optimal habitat design to prevent negative interactions with hardware in microgravity", "Long-term physiological effects of high water intake from specialized paste food diets", "Specific behavioral adaptations of mice to microgravity that lead to injury", "Mechanisms underlying post-flight sensorimotor and vestibular impairments"]
doi: "10.1371/journal.pone.0104830"
journal: "PLoS One"
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4136787/"

chartData:
  type: "line"
  data:
    labels:
      - "Pre-Transport"
      - "L-7d (Arrival)"
      - "L-6d"
      - "L-5d"
      - "L-4d"
      - "L-3d (Flight)"
    datasets:
      - label: "Mice Body Weight (g)"
        data: [25.0, 24.1, 24.5, 24.7, 24.9, 25.0]
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
          text: "Body Weight (g)"
          color: "#cbd5e1"
---
# Introduction
After a 16-year hiatus in Russian biomedical satellite research, the Bion-M 1 mission conducted a 30-day orbital flight to investigate the physiological effects of prolonged microgravity. This mission uniquely utilized group-housed male C57BL/6N mice, a model organism that presents challenges due to natural aggression but offers advantages in size and comparability to extensive ground-based research. This paper outlines the comprehensive training, selection, and experimental design developed to ensure animal welfare and maximize scientific return, providing critical insights for future long-duration rodent missions.

## Research Objective
The primary goals of this study were to:
- Develop and validate a training program to enable stable group housing of aggressive male mice for a 30-day automated spaceflight mission.
- Evaluate the physiological and behavioral adaptation of mice to prolonged microgravity and their subsequent re-adaptation to Earth's gravity.
- Combine in-flight measurements (telemetry, video) with extensive post-flight in vivo and in vitro analyses to understand the cellular and molecular mechanisms of spaceflight adaptation.

## Key Findings
- **Training Program Success**: The pre-flight co-adaptation protocol was highly effective at mitigating aggression. Only **14%** of the initial groups required rearrangement, and no deaths or injuries during the flight were attributed to fighting.
- **Mission Survival Rate**: A gross malfunction in one habitat's food distribution system resulted in the loss of 15 mice. In the two functional habitats, the survival rate was **53% (16 of 30 mice)**. The ground control experiment had a much higher survival rate of **84%**.
- **Post-Flight Motor Impairment**: Upon return, surviving mice exhibited severe motor dysfunction. **88%** could not maintain a steady posture, and **100%** showed an absent or impaired aerial righting reflex, indicating significant vestibular and sensorimotor disadaptation.
- **Behavioral Changes**: In post-flight open-field tests, spaceflight mice were markedly less active, with total distance moved reduced by over **50%** compared to pre-flight levels (from **83.9 m to 39.0 m**). They also displayed a significant increase in grooming duration, a potential indicator of stress.
- **In-Flight Behavior**: Video analysis revealed that mice spent the majority of their time huddled against the flat feeder wall, likely for stability (thigmotaxis). This behavior may have led to injuries from interactions with moving parts of the feeder system.
- **Diet and Hydration**: The specialized paste food diet resulted in a water intake approximately **three times higher** than normal, leading to a **10-fold increase** in urine production.

## Methodology
- **Organisms**: Male C57BL/6N mice, aged 19-20 weeks at launch, were used. Mice were pre-screened and selected for inclusion.
- **Experimental Conditions**: The study involved a 30-day spaceflight group (SF) aboard the Bion-M 1 biosatellite and a ground control group (GC) that replicated all flight conditions, including habitat, climate, and diet. Vivarium control groups were also maintained.
- **Key Techniques**: A multi-stage training program included **co-adaptation** to form stable social groups, adaptation to a specialized **paste food diet**, and baseline behavioral testing. In-flight monitoring was conducted using **video recording** and **implantable telemetry probes** for continuous blood pressure measurement. Post-flight analyses included behavioral tests (Open Field Test) and a comprehensive tissue-sharing program for in vitro studies.

## Importance for Space Missions
This study provides a critical proof-of-concept for using group-housed male mice in long-duration space research, expanding the models available for studying male-specific physiology. The successful implementation of **implantable telemetry** represents a major technological advance for collecting continuous physiological data during flight. However, the mission's challenges underscore a critical lesson: **habitat design must account for novel animal behaviors in microgravity**. The unexpected animal losses and injuries highlight the danger of accessible moving parts and the need for animal-centric engineering in future life support systems.

## Knowledge Gaps & Future Research
The Bion-M 1 mission revealed several key areas requiring further investigation:
- The design of habitats must be refined to eliminate potential hazards, such as moving components, and provide surfaces that facilitate safe movement and rest in microgravity.
- Further research is needed to understand the long-term health consequences of the high water intake associated with paste food diets.
- The precise behavioral patterns that lead to injury in microgravity need to be characterized to inform safer habitat design.
- The neurological and physiological bases for the severe post-flight motor deficits require deeper investigation to develop effective countermeasures.

## Results
The Bion-M 1 mouse experiment was a pioneering effort that successfully demonstrated the feasibility of conducting long-duration biomedical research with group-housed male mice. The rigorous pre-flight training program was effective in managing social dynamics, a significant hurdle for this model. While hardware failures and unexpected animal-habitat interactions led to significant animal loss, these outcomes provided invaluable and hard-won lessons for the design of future space habitats. The comprehensive dataset, including the first-ever use of telemetry in mice on such a mission, has laid the groundwork for more sophisticated investigations into the biological effects of space travel.