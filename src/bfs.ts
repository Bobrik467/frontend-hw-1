const bfs = (graph) => {
  if (typeof graph !== 'object' || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }

  const result: string[] = [];
  const queue: string[] = [];

  const start = Object.keys(graph)[0];
   queue.push(start);

   while (queue.length > 0) {
     const node = queue.shift();
     if (node === undefined) {
       continue;
     }
     result.push(node);

     for (const child of graph[node]) {
       queue.push(child);
     }


   }
  return result;
};

export default bfs;
