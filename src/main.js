import {createApp} from 'vue';
import './style.css';
import VNetworkGraph from "v-network-graph";
import "v-network-graph/lib/style.css";
import App from './App.vue';
import NetworkGraph from "./NetworkGraph.vue";

const app = createApp(NetworkGraph);

app.use(VNetworkGraph);
app.mount('#app');
