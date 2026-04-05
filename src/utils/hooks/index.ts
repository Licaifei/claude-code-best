/**
 * Hooks 模块化统一导出 — 兼容层
 *
 * 所有公开 API 从此文件导出，保持与现有 import 路径 `../../utils/hooks.js` 兼容。
 * 调用方可逐步迁移到更具体的子模块路径。
 *
 * 模块组织：
 *   core/      — 类型、执行引擎、matcher、配置
 *   events/    — 按 hook 事件类型分组
 *   executors/ — 独立的执行器（statusLine、fileSuggestion）
 */

// Core
export * from './core/index.js'

// Events
export * from './events/index.js'

// Executors
export * from './executors/index.js'
