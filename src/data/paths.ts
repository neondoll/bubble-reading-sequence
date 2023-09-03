import colors from "./colors";
import * as vNG from "v-network-graph";

const alpha = "66";

export const paths: vNG.Paths = {
    path_besoboy_single: {
        edges: ["edge_besoboy_single_1_single_2", "edge_besoboy_single_2_single_3", "edge_besoboy_single_3_single_4", "edge_besoboy_single_4_single_5"],
        color: colors.besoboy + alpha
    },
    path2: {edges: ["edge2", "edge4", "edge6", "edge10"]},
};