---
url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11053165/"
chartData: "chartData:
  type: \"bar\"
  data:
    labels:
      - \"OSD-195 vs OSD-370 (17402 genes)\"
      - \"OSD-51 vs OSD-195\"
      - \"OSD-51 vs OSD-370\"
      - \"OSD-195 vs OSD-370 (reduced genes)\"
      - \"OSD-21 vs OSD-227 (Gastrocnemius)\"
      - \"OSD-111 vs OSD-227 (Soleus)\"
    datasets:
      - label: \"Pearson Correlation Coefficient\"
        data: [0.47, 0.26, 0.23, 0.64, 0.20, 0.02]
        backgroundColor: \"rgba(54, 162, 235, 0.7)\"
        borderColor: \"rgba(54, 162, 235, 1)\"
        borderWidth: 2
  options:
    responsive: true
    maintainAspectRatio: false
    plugins:
      legend:
        display: true
        position: \"top\"
        labels:
          color: \"#e0e7ff\"
          font:
            size: 14
            weight: \"600\"
            family: \"'Inter', system-ui, sans-serif\"
          padding: 20
          usePointStyle: true
          pointStyle: \"circle\"
      tooltip:
        backgroundColor: \"rgba(5, 8, 20, 0.95)\"
        titleColor: \"#f5f3ff\"
        bodyColor: \"#c7d2fe\"
        borderColor: \"rgba(167, 139, 250, 0.5)\"
        borderWidth: 1
        padding: 14
        cornerRadius: 8
        bodyFont:
          size: 14
        titleFont:
          size: 15
          weight: \"bold\"
    scales:
      x:
        grid:
          color: \"rgba(148, 163, 184, 0.2)\"
        ticks:
          color: \"#cbd5e1\"
          font:
            size: 12
      y:
        grid:
          color: \"rgba(148, 163, 184, 0.2)\"
        ticks:
          color: \"#cbd5e1\"
          font:
            size: 12
        beginAtZero: true
        min: 0
        max: 1.0
        stepSize: 0.1
        title:
          display: true
          text: \"Correlation Coefficient\"
          color: \"#cbd5e1\""
---
chartData:
  type: "bar"
  data:
    labels:
      - "OSD-195 vs OSD-370 (17402 genes)"
      - "OSD-51 vs OSD-195"
      - "OSD-51 vs OSD-370"
      - "OSD-195 vs OSD-370 (reduced genes)"
      - "OSD-21 vs OSD-227 (Gastrocnemius)"
      - "OSD-111 vs OSD-227 (Soleus)"
    datasets:
      - label: "Pearson Correlation Coefficient"
        data: [0.47, 0.26, 0.23, 0.64, 0.20, 0.02]
        backgroundColor: "rgba(54, 162, 235, 0.7)"
        borderColor: "rgba(54, 162, 235, 1)"
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
        min: 0
        max: 1.0
        stepSize: 0.1
        title:
          display: true
          text: "Correlation Coefficient"
          color: "#cbd5e1"