import type { Config, OverridesOptions } from '../types'
// @ts-expect-error - no type definitions
import commentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'

export const comments = (options: OverridesOptions = {}): Config[] => {
	const { overrides } = options

	return [
		{
			name: 'itsfan/eslint-comments/rules',
			plugins: {
				'eslint-comments': commentsPlugin,
			},
			rules: {
				'eslint-comments/disable-enable-pair': [
					'error',
					{ allowWholeFile: true },
				],
				'eslint-comments/no-aggregating-enable': 'error',
				'eslint-comments/no-duplicate-disable': 'error',
				'eslint-comments/no-unlimited-disable': 'error',
				'eslint-comments/no-unused-enable': 'error',

				...overrides,
			},
		},
	]
}
