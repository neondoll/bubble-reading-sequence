import {colorMixingHex} from "./color_functions";
import {comics} from "./comics";
import {ranges} from "./ranges";
import * as vNG from "v-network-graph";
import Edge from "../interfaces/Edge";
import Node from "../interfaces/Node";
import sizes from "./sizes";

function getArrayInArray(needle, haystack) {
    let check = false;
    needle.forEach((value) => {
        check = check || haystack.includes(value);
    });
    return check;
}

function getComicIdToNodeId(comic_id: string) {
    return `node_${comic_id.replace("comic_", "")}`;
}

function getComicsIdToEdgeId(source_comic_id: string, target_comic_id: string) {
    return `edge_${source_comic_id.replace("comic_", "")}_${target_comic_id.replace("comic_", "")}`;
}

function getMaxOfArray(numArray: number[]) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray: number[]) {
    return Math.min.apply(null, numArray);
}

function getNodeIdToComicId(node_id: string) {
    return `comic_${node_id.replace("node_", "")}`;
}

function getTextWrapping(text: string, line_length: number) {
    let current_line_length = 0;
    let current_text = "";
    text.split(" ").forEach(word => {
        //console.log(word.length);
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

const x_difference = 100;
const y_difference = 90;

const nodes: Record<string, Node> = {};
const edges: Record<string, Edge> = {};
const layouts: vNG.Layouts = {nodes: {}};

Object.keys(comics).forEach((comic_id) => {
    const comic = comics[comic_id];
    const node_id = getComicIdToNodeId(comic_id);
    const node_colors = comic.ranges
        .filter((range_ids) => Boolean(ranges[range_ids].color))
        .map((range_ids) => ranges[range_ids].color);

    nodes[node_id] = {
        name: comic.name.length > 13 ? getTextWrapping(comic.name, 13) : comic.name,
        color: node_colors.length > 1 ? colorMixingHex(node_colors) : node_colors[0],
        number: comic.number,
        size: sizes[comic.type]
    };

    if (comic.next_comics) {
        comic.next_comics.forEach((next_comic_id) => {
            edges[getComicsIdToEdgeId(comic_id, next_comic_id)] = {
                source: node_id,
                target: getComicIdToNodeId(next_comic_id)
            };
        });
    }

    const layouts_nodes_ids = Object.keys(layouts.nodes);
    if (layouts_nodes_ids.length === 0) {
        layouts.nodes[node_id] = {x: x_difference, y: y_difference};
    } else {
        const last_layouts_nodes_id = layouts_nodes_ids[layouts_nodes_ids.length - 1];
        const max_layouts_nodes_x = getMaxOfArray(layouts_nodes_ids.map((layouts_nodes_id) => layouts.nodes[layouts_nodes_id].x));
        const max_layouts_nodes_y = getMaxOfArray(layouts_nodes_ids.map((layouts_nodes_id) => layouts.nodes[layouts_nodes_id].y));
        const previous_nodes_ids = Object.keys(edges)
            .filter((edge_id) => edges[edge_id].target === node_id)
            .map((edge_id) => edges[edge_id].source);
        if (previous_nodes_ids.length === 0) {
            layouts.nodes[node_id] = {x: max_layouts_nodes_x, y: max_layouts_nodes_y + y_difference};
        } else {
            const next_nodes_ids = Object.keys(edges)
                .filter((edge_id) => edges[edge_id].source === node_id)
                .map((edge_id) => edges[edge_id].target);

            const max_previous_nodes_x = getMaxOfArray(previous_nodes_ids.map((previous_nodes_id) => layouts.nodes[previous_nodes_id].x));

            const max_previous_nodes_y = getMaxOfArray(previous_nodes_ids.map((previous_nodes_id) => layouts.nodes[previous_nodes_id].y));
            const min_previous_nodes_y = getMinOfArray(previous_nodes_ids.map((previous_nodes_id) => layouts.nodes[previous_nodes_id].y));

            const min_next_nodes_x = getArrayInArray(next_nodes_ids, layouts_nodes_ids) ? getMinOfArray(next_nodes_ids.map((next_nodes_id) => layouts.nodes[next_nodes_id].x)) : max_layouts_nodes_x;

            const max_next_nodes_y = getArrayInArray(next_nodes_ids, layouts_nodes_ids) ? getMaxOfArray(next_nodes_ids.map((next_nodes_id) => layouts.nodes[next_nodes_id].y)) : max_previous_nodes_y;
            const min_next_nodes_y = getArrayInArray(next_nodes_ids, layouts_nodes_ids) ? getMinOfArray(next_nodes_ids.map((next_nodes_id) => layouts.nodes[next_nodes_id].y)) : min_previous_nodes_y;

            let node_x = max_previous_nodes_x + x_difference;
            if (node_x < max_layouts_nodes_x && max_layouts_nodes_x <= min_next_nodes_x) {
                node_x = max_layouts_nodes_x;
            }
            let node_y = (min_previous_nodes_y + max_previous_nodes_y) / 2;

            const a = layouts_nodes_ids.filter((layouts_nodes_id) => !getArrayInArray(comic.ranges, comics[getNodeIdToComicId(layouts_nodes_id)].ranges) && node_x === layouts.nodes[layouts_nodes_id].x && node_y === layouts.nodes[layouts_nodes_id].y);
            const a_length = a.length;
            if (a_length > 0) {
                a.forEach((id, index) => {
                    if (index < a_length / 2) {
                        layouts.nodes[id].y = node_y - (x_difference * a_length / 2);
                    } else {
                        if (index === a_length / 2) {
                            layouts.nodes[id].y = node_y;
                        } else {

                        }
                    }
                });
                node_y = node_y + (x_difference * a_length / 2);
            } else {
                if (layouts_nodes_ids.filter((layouts_nodes_id) => !getArrayInArray(comic.ranges, comics[getNodeIdToComicId(layouts_nodes_id)].ranges) && node_y === layouts.nodes[layouts_nodes_id].y).length > 0) {
                    layouts_nodes_ids.forEach((layouts_nodes_id) => {
                        if (layouts.nodes[layouts_nodes_id].y === node_y) {
                            layouts.nodes[layouts_nodes_id].y = max_previous_nodes_y;
                        } else {
                            if (layouts.nodes[layouts_nodes_id].y === max_previous_nodes_y) {
                                layouts.nodes[layouts_nodes_id].y = node_y;
                            }
                        }
                    });
                    node_y = (min_previous_nodes_y + node_y) / 2;
                } else {
                    if (node_y < min_next_nodes_y) {
                        for (let y = min_next_nodes_y; y <= max_layouts_nodes_y; y += y_difference) {
                            layouts_nodes_ids
                                .filter((layouts_nodes_id) => layouts.nodes[layouts_nodes_id].y === y)
                                .forEach((layouts_nodes_id) => {
                                    layouts.nodes[layouts_nodes_id].y = y - y_difference;
                                });
                        }
                    }
                }
            }
            layouts.nodes[node_id] = {x: node_x, y: node_y};
        }
    }
});

const paths: vNG.Paths = {};

export default {nodes, edges, layouts, paths};