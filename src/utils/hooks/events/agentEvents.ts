/**
 * 子 Agent Hook 事件 — SubagentStart / SubagentStop
 */
export {
	executeSubagentStartHooks,
} from '../../hooks.js'

// SubagentStop 通过 executeStopHooks 的 subagentId 参数路由
export { executeStopHooks as executeSubagentStopHooks } from '../../hooks.js'
