import * as vNG from "v-network-graph";

interface Node extends vNG.Node {
    color: string
    number?: string
    size: number
}

export default Node;