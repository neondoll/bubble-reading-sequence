import * as vNG from "v-network-graph";

interface Edge extends vNG.Edge {
    color?: string
    dashed?: boolean
}

export default Edge;