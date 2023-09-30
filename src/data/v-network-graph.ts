import {colorMixingHex} from "./color_functions";
import {comics} from "./comics";
import {ranges} from "./ranges";
import * as vNG from "v-network-graph";
import Edge from "../interfaces/Edge";
import Node from "../interfaces/Node";
import sizes from "./sizes";
import node from "../interfaces/Node";

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
const y_difference = 110;

const nodes: Record<string, Node> = {};
const edges: Record<string, Edge> = {};
const layouts: vNG.Layouts = {nodes: {}};

Object.keys(comics).forEach((comic_id) => {
    const comic = comics[comic_id];
    const node_id = getComicIdToNodeId(comic_id);
    const node_colors = comic.ranges
        .filter((range_ids) => Boolean(ranges[range_ids].color))
        .map((range_ids) => ranges[range_ids].color);

    // -----------------------------------------------------------------------------
    // nodes
    // -----------------------------------------------------------------------------

    nodes[node_id] = {
        name: comic.name.length > 13 ? getTextWrapping(comic.name, 13) : comic.name,
        color: node_colors.length > 1 ? colorMixingHex(node_colors) : node_colors[0],
        number: comic.number,
        size: sizes[comic.type]
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

    const positions_y = Object.keys(ranges)
        .filter((range_id) => ranges[range_id].position_y)
        .map((range_id) => ranges[range_id].position_y);

    const comic_positions_y = comic.ranges
        .filter((range_id) => ranges[range_id].position_y)
        .map((range_id) => ranges[range_id].position_y);

    let node_y;

    if (comic_positions_y.length) {
        node_y = (getMinOfArray(comic_positions_y) + getMaxOfArray(comic_positions_y)) / 2;
    } else {
        node_y = getMaxOfArray(positions_y) + y_difference;
    }

    if (!comic.contained_comics && !comic.previous_comics) {
        layouts.nodes[node_id] = {x: x_difference, y: node_y};
        return;
    }

    if (comic.contained_comics) {
        const contained_nodes_x = comic.contained_comics
            .map((contained_comic_id) => getComicIdToNodeId(contained_comic_id))
            .filter((contained_nodes_id) => Object.keys(layouts.nodes).indexOf(contained_nodes_id) !== -1)
            .map((contained_nodes_id) => layouts.nodes[contained_nodes_id].x);

        layouts.nodes[node_id] = {x: (getMinOfArray(contained_nodes_x) + getMaxOfArray(contained_nodes_x)) / 2, y: node_y + y_difference};
        return;
    }

    if (comic.previous_comics) {
        const previous_nodes_x = comic.previous_comics
            .map((previous_comic_id) => getComicIdToNodeId(previous_comic_id))
            .filter((previous_nodes_id) => Object.keys(layouts.nodes).indexOf(previous_nodes_id) !== -1)
            .map((previous_nodes_id) => layouts.nodes[previous_nodes_id].x);

        layouts.nodes[node_id] = {x: getMaxOfArray(previous_nodes_x) + x_difference, y: node_y};
        return;
    }
});

const paths: vNG.Paths = {};

console.log(layouts.nodes);

export default {nodes, edges, layouts, paths};