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

function offsetOfIncludingNodes(comicId: string) {
    const comic = comics[comicId];
    const layoutsNodesId = Object.keys(layouts.nodes);
    const including_nodes_id = comic.includingComics
        ? comic.includingComics
            .map((includingComicId) => comicIdToNodeId(includingComicId))
            .filter((including_nodeId) => layoutsNodesId.indexOf(including_nodeId) !== -1)
        : [];

    if (including_nodes_id.length) {
        including_nodes_id.forEach((including_nodeId) => {
            const contained_comics = comics[nodeIdToComicId(including_nodeId)].containedComics;
            const contained_nodes_x = contained_comics
                .map((contained_comicId) => comicIdToNodeId(contained_comicId))
                .filter((contained_nodeId) => layoutsNodesId.indexOf(contained_nodeId) !== -1)
                .map((contained_nodeId) => layouts.nodes[contained_nodeId].x);

            layouts.nodes[including_nodeId].x = (minOfArray(contained_nodes_x) + maxOfArray(contained_nodes_x)) / 2;
        });
    }
}

function offsetOfNextNodes(comicId: string) {
    const comic = comics[comicId];
    const layoutsNodesId = Object.keys(layouts.nodes);
    const nextNodesId = comic.nextComics
        ? comic.nextComics
            .map((nextComicId) => comicIdToNodeId(nextComicId))
            .filter((next_nodeId) => layoutsNodesId.indexOf(next_nodeId) !== -1)
        : [];

    if (nextNodesId.length) {
        const layouts_node = layouts.nodes[comicIdToNodeId(comicId)];

        nextNodesId.forEach((next_nodeId) => {
            if (layouts.nodes[next_nodeId].x <= layouts_node.x) {
                layouts.nodes[next_nodeId].x = layouts_node.x + positions.difference.x;

                offsetOfNodesThatCoincideInXAndY(nodeIdToComicId(next_nodeId));

                const including_comics = comics[nodeIdToComicId(next_nodeId)].includingComics;
                const including_nodes_id = including_comics
                    ? including_comics
                        .map((includingComicId) => comicIdToNodeId(includingComicId))
                        .filter((including_nodeId) => layoutsNodesId.indexOf(including_nodeId) !== -1)
                    : [];

                including_nodes_id.forEach((including_nodeId) => {
                    const contained_comics = comics[nodeIdToComicId(including_nodeId)].containedComics;
                    const contained_nodes_x = contained_comics
                        .map((contained_comicId) => comicIdToNodeId(contained_comicId))
                        .filter((contained_nodeId) => layoutsNodesId.indexOf(contained_nodeId) !== -1)
                        .map((contained_nodeId) => layouts.nodes[contained_nodeId].x);

                    layouts.nodes[including_nodeId].x = (minOfArray(contained_nodes_x) + maxOfArray(contained_nodes_x)) / 2;
                });

                offsetOfNextNodes(nodeIdToComicId(next_nodeId));
            }
        });
    }
}

function offsetOfNodesThatCoincideInXAndY(comicId: string) {
    const nodeId = comicIdToNodeId(comicId);
    const matched_nodes = Object.keys(layouts.nodes).filter((layoutsNodeId) => {
        return layoutsNodeId !== nodeId &&
            layouts.nodes[layoutsNodeId].x === layouts.nodes[nodeId].x &&
            layouts.nodes[layoutsNodeId].y === layouts.nodes[nodeId].y && (
                !comics[comicId].nextComics ||
                comics[comicId].nextComics.indexOf(nodeIdToComicId(layoutsNodeId)) !== -1
            );
    });

    if (matched_nodes.length > 0) {
        layouts.nodes[nodeId].x += positions.difference.x;

        offsetOfNodesThatCoincideInXAndY(comicId);
    }
}

const comicIds: string[] = [
    "comic_monk_and_major_grom_storm_of_berlin",
    "comic_major_grom_like_in_war_1",
    "comic_major_grom_like_in_war_2",
    "comic_major_grom_like_in_war_3",
    "comic_major_grom_like_in_war_4", "comic_major_grom_like_in_war",
    "comic_major_grom_1",
    "comic_major_grom_2",
    "comic_major_grom_3",
    "comic_major_grom_4",
    "comic_major_grom_5",
    "comic_major_grom_6", "comic_major_grom_volume_1",
    "comic_major_grom_7",
    "comic_major_grom_8",
    "comic_major_grom_9",
    "comic_major_grom_10", "comic_major_grom_volume_2",
    "comic_major_grom_11",
    "comic_major_grom_12",
    "comic_major_grom_13",
    "comic_major_grom_14",
    "comic_major_grom_15",
    "comic_major_grom_16",
    "comic_major_grom_17",
    "comic_major_grom_18", "comic_major_grom_volume_3",
    "comic_major_grom_19",
    "comic_major_grom_20",
    "comic_major_grom_21",
    "comic_major_grom_22",
    "comic_major_grom_23",
    "comic_major_grom_24", "comic_major_grom_volume_4",
    "comic_special_volkov_inferno",
    "comic_major_grom_25",
    "comic_major_grom_26",
    "comic_major_grom_27",
    "comic_major_grom_28",
    "comic_major_grom_29",
    "comic_major_grom_30",
    "comic_major_grom_31",
    "comic_major_grom_32",
    "comic_major_grom_33", "comic_major_grom_volume_5",
    "comic_major_grom_34",
    "comic_major_grom_35",
    "comic_major_grom_36",
    "comic_major_grom_37", "comic_major_grom_volume_6",
    "comic_time_of_raven_backstory",
    "comic_time_of_raven_prologue",
    "comic_time_of_raven_1",
    "comic_major_grom_38",
    "comic_time_of_raven_2",
    "comic_major_grom_39",
    "comic_time_of_raven_3",
    "comic_major_grom_40",
    "comic_time_of_raven_4",
    "comic_major_grom_41",
    "comic_time_of_raven_5", "comic_major_grom_and_red_fury_volume_7", "comic_time_of_raven",
    "comic_time_of_raven_epilogue",
    "comic_major_grom_42",
    "comic_major_grom_43",
    "comic_major_grom_44",
    "comic_major_grom_45",
    "comic_major_grom_46",
    "comic_major_grom_47", "comic_rivers_there_is_no_fear_1",
    "comic_major_grom_48", "comic_rivers_there_is_no_fear_2",
    "comic_major_grom_49", "comic_rivers_there_is_no_fear_3",
    "comic_major_grom_50", "comic_rubinstein_what_i_was_looking_for", "comic_rivers_there_is_no_fear_4", "comic_major_grom_volume_8", "comic_rivers_there_is_no_fear",
    "comic_major_grom_1939", "comic_igor_grom_1",
    "comic_igor_grom_2",
    "comic_igor_grom_3",
    "comic_igor_grom_4",
    "comic_igor_grom_5",
    "comic_igor_grom_6", "comic_igor_grom_volume_1",
    "comic_igor_grom_7",
    "comic_igor_grom_8",
    "comic_igor_grom_9",
    "comic_igor_grom_10", "comic_igor_grom_volume_2",
    "comic_igor_grom_11",
    "comic_igor_grom_12",
    "comic_igor_grom_13",
    "comic_igor_grom_14", "comic_igor_grom_volume_3",
    "comic_witch_hunt_prologue",
    "comic_igor_grom_15",
    "comic_witch_hunt_finale", "comic_witch_hunt",
    "comic_igor_grom_16",
    "comic_igor_grom_17",
    "comic_igor_grom_18",
    "comic_igor_grom_19",
    "comic_igor_grom_20",
    "comic_igor_grom_21", "comic_igor_grom_volume_4",
    "comic_dubin_dima_provincial_holidays_1",
    "comic_dubin_dima_provincial_holidays_2",
    "comic_dubin_dima_provincial_holidays_3",
    "comic_dubin_dima_provincial_holidays_4", "comic_dubin_dima_provincial_holidays",
    "comic_igor_grom_22",
    "comic_igor_grom_23",
    "comic_igor_grom_24",
    "comic_igor_grom_25", "comic_igor_grom_volume_5",
    "comic_igor_grom_26",
    "comic_igor_grom_27",
    "comic_igor_grom_28",
    "comic_igor_grom_29",
    "comic_igor_grom_30", "comic_igor_grom_volume_6",
    "comic_igor_grom_31",
    "comic_igor_grom_32",
    "comic_igor_grom_33",
    "comic_igor_grom_34",
    "comic_major_grom_promise", "comic_igor_grom_volume_7",
    "comic_igor_grom_35",
    "comic_igor_grom_36",
    "comic_igor_grom_37",
    "comic_igor_grom_38",
    "comic_igor_grom_39", "comic_igor_grom_volume_8",
    "comic_igor_grom_40",
    "comic_igor_grom_41",
    "comic_igor_grom_42",
    "comic_igor_grom_43",
    "comic_igor_grom_44", "comic_igor_grom_volume_9",
    "comic_igor_grom_45",
    "comic_igor_grom_46",
    "comic_igor_grom_47",
    "comic_igor_grom_48",
    "comic_igor_grom_49", "comic_plague_doctor_special_altan",
    "comic_igor_grom_50", "comic_winter_special_plague_doctor", "comic_igor_grom_volume_10",
    "comic_caligari_datura", "comic_plague_doctor_1",
    "comic_special_prokopenko_grom_at_sunrise", "comic_plague_doctor_2",
    "comic_major_igor_grom_1", "comic_plague_doctor_3",
    "comic_major_igor_grom_2", "comic_plague_doctor_4", "comic_plague_doctor_volume_1",
    "comic_major_igor_grom_3", "comic_plague_doctor_5",
    "comic_major_igor_grom_4", "comic_plague_doctor_6", "comic_major_igor_grom_volume_1",
    "comic_major_igor_grom_5", "comic_plague_doctor_7",
    "comic_major_igor_grom_6", "comic_plague_doctor_8", "comic_plague_doctor_volume_2",
    "comic_major_igor_grom_7", "comic_plague_doctor_9",
    "comic_major_igor_grom_8", "comic_plague_doctor_10", "comic_major_igor_grom_volume_2", "comic_plague_doctor_volume_3",
    "comic_major_igor_grom_x_plague_doctor_11",
    "comic_major_igor_grom_x_plague_doctor_12",
    "comic_major_igor_grom_x_plague_doctor_13",
    "comic_major_igor_grom_x_plague_doctor_14", "comic_major_igor_grom_x_plague_doctor_volume_4",
    "comic_plague_doctor_15",
    "comic_plague_doctor_16",
    "comic_plague_doctor_17",
    "comic_plague_doctor_18",
    "comic_major_igor_grom_9", "comic_plague_doctor_19",
    "comic_major_igor_grom_10", "comic_plague_doctor_20", "comic_plague_doctor_volume_5",
    "comic_major_igor_grom_11", "comic_plague_doctor_21",
    "comic_major_igor_grom_12", "comic_plague_doctor_22", "comic_major_igor_grom_volume_3",
    "comic_major_igor_grom_13", "comic_plague_doctor_23",
    "comic_major_igor_grom_14", "comic_plague_doctor_24", "comic_plague_doctor_volume_6",
    "comic_major_igor_grom_15", "comic_plague_doctor_25",
    "comic_major_igor_grom_16", "comic_plague_doctor_26", "comic_major_igor_grom_volume_4",
    "comic_major_igor_grom_special_duty", "comic_plague_doctor_27",
    "comic_plague_doctor_28",
    "comic_plague_doctor_29", "comic_plague_doctor_volume_7",
    "comic_heroes_and_monsters", "comic_butterfly_catcher",
    "comic_major_igor_grom_17", "comic_plague_doctor_30",
    "comic_major_igor_grom_18", "comic_plague_doctor_31",
    "comic_major_igor_grom_19", "comic_plague_doctor_32",
    "comic_major_igor_grom_20", "comic_plague_doctor_33", "comic_major_igor_grom_volume_5",
    "comic_major_igor_grom_21", "comic_plague_doctor_34",
    "comic_major_igor_grom_22",
    "comic_major_igor_grom_23",
    "comic_major_igor_grom_24",
    "comic_major_igor_grom_25", "comic_major_igor_grom_volume_6",
    "comic_major_igor_grom_26",
    "comic_major_igor_grom_27",
    "comic_major_igor_grom_special_novak_and_sons", "comic_major_grom_stories", "comic_major_igor_grom_villainy_rule"
]/* Object.keys(comics) */;

for (let comicId of comicIds) {
    if (comicId === "comic_monk_and_major_grom_storm_of_berlin") {
        //debugger;
    }

    const comic = comics[comicId];
    const nodeId = comicIdToNodeId(comicId);

    // -----------------------------------------------------------------------------
    // nodes
    // -----------------------------------------------------------------------------

    nodes[nodeId] = {
        name : comic.name.length > 19 ? textWrapping(comic.name, 19) : comic.name,
        color: comicColor(comicId) || "#000000",
        size : sizes[comic.type]
    };

    // -----------------------------------------------------------------------------
    // edges
    // -----------------------------------------------------------------------------

    if (comic.includingComics) {
        comic.includingComics.forEach((includingComicId) => {
            edges[comicsIdToEdgeId(comicId, includingComicId)] = {
                source: nodeId,
                target: comicIdToNodeId(includingComicId),
                dashed: true
            };
        });
    }

    if (comic.nextComics) {
        comic.nextComics.forEach((nextComicId) => {
            edges[comicsIdToEdgeId(comicId, nextComicId)] = {source: nodeId, target: comicIdToNodeId(nextComicId)};
        });
    }

    // -----------------------------------------------------------------------------
    // layouts
    // -----------------------------------------------------------------------------

    const layoutsNodesId = Object.keys(layouts.nodes);

    let nodeX = positions.difference.x,
        nodeY = positions.difference.y;

    const comicIdInPositions = comicId in positions;

    switch (true) {
        case comicIdInPositions && "x" in positions[comicId]:
            nodeX = positions[comicId].x;
            break;
        case comicIdInPositions && "x_func" in positions[comicId]:
            nodeX = positions[comicId].x_func(layouts.nodes, comicId);
            break;
        default:
            if (layoutsNodesId.length) {
                const layoutsNodesX = layoutsNodesId
                    .map((layoutsNodeId) => layouts.nodes[layoutsNodeId].x);
                const maxLayoutsNodeX = maxOfArray(layoutsNodesX);

                if (comic.previousComics) {
                    const previousNodesX = comic.previousComics
                        .map((previousComicId) => comicIdToNodeId(previousComicId))
                        .filter((previousNodeId) => previousNodeId in layouts.nodes)
                        .map((previousNodeId) => layouts.nodes[previousNodeId].x);

                    nodeX = maxOfArray(previousNodesX) + positions.difference.x;

                    const nextNodesId = comic.nextComics
                        ? comic.nextComics
                            .map((nextComicId) => comicIdToNodeId(nextComicId))
                            .filter((next_nodeId) => layoutsNodesId.indexOf(next_nodeId) !== -1)
                        : [];

                    if (!nextNodesId.length && nodeX < maxLayoutsNodeX) {
                        nodeX = maxLayoutsNodeX
                    }
                } else {
                    nodeX = maxLayoutsNodeX;
                }
            } else {
                nodeX = positions.difference.x;
            }
            break;
    }

    switch (true) {
        case comicIdInPositions && "y" in positions[comicId]:
            nodeY = positions[comicId].y;
            break;
        case comicIdInPositions && "y_func" in positions[comicId]:
            nodeY = positions[comicId].y_func(layouts.nodes, comicId);
            break;
        default:
            if (layoutsNodesId.length) {
                const layoutsNodesY = layoutsNodesId
                    .map((layoutsNodeId) => layouts.nodes[layoutsNodeId].y);

                nodeY = maxOfArray(layoutsNodesY);
            } else {
                nodeY = positions.difference.y;
            }
            break;
    }

    layouts.nodes[nodeId] = {x: nodeX, y: nodeY};

    offsetOfNodesThatCoincideInXAndY(comicId);

    offsetOfNextNodes(comicId);

    //offsetOfIncludingNodes(comicId);
}

console.log("nodes", nodes);
console.log("edges", edges);
console.log("layouts", layouts);
console.log("paths", paths);

export default {nodes, edges, layouts, paths};