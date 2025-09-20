import type { Config, OverridesOptions } from '../types'
// @ts-expect-error - no type definitions
import nextPlugin from '@next/eslint-plugin-next'
import { GLOB_REACT } from '../globs'

export const nextjs = (options: OverridesOptions = {}): Config[] => {
	const { overrides = {} } = options

	return [
		{
			name: 'itsfan/nextjs/rules',
			files: [GLOB_REACT],
			plugins: {
				'@next/next': nextPlugin,
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
				sourceType: 'module',
			},
			rules: {
				// Use official Next.js recommended configurations
				...nextPlugin.configs.recommended.rules,
				...nextPlugin.configs['core-web-vitals'].rules,

				...overrides,
			},
		},
	]
}
