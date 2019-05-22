module.exports = {
  name: 'mylib-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mylib-two',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
