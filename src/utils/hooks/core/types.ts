/**
 * 内部共享类型和工具函数 — 薄代理层
 * 从 hooks.ts re-export 公开的类型和函数，被子模块和调用方使用
 */

// 常量 — hooks.ts 中是 private，在此定义为公开
export const TOOL_HOOK_EXECUTION_TIMEOUT_MS = 10 * 60 * 1000

// 类型 re-export
export type {
	HookBlockingError,
	ElicitationResponse,
	HookResult,
	AggregatedHookResult,
	HookOutsideReplResult,
	ElicitationHookResult,
	ElicitationResultHookResult,
	ConfigChangeSource,
	InstructionsLoadReason,
	InstructionsMemoryType,
} from '../../hooks.js'

// 函数 re-export
export {
	getSessionEndHookTimeoutMs,
	createBaseHookInput,
	shouldSkipHookDueToTrust,
	hasBlockingResult,
	getMatchingHooks,
} from '../../hooks.js'
