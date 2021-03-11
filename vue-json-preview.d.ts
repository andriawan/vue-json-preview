import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const VueJsonPreview: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default VueJsonPreview;
