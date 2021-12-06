<template>
    <div>
        <l-map
            v-if="mapReady"
            ref="map"
            class="map-styles"
            :zoom="zoom"
            :center="center"
            :minZoom="4"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
        >
            <l-control-fullscreen/>
            <l-tile-layer :url="url"></l-tile-layer>
            <vue2-leaflet-marker-cluster @clusterclick="refreshShit" ref="kke">
                <l-marker
                    v-for="(obj, index) in mapObjects"
                    :key="`map-marker-${index}`"
                    :lat-lng="[obj.longitude, obj.latitude]"
                    :icon="markerIcon"
                    :options="{
                        bindObject: obj
                    }"
                    @click="setInformation"
                >
                    <l-popup
                        :options="{ direction: 'top' }"
                        :content="obj.fullname"
                    />
                </l-marker>
            </vue2-leaflet-marker-cluster>
        </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-boundary-canvas";
import {LMap, LTileLayer, LGeoJson, LMarker, LPopup} from "vue2-leaflet";
import LControlFullscreen from "vue2-leaflet-fullscreen";
import geoData from "./admin_level_2.json";
//import queries from "../../graphQ";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import pin from "../../../../assets/pin.svg";

export default {
    components: {
        LMap,
        LTileLayer,
        LControlFullscreen,
        LGeoJson,
        LMarker,
        LPopup,
        Vue2LeafletMarkerCluster,
    },
    props: [
        'mapObjects'
    ],
    data() {
        return {
            markerIcon: L.icon({
                iconUrl: pin,
                iconSize: [26, 42],
                iconAnchor: [13, 42],
                shadowSize: [41, 41],
                shadowAnchor: [13, 41]
            }),
            url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoom: 4,
            center: [63.23, 97.24],
            bounds: null,
            geo: geoData,
            mapReady: false,
            timer: null
        };
    },
    async mounted() {
        setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 250);

        this.mapReady = true;
    },
    methods: {
        refreshShit() {
            this.$refs.kke.mapObject.refreshClusters();
        },
        setInformation(event) {
            this.$emit('setOrganizationInfo', event.sourceTarget.options.bindObject);
            setTimeout(() => {
                this.$refs.map.mapObject.setView(event.latlng);
            }, 200);
        },
        zoomUpdated(zoom) {
            this.zoom = zoom;
        },
        centerUpdated(center) {
            this.center = center;
        },
        boundsUpdated(bounds) {
            this.bounds = bounds;
        },
    }
};
</script>

<style lang="scss" scoped>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

.map-styles {
    height: 50vh;
    width: 100%;
}
</style>
