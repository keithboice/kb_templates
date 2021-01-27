module.exports = {
  uglify: {
    options: {
      banner: "<%= banner %>",
    },
    dist: {
      src: "<%= concat.dist.dest %>",
      dest: "dist/<%= pkg.name %>.min.js",
    },
  },
};
