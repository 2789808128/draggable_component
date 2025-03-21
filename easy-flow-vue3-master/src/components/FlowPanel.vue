<template>
  <div class="flow-panel" v-if="ready">
    <div class="header">
      <span class="link">{{ data.name }}</span>
      <lay-line direction="vertical"></lay-line>
      <lay-icon
        type="layui-icon-delete"
        :class="{ disabled: !activeNode.type }"
        @click="deleteElement"
      ></lay-icon>
      <lay-line direction="vertical"></lay-line>
      <lay-icon
        type="layui-icon-download-circle"
        @click="downloadData"
      ></lay-icon>
      <lay-line direction="vertical"></lay-line>
      <lay-icon type="layui-icon-addition" @click="zoomAdd"></lay-icon>
      <lay-line direction="vertical"></lay-line>
      <lay-icon type="layui-icon-subtraction" @click="zoomSub"></lay-icon>
      <div style="float: right; margin-right: 5px">
        <lay-button
          border="green"
          size="xs"
          prefix-icon="layui-icon-form"
          @click="showData"
          >流程信息</lay-button
        >
      </div>
      
    </div>
    <div class="flow-panel__layout">
      <div class="left-sider">
        <LeftMenu @addNode="addNode" />
      </div>
      <div class="content-wrapper">
        <div id="container" class="content" ref="refContainer" v-flow-drag>
          <template v-for="node in data.nodeList" :key="node.id">
            <FlowNode
              :id="node.id"
              :node="node"
              :activeElement="activeNode"
              @clickNode="clickNode"
              @changeNode="changeNode"
            >
            </FlowNode>
          </template>
          <!-- 给画布一个默认的宽度和高度 -->
          <div style="position: absolute; top: 2000px; left: 2000px">&nbsp;
          </div>
          <div class="time-range-container">  
            <TimeRangePicker v-model:start="startTime" v-model:end="endTime"/>
          </div>
      </div>
      <!-- 固定定位按钮 -->
  <button 
    class="custom-floating-btn"
    style="
      position: fixed;
      width: 110px;
      height: 32px;
      top: 104px; /* 时间选择器高度 + 间距 */
      right: 380px;
      border-radius: 2px;
      padding: 5px 16px;
      background: #00B42A;
      box-shadow: 0px 2px 5px #DBDBDB;
      font: 14px/22px 'Microsoft YaHei';
      display: flex;
      align-items: center;
      gap: 8px;
      border-color: #00B42A;
      color:#ffffff;
    ">
    <!-- 图标 -->
    <span style="
      width: 3.5px;
      height: 4.67px;
      border: 1.18px solid #FFF;
      background: #FFF;
    "></span>
    全局运行
  </button>
  </div>
      <div class="foot-button">
        <button class="retreat">取消</button>
        <button class="save" @click="handleSave">保存</button>
        <button class="publish">发布</button>
      </div> 
      <div class="right-sider">
        <NodeConfig ref="refNodeForm" @success="configSuccess" />
      </div>
      
    </div>
  </div>
  <lay-layer
    v-model="state.visible"
    title="流程数据信息"
    :area="['70%', 'auto']"
  >
    <div style="padding: 20px">
      <lay-quote>以下流程信息可以被存储起来，方便下一次流程加载</lay-quote>
      <Codemirror
        v-model="state.flowJsonData"
        :options="options"
        :style="{ height: '400px' }"
      ></Codemirror>
    </div>
  </lay-layer>
</template>
<script setup lang="ts">
import { unref, reactive, nextTick,ref } from "vue";
import { Codemirror } from "vue-codemirror";
import { useRender } from "../hooks/useRender";
import { useMockData } from "../hooks/useMockData";
import { layer } from "@layui/layui-vue";

import LeftMenu from "./LeftMenu.vue";
import FlowNode from "./FlowNode.vue";
import NodeConfig from "./NodeConfig.vue";
import TimeRangePicker from "./TimeRangePicker.vue";



const startTime = ref('2021-12-03 00:00:00');
const endTime = ref('2021-12-04 00:00:00');
const state = reactive({
  visible: false,
  flowJsonData: "",
});
const vFlowDrag = {
  created: (el: any, binding: any) => {
    if (!binding) {
      return;
    }
    el.onmousedown = (e: any) => {
      if (e.button == 2) {
        // 右键不管
        return;
      }
      //  鼠标按下，计算当前原始距离可视区的高度
      let disX = e.clientX;
      let disY = e.clientY;
      el.style.cursor = "move";

      document.onmousemove = function (e) {
        // 移动时禁止默认事件
        e.preventDefault();
        const left = e.clientX - disX;
        disX = e.clientX;
        el.scrollLeft += -left;

        const top = e.clientY - disY;
        disY = e.clientY;
        el.scrollTop += -top;
      };

      document.onmouseup = function (e) {
        el.style.cursor = "auto";
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
};
const options = {
  mode: { name: "javascript", json: true },
  lineNumbers: true,
};
const {
  refContainer,
  refNodeForm,
  ready,
  jsPlumb,
  data,
  activeNode,
  loadData,
  addNode,
  clickNode,
  changeNode,
  changeLine,
  deleteElement,
  downloadData,
  zoomAdd,
  zoomSub,
  validateNodes, // 导出 validateNodes
  saveData,      // 导出 saveData
} = useRender();
const { dataA } = useMockData();//默认展示数据data

// 新增保存逻辑
const handleSave = () => {
  if (validateNodes()) {
    // 验证通过，执行保存逻辑
    layer.msg("验证通过，开始保存...", { icon: 1 });
    // 这里可以调用实际的保存 API
    // 例如: api.saveFlow(data).then(...)
  } else {
    // 验证失败，不保存
    layer.msg("存在错误，请检查节点配置", { icon: 2 });
  }
};


function configSuccess(type: string, data: any) {
  if (type === "node") {
    jsPlumb.value.repaint();
  } else {
    changeLine(data);
  }
}

function showData() {
  state.visible = true;
  nextTick(() => {
    state.flowJsonData = JSON.stringify(unref(data), null, 4).toString();
  });
}

loadData(dataA as any);
</script>
<style lang="less" scoped>
.flow-panel {
  height: 100vh;
  font-size: 14px;
 
  .header {
    padding-left: 10px;
    box-sizing: border-box;
    height: 42px;
    line-height: 42px;
    z-index: 3;
    border-bottom: 1px solid #eee;
    .link {
      color: var(--global-primary-color);
    }
    .layui-icon {
      color: var(--global-primary-color);
      padding: 0px 4px;
      cursor: pointer;
      &.disabled {
        cursor: not-allowed;
        color: #c0c4cc;
      }
    }
  }
  &__layout {
    display: flex;
    height: calc(100% - 47px);
    .left-sider[data-v-e1cdb660] {
      position: relative;
      // 添加高度限制
      min-height: 300px; // 最小高度保证
  
      :deep(.lay-collapse) {
        // 绝对定位填满容器
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 4px; // 滚动条占位
        overflow-y: auto !important;
        
        // 修复折叠项内容高度
        .lay-collapse-item {
          &__content {
            height: auto !important;
            min-height: 40px; // 内容最小高度
          }
        }
      }
    }
/* 新增/修改的样式 */
.content-wrapper {
  flex: 1;
  position: relative;
}
    .content {
      position: relative;
      overflow: auto;
      height: calc(100% - 60px); /* 为按钮预留空间 */
      flex: 1;
      background-image: url(../assets/back-img.png);
      background-repeat: repeat;
      

  // 时间选择器容器调整
  :deep(.time-range-container) {
    position: relative; // 改为相对定位
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: 8px;
  }
      :deep(.time-range-container) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: 8px;
  }
    
  }
  .foot-button {
  position: absolute;
  bottom: -14px; /* 将按钮推到容器外 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  padding: 8px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.foot-button button {
    min-width: 100px;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
}

.foot-button .retreat {
  background-color: #F2F3F5;
  color: #5C5C5C;
}

.foot-button .save {
  background-color: white;
  color: #165DFF;
  border: 1px solid #165DFF;
}

.foot-button .publish {
  background-color: #165DFF;
  color: white;
}

/* 悬停效果 */
.foot-button button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* 禁用状态（如果需要） */
.foot-button button:disabled {
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
  .right-sider {
      width: 300px;
      border-left: 1px solid #eee;
      background-color: #fbfbfb;
    }
  :deep(.jtk-overlay) {
    cursor: pointer;
    color: #4a4a4a;
    font-size: 12px;
  }
  // 连线中的label 样式
  :deep(.jtk-overlay).flowLabel:not(.aLabel) {
    padding: 4px 10px;
    background-color: white;
    color: #565758 !important;
    border: 1px solid #e0e3e7;
    border-radius: 5px;
  }

  // label 为空的样式
  :deep(.emptyFlowLabel) {
  }
}
}

</style>
