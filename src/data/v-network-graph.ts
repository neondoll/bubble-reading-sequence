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
    "comic_major_grom_37",
    "comic_major_grom_volume_6",
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
    "comic_major_grom_47",
    "comic_major_grom_48",
    "comic_major_grom_49",
    "comic_major_grom_50", "comic_rubinstein_what_i_was_looking_for", "comic_major_grom_volume_8",
    "comic_rivers_there_is_no_fear",
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
    "comic_major_igor_grom_8", "comic_plague_doctor_10", "comic_major_igor_grom_volume_2",
    "comic_plague_doctor_volume_3",
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

for (let comic_id of comicIds) {
    //if (comic_id === "comic_special_volkov_inferno") {
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
        if (comic.containedComics && [
            "comic_dubin_dima_provincial_holidays", "comic_igor_grom_volume_1", "comic_igor_grom_volume_2",
            "comic_igor_grom_volume_3", "comic_igor_grom_volume_4", "comic_igor_grom_volume_5",
            "comic_igor_grom_volume_6", "comic_igor_grom_volume_7", "comic_igor_grom_volume_8",
            "comic_igor_grom_volume_9", "comic_igor_grom_volume_10", "comic_major_igor_grom_x_plague_doctor_volume_4",
            "comic_major_igor_grom_volume_1", "comic_major_igor_grom_volume_2", "comic_major_igor_grom_volume_3",
            "comic_major_igor_grom_volume_4", "comic_major_igor_grom_volume_5", "comic_major_igor_grom_volume_6",
            "comic_major_grom_like_in_war", "comic_major_grom_volume_1", "comic_major_grom_volume_2",
            "comic_major_grom_volume_3", "comic_major_grom_volume_4", "comic_major_grom_volume_5",
            "comic_major_grom_volume_6", "comic_major_grom_volume_8", "comic_plague_doctor_volume_1",
            "comic_plague_doctor_volume_2", "comic_plague_doctor_volume_5", "comic_plague_doctor_volume_6",
            "comic_plague_doctor_volume_7", "comic_witch_hunt"
        ].indexOf(comic_id) !== -1) {
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
            //let check_not_first_comic = false;
//
            //if (comic.includingComics) {
            //    comic.includingComics.forEach((including_comic_id) => {
            //        const including_comic = comics[including_comic_id];
            //        const comic_index = including_comic.containedComics.indexOf(comic_id);
//
            //        if (comic_index !== -1) {
            //            check_not_first_comic = check_not_first_comic || comic_index !== 0;
            //        }
            //    });
            //}

            const layouts_nodes_x = layouts_nodes_id
                .map((layouts_node_id) => layouts.nodes[layouts_node_id].x);
            const max_layouts_node_x = maxOfArray(layouts_nodes_x);

            //if (check_not_first_comic) {
            //    const previous_nodes_x = comic.previousComics
            //        ? comic.previousComics
            //            .map((previous_comic_id) => comicIdToNodeId(previous_comic_id))
            //            .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
            //            .map((previous_node_id) => layouts.nodes[previous_node_id].x)
            //        : [];
//
            //    node_x = maxOfArray(previous_nodes_x.length ? previous_nodes_x : [0]) + positions.difference.x;
            //} else {
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
            //}
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

    //offsetOfIncludingNodes(comic_id);
}

console.log(nodes);
console.log(edges);
console.log(layouts);
console.log(paths);

export default {nodes, edges, layouts, paths};