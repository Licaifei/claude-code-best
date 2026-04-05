/**
 * 执行器模块 — 独立的 hook 执行器
 * 目前为薄代理层，从 hooks.ts re-export
 */

// 状态栏和文件建议也是特殊的 hook 执行器
export {
	executeStatusLineCommand,
	executeFileSuggestionCommand,
} from '../../hooks.js'
