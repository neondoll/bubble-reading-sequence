<template>
    <div>
        <l-map class="map-styles" ref="map" v-if="mapReady" :center="center" :minZoom="4" :options="{zoomSnap: 0.5}"
               :zoom="zoom" @update:bounds="boundsUpdated" @update:center="centerUpdated" @update:zoom="zoomUpdated">
            <l-control-fullscreen/>
            <l-tile-layer :url="url"/>

            <vue2-leaflet-marker-cluster ref="kke" @clusterclick="refreshShit">
                <l-marker v-for="(obj, index) in mapObjects" :icon="markerIcon" :key="`map-marker-${index}`"
                          :lat-lng="[obj.longitude, obj.latitude]" :options="{bindObject: obj}" @click="setInformation">
                    <l-popup :content="obj.name" :options="{ direction: 'top' }"/>
                </l-marker>
            </vue2-leaflet-marker-cluster>
        </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-boundary-canvas";
import geoData from "./admin_level_2.json";
import L from "leaflet";
import LControlFullscreen from "vue2-leaflet-fullscreen";
import pin from "../../../../assets/pin.svg";
//import queries from "../../graphQ";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import {LGeoJson, LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";

export default {
    components: {LControlFullscreen, LGeoJson, LMap, LMarker, LPopup, LTileLayer, Vue2LeafletMarkerCluster},
    data: () => ({
        bounds: null,
        center: [63.23, 97.24],
        geo: geoData,
        mapReady: false,
        markerIcon: L.icon({
            iconUrl: pin,
            iconSize: [26, 42],
            iconAnchor: [13, 42],
            shadowSize: [41, 41],
            shadowAnchor: [13, 41]
        }),
        timer: null,
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        zoom: 4
    }),
    methods: {
        boundsUpdated(bounds) {
            this.bounds = bounds;
        },
        centerUpdated(center) {
            this.center = center;
        },
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
        }
    },
    async mounted() {
        setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 250);

        this.mapReady = true;
    },
    props: ['mapObjects'],
    watch: {
        mapObjects() {
            console.log(this.mapObjects);
        }
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
