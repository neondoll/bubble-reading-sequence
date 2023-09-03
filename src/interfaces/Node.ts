import * as vNG from "v-network-graph";

interface Node extends vNG.Node {
    number?: string
    size: number
    color: string
}

export default Node;