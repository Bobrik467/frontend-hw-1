const getNumberProps = (obj: unknown): string[] => {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const result: string[] = [];

  const traverse = (current: Record<string, unknown>) => {
    for (const [key, value] of Object.entries(current)) {
      if (typeof value === "number") {
        result.push(key);
      } else if (typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)) {
        traverse(value as Record<string, unknown>);
      }
    }
  };

  traverse(obj as Record<string, unknown>);

  return result.sort();
};

export default getNumberProps;
