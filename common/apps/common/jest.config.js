module.exports = {
  name: "common",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/common/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
