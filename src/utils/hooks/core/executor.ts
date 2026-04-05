/**
 * Hook 执行引擎 — 薄代理层
 * 从 hooks.ts re-export 执行相关函数
 */

export {
	createBaseHookInput,
	getSessionEndHookTimeoutMs,
	hasBlockingResult,
	getMatchingHooks,
} from '../../hooks.js'

export type {
	HookBlockingError,
	HookResult,
	AggregatedHookResult,
	HookOutsideReplResult,
	ElicitationResponse,
} from '../../hooks.js'
