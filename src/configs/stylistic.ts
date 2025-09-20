import type { Config, OverridesOptions, StylisticDefaults } from '../types'
import pluginStylistic from '@stylistic/eslint-plugin'
import { GLOB_SRC } from '../globs'

export const StylisticDefaultsOptions: StylisticDefaults = {
	indent: 'tab',
	jsx: true,
	quotes: 'single',
	semi: false,
}

export const stylistic = (options: OverridesOptions = {}): Config[] => {
	const {
		indent,
		jsx,
		quotes,
		semi,
		overrides = {},
	} = { ...StylisticDefaultsOptions, ...options }

	const config = pluginStylistic.configs.customize({
		indent,
		jsx,
		pluginName: 'style',
		quotes,
		semi,
	})

	return [
		{
			name: 'itsfan/stylistic/rules',
			files: [GLOB_SRC],
			plugins: {
				style: pluginStylistic,
			},
			rules: {
				...config.rules,
				...overrides,
			},
		},
	]
}
