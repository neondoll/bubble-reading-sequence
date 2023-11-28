import * as vNG from "v-network-graph";

export interface Edge extends vNG.Edge {
    color?: string;
    dashed?: boolean;
}