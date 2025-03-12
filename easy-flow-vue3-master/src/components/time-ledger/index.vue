<script setup lang="ts">
import { ref } from 'vue';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'


const isODS = ref(true)
</script>

<template>
  <div class="container">
    <!-- 左侧导航栏 -->
    <el-menu class="sidebar" default-active="1" :router="false">
      <el-input
        placeholder="搜索表名"
        class="search-input"
      />
      <el-button type="primary" class="search-btn">查询</el-button>



    <div class="header" @click="isODS=!isODS">
         <el-menu-item index="1">
        <template #title>
          <span>ODS</span>
        </template>
        <div class="expand-btn">
            <el-icon><ArrowDown v-if="!isODS"/><ArrowUp v-else/></el-icon>
         </div>
      </el-menu-item>
    </div>
    <div class="odsDisplay">
        
    </div>
     
     
      <el-menu-item index="6">
        <template #title>
          <span>MYSQL</span>
        </template>
      </el-menu-item>
      <el-menu-item index="7">
        <template #title>
          <span>表1</span>
        </template>
      </el-menu-item>
      <el-menu-item index="8">
        <template #title>
          <span>表2</span>
        </template>
      </el-menu-item>
      <el-menu-item index="9">
        <template #title>
          <span>表3</span>
        </template>
      </el-menu-item>
      <el-menu-item index="10">
        <template #title>
          <span>表4</span>
        </template>
      </el-menu-item>
    </el-menu>

    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 页面标题和信息 -->
      <div class="page-header">
        <div class="page-title">ODS_表1</div>
        <div class="page-info">
          <div class="icon">
            <!-- 图标占位 -->
          </div>
          <div>
            <div>222 条</div>
          </div>
        </div>
      </div>

      <!-- 统计卡片 -->
      <el-row class="stat-cards" gutter="20">
        <el-col :span="8">
          <el-card class="stat-card today">
            <template #header>
              <div class="stat-card-header">今日新增</div>
            </template>
            <div class="stat-card-value">45</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="stat-card three-days">
            <template #header>
              <div class="stat-card-header">最近三日</div>
            </template>
            <div class="stat-card-value">45</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="stat-card week">
            <template #header>
              <div class="stat-card-header">最近一周</div>
            </template>
            <div class="stat-card-value">45</div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 查询条件区域 -->
      <el-card class="query-section">
        <template #header>
          <div class="query-header">
            <div class="query-title">查询条件</div>
            <div class="query-actions">
              <el-button>全部</el-button>
              <el-button>收藏</el-button>
            </div>
          </div>
        </template>
        <el-row :gutter="20" class="query-form">
          <el-col :span="3">
            <el-checkbox>字段名称</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>字段说明</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>表名</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>表描述</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>表类型</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>方法</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>创建人</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>操作</el-checkbox>
          </el-col>
        </el-row>
      </el-card>

      <!-- 表格区域 -->
      <el-card class="table-section">
        <template #header>
          <div class="table-header">
            <div class="table-actions">
              <el-button >收藏</el-button>
              <el-button >保存</el-button>
            </div>
            <div class="table-settings">
              <el-button></el-button>
            </div>
          </div>
        </template>

        <el-table :data="[
          { field: '字段 1', description: '这是字段 1 的说明', tableName: '表 1', tableDesc: '这是表 1 的描述', tableType: '类型 1', method: '方法 1', creator: '创建人 1' },
          { field: '字段 2', description: '这是字段 2 的说明', tableName: '表 2', tableDesc: '这是表 2 的描述', tableType: '类型 2', method: '方法 2', creator: '创建人 2' },
          { field: '字段 3', description: '这是字段 3 的说明', tableName: '表 3', tableDesc: '这是表 3 的描述', tableType: '类型 3', method: '方法 3', creator: '创建人 3' },
          { field: '字段 4', description: '这是字段 4 的说明', tableName: '表 4', tableDesc: '这是表 4 的描述', tableType: '类型 4', method: '方法 4', creator: '创建人 4' },
          { field: '字段 5', description: '这是字段 5 的说明', tableName: '表 5', tableDesc: '这是表 5 的描述', tableType: '类型 5', method: '方法 5', creator: '创建人 5' },
          { field: '字段 6', description: '这是字段 6 的说明', tableName: '表 6', tableDesc: '这是表 6 的描述', tableType: '类型 6', method: '方法 6', creator: '创建人 6' },
          { field: '字段 7', description: '这是字段 7 的说明', tableName: '表 7', tableDesc: '这是表 7 的描述', tableType: '类型 7', method: '方法 7', creator: '创建人 7' },
          { field: '字段 8', description: '这是字段 8 的说明', tableName: '表 8', tableDesc: '这是表 8 的描述', tableType: '类型 8', method: '方法 8', creator: '创建人 8' },
          { field: '字段 9', description: '这是字段 9 的说明', tableName: '表 9', tableDesc: '这是表 9 的描述', tableType: '类型 9', method: '方法 9', creator: '创建人 9' },
          { field: '字段 10', description: '这是字段 10 的说明', tableName: '表 10', tableDesc: '这是表 10 的描述', tableType: '类型 10', method: '方法 10', creator: '创建人 10' }
        ]" style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="field" label="字段名称" />
          <el-table-column prop="description" label="字段说明" />
          <el-table-column prop="tableName" label="表名" />
          <el-table-column prop="tableDesc" label="表描述" />
          <el-table-column prop="tableType" label="表类型" />
          <el-table-column prop="method" label="方法" />
          <el-table-column prop="creator" label="创建人" />
          <el-table-column label="操作" width="200">
            <template #default>
              <el-button link type="primary" size="small">查看</el-button>
              <el-button link type="primary" size="small">进入画布</el-button>
              <el-button link type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination">
          <div class="pagination-left">
            <el-select>
              <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>已选 101 条</span>
            <el-button>导出数据</el-button>
          </div>
          <div class="pagination-right">
            <el-pagination
              layout="sizes, prev, pager, next, jumper"
              :total="0"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  padding: 10px;
  overflow-y: auto;

  .search-input {
    margin-bottom: 10px;
    width: calc(100% - 50px);
  }

  .search-btn {
    margin-bottom: 10px;
    width: 40px;
  }
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f7fa;
}

.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .page-title {
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
  }

  .page-info {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    background-color: #e6f7ff;
    border-radius: 8px;
  }
}

.stat-cards {
  margin-bottom: 20px;

  .stat-card {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;

    .stat-card-header {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }

    .stat-card-value {
      font-size: 24px;
      font-weight: bold;
    }

    &.today {
      border-left: 4px solid #1890ff;
    }

    &.three-days {
      border-left: 4px solid #52c41a;
    }

    &.week {
      border-left: 4px solid #fa8c16;
    }
  }
}

.query-section {
  margin-bottom: 20px;

  .query-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .query-title {
      font-weight: bold;
      font-size: 16px;
      position: relative;
      padding-left: 10px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 16px;
        background-color: #1890ff;
        border-radius: 1px;
      }
    }
  }

  .query-form {
    margin-top: 15px;
  }
}

.table-section {
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    .table-actions {
      display: flex;
      gap: 10px;
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid #e8e8e8;

    .pagination-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>