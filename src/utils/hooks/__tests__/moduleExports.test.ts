/**
 * Hook 模块化导出测试
 * 验证所有子模块的 re-export 与 hooks.ts 的原始导出一致
 */
import { describe, test, expect } from 'bun:test'
import * as originalHooks from '../../hooks.js'
import * as coreTypes from '../core/types.js'
import * as coreExecutor from '../core/executor.js'
import * as coreMatcher from '../core/matcher.js'
import * as coreConfig from '../core/config.js'
import * as toolEvents from '../events/toolEvents.js'
import * as sessionEvents from '../events/sessionEvents.js'
import * as compactEvents from '../events/compactEvents.js'
import * as agentEvents from '../events/agentEvents.js'
import * as teamEvents from '../events/teamEvents.js'
import * as notificationEvents from '../events/notificationEvents.js'
import * as permissionEvents from '../events/permissionEvents.js'
import * as envEvents from '../events/envEvents.js'
import * as worktreeEvents from '../events/worktreeEvents.js'
import * as executors from '../executors/index.js'
import * as hooksIndex from '../index.js'

describe('Hook module re-exports', () => {
  describe('core/types', () => {
    test('exports TOOL_HOOK_EXECUTION_TIMEOUT_MS constant', () => {
      expect(coreTypes.TOOL_HOOK_EXECUTION_TIMEOUT_MS).toBe(10 * 60 * 1000)
    })

    test('exports createBaseHookInput', () => {
      expect(typeof coreTypes.createBaseHookInput).toBe('function')
    })

    test('exports shouldSkipHookDueToTrust', () => {
      expect(typeof coreTypes.shouldSkipHookDueToTrust).toBe('function')
    })

    test('exports getSessionEndHookTimeoutMs', () => {
      expect(typeof coreTypes.getSessionEndHookTimeoutMs).toBe('function')
    })

    test('exports hasBlockingResult', () => {
      expect(typeof coreTypes.hasBlockingResult).toBe('function')
    })

    test('exports getMatchingHooks', () => {
      expect(typeof coreTypes.getMatchingHooks).toBe('function')
    })
  })

  describe('core/executor', () => {
    test('exports createBaseHookInput', () => {
      expect(typeof coreExecutor.createBaseHookInput).toBe('function')
    })

    test('exports hasBlockingResult', () => {
      expect(typeof coreExecutor.hasBlockingResult).toBe('function')
    })
  })

  describe('core/matcher', () => {
    test('exports getMatchingHooks', () => {
      expect(typeof coreMatcher.getMatchingHooks).toBe('function')
    })
  })

  describe('core/config', () => {
    test('exports shouldSkipHookDueToTrust', () => {
      expect(typeof coreConfig.shouldSkipHookDueToTrust).toBe('function')
    })
  })

  describe('events/toolEvents', () => {
    test('exports executePreToolHooks', () => {
      expect(typeof toolEvents.executePreToolHooks).toBe('function')
    })

    test('exports executePostToolHooks', () => {
      expect(typeof toolEvents.executePostToolHooks).toBe('function')
    })

    test('exports executePostToolUseFailureHooks', () => {
      expect(typeof toolEvents.executePostToolUseFailureHooks).toBe('function')
    })

    test('exports executePermissionDeniedHooks', () => {
      expect(typeof toolEvents.executePermissionDeniedHooks).toBe('function')
    })

    test('exports getPreToolHookBlockingMessage', () => {
      expect(typeof toolEvents.getPreToolHookBlockingMessage).toBe('function')
    })
  })

  describe('events/sessionEvents', () => {
    test('exports executeSessionStartHooks', () => {
      expect(typeof sessionEvents.executeSessionStartHooks).toBe('function')
    })

    test('exports executeSessionEndHooks', () => {
      expect(typeof sessionEvents.executeSessionEndHooks).toBe('function')
    })

    test('exports executeSetupHooks', () => {
      expect(typeof sessionEvents.executeSetupHooks).toBe('function')
    })

    test('exports executeUserPromptSubmitHooks', () => {
      expect(typeof sessionEvents.executeUserPromptSubmitHooks).toBe('function')
    })

    test('exports executeStopHooks', () => {
      expect(typeof sessionEvents.executeStopHooks).toBe('function')
    })

    test('exports executeStopFailureHooks', () => {
      expect(typeof sessionEvents.executeStopFailureHooks).toBe('function')
    })

    test('exports getUserPromptSubmitHookBlockingMessage', () => {
      expect(typeof sessionEvents.getUserPromptSubmitHookBlockingMessage).toBe('function')
    })

    test('exports getStopHookMessage', () => {
      expect(typeof sessionEvents.getStopHookMessage).toBe('function')
    })
  })

  describe('events/compactEvents', () => {
    test('exports executePreCompactHooks', () => {
      expect(typeof compactEvents.executePreCompactHooks).toBe('function')
    })

    test('exports executePostCompactHooks', () => {
      expect(typeof compactEvents.executePostCompactHooks).toBe('function')
    })
  })

  describe('events/agentEvents', () => {
    test('exports executeSubagentStartHooks', () => {
      expect(typeof agentEvents.executeSubagentStartHooks).toBe('function')
    })

    test('exports executeSubagentStopHooks', () => {
      expect(typeof agentEvents.executeSubagentStopHooks).toBe('function')
    })
  })

  describe('events/teamEvents', () => {
    test('exports executeTeammateIdleHooks', () => {
      expect(typeof teamEvents.executeTeammateIdleHooks).toBe('function')
    })

    test('exports executeTaskCreatedHooks', () => {
      expect(typeof teamEvents.executeTaskCreatedHooks).toBe('function')
    })

    test('exports executeTaskCompletedHooks', () => {
      expect(typeof teamEvents.executeTaskCompletedHooks).toBe('function')
    })

    test('exports helper message formatters', () => {
      expect(typeof teamEvents.getTeammateIdleHookMessage).toBe('function')
      expect(typeof teamEvents.getTaskCreatedHookMessage).toBe('function')
      expect(typeof teamEvents.getTaskCompletedHookMessage).toBe('function')
    })
  })

  describe('events/notificationEvents', () => {
    test('exports executeNotificationHooks', () => {
      expect(typeof notificationEvents.executeNotificationHooks).toBe('function')
    })
  })

  describe('events/permissionEvents', () => {
    test('exports executePermissionRequestHooks', () => {
      expect(typeof permissionEvents.executePermissionRequestHooks).toBe('function')
    })

    test('exports executeElicitationHooks', () => {
      expect(typeof permissionEvents.executeElicitationHooks).toBe('function')
    })

    test('exports executeElicitationResultHooks', () => {
      expect(typeof permissionEvents.executeElicitationResultHooks).toBe('function')
    })
  })

  describe('events/envEvents', () => {
    test('exports executeCwdChangedHooks', () => {
      expect(typeof envEvents.executeCwdChangedHooks).toBe('function')
    })

    test('exports executeFileChangedHooks', () => {
      expect(typeof envEvents.executeFileChangedHooks).toBe('function')
    })

    test('exports executeConfigChangeHooks', () => {
      expect(typeof envEvents.executeConfigChangeHooks).toBe('function')
    })

    test('exports executeInstructionsLoadedHooks', () => {
      expect(typeof envEvents.executeInstructionsLoadedHooks).toBe('function')
    })

    test('exports hasInstructionsLoadedHook', () => {
      expect(typeof envEvents.hasInstructionsLoadedHook).toBe('function')
    })
  })

  describe('events/worktreeEvents', () => {
    test('exports executeWorktreeCreateHook', () => {
      expect(typeof worktreeEvents.executeWorktreeCreateHook).toBe('function')
    })

    test('exports executeWorktreeRemoveHook', () => {
      expect(typeof worktreeEvents.executeWorktreeRemoveHook).toBe('function')
    })

    test('exports hasWorktreeCreateHook', () => {
      expect(typeof worktreeEvents.hasWorktreeCreateHook).toBe('function')
    })
  })

  describe('executors', () => {
    test('exports executeStatusLineCommand', () => {
      expect(typeof executors.executeStatusLineCommand).toBe('function')
    })

    test('exports executeFileSuggestionCommand', () => {
      expect(typeof executors.executeFileSuggestionCommand).toBe('function')
    })
  })

  describe('hooks/index.ts unified export', () => {
    test('re-exports all key functions from sub-modules', () => {
      // Core
      expect(typeof hooksIndex.createBaseHookInput).toBe('function')
      expect(typeof hooksIndex.shouldSkipHookDueToTrust).toBe('function')
      // Events
      expect(typeof hooksIndex.executePreToolHooks).toBe('function')
      expect(typeof hooksIndex.executeStopHooks).toBe('function')
      expect(typeof hooksIndex.executeSessionStartHooks).toBe('function')
      expect(typeof hooksIndex.executeNotificationHooks).toBe('function')
      expect(typeof hooksIndex.executeWorktreeCreateHook).toBe('function')
      // Executors
      expect(typeof hooksIndex.executeStatusLineCommand).toBe('function')
    })
  })

  describe('referential identity', () => {
    test('re-exported functions are the same as original', () => {
      // 验证 re-export 是同一个引用，不是复制
      expect(toolEvents.executePreToolHooks).toBe(originalHooks.executePreToolHooks)
      expect(sessionEvents.executeStopHooks).toBe(originalHooks.executeStopHooks)
      expect(sessionEvents.executeSessionStartHooks).toBe(originalHooks.executeSessionStartHooks)
      expect(compactEvents.executePreCompactHooks).toBe(originalHooks.executePreCompactHooks)
      expect(agentEvents.executeSubagentStartHooks).toBe(originalHooks.executeSubagentStartHooks)
      expect(teamEvents.executeTeammateIdleHooks).toBe(originalHooks.executeTeammateIdleHooks)
      expect(notificationEvents.executeNotificationHooks).toBe(originalHooks.executeNotificationHooks)
      expect(permissionEvents.executePermissionRequestHooks).toBe(originalHooks.executePermissionRequestHooks)
      expect(envEvents.executeCwdChangedHooks).toBe(originalHooks.executeCwdChangedHooks)
      expect(worktreeEvents.executeWorktreeCreateHook).toBe(originalHooks.executeWorktreeCreateHook)
      expect(executors.executeStatusLineCommand).toBe(originalHooks.executeStatusLineCommand)
    })
  })
})
