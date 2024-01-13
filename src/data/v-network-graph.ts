import {Edge, Node} from "./interfaces";
import {comicColor} from "./functions/comic_functions";
import {comicIdToNodeId, comicsIdToEdgeId, nodeIdToComicId} from "./functions/helper_functions";
import {maxOfArray, minOfArray} from "./functions/array_functions"
import {textWrapping} from "./functions/string_functions";
import * as vNG from "v-network-graph";
import comics from "./comics";
import positions from "./positions";
import ranges from "./ranges";
import sizes from "./sizes";

const nodes: Record<string, Node> = {};
const edges: Record<string, Edge> = {};
const layouts: vNG.Layouts = {nodes: {}};
const paths: vNG.Paths = {};
const positionsKeys: string[] = Object.keys(positions);

function offsetOfIncludingNodes(comic_id: string) {
    const comic = comics[comic_id];
    const layouts_nodes_id = Object.keys(layouts.nodes);
    const including_nodes_id = comic.includingComics
        ? comic.includingComics
            .map((including_comic_id) => comicIdToNodeId(including_comic_id))
            .filter((including_node_id) => layouts_nodes_id.indexOf(including_node_id) !== -1)
        : [];

    if (including_nodes_id.length) {
        including_nodes_id.forEach((including_node_id) => {
            const contained_comics = comics[nodeIdToComicId(including_node_id)].containedComics;
            const contained_nodes_x = contained_comics
                .map((contained_comic_id) => comicIdToNodeId(contained_comic_id))
                .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                .map((contained_node_id) => layouts.nodes[contained_node_id].x);

            layouts.nodes[including_node_id].x = (minOfArray(contained_nodes_x) + maxOfArray(contained_nodes_x)) / 2;
        });
    }
}

function offsetOfNextNodes(comic_id: string) {
    const comic = comics[comic_id];
    const layouts_nodes_id = Object.keys(layouts.nodes);
    const next_nodes_id = comic.nextComics
        ? comic.nextComics
            .map((next_comic_id) => comicIdToNodeId(next_comic_id))
            .filter((next_node_id) => layouts_nodes_id.indexOf(next_node_id) !== -1)
        : [];

    if (next_nodes_id.length) {
        const layouts_node = layouts.nodes[comicIdToNodeId(comic_id)];

        next_nodes_id.forEach((next_node_id) => {
            if (layouts.nodes[next_node_id].x <= layouts_node.x) {
                layouts.nodes[next_node_id].x = layouts_node.x + positions.difference.x;

                offsetOfNodesThatCoincideInXAndY(nodeIdToComicId(next_node_id));

                const including_comics = comics[nodeIdToComicId(next_node_id)].includingComics;
                const including_nodes_id = including_comics
                    ? including_comics
                        .map((including_comic_id) => comicIdToNodeId(including_comic_id))
                        .filter((including_node_id) => layouts_nodes_id.indexOf(including_node_id) !== -1)
                    : [];

                including_nodes_id.forEach((including_node_id) => {
                    const contained_comics = comics[nodeIdToComicId(including_node_id)].containedComics;
                    const contained_nodes_x = contained_comics
                        .map((contained_comic_id) => comicIdToNodeId(contained_comic_id))
                        .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                        .map((contained_node_id) => layouts.nodes[contained_node_id].x);

                    layouts.nodes[including_node_id].x = (minOfArray(contained_nodes_x) + maxOfArray(contained_nodes_x)) / 2;
                });

                offsetOfNextNodes(nodeIdToComicId(next_node_id));
            }
        });
    }
}

function offsetOfNodesThatCoincideInXAndY(comic_id: string) {
    const node_id = comicIdToNodeId(comic_id);
    const matched_nodes = Object.keys(layouts.nodes).filter((layouts_node_id) => {
        return layouts_node_id !== node_id &&
            layouts.nodes[layouts_node_id].x === layouts.nodes[node_id].x &&
            layouts.nodes[layouts_node_id].y === layouts.nodes[node_id].y && (
                !comics[comic_id].nextComics ||
                comics[comic_id].nextComics.indexOf(nodeIdToComicId(layouts_node_id)) !== -1
            );
    });

    if (matched_nodes.length > 0) {
        layouts.nodes[node_id].x += positions.difference.x;

        offsetOfNodesThatCoincideInXAndY(comic_id);
    }
}

Object.keys(comics).forEach((comic_id) => {
    //if (comic_id === "comic_rivers_no_fear_1") {
    //    debugger;
    //}

    const comic = comics[comic_id];
    const node_id = comicIdToNodeId(comic_id);

    // -----------------------------------------------------------------------------
    // nodes
    // -----------------------------------------------------------------------------

    nodes[node_id] = {
        name : comic.name.length > 19 ? textWrapping(comic.name, 19) : comic.name,
        color: comicColor(comic_id) || "#000000",
        size : sizes[comic.type]
    };

    // -----------------------------------------------------------------------------
    // edges
    // -----------------------------------------------------------------------------

    if (comic.includingComics) {
        comic.includingComics.forEach((including_comic_id) => {
            edges[comicsIdToEdgeId(comic_id, including_comic_id)] = {
                source: node_id,
                target: comicIdToNodeId(including_comic_id),
                dashed: true
            };
        });
    }

    if (comic.nextComics) {
        comic.nextComics.forEach((next_comic_id) => {
            edges[comicsIdToEdgeId(comic_id, next_comic_id)] = {
                source: node_id,
                target: comicIdToNodeId(next_comic_id)
            };
        });
    }

    // -----------------------------------------------------------------------------
    // layouts
    // -----------------------------------------------------------------------------

    const layouts_nodes_id = Object.keys(layouts.nodes);

    const next_nodes_id = comic.nextComics
        ? comic.nextComics
            .map((next_comic_id) => comicIdToNodeId(next_comic_id))
            .filter((next_node_id) => layouts_nodes_id.indexOf(next_node_id) !== -1)
        : [];

    let node_x, node_y;

    if (positionsKeys.indexOf(comic_id) !== -1 && positions[comic_id].x_func) {
        node_x = positions[comic_id].x_func(layouts.nodes, comic_id);
    } else {
        if (comic.containedComics) {
            const contained_nodes_x = comic.containedComics
                .map((contained_comic_id) => comicIdToNodeId(contained_comic_id))
                .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                .map((contained_node_id) => layouts.nodes[contained_node_id].x);

            node_x = (minOfArray(contained_nodes_x) + maxOfArray(contained_nodes_x)) / 2;
        } else {
            /*if (comic.previous_comics) {
                const previous_nodes_x = comic.previous_comics
                    .map((previous_comic_id) => comicIdToNodeId(previous_comic_id))
                    .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
                    .map((previous_node_id) => layouts.nodes[previous_node_id].x);

                node_x = maxOfArray(previous_nodes_x) + positions.difference.x;

                if (!next_nodes_id.length && node_x < max_layouts_node_x) {
                    node_x = max_layouts_node_x
                }
            } else {
                if (layouts_nodes_id.length) {
                    node_x = max_layouts_node_x;
                } else {
                    node_x = positions.difference.x;
                }
            }*/
            let check_not_first_comic = false;

            if (comic.includingComics) {
                comic.includingComics.forEach((including_comic_id) => {
                    const including_comic = comics[including_comic_id];
                    const comic_index = including_comic.containedComics.indexOf(comic_id);

                    if (comic_index !== -1) {
                        check_not_first_comic = check_not_first_comic || comic_index !== 0;
                    }
                });
            }

            const layouts_nodes_x = layouts_nodes_id
                .map((layouts_node_id) => layouts.nodes[layouts_node_id].x);
            const max_layouts_node_x = maxOfArray(layouts_nodes_x);

            if (check_not_first_comic) {
                const previous_nodes_x = comic.previousComics
                    ? comic.previousComics
                        .map((previous_comic_id) => comicIdToNodeId(previous_comic_id))
                        .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
                        .map((previous_node_id) => layouts.nodes[previous_node_id].x)
                    : [];

                node_x = maxOfArray(previous_nodes_x) + positions.difference.x;
            } else {
                if (layouts_nodes_id.length) {
                    if (comic.previousComics) {
                        const previous_nodes_x = comic.previousComics
                            .map((previous_comic_id) => comicIdToNodeId(previous_comic_id))
                            .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
                            .map((previous_node_id) => layouts.nodes[previous_node_id].x);

                        node_x = maxOfArray(previous_nodes_x) + positions.difference.x;

                        if (!next_nodes_id.length && node_x < max_layouts_node_x) {
                            node_x = max_layouts_node_x
                        }
                    } else {
                        node_x = max_layouts_node_x;
                    }
                } else {
                    node_x = positions.difference.x;
                }
            }

        }
    }

    if (positionsKeys.indexOf(comic_id) !== -1 && positions[comic_id].y) {
        node_y = positions[comic_id].y;
    } else {
        const comic_positions_y = comic.ranges
            .filter((range_id) => positionsKeys.indexOf(range_id) !== -1 && positions[range_id].y)
            .map((range_id) => positions[range_id].y);

        if (comic_positions_y.length) {
            node_y = (minOfArray(comic_positions_y) + maxOfArray(comic_positions_y)) / 2;
        } else {
            const positions_y = Object.keys(ranges)
                .filter((range_id) => positionsKeys.indexOf(range_id) !== -1 && positions[range_id].y)
                .map((range_id) => positions[range_id].y);

            node_y = maxOfArray(positions_y) + positions.difference.y;
        }

        if (comic.containedComics) {
            node_y += positions.difference.y;
        }
    }

    layouts.nodes[node_id] = {x: node_x, y: node_y};

    offsetOfNodesThatCoincideInXAndY(comic_id);

    offsetOfNextNodes(comic_id);

    offsetOfIncludingNodes(comic_id);
});

console.log(nodes);
console.log(edges);
console.log(layouts);
console.log(paths);

export default {nodes, edges, layouts, paths};