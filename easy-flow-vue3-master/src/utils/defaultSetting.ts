export const jsplumbSetting = {
  // 动态锚点、位置自适应
  Anchors: [
    "Top",
    "TopCenter",
    "TopRight",
    "TopLeft",
    "Right",
    "RightMiddle",
    "Bottom",
    "BottomCenter",
    "BottomRight",
    "BottomLeft",
    "Left",
    "LeftMiddle",
  ],
  // 容器ID
  Container: "container",
  // 连线的样式，直线或者曲线等，可选值:  StateMachine、Flowchart，Bezier、Straight
  //Connector: ["Bezier", { curviness: 100 }],
  //Connector: ['Straight', {stub: 20, gap: 1}],
  Connector: ['Flowchart', {stub: 30, gap: 1, alwaysRespectStubs: false, midpoint: 0.5, cornerRadius: 10}],
   //Connector: ['StateMachine', {margin: 5, curviness: 10, proximityLimit: 80}],
  // 鼠标不能拖动删除线
  ConnectionsDetachable: false,
  // 删除线的时候节点不删除
  DeleteEndpointsOnDetach: false,
  /**
   * 连线的两端端点类型：圆形
   * radius: 圆的半径，越大圆越大
   */
  // Endpoint: ['Dot', {radius: 5, cssClass: 'ef-dot', hoverClass: 'ef-dot-hover'}],
  /**
   * 连线的两端端点类型：矩形
   * height: 矩形的高
   * width: 矩形的宽
   */
  // Endpoint: ['Rectangle', {height: 20, width: 20, cssClass: 'ef-rectangle', hoverClass: 'ef-rectangle-hover'}],
  /**
   * 图像端点
   */
  // Endpoint: ['Image', {src: 'https://www.easyicon.net/api/resizeApi.php?id=1181776&size=32', cssClass: 'ef-img', hoverClass: 'ef-img-hover'}],
  /**
   * 空白端点
   */
  Endpoint: ["Blank", { Overlays: "" }],
  // Endpoints: [['Dot', {radius: 5, cssClass: 'ef-dot', hoverClass: 'ef-dot-hover'}], ['Rectangle', {height: 20, width: 20, cssClass: 'ef-rectangle', hoverClass: 'ef-rectangle-hover'}]],
  /**
   * 连线的两端端点样式
   * fill: 颜色值，如：#12aabb，为空不显示
   * outlineWidth: 外边线宽度
   */
  EndpointStyle: { fill: "#31BDECa1", outlineWidth: 1 },
  // 是否打开jsPlumb的内部日志记录
  LogEnabled: true,
  /**
   * 连线的样式
   */
  PaintStyle: {
    // 线的颜色
    // stroke: "#E0E3E7",原有线的颜色，已经修改为#86909C
     stroke: "#86909C",
    // 线的粗细，值越大线越粗
    strokeWidth: 1,
    // 设置外边线的颜色，默认设置透明，这样别人就看不见了，点击线的时候可以不用精确点击，参考 https://blog.csdn.net/roymno2/article/details/72717101
    outlineStroke: "transparent",
    // 线外边的宽，值越大，线的点击范围越大
    outlineWidth: 10,
  },
  DragOptions: { cursor: "pointer", zIndex: 2000 },
  /**
   *  叠加 参考： https://www.jianshu.com/p/d9e9918fd928
   */
  Overlays: [
    // 箭头叠加
    [
      "Arrow",
      {
        width: 10, // 箭头尾部的宽度
        length: 8, // 从箭头的尾部到头部的距离
        location: 1, // 位置，建议使用0～1之间
        direction: 1, // 方向，默认值为1（表示向前），可选-1（表示向后）
        foldback: 0.623, // 折回，也就是尾翼的角度，默认0.623，当为1时，为正三角
      },
    ],
    // ['Diamond', {
    //     events: {
    //         dblclick: function (diamondOverlay, originalEvent) {
    //             console.log('double click on diamond overlay for : ' + diamondOverlay.component)
    //         }
    //     }
    // }],
    [
      "Label",
      {
        label: "",
        location: 0.1,
        cssClass: "aLabel",
      },
    ],
  ],
  // 绘制图的模式 svg、canvas
  RenderMode: "svg",
  // 鼠标滑过线的样式
  HoverPaintStyle: { stroke: "#b0b2b5", strokeWidth: 1 },
  // 滑过锚点效果
  // EndpointHoverStyle: {fill: 'red'}
  Scope: "jsPlumb_DefaultScope", // 范围，具有相同scope的点才可连接
};

/**
 * 连线参数
 */
export const jsplumbConnectOptions = {
  isSource: true,
  isTarget: true,
  // 动态锚点、提供了4个方向 Continuous、AutoDefault
  anchor: "Continuous",
  // 设置连线上面的label样式
  labelStyle: {
    cssClass: "flowLabel",
  },
  // 修改了jsplumb 源码，支持label 为空传入自定义style
  emptyLabelStyle: {
    cssClass: "emptyFlowLabel",
  },
};

/**
 * 源点配置参数
 */
export const jsplumbSourceOptions = {
  // 设置可以拖拽的类名，只要鼠标移动到该类名上的DOM，就可以拖拽连线
  filter: ".flow-node-drag",
  filterExclude: false,
  anchor: "Continuous",
  // 是否允许自己连接自己
  allowLoopback: true,
  maxConnections: -1,
  onMaxConnections: function (info: { maxConnections: any }, e: any) {
    console.log(`超过了最大值连线: ${info.maxConnections}`);
  },
};

// 参考 https://www.cnblogs.com/mq0036/p/7942139.html
export const jsplumbSourceOptions2 = {
  // 设置可以拖拽的类名，只要鼠标移动到该类名上的DOM，就可以拖拽连线
  filter: ".flow-node-drag",
  filterExclude: false,
  // anchor: 'Continuous',
  // 是否允许自己连接自己
  allowLoopback: true,
  connector: ["Flowchart", { curviness: 50 }],
  connectorStyle: {
    // 线的颜色
    stroke: "red",
    // 线的粗细，值越大线越粗
    strokeWidth: 1,
    // 设置外边线的颜色，默认设置透明，这样别人就看不见了，点击线的时候可以不用精确点击，参考 https://blog.csdn.net/roymno2/article/details/72717101
    outlineStroke: "transparent",
    // 线外边的宽，值越大，线的点击范围越大
    outlineWidth: 10,
  },
  connectorHoverStyle: { stroke: "red", strokeWidth: 2 },
};

export const jsplumbTargetOptions = {
  // 设置可以拖拽的类名，只要鼠标移动到该类名上的DOM，就可以拖拽连线
  filter: ".flow-node-drag",
  filterExclude: false,
  // 是否允许自己连接自己
  anchor: "Continuous",
  allowLoopback: true,
  dropOptions: { hoverClass: "ef-drop-hover" },
};

/**
 * 支持节点类型
 */
export const menuList = [
  {
    id: "1",
    name: "输入/输出",
    open: true,
    children: [
      {
        id: "11",
        type: "input",
        name: "输入",
        ico: "layui-icon-survey",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
      {
        id: "12",
        type: "output",
        name: "输出",
        ico: "layui-icon-survey",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
    ],
  },
  {
    id: "2",
    name: "逻辑运算",
    open: true,
    children: [
      {
        id: "21",
        type: "formula",
        name: "计算公式(+-*/)",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 2, // 最大出线数量
        minOutcome: 1, // 最小出线数量
        style: {},
      },
    ],
  },
  {
    id: "3",
    name: "数值处理",
    open: true,
    children: [
      {
        id: "31",
        type: "decimal-places",
        name: "小数位数",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
      {
        id: "32",
        type: "single-column-movement",
        name: "单列移动",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
      {
        id: "33",
        type: "filter",
        name: "滤波器",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 1, // 最大出线数量
        minOutcome: 1, // 最小出线数量
        style: {},
      },
      {
        id: "34",
        type: "column-connection",
        name: "列连接",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
      {
        id: "35",
        type: "data-disruption",
        name: "数据打乱",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
      {
        id: "36",
        type: "data-normalization",
        name: "数据规整",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
    ],
  },
  {
    id: "4",
    name: "统计分析",
    open: true,
    children: [
      {
        id: "41",
        type: "relevance",
        name: "相关性",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 2, // 最大出线数量
        minOutcome: 2, // 最小出线数量
        style: {},
      },
      {
        id: "42",
        type: "autocorrelation",
        name: "自相关性",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 2, // 最大出线数量
        minOutcome: 2, // 最小出线数量
        style: {},
      },
    ],
  },
  {
    id: "5",
    name: "特征工程",
    open: true,
    children: [
      {
        id: "51",
        type: "time-characteristics",
        name: "时间特征",
        ico: "layui-icon-success",
        SORN: "N", // NormalNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        style: {},
      },
    ],
  },
  {
    id: "6",
    name: "模型",
    open: true,
    children: [
      {
        id: "61",
        type: "xgboost",
        name: "xgboost",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 1, // 最大出线数量
        minOutcome: 1, // 最小出线数量
        style: {},
      },
      {
        id: "62",
        type: "arima",
        name: "ARIMA",
        ico: "layui-icon-success",
        SORN: "S", // SpecialNode
        outcome: 0, // 初始化出线数量
        income: 0, // 初始化入线数量
        maxOutcome: 1, // 最大出线数量
        minOutcome: 1, // 最小出线数量
        style: {},
      },
    ],
  },
];
//原有四种运行状态
export const stateOptions = [
  {
    label: "成功",
    value: "success",
  },
  {
    label: "警告",
    value: "warning",
  },
  {
    label: "错误",
    value: "error",
  },
  {
    label: "运行中",
    value: "running",
  },
];
