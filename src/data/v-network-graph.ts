import {colorMixingHex} from "./color_functions";
import {comics} from "./comics";
import {getComicIdToNodeId, getNodeIdToComicId} from "./helper_functions";
import {ranges} from "./ranges";
import * as vNG from "v-network-graph";
import Edge from "../interfaces/Edge";
import Node from "../interfaces/Node";
import positions from "./positions";
import sizes from "./sizes";

function getArrayInArray(needle, haystack) {
    let check = false;
    needle.forEach((value) => {
        check = check || haystack.includes(value);
    });
    return check;
}

function getComicsIdToEdgeId(source_comic_id: string, target_comic_id: string) {
    return `edge_${source_comic_id.replace("comic_", "")}_${target_comic_id.replace("comic_", "")}`;
}

function getMaxOfArray(numArray: number[]) {
    return Math.max.apply(null, numArray.filter(number => !isNaN(number)));
}

function getMinOfArray(numArray: number[]) {
    return Math.min.apply(null, numArray.filter(number => !isNaN(number)));
}

function getTextWrapping(text: string, line_length: number) {
    let current_line_length = 0;
    let current_text = "";
    text.split(" ").forEach(word => {
        //console.log(word, word.length);
        if (current_line_length > 0) {
            if (current_line_length + word.length > line_length) {
                current_text += ("\n" + word);
                current_line_length = word.length;
            } else {
                current_text += (" " + word);
                current_line_length += word.length;
            }
        } else {
            current_text += word;
            current_line_length = word.length;
        }
    });
    return current_text;
}

const nodes: Record<string, Node> = {};
const edges: Record<string, Edge> = {};
const layouts: vNG.Layouts = {nodes: {}};
const positions_keys = Object.keys(positions);

function offsetOfIncludingNodes(comic_id: string) {
    const comic = comics[comic_id];
    const layouts_nodes_id = Object.keys(layouts.nodes);
    const including_nodes_id = comic.including_comics
        ? comic.including_comics
            .map((including_comic_id) => getComicIdToNodeId(including_comic_id))
            .filter((including_node_id) => layouts_nodes_id.indexOf(including_node_id) !== -1)
        : [];

    if (including_nodes_id.length) {
        including_nodes_id.forEach((including_node_id) => {
            const contained_comics = comics[getNodeIdToComicId(including_node_id)].contained_comics;
            const contained_nodes_x = contained_comics
                .map((contained_comic_id) => getComicIdToNodeId(contained_comic_id))
                .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                .map((contained_node_id) => layouts.nodes[contained_node_id].x);

            layouts.nodes[including_node_id].x = (getMinOfArray(contained_nodes_x) + getMaxOfArray(contained_nodes_x)) / 2;
        });
    }
}

function offsetOfNextNodes(comic_id: string) {
    const comic = comics[comic_id];
    const layouts_nodes_id = Object.keys(layouts.nodes);
    const next_nodes_id = comic.next_comics
        ? comic.next_comics
            .map((next_comic_id) => getComicIdToNodeId(next_comic_id))
            .filter((next_node_id) => layouts_nodes_id.indexOf(next_node_id) !== -1)
        : [];

    if (next_nodes_id.length) {
        const layouts_node = layouts.nodes[getComicIdToNodeId(comic_id)];

        next_nodes_id.forEach((next_node_id) => {
            if (layouts.nodes[next_node_id].x <= layouts_node.x) {
                layouts.nodes[next_node_id].x = layouts_node.x + positions.difference.x;

                const including_comics = comics[getNodeIdToComicId(next_node_id)].including_comics;
                const including_nodes_id = including_comics
                    ? including_comics
                        .map((including_comic_id) => getComicIdToNodeId(including_comic_id))
                        .filter((including_node_id) => layouts_nodes_id.indexOf(including_node_id) !== -1)
                    : [];

                including_nodes_id.forEach((including_node_id) => {
                    const contained_comics = comics[getNodeIdToComicId(including_node_id)].contained_comics;
                    const contained_nodes_x = contained_comics
                        .map((contained_comic_id) => getComicIdToNodeId(contained_comic_id))
                        .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                        .map((contained_node_id) => layouts.nodes[contained_node_id].x);

                    layouts.nodes[including_node_id].x = (getMinOfArray(contained_nodes_x) + getMaxOfArray(contained_nodes_x)) / 2;
                });

                offsetOfNextNodes(getNodeIdToComicId(next_node_id));
            }
        });
    }
}

Object.keys(comics).forEach((comic_id) => {
    const comic = comics[comic_id];
    const node_id = getComicIdToNodeId(comic_id);
    const node_colors = comic.ranges
        .filter((range_ids) => Boolean(ranges[range_ids].color))
        .map((range_ids) => ranges[range_ids].color);
    const node_colors_length = node_colors.length;

    // -----------------------------------------------------------------------------
    // nodes
    // -----------------------------------------------------------------------------

    nodes[node_id] = {
        name  : comic.name.length > 19 ? getTextWrapping(comic.name, 19) : comic.name,
        color : node_colors_length ? (node_colors_length > 1 ? colorMixingHex(node_colors) : node_colors[0]) : "#000000",
        number: comic.number,
        size  : sizes[comic.type]
    };

    // -----------------------------------------------------------------------------
    // edges
    // -----------------------------------------------------------------------------

    if (comic.including_comics) {
        comic.including_comics.forEach((including_comic_id) => {
            edges[getComicsIdToEdgeId(comic_id, including_comic_id)] = {
                source: node_id,
                target: getComicIdToNodeId(including_comic_id),
                dashed: true
            };
        });
    }

    if (comic.next_comics) {
        comic.next_comics.forEach((next_comic_id) => {
            edges[getComicsIdToEdgeId(comic_id, next_comic_id)] = {
                source: node_id,
                target: getComicIdToNodeId(next_comic_id)
            };
        });
    }

    // -----------------------------------------------------------------------------
    // layouts
    // -----------------------------------------------------------------------------

    const layouts_nodes_id = Object.keys(layouts.nodes);

    const next_nodes_id = comic.next_comics
        ? comic.next_comics
            .map((next_comic_id) => getComicIdToNodeId(next_comic_id))
            .filter((next_node_id) => layouts_nodes_id.indexOf(next_node_id) !== -1)
        : [];

    let node_x, node_y;

    if (positions_keys.indexOf(comic_id) !== -1 && positions[comic_id].x_func) {
        node_x = positions[comic_id].x_func(layouts.nodes, comic_id);
    } else {
        if (comic.contained_comics) {
            const contained_nodes_x = comic.contained_comics
                .map((contained_comic_id) => getComicIdToNodeId(contained_comic_id))
                .filter((contained_node_id) => layouts_nodes_id.indexOf(contained_node_id) !== -1)
                .map((contained_node_id) => layouts.nodes[contained_node_id].x);

            node_x = (getMinOfArray(contained_nodes_x) + getMaxOfArray(contained_nodes_x)) / 2;
        } else {
            const layouts_nodes_x = layouts_nodes_id
                .map((layouts_node_id) => layouts.nodes[layouts_node_id].x)
                .sort((a, b) => a - b);
            const max_layouts_node_x = getMaxOfArray(layouts_nodes_x);

            if (comic.previous_comics) {
                const previous_nodes_x = comic.previous_comics
                    .map((previous_comic_id) => getComicIdToNodeId(previous_comic_id))
                    .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
                    .map((previous_node_id) => layouts.nodes[previous_node_id].x);

                node_x = getMaxOfArray(previous_nodes_x) + positions.difference.x;

                if (!next_nodes_id.length && node_x < max_layouts_node_x) {
                    node_x = max_layouts_node_x
                }
            } else {
                if (layouts_nodes_id.length) {
                    node_x = max_layouts_node_x;
                } else {
                    node_x = positions.difference.x;
                }
            }
        }
    }

    if (positions_keys.indexOf(comic_id) !== -1 && positions[comic_id].y) {
        node_y = positions[comic_id].y;
    } else {
        const comic_positions_y = comic.ranges
            .filter((range_id) => positions_keys.indexOf(range_id) !== -1 && positions[range_id].y)
            .map((range_id) => positions[range_id].y);

        if (comic_positions_y.length) {
            node_y = (getMinOfArray(comic_positions_y) + getMaxOfArray(comic_positions_y)) / 2;
        } else {
            const positions_y = Object.keys(ranges)
                .filter((range_id) => positions_keys.indexOf(range_id) !== -1 && positions[range_id].y)
                .map((range_id) => positions[range_id].y);

            node_y = getMaxOfArray(positions_y) + positions.difference.y;
        }

        if (comic.contained_comics) {
            node_y += positions.difference.y;
        }
    }

    layouts.nodes[node_id] = {x: node_x, y: node_y};

    offsetOfNextNodes(comic_id);

    offsetOfIncludingNodes(comic_id);
});

const paths: vNG.Paths = {};

console.log(layouts.nodes);

export default {nodes, edges, layouts, paths};