const dfs = (graph: Record<string, string>) => {
  if (typeof graph !== 'object' || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }

  const result: string[] = [];
  const start = Object.keys(graph)[0];

  function traverse(node) {
    result.push(node);

    for (const child of graph[node]) {
      traverse(child);
    }
  }
  traverse(start);

  return result;
};

export default dfs;
