const LCAParent = (node0, node1) => {
  let depth0 = getDepth(node0), depth1 = getDepth(node1);
  
  // Make depth0 the larger value for simplicity's sake
  if (depth1 > depth0) {
    let temp = node0;
    node0 = node1
    node1 = temp;
  }
  
  // Ascend node0 until depths are the same
  let depthDiff = Math.abs(depth0 - depth1);
  while (depthDiff-- > 0) {
    node0 = node0.parent;
  }
  
  // Ascend both nodes until we find LCA;
  while (node0 != node1) {
    node0 = node0.parent;
    node1 = node1.parent;
  }
  
  return node0;
};

const getDepth = (node) => {
  let depth = 0;
  while (node.parent) {
    depth++;
    node = node.parent;
  }
  
  return depth;
};
