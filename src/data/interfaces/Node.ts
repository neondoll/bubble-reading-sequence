import * as vNG from "v-network-graph";

export interface Node extends vNG.Node {
    color: string;
    size: number;
}