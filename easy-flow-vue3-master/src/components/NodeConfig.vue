<template>
  <div class="node-config">
    <div class="node-form-header">属性配置</div>
    <div class="node-form-body">
      <template v-if="node.id || line.from">
        <template v-if="type === 'node'">
          <div class="config-panel">
    <div class="config-content" :style="{ height: isExpanded ? '300px' : '62px' }">
      <div class="config-inner" :style="{ height: isExpanded ? '276px' : '38px' }">
        <div class="box box1">
          <div class="left-section">
            <div class="rectangle"></div>
            <div class="title-box">算法属性</div>
          </div>
          <!-- 新增折叠按钮 -->
          <div class="collapse-btn" :class="{ collapsed: !isExpanded }" @click="toggleCollapse">
            <div class="arrow-icon"></div>
          </div>
        </div>
        <div class="box box2" v-if="isExpanded">
          <!-- 标签 -->
          <div class="form-label">算法名称</div>
          <!-- 输入框 -->
          <input 
            type="text" 
            class="form-input"
            v-model="node.name"
            placeholder="内容"
          >
        </div>
        <div class="box box3" v-if="isExpanded">
          <!-- 标签 -->
          <div class="form-label">算法类型</div>
          <!-- 输入框 -->
          <input 
            type="text" 
            class="form-input"
            v-model="node.type"
            placeholder="内容"
          >
        </div>
        <div class="box box4" v-if="isExpanded">
          <!-- 标签 -->
          <div class="form-label">算法描述</div>
          <!-- 输入框 -->
          <input 
            type="text" 
            class="form-input"
            v-model="node.description"
            placeholder="内容"
          >
        </div>
      </div>
    </div>

    <div class="config-settings" :style="{ height: isSettingsExpanded ? '1300px' : '62px' }">
      <div class="settings-inner" :style="{ height: isSettingsExpanded ? '1280px' : '38px' }">
        <!-- 标题栏 -->
        <div class="settings-header">
          <div class="header-left">
            <div class="title-rectangle"></div>
            <span class="title-text">xgboost配置界面</span>
          </div>

          <div 
            class="collapse-btn" 
            :class="{ collapsed: !isSettingsExpanded }" 
            @click="toggleSettingsCollapse"
          >
            <div class="arrow-icon"></div>
          </div>
        </div>

        <!-- 模型超参标签 -->
        <div class="model-label" v-if="isSettingsExpanded">模型超参</div>
        
        <div class="param-box" v-if="isSettingsExpanded">
          <!-- 参数标签 -->
          <div class="form-label">树最大深度</div>

          <!-- 参数输入框 -->
          <input 
            type="text" 
            class="param-input"
            placeholder="内容"
          >
        </div>

        <div class="param-box" v-if="isSettingsExpanded">
          <!-- 参数标签 -->
          <div class="form-label">树个数</div>

          <!-- 参数输入框 -->
          <input 
            type="text" 
            class="param-input"
            placeholder="内容"
          >
        </div>

        <div class="param-box" v-if="isSettingsExpanded">
          <!-- 参数标签 -->
          <div class="form-label">学习率</div>

          <!-- 参数输入框 -->
          <input 
            type="text" 
            class="param-input"
            placeholder="内容"
          >
        </div>

        <!-- 高级设定 -->
        <div 
          class="new-param-box"
          v-if="isSettingsExpanded"
        >
          <!-- 左侧内容容器 -->
          <div class="left-container"></div>
          
          <!-- 右侧新增盒子 -->
          <div class="right-box">
            <!-- 左侧图标容器 -->
            <div class="icon-container">
              <!-- 外层方形 -->
              <div class="outer-square"></div>
              <!-- 内层方形 -->
              <div class="inner-square"></div>
            </div>
            
            <!-- 右侧文本 -->
            <div class="advanced-text">高级设定</div>
          </div>
      
        </div>

        <div class="param-box" v-if="isSettingsExpanded">
          <!-- 参数标签 -->
          <div class="form-label">损失函数</div>

          <!-- 参数输入框 -->
          <input 
            type="text" 
            class="param-input"
            placeholder="内容"
          >
        </div>

        <div class="param-box" v-if="isSettingsExpanded">
          <!-- 参数标签 -->
          <div class="form-label">随机种子</div>

          <!-- 参数输入框 -->
          <input 
            type="text" 
            class="param-input"
            placeholder="内容"
          >
        </div>

        <!-- 分割线 -->
        <div class="settings-divider" v-if="isSettingsExpanded"></div>

        <div class="dataset-division" v-if="isSettingsExpanded">数据集划分</div>

        <div class="dataset-split-container" v-if="isSettingsExpanded">
          <!-- 训练集 -->
          <div class="split-box">
            <div class="split-label">训练集</div>
            <div class="input-wrapper">
              <input type="text" class="split-input">
              <span class="percent">%</span>
            </div>
          </div>
          
          <!-- 验证集 -->
          <div class="split-box">
            <div class="split-label">测试集</div>
            <div class="input-wrapper">
              <input type="text" class="split-input">
              <span class="percent">%</span>
            </div>
          </div>
          
          <!-- 测试集 -->
          <div class="split-box">
            <div class="split-label">验证集</div>
            <div class="input-wrapper">
              <input type="text" class="split-input">
              <span class="percent">%</span>
            </div>
          </div>
        </div>

        <!-- 高级设定 -->
        <div 
          class="new-param-box"
          v-if="isSettingsExpanded"
        >
          <!-- 左侧内容容器 -->
          <div class="left-container"></div>
          
          <!-- 右侧新增盒子 -->
          <div class="right-box">
            <!-- 左侧图标容器 -->
            <div class="icon-container">
              <!-- 外层方形 -->
              <div class="outer-square"></div>
              <!-- 内层方形 -->
              <div class="inner-square"></div>
            </div>
            
            <!-- 右侧文本 -->
            <div class="advanced-text">高级设定</div>
          </div>
      
        </div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">划分规则</div>
          <div class="rule-input">
            <div class="input-content">内容</div>
            <div class="dropdown-btn">
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">目标列</div>
          <div class="rule-input">
            <div class="input-content">内容</div>
            <div class="dropdown-btn">
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">是否归一化</div>
          <div class="radio-group">
            <div class="radio-item" :class="{ active: normalize === 'yes' }"  @click="normalize = 'yes'">
              <div class="radio-icon">
                <div class="radio-outer"></div>
                <div class="radio-inner"></div>
              </div>
              <span class="radio-text">是</span>
            </div>
            <div class="radio-item" :class="{ active: normalize === 'no' }" @click="normalize = 'no'">
              <div class="radio-icon">
                <div class="radio-outer"></div>
                <div class="radio-inner"></div>
              </div>
              <span class="radio-text">否</span>
            </div>
          </div>
        </div>


        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">归一化方式</div>
          <div class="rule-input">
            <div class="input-content">内容</div>
            <div class="dropdown-btn">
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">评价指标</div>
          <div class="rule-input">
            <div class="input-content">内容</div>
            <div class="dropdown-btn">
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>

        <!-- 分割线 -->
        <div class="settings-divider" v-if="isSettingsExpanded"></div>

        <div class="dataset-division" v-if="isSettingsExpanded">通用</div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="rule-label">隐藏节点详情</div>
          <div class="radio-group">
            <div class="radio-item" :class="{ active: hideDetails === 'yes' }"  @click="hideDetails = 'yes'">
              <div class="radio-icon">
                <div class="radio-outer"></div>
                <div class="radio-inner"></div>
              </div>
              <span class="radio-text">是</span>
            </div>
            <div class="radio-item" :class="{ active: hideDetails === 'no' }" @click="hideDetails = 'no'">
              <div class="radio-icon">
                <div class="radio-outer"></div>
                <div class="radio-inner"></div>
              </div>
              <span class="radio-text">否</span>
            </div>
          </div>
        </div>

        <div class="split-rule-container" v-if="isSettingsExpanded">
          <div class="action-group">
            <button class="action-btn cancel-btn">取消</button>
            <button class="action-btn confirm-btn">确定</button>
          </div>
        </div>

      </div>
    </div>

    <div class="config-new" :style="{ height: isNewExpanded ? '222px' : '62px' }">
      <div class="new-inner" :style="{ height: isNewExpanded ? '198px' : '38px' }">
        <!-- 标题栏 -->
        <div class="settings-header">
          <div class="header-left">
            <div class="title-rectangle"></div>
            <span class="title-text">节点调试</span>
          </div>

          <div 
            class="collapse-btn" 
            :class="{ collapsed: !isNewExpanded }" 
            @click="toggleNewCollapse"
          >
            <div class="arrow-icon"></div>
          </div>
        </div>

        <div class="debug-button-container" v-if="isNewExpanded">
          <button class="debug-button">
            <span class="debug-text">调试</span>
          </button>
        </div>

        <div class="debug-result-container" v-if="isNewExpanded">
          <div class="result-left">
            <span class="result-text">调试结果</span>
          </div>
          <div class="result-right">
            <div class="eye-icon">
              <div class="eye-outer"></div>
              <div class="eye-inner"></div>
            </div>
            <span class="view-text">查看</span>
          </div>
        </div>

        <div class="debug-info-container" v-if="isNewExpanded">
          <div class="info-left">
            <span class="info-text">调试信息</span>
          </div>
          <div class="info-right">
            <div class="check-icon">
              <div class="check-line"></div>
            </div>
            <span class="success-text">成功</span>
          </div>
        </div>

      </div>
    </div>



  </div>
          
        </template>
        <template v-else-if="type === 'line'">
          <lay-form :model="line" label-width="80px">
            <lay-form-item label="条件">
  <lay-input 
    v-model="line.label" 
    placeholder="请输入1或0"
    :rules="[{ validator: validateCondition }]"
    @blur="checkCondition"
  ></lay-input>
</lay-form-item>

            <lay-form-item label=" ">
              <lay-button type="primary" prefix-icon="layui-icon-ok" size="sm" @click="saveConfig">保存</lay-button>
            </lay-form-item>
          </lay-form>
        </template>
      </template>
      <lay-empty v-else description="请点击节点查看"></lay-empty>
    </div>
  </div>
  
</template>
<script setup>
import { reactive, toRefs,ref } from "vue";
import { cloneDeep } from "lodash";
import { stateOptions } from "../utils/defaultSetting";

const isExpanded = ref(true);
const isSettingsExpanded = ref(true);
const isNewExpanded = ref(true);
const emits = defineEmits(["success"]);
const state = reactive({
  type: "node",
  node: {
    name: '',    // 新增
    type: '',    // 新增
    description: '',  // 新增
    
  },
  line: {},
  data: {},
});
const { type, node, line } = toRefs(state);


//按钮功能
const toggleCollapse = () => {
  isExpanded.value = !isExpanded.value;
};

//按钮功能
const toggleSettingsCollapse = () => {
  isSettingsExpanded.value = !isSettingsExpanded.value;
};

//按钮功能
const toggleNewCollapse = () => {
  isNewExpanded.value = !isNewExpanded.value;
};

const normalize = ref('yes'); // 默认选中"是"
const hideDetails = ref('no'); // 隐藏节点状态


/**
 * 表单修改，这里可以根据传入的ID进行业务信息获取
 * @param data
 * @param id
 */
function nodeInit(data, id) {
  state.type = "node";
  state.data = data;
  data.nodeList.forEach((node) => {
    if (node.id === id) {
      state.node = cloneDeep(node);
    }
  });
  if (node.id === id) {
    normalize.value = node.normalize || 'yes';
    hideDetails.value = node.hideDetails || 'no';
  }
}

function lineInit(line) {
  state.type = "line";
  state.line = line;
}
import { ElMessage } from 'element-plus'

const validateCondition = (value) => {
  return /^[01]$/.test(value) || '请输入1或0'
}

const checkCondition = () => {
  if (state.type === 'line' && !/^[01]$/.test(state.line.label)) {
    ElMessage.warning('请输入1或0')
    state.line.label = '' // 自动清空非法输入
  }
}
function saveConfig() {
  if (state.type === "node") {
    state.data.nodeList.forEach((node) => {
      if (node.id === state.node.id) {
        node.name = state.node.name;
        node.left = state.node.left;
        node.top = state.node.top;
        node.ico = state.node.ico;
        node.state = state.node.state;
        // 新增下面两行
        node.type = state.node.type;
        node.description = state.node.description;
      }
    });
    emits("success", state.type);
  } else if (state.type === "line") {
    if (!['0', '1'].includes(state.line.label)) {
      ElMessage.warning('请输入1或0')
      return // 阻止保存
    }
    emits("success", state.type, { ...state.line });
  }
  state.node.normalize = normalize.value;
  state.node.hideDetails = hideDetails.value;
}

defineExpose({
  nodeInit,
  lineInit,
});
</script>
<style lang="less" scoped>
.node-config {
  .node-form-header {
    height: 32px;
    border-top: 1px solid #dce3e8;
    border-bottom: 1px solid #dce3e8;
    background: #f1f3f4;
    color: #000;
    line-height: 32px;
    padding-left: 12px;
    font-size: 14px;
  }
  .node-form-body {
    margin-top: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    :deep(.layui-empty) {
      margin-top: 100px;
      .layui-empty-image {
        .layui-empty-image-default {
          height: 80px;
        }
      }
    }
  }
}
.config-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
  height: 1870px;
  background: #FFFFFF;
  border-left: 1px solid #E5E6EB;
  box-shadow: -2px 0 8px rgba(0,0,0,0.05);
  .config-new {
    width: 320px;
    height: 222px;
    padding: 16px 16px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;

    // 内部容器
    .new-inner {
      width: 288px; // 320 - 16*2 = 288
      height: 198px; // 190 - 16 - 8 - (10*2) = 166
      padding: 10px 16px;
      background: #FFFFFF;
      box-shadow: 
        -1px -1px 6px rgba(138, 138, 138, 0.25),
        1px 1px 6px rgba(138, 138, 138, 0.25);
      box-sizing: border-box;
      
      // 如果需要有内部间距
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }


}

.config-content {
  width: 320px;
  height: 300px;
  padding: 16px 16px 8px; // 上 16px，左右 16px，下 8px
  display: flex;
  flex-direction: column;
  gap: 16px; /* 子元素间距 */
  
  /* 其他样式补充 */
  box-sizing: border-box;
  background: #fff;
}

.config-inner {
  width: 288px; // 320 - (16px padding * 2) = 288
  height: 276px; // 300 - (16px padding-top + 8px padding-bottom) = 276
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #FFFFFF;
  border-left: 1px solid #E5E6EB;
  border-right: 1px solid #E5E6EB;
  box-shadow: 
    -1px -1px 6px rgba(138, 138, 138, 0.25),
    1px 1px 6px rgba(138, 138, 138, 0.25);
  box-sizing: border-box;
}

.box {
  width: 256px; // 288 - (16px padding * 2) = 256
  display: flex;
  
  // 公共样式
  &-1, &-2, &-3, &-4 {
    background: #fff;
    box-sizing: border-box;
  }
}

.box1 {
  height: 22px;
  justify-content: space-between;
  align-items: center;
  .left-section {
    width: 63px;
    height: 22px;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .rectangle {
    width: 3px;
    height: 16px;
    background: #165DFF;
  }

  .title-box {
    width: 56px;
    height: 22px;
    font-family: 'Microsoft YaHei';
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #121314;
    background: #FFFFFF; // 根据上下文背景色设置
  }

  .collapse-btn {
    // 修改定位方式
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    transform: rotate(0deg); // 初始状态调整为0度（箭头向下）
    transition: transform 0.3s ease;

    &.collapsed {
      transform: rotate(180deg); // 折叠时旋转180度（箭头向上）
    }

    .arrow-icon {
      position: relative;
      width: 8px;
      height: 4px;
      // 使用transform居中代替绝对定位
      transform: translate(0, -1px); // 微调垂直居中

      &::after {
        content: '';
        position: absolute;
        left: -0.5px;
        top: 0;
        border: 1.5px solid #121314;
        border-width: 0 0 1.3px 1.3px;
        width: 100%;
        height: 100%;
        transform: rotate(-45deg) translate(0.5px, 0.5px);
      }
    }

    &:hover {
      background: #f5f5f5; // 添加hover背景提升交互感
      border-radius: 3px;
    }
  }
}

.box2, .box3, .box4 {
  height: 62px;
  gap: 8px;
  flex-direction: column;
  .form-label {
    width: 56px;
    height: 22px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #5C5C5C;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 256px;
    height: 32px;
    border: 1px solid #CDD0D6;
    border-radius: 2px;
    padding: 5px 12px;
    font-size: 14px;
    color: #121314;
    
    &::placeholder {
      color: #A9AEB8;
    }
    
    &:focus {
      outline: none;
      border-color: #165DFF;
      box-shadow: 0 0 4px rgba(22, 93, 255, 0.15);
    }
  }
}

.config-settings {
  width: 320px;
  height: 1300px;
  padding: 16px 16px 8px; // 上16 左右16 下8
  background: #FFFFFF;
  box-sizing: border-box;
  
  // 保持与原有样式一致
  border-left: 1px solid #E5E6EB;
  box-shadow: -2px 0 8px rgba(0,0,0,0.05);
}

.settings-inner {
  width: 288px;
  height: 1280px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #FFFFFF;
  border-left: 1px solid #E5E6EB;
  border-right: 1px solid #E5E6EB;
  box-shadow: 
    -1px -1px 6px rgba(138, 138, 138, 0.25),
    1px 1px 6px rgba(138, 138, 138, 0.25);
  box-sizing: border-box;
  
  /* 继承父容器阴影效果 */
  position: relative;
  z-index: 1;
}

.settings-header {
  width: 256px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-left {
    display: flex;
    gap: 4px;
    align-items: center;
    
    .title-rectangle {
      width: 3px;
      height: 16px;
      background: #165DFF;
    }
    
    .title-text {
      font-family: 'Microsoft YaHei';
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      color: #121314;
    }
  }

  .collapse-btn {
    // 修改定位方式
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    transform: rotate(0deg); // 初始状态调整为0度（箭头向下）
    transition: transform 0.3s ease;

    &.collapsed {
      transform: rotate(180deg); // 折叠时旋转180度（箭头向上）
    }

    .arrow-icon {
      position: relative;
      width: 8px;
      height: 4px;
      // 使用transform居中代替绝对定位
      transform: translate(0, -1px); // 微调垂直居中

      &::after {
        content: '';
        position: absolute;
        left: -0.5px;
        top: 0;
        border: 1.5px solid #121314;
        border-width: 0 0 1.3px 1.3px;
        width: 100%;
        height: 100%;
        transform: rotate(-45deg) translate(0.5px, 0.5px);
      }
    }

    &:hover {
      background: #f5f5f5; // 添加hover背景提升交互感
      border-radius: 3px;
    }
  }

}

.model-label {
  width: 56px;
  height: 22px;
  font-family: 'PingFang SC', sans-serif; // 添加备用字体
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121314;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
}

.param-box {
  width: 256px;
  height: 62px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  

  .form-label {
    width: 70px;
    height: 22px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #5C5C5C;
    display: flex;
    align-items: center;
    
  }
  
  .form-input {
    width: 256px;
    height: 32px;
    border: 1px solid #CDD0D6;
    border-radius: 2px;
    padding: 5px 12px;
    font-size: 14px;
    color: #121314;
    
    &::placeholder {
      color: #A9AEB8;
    }
    
    &:focus {
      outline: none;
      border-color: #165DFF;
      box-shadow: 0 0 4px rgba(22, 93, 255, 0.15);
    }
  }
  
  
}

.param-label {
  width: 70px;
  height: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  // background: #5C5C5C;
  // padding: 0 4px;
  box-sizing: border-box;

  span {
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #5C5C5C;
    vertical-align: middle;
  }
}

.param-input {
  width: 256px;
  height: 32px;
  border: 1px solid #CDD0D6;
  border-radius: 2px;
  padding: 5px 12px;
  font-size: 14px;
  color: #121314;
  
  &::placeholder {
    color: #A9AEB8;
  }
  
  &:focus {
    outline: none;
    border-color: #165DFF;
    box-shadow: 0 0 4px rgba(22, 93, 255, 0.15);
  }
}


.settings-divider {
  width: 256px;
  height: 1px;
  background: #E5E6EB;
  margin: 8px auto; // 上下8px间距，水平居中
  box-sizing: border-box;
}

.dataset-division {
  width: 256px;
  height: 22px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121314;
  box-sizing: border-box;
}

.new-param-box {
  width: 256px;
  height: 22px;
  display: flex;
  gap: 4px;
  justify-content: space-between; // 左右对齐
  align-items: center; // 垂直居中
  
  .left-container {
    flex: 1; // 占据剩余空间
    height: 100%;
  }

  .right-box {
    width: 74px;
    height: 22px;
    display: flex;
    gap: 4px;
    align-items: center;
    
    .icon-container {
      width: 14px;
      height: 14px;
      position: relative;
      
      .outer-square {
        position: absolute;
        width: 12.83px;
        height: 12.83px;
        border: 1.17px solid #165DFF;
        top: 0.58px;
        left: 0.58px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
      
      .inner-square {
        position: absolute;
        width: 3.5px;
        height: 3.5px;
        border: 1.17px solid #165DFF;
        top: 5.25px;
        left: 5.25px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
    }

    .advanced-text {
      width: 56px;
      height: 22px;
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #165DFF;
      text-align: right;
      vertical-align: middle;
    }
  }
}

.dataset-split-container {
  width: 256px;
  height: 62px;
  display: flex;
  gap: 16px;
  
  .split-box {
    width: 74.67px;
    height: 62px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    .split-label {
      width: 70px;
      height: 22px;
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #5C5C5C;
    }
    
    .input-wrapper {
      position: relative;
      width: 100%;
      height: 32px;
      
      .split-input {
        width: 100%;
        height: 100%;
        border: 1px solid #CDD0D6;
        border-radius: 2px;
        padding: 5px 20px 5px 12px;
        font-size: 14px;
        color: #121314;
        
        &:focus {
          outline: none;
          border-color: #165DFF;
          box-shadow: 0 0 4px rgba(22, 93, 255, 0.15);
        }
      }
      
      .percent {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        font-family: 'Microsoft YaHei';
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #121314;
        pointer-events: none;
      }
    }
  }
}

.split-rule-container {
  width: 256px;
  height: 62px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .rule-label {
    width: 84px;
    height: 22px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #5C5C5C;
  }

  .rule-input {
    width: 100%;
    height: 32px;
    display: flex;
    border: 1px solid #CDD0D6;
    border-radius: 2px;
    
    .input-content {
      flex: 1;
      padding: 5px 12px;
      color: #909399;
      font-family: 'Microsoft YaHei';
      font-size: 14px;
      line-height: 22px;
    }
    
    .dropdown-btn {
      width: 32px;
      height: 32px;
      border-left: 1px solid #E5E6EB;
      background: #F2F3F5;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .arrow-down {
        width: 14px;
        height: 14px;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          width: 7px;
          height: 7px;
          border: 1.5px solid #5C5C5C;
          border-width: 0 1.5px 1.5px 0;
          top: 50%;
          left: 50%;
          transform: 
            rotate(45deg)   // 保持135度旋转
            translate(-65%, -35%);  // 精确像素级偏移
        }
      }
      
      &:hover {
        background: #E5E6EB;
      }
    }
  }

  .radio-group {
    width: 360px;
    height: 32px;
    padding: 5px 0;
    display: flex;
    gap: 24px;

    .radio-item {
      width: 36px;
      height: 22px;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s ease;

      .radio-icon {
        width: 14px;
        height: 14px;
        position: relative;
        
        .radio-outer {
          width: 14px;
          height: 14px;
          border: 2px solid #E5E6EB;
          border-radius: 50%;
          background: #FFFFFF;
          position: relative;
          z-index: 1;
        }

        .radio-inner {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #165DFF;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.2s;
        }
      }

      .radio-text {
        font-family: 'Microsoft YaHei';
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #5C5C5C;
      }

      // 选中状态
      &.active {
        .radio-outer {
          border-width: 2px;
          border-color: #165DFF;
          box-shadow: 0 0 4px rgba(22,93,255,0.15);
        }
      }

      // 增加hover效果
      &:hover {
        .radio-outer {
          border-color: #165DFF;
        }
      }

    }
  }

  .action-group {
    width: 256px;
    height: 32px;
    display: flex;
    gap: 16px;
    justify-content: center; // 新增居中属性
    margin-top: 16px; // 与上方元素保持间距
    // 移除原有margin-top改为自动间距
    margin-top: auto; // 新增：自动填充顶部空间
    margin-bottom: 16px; // 新增：底部间距

    .action-btn {
      width: 60px;
      height: 32px;
      padding: 5px 16px;
      border: none;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s ease;

      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    .cancel-btn {
      background: #F2F3F5;
      color: #5C5C5C;
      
      &:hover {
        background: #E5E6EB;
      }
    }

    .confirm-btn {
      background: #165DFF;
      color: #FFFFFFE5;
      
      &:hover {
        background: #0E42D2;
        box-shadow: 0 2px 4px rgba(22,93,255,0.2);
      }
    }
  }

}

.debug-button-container {
  width: 256px;
  height: 32px;
  margin-top: 10px; // 与上方元素的间距

  .debug-button {
    width: 100%;
    height: 100%;
    padding: 5px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    border-radius: 2px;
    background: #165DFF;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #0E42D2; // 添加hover状态
      box-shadow: 0 2px 4px rgba(22, 93, 255, 0.2); // 添加阴影效果
    }

    .debug-text {
      width: 28px;
      height: 22px;
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.9); // 对应#FFFFFFE5
      vertical-align: middle;
    }
  }
}

.debug-result-container {
  width: 256px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px; // 与按钮保持间距

  .result-left {
    width: 56px;
    height: 22px;
    display: flex;
    gap: 8px;
    
    .result-text {
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #5C5C5C;
      vertical-align: middle;
    }
  }

  .result-right {
    width: 46px;
    height: 22px;
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;

    .eye-icon {
      width: 14px;
      height: 14px;
      position: relative;
      
      .eye-outer {
        position: absolute;
        width: 12.83px;
        height: 9.33px;
        border: 1.17px solid #165DFF;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .eye-inner {
        position: absolute;
        width: 3.5px;
        height: 3.5px;
        border: 1.17px solid #165DFF;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .view-text {
      width: 28px;
      height: 22px;
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #165DFF;
      vertical-align: middle;
    }
  }
}

.debug-info-container {
  width: 256px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  .info-left {
    width: 56px;
    height: 22px;
    display: flex;
    gap: 8px;
    
    .info-text {
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #5C5C5C;
      vertical-align: middle;
    }
  }

  .info-right {
    width: 46px;
    height: 22px;
    display: flex;
    gap: 4px;
    align-items: center;

    .check-icon {
      width: 14px;
      height: 14px;
      position: relative;
      
      .check-line {
        position: absolute;
        width: 9.33px;
        height: 6.42px;
        border: 1.22px solid #00B42A;
        border-width: 0 0 1.22px 1.22px;
        top: 50%;
        left: 50%;
        transform: 
          translate(-50%, -60%) 
          rotate(-45deg);
      }
    }

    .success-text {
      width: 28px;
      height: 22px;
      font-family: 'Microsoft YaHei';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #00B42A;
      vertical-align: middle;
    }
  }
}

/* 为所有容器添加过渡动画 */
.config-content, .config-settings, .config-new {
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 调整折叠后的标题栏样式 */
.config-inner, .settings-inner, .new-inner {
  transition: all 0.3s ease;
  
  /* 折叠状态下的标题栏 */
  &:not([style*="height: 38px"]) {
    .box1, .settings-header {
      padding-bottom: 0;
      box-shadow: none;
    }
  }
}

/* 优化折叠按钮的视觉反馈 */
.collapse-btn {
  transition: transform 0.3s ease;
  &.collapsed {
    transform: rotate(180deg);
    
    /* 折叠状态按钮颜色变化 */
    .arrow-icon::after {
      border-color: #A9AEB8;
    }
  }
}

/* 折叠状态下的阴影优化 */
[style*="height: 38px"] {
  box-shadow: 
    -1px -1px 2px rgba(138, 138, 138, 0.1),
    1px 1px 2px rgba(138, 138, 138, 0.1);
}
</style>
