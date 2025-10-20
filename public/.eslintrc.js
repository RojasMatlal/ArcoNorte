module.exports = {
  root: true,
  extends: ['react-app'],
  plugins: ['react'],
  
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'warn'
  },

  // Ignorar configuraciones conflictivas
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      excludedFiles: [
        'node_modules/**',
        '**/node_modules/**'
      ]
    }
  ]
};