const plugin = require('rollup-plugin-visualizer');

const template = 'treemap'; // 'sunburst' | 'network' | 'treemap'

const customConfig = {
  plugins: [
    plugin.visualizer({
      filename: `stats-${template}.html`,
      title: 'Rollup Visualizer',
      sourcemap: false,
      open: false,
      template,
      json: false,
      gzipSize: false,
      brotliSize: false,
      projectRoot: process.cwd(),
    }),
  ],
};

module.exports = customConfig;
