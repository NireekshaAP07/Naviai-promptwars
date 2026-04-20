/**
 * mockDataEngine.js
 * Simulates stadium zones with crowd density and queue times.
 */

export const INITIAL_SECTIONS = Array.from({ length: 10 }, (_, i) => ({
  id: `S${i + 1}`,
  name: `Section ${i + 1}`,
  density: Math.floor(Math.random() * 40) + 10, // Initial density 10-50%
  queueTime: Math.floor(Math.random() * 10) + 5, // Initial queue 5-15 min
  status: 'normal',
}));

export const generateNextState = (currentSections) => {
  return currentSections.map((section) => {
    // Randomly fluctuate density by +/- 5%
    const densityChange = Math.floor(Math.random() * 11) - 5;
    const newDensity = Math.min(100, Math.max(0, section.density + densityChange));

    // Randomly fluctuate queue time by +/- 2 min
    const queueChange = Math.floor(Math.random() * 5) - 2;
    const newQueueTime = Math.min(30, Math.max(1, section.queueTime + queueChange));

    // Determine status
    let status = 'normal';
    if (newDensity > 80) status = 'critical';
    else if (newDensity > 60) status = 'warning';

    return {
      ...section,
      density: newDensity,
      queueTime: newQueueTime,
      status,
    };
  });
};
