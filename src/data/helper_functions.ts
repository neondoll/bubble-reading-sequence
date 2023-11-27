const getComicIdToNodeId = (comic_id: string) => comic_id.replace("comic_", "node_");
const getNodeIdToComicId = (node_id: string) => node_id.replace("node_", "comic_");

export {getComicIdToNodeId, getNodeIdToComicId};