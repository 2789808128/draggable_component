export const useMockData = () => {
  const dataA = {
    name: "画布",
    nodeList: [
      {
        id: "nodeA",
        name: "示例节点A",
        type: "exampleA",
        left: "26px",
        top: "161px",
        ico: "layui-icon-heart",
        state: "success",
      },
      {
        id: "nodeB",
        name: "示例节点B",
        type: "exampleB",
        left: "340px",
        top: "161px",
        ico: "layui-icon-light",
        state: "success",
      },
      {
        id: "nodeC",
        name: "示例节点C",
        type: "exampleC",
        left: "655px",
        top: "161px",
        ico: "layui-icon-time",
        state: "success",
      },
    ],
    lineList: [
      {
        from: "nodeA",
        to: "nodeB",
        label: "1",//只能是1或者0
      },
      {
        from: "nodeB",
        to: "nodeC",
        label: "0",//只能是1或者0
      },
    ],
  };

  // const dataB = {
  //   name: "流程B",
  //   nodeList: [
  //     {
  //       id: "nodeA",
  //       name: "节点A-不可拖拽",
  //       type: "task",
  //       left: "18px",
  //       top: "223px",
  //       ico: "el-icon-user-solid",
  //       state: "success",
  //       viewOnly: true,
  //     },
  //     {
  //       id: "nodeB",
  //       type: "task",
  //       name: "流程B-节点B",
  //       left: "351px",
  //       top: "96px",
  //       ico: "el-icon-goods",
  //       state: "error",
  //     },
  //     {
  //       id: "nodeC",
  //       name: "流程B-节点C",
  //       type: "task",
  //       left: "354px",
  //       top: "351px",
  //       ico: "el-icon-present",
  //       state: "warning",
  //     },
  //     {
  //       id: "nodeD",
  //       name: "流程B-节点D",
  //       type: "task",
  //       left: "723px",
  //       top: "215px",
  //       ico: "el-icon-present",
  //       state: "running",
  //     },
  //   ],
  //   lineList: [
  //     {
  //       from: "nodeA",
  //       to: "nodeB",
  //       label: "条件A",
  //     },
  //     {
  //       from: "nodeA",
  //       to: "nodeC",
  //       label: "条件B",
  //     },
  //     {
  //       from: "nodeB",
  //       to: "nodeD",
  //     },
  //     {
  //       from: "nodeC",
  //       to: "nodeD",
  //     },
  //   ],
  // };

  return {
    dataA,
    // dataB,
  };
};
