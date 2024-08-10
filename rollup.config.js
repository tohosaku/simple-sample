export default {
  input: "src/index.js",
  output: [
    {
      file: 'dist/index.js',
      format: "es"
    },
    {
      file: 'example/index.js',
      format: "es"
    }
  ],
};
