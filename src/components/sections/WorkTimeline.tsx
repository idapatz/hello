import HorizontalTimeline from '../HorizontalTimeline';

const timelineData = {
  timeGrid: {
    start: "01/2022",
    end: "07/2025",
    unit: "month" as const,
    showLabels: true
  },
  entries: [
    {
      title: "Werkstudentin · Vinokilo",
      start: "01/2019",
      end: "07/2020",
      type: "Werkstudium",
      color: "#6B7280"
    },
    {
      title: "Werkstudentin · Kulturclub Schon Schön",
      start: "07/2021",
      end: "12/2021",
      type: "Werkstudium",
      color: "#A855F7"
    },
    {
      title: "Werkstudentin · DIS AG",
      start: "07/2022",
      end: "01/2023",
      type: "Werkstudium",
      color: "#F59E0B"
    },
    {
      title: "Customer Success · PAXLY",
      start: "02/2023",
      end: "07/2023",
      type: "Werkstudium",
      color: "#10B981"
    },
    {
      title: "Praktikum · Energieberatung Rommel",
      start: "04/2023",
      end: "07/2023",
      type: "Praktikum",
      color: "#EF4444"
    },
    {
      title: "Assistenz GF · Energieberatung Rommel",
      start: "07/2023",
      end: "07/2025",
      type: "Werkstudium",
      color: "#3B82F6"
    },
    {
      title: "Projektmanagerin · Agent Systems",
      start: "12/2024",
      end: "04/2025",
      type: "Werkstudium",
      color: "#8B5CF6"
    },
    {
      title: "COO · Agent Systems",
      start: "04/2025",
      end: "07/2025",
      type: "Festanstellung",
      color: "#2563EB"
    }
  ],
  renderOptions: {
    height: "80px",
    entryHeight: "10px",
    labelStyle: {
      fontSize: "12px",
      color: "#1F2937"
    },
    showMarkers: true,
    markerStyle: {
      size: "6px",
      color: "#111827"
    },
    spacingPerMonth: "30px"
  }
};

export default function WorkTimeline() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-max">
        <HorizontalTimeline
          direction="rtl"
          timeGrid={timelineData.timeGrid}
          entries={timelineData.entries}
          renderOptions={timelineData.renderOptions}
        />
      </div>
    </div>
  );
} 