import devices from "./device/devices.json";
const ideStore = {
    state: () => ({
        title: 'Anubias',
        tabs: {},
        components: {
            collapsed: false,
        },
        properties: {
            collapsed: false,
        },
        pages: {
            collapsed: false,
        },
        device: {
            active: 0,
            orient: 0,
            zoom: 0,
        },
        devices: devices,
    }),
    mutations: {
        changeIdeTitle(state, title) {
            document.querySelector('title').innerText = title;
            state.title = title;
        },
        toggleComponentsCollapse(state) {
            state.components.collapsed = !state.components.collapsed;
        },
        togglePropertiesCollapse(state) {
            state.properties.collapsed = !state.properties.collapsed;
        },
        togglePagesCollapse(state) {
            state.pages.collapsed = !state.pages.collapsed;
        },
        updateDeviceZoom(state, zoom) {
            state.device.zoom = zoom;
        },
        updateDeviceOrient(state, orient) {
            state.device.orient = orient;
        },
        updateDeviceActive(state, index) {
            state.device.active = index;
        },
    },
    actions: {
        setIdeTitle(context, title) {
            context.commit('changeIdeTitle', title);
        },
        toggleComponentsCollapse(context) {
            context.commit('toggleComponentsCollapse');
        },
        togglePropertiesCollapse(context) {
            context.commit('togglePropertiesCollapse');
        },
        togglePagesCollapse(context) {
            context.commit('togglePagesCollapse');
        },
    },
    getters: {}
};

export default ideStore;