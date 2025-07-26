import { useMemo } from 'react';

interface TimelineEntry {
  title: string;
  start: string;
  end: string;
  type: string;
  color: string;
}

interface TimeGrid {
  start: string;
  end: string;
  unit: 'month';
  showLabels: boolean;
}

interface RenderOptions {
  height: string;
  entryHeight: string;
  labelStyle: {
    fontSize: string;
    color: string;
  };
  showMarkers: boolean;
  markerStyle: {
    size: string;
    color: string;
  };
  spacingPerMonth: string;
}

interface HorizontalTimelineProps {
  direction?: 'rtl' | 'ltr';
  timeGrid: TimeGrid;
  entries: TimelineEntry[];
  renderOptions: RenderOptions;
}

const parseDate = (dateStr: string): Date => {
  const [month, year] = dateStr.split('/');
  return new Date(parseInt(year), parseInt(month) - 1);
};

const monthsDiff = (date1: Date, date2: Date): number => {
  return (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
};

const formatMonthYear = (date: Date): string => {
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

export default function HorizontalTimeline({
  direction = 'ltr',
  timeGrid,
  entries,
  renderOptions,
}: HorizontalTimelineProps) {
  const gridStart = useMemo(() => parseDate(timeGrid.start), [timeGrid.start]);
  const gridEnd = useMemo(() => parseDate(timeGrid.end), [timeGrid.end]);
  const totalMonths = monthsDiff(gridStart, gridEnd);
  const spacingValue = parseInt(renderOptions.spacingPerMonth);
  const totalWidth = totalMonths * spacingValue;

  const getPositionAndWidth = (start: string, end: string) => {
    const startDate = parseDate(start);
    const endDate = parseDate(end);
    const startOffset = monthsDiff(gridStart, startDate) * spacingValue;
    const width = monthsDiff(startDate, endDate) * spacingValue;
    return { startOffset, width };
  };

  const generateTimeLabels = () => {
    const labels = [];
    let currentDate = new Date(gridStart);

    while (currentDate <= gridEnd) {
      const offset = monthsDiff(gridStart, currentDate) * spacingValue;
      labels.push({
        date: formatMonthYear(currentDate),
        offset,
      });
      currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 3));
    }

    return labels;
  };

  return (
    <div
      style={{
        position: 'relative',
        height: renderOptions.height,
        width: `${totalWidth}px`,
        direction: direction,
      }}
    >
      {/* Time labels */}
      {timeGrid.showLabels && (
        <div
          style={{
            position: 'absolute',
            top: '-25px',
            left: 0,
            right: 0,
            height: '20px',
          }}
        >
          {generateTimeLabels().map((label, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${label.offset}px`,
                transform: 'translateX(-50%)',
                ...renderOptions.labelStyle,
              }}
            >
              {label.date}
            </div>
          ))}
        </div>
      )}

      {/* Timeline entries */}
      {entries.map((entry, index) => {
        const { startOffset, width } = getPositionAndWidth(entry.start, entry.end);
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${startOffset}px`,
              width: `${width}px`,
              height: renderOptions.entryHeight,
              backgroundColor: entry.color,
              top: `${index * (parseInt(renderOptions.entryHeight) + 4)}px`,
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            title={`${entry.title} (${entry.start} - ${entry.end})`}
          >
            {renderOptions.showMarkers && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: renderOptions.markerStyle.size,
                    height: renderOptions.markerStyle.size,
                    backgroundColor: renderOptions.markerStyle.color,
                    borderRadius: '50%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translate(50%, -50%)',
                    width: renderOptions.markerStyle.size,
                    height: renderOptions.markerStyle.size,
                    backgroundColor: renderOptions.markerStyle.color,
                    borderRadius: '50%',
                  }}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
} 