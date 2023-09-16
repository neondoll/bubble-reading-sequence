import {comics} from "./comics";
import {ranges} from "./ranges";
import * as vNG from "v-network-graph";
import Edge from "../interfaces/Edge";
import Node from "../interfaces/Node";
import sizes from "./sizes";

function getMaxOfArray(numArray: number[]) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray: number[]) {
    return Math.min.apply(null, numArray);
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

Object.keys(comics).forEach(comic_id => {
    const comic = comics[comic_id];
    const node_id = `node_${comic_id.replace("comic_", "")}`;

    nodes[node_id] = {name: getTextWrapping(comic.name, 14), color: ranges[comic.ranges[0]].color, number: comic.number, size: sizes[comic.type]};

    if (comic.next_comics) {
        comic.next_comics.forEach(next_comic_id => {
            const edge_id = `edge_${comic_id.replace("comic_", "")}_${next_comic_id.replace("comic_", "")}`;
            const target_node_id = `node_${next_comic_id.replace("comic_", "")}`;

            edges[edge_id] = {source: node_id, target: target_node_id};
        });
    }

    if (Object.keys(layouts.nodes).length === 0) {
        layouts.nodes[node_id] = {x: x_difference, y: y_difference};
    } else {
        const previous_node_ids = Object.values(edges).filter((edge) => edge.target === node_id).map((edge) => edge.source);
        if (previous_node_ids.length === 0) {
            layouts.nodes[node_id] = {x: x_difference, y: layouts.nodes[Object.keys(layouts.nodes).pop()].y + y_difference};
        } else {
            const max_x = getMaxOfArray(previous_node_ids.map((node_id) => layouts.nodes[node_id].x));
            const max_y = getMaxOfArray(previous_node_ids.map((node_id) => layouts.nodes[node_id].y));
            const min_y = getMinOfArray(previous_node_ids.map((node_id) => layouts.nodes[node_id].y));
            layouts.nodes[node_id] = {x: max_x + x_difference, y: (min_y + max_y) / 2};
        }
    }
});

const paths: vNG.Paths = {};

export default {nodes, edges, layouts, paths};