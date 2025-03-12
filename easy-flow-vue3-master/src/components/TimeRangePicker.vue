<template>
    <div class="time-range-picker">
      <span class="hint">选择时间范围:</span>
      <el-date-picker
        v-model="startTime"
        type="datetime"
        placeholder="选择开始时间"
        :format="'YYYY.MM.DD HH:mm:ss'"
        :value-format="'YYYY-MM-DD HH:mm:ss'"
        @change="handleStartChange"
      />
      <span class="separator">至</span>
      <el-date-picker
        v-model="endTime"
        type="datetime"
        placeholder="选择结束时间"
        :format="'YYYY.MM.DD HH:mm:ss'"
        :value-format="'YYYY-MM-DD HH:mm:ss'"
        :disabled-date="endDisabledDate"
        @change="handleEndChange"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const startTime = ref('');
  const endTime = ref('');
  
  const handleStartChange = (val) => {
    if (val && endTime.value && val > endTime.value) {
      endTime.value = '';
    }
  };
  
  const handleEndChange = (val) => {
    if (val && val < startTime.value) {
      endTime.value = '';
      ElMessage.warning('结束时间不能早于开始时间');
    }
  };
  
  const endDisabledDate = (time) => {
    return startTime.value 
      ? time.getTime() < new Date(startTime.value).getTime()
      : false;
  };
  </script>
  <style scoped>
  /* 在原有样式基础上添加 */
  .time-range-picker {
    white-space: nowrap; /* 禁止换行 */
    min-width: max-content; /* 根据内容自动扩展最小宽度 */
  }
  
  .hint {
    white-space: nowrap; /* 确保提示文字不换行 */
    flex-shrink: 0; /* 禁止收缩 */
  }
  
  /* 调整日期选择器宽度 */
  :deep(.el-date-editor) {
    width: 200px !important; /* 适当缩小宽度 */
    flex-shrink: 0; /* 禁止收缩 */
  }
  
  .separator {
    flex-shrink: 0; /* 禁止收缩 */
  }
  .time-range-picker {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .separator {
    color: #606266;
    padding: 0 8px;
  }
  .hint {
    color: #606266;
    padding: 0 8px;}
  
  /* 调整Element组件默认宽度 */
  :deep(.el-date-editor) {
    width: 240px;
  }
  </style>
  <!-- <style scoped>
  .time-range-picker {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .separator {
    color: #606266;
    padding: 0 8px;
  }
  .hint {
    color: #606266;
    padding: 0 8px;}
  
  /* 调整Element组件默认宽度 */
  :deep(.el-date-editor) {
    width: 240px;
  }
  </style> -->


<!-- <template>
    <TimeRangePicker 
      v-model:start="startTime"
      v-model:end="endTime"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TimeRangePicker from './TimeRangePicker.vue';
  
  const startTime = ref('2021-12-03 00:00:00');
  const endTime = ref('2021-12-04 00:00:00');
  </script>
  注意：需要先安装Element Plus并正确注册组件，同时建议配置中文语言包以确保日期显示格式正确。
   -->
  