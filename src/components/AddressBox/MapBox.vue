<template>
  <div class="map-container">
    <tmap-map mapKey="462BZ-7VW3T-LIFXO-V3HUE-CZG57-MLBFF" :events="events" :center="center" :zoom="zoom"
      :doubleClickZoom="doubleClickZoom" :control="control" :minZoom="7">
      
      <tmap-info-window
      :position="center"
      :content="content"
      :visible="visible"
      @close-click="onClose"
      :offset="{x:0,y:-40}"
    />
      <tmap-multi-marker :styles="markerStyles" :geometries="markerGeometries" ref="markers" @click="print"
      @dblclick="print" />
     
    </tmap-map>
  </div>
  
</template>
  
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MapBox',

  setup() {
    const infoPosition = ref({ lat: 39.04677744883, lng: 121.76567169194 });
    const center = ref({ lat: 39.04677744883, lng: 121.76567169194 });
    const zoom = ref(16);
    const doubleClickZoom = ref(true);
    const print = (e) => {
      console.log(e);
    };
    const markers = ref();
    const geometries = [
      {
        id: 'pl_1', // 折线唯一标识，删除时使用
        styleId: 'styleBlue', // 绑定样式名
      },
    ];
    const content = '韩式炸酱面'+'<br/>' +'북경반점';

    
    return {
      infoPosition,
      content,
      geometries,
      markers,
      markerStyles: {
        end: {
          width: 25,
          height: 35,
          anchor: { x: 12, y: 35 },
          src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png',
        },
        
      },
      markerGeometries: [
        {
          id: 'end',
          styleId: 'end',
          position: { lat: 39.04677744883, lng: 121.76567169194 },
        },
      ],
      events: {
        dblclick: print,
      },
      center,
      zoom,
      doubleClickZoom,
      control: {
        scale: {},
        zoom: {
          position: 'bottomRight',
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.map-container {
  height: 500px;
}
</style>