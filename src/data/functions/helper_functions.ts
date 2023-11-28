const comicIdToNodeId = (comic_id: string): string => comic_id.replace("comic_", "node_");
const comicsIdToEdgeId = (source_comic_id: string, target_comic_id: string): string => {
    return `edge_${source_comic_id.replace("comic_", "")}_${target_comic_id.replace("comic_", "")}`;
};
const nodeIdToComicId = (node_id: string): string => node_id.replace("node_", "comic_");

export {comicIdToNodeId, comicsIdToEdgeId, nodeIdToComicId};