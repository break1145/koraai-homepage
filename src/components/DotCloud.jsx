import React, { useState, useMemo } from 'react';

const NUM_POINTS = 800; // 点的数量
const CONTAINER_SIZE = 400; // 容器的大小（px）
const MAX_RADIUS = CONTAINER_SIZE / 2 * 0.9; // 点分布的最大半径

const DotCloud = () => {
  // 记忆化点的数据，避免每次渲染都重新计算
  const points = useMemo(() => {
    const generatedPoints = [];
    for (let i = 0; i < NUM_POINTS; i++) {
      // 生成随机角度 (0 到 2*PI)
      const angle = Math.random() * 2 * Math.PI;

      // 生成随机半径，使用 Math.sqrt(Math.random()) 使点更密集地分布在中心
      const radius = MAX_RADIUS * Math.sqrt(Math.random());

      // 将极坐标转换为笛卡尔坐标
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      // 调整坐标，使其相对于容器的中心
      const left = (CONTAINER_SIZE / 2) + x;
      const top = (CONTAINER_SIZE / 2) + y;

      generatedPoints.push({
        id: i,
        left: left,
        top: top,
        // 可选：边缘的点略小，增强球形错觉
        size: Math.random() * 2 + 1 // 1px 到 3px 之间的随机大小
      });
    }
    return generatedPoints;
  }, []);

  return (
      <div
          className="relative flex items-center justify-center overflow-hidden rounded-full"
          style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
          // 不再需要容器的 onMouseEnter/onMouseLeave 事件
      >
        {/* 中间的文本 */}
        <div
            className="absolute text-4xl font-bold text-blue-900 z-10
                   pointer-events-none drop-shadow-md"
        >
          Human Data
        </div>

        {/* 渲染点 */}
        {points.map(point => (
            <div
                key={point.id}
                // 点的样式: 绝对定位，圆形，默认颜色，悬停颜色，过渡效果，居中自身
                className={`absolute rounded-full transition-colors duration-300 ease-in-out
                      bg-[rgb(85,169,248)] hover:bg-[rgb(53,111,238)]`}
                style={{
                  left: `${point.left}px`,
                  top: `${point.top}px`,
                  width: `${point.size}px`,
                  height: `${point.size}px`,
                  transform: 'translate(-50%, -50%)', // 将点自身居中在其计算出的位置
                }}
            />
        ))}
      </div>
  );
};

export default DotCloud;