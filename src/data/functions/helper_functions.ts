const comicIdToNodeId = (comicId: string): string => comicId.replace("comic_", "node_");
const comicsIdToEdgeId = (sourceComicId: string, targetComicId: string): string => {
    return `edge_${sourceComicId.replace("comic_", "")}_${targetComicId.replace("comic_", "")}`;
};
const nodeIdToComicId = (nodeId: string): string => nodeId.replace("node_", "comic_");

export {comicIdToNodeId, comicsIdToEdgeId, nodeIdToComicId};